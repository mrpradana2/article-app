"use client";
import React, { useEffect, useMemo, useState } from "react";
import Arrow from "../../../../assets/ArrowBack.svg";
import UploadImg from "../../../../assets/ImgUpload.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TextArea from "@/components/articles/create/textArea";
import axios from "axios";
import { constants } from "@/configs/constant";
import { stringingContent } from "@/utils/stringingContent";
import { validateInputEmpty } from "@/utils/validation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ArticlePreview from "@/components/admin/articlePreview";
import {
  setPreviewArticle,
  setPreviewStatus,
  setDataPreviewArticle,
} from "@/redux/slices/uiSlice";

export default function CreateArticle() {
  const dispatch = useDispatch();
  const router = useRouter();
  const initialValue = useMemo(
    () => [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ],
    []
  );

  const [value, setValue] = useState(initialValue);
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [categories, setCategories] = useState([]);
  const [messTitle, setMessTitle] = useState("");
  const [messCategory, setMessCategory] = useState("");
  const [messContent, setMessContent] = useState("");
  const [messThumbnail, setMessThumbnail] = useState("");
  const [validateTitle, setValidTitle] = useState(true);
  const [validateCategory, setValidCategory] = useState(true);
  const [validateContent, setValidContent] = useState(true);
  const [validateThumbnail, setValidThumbnail] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const [titleValue, setTitleValue] = useState("");

  useEffect(() => {
    dispatch(setPreviewArticle(value));
    dispatch(setDataPreviewArticle({ title: titleValue, images: previewUrls }));
  }, [value, titleValue, images]);

  let [content, charCount] = stringingContent(value);

  useEffect(() => {
    axios
      .get(`${constants.apiURL}/categories`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("failed to fatch data");
        }
        return res.data.data;
      })
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        if (err instanceof Error) console.log("[ERROR] : ", err.message);
      });
  }, []);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  function submitHandler(e) {
    e.preventDefault();
    const categoryId = e.target.category.value;
    const title = e.target.title.value;
    const thumbnail = e.target.thumbnail.files[0];

    const formData = new FormData();

    formData.append("image", thumbnail);

    const [validTitle, messageTitleEmpty] = validateInputEmpty(
      title,
      "Please enter title"
    );
    const [validCategory, messageCategoryEmpty] = validateInputEmpty(
      categoryId,
      "Please select category"
    );
    let validContent = true;

    if (content === "<p></p><br>") {
      setValidContent(false);
      validContent = false;
      setMessContent("Content field cannot be empty");
    } else {
      setValidContent(true);
      validContent = true;
      setMessContent("Content field cannot be empty");
    }

    const [validPicture, messagePictureEmpty] = validateInputEmpty(
      images,
      "Please enter picture"
    );

    setValidTitle(validTitle);
    setValidCategory(validCategory);
    setValidThumbnail(validPicture);
    setMessTitle(messageTitleEmpty);
    setMessCategory(messageCategoryEmpty);
    setMessThumbnail(messagePictureEmpty);

    if (validPicture && validCategory && validContent && validTitle) {
      let newArticles = { title, content, categoryId };
      axios
        .post(`${constants.apiURL}/upload`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("failed to send picture");
          }
          newArticles = { ...newArticles, imageUrl: res.data.imageUrl };

          if (res.data.imageUrl !== null) {
            axios
              .post(`${constants.apiURL}/articles`, newArticles, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              })
              .then((res) => {
                if (res.status != 200) {
                  throw new Error("failed to post picture");
                }
                toast.success("Successfully create an article");
                router.replace("/admin/articles");
                return res;
              })
              .catch((err) => {
                toast.error("Failed to create an articles");
                if (err instanceof Error) console.log(err.message);
              });
          }
          return res.data.imageUrl;
        })
        .catch((err) => {
          toast.error("Failed to create an article");
          if (err instanceof Error) console.log(err.message);
        });
    }
  }

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="pt-[65px] pb-7 pl-[80px] md:pl-[210px] pr-5 md:pr-16 bg-[#eaeaea] text-slate"
      >
        <div className="flex flex-col bg-white rounded-lg">
          <div className="p-2 border border-gray-300 z-50">
            <div className="flex gap-x-4">
              <Image
                src={Arrow}
                alt="icon"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => {
                  router.replace("/admin/articles");
                }}
              />
              <p className="font-semibold">Create Articles</p>
            </div>
          </div>
          <div className="p-2 z-50 bg-[#f3f3f3] flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold">Thumbnails</p>
              <label
                htmlFor="thumbnail"
                className="w-60 aspect-video bg-[#eaeaea] flex flex-col gap-y-1 items-center justify-center border border-dashed relative cursor-pointer"
              >
                <Image
                  src={UploadImg}
                  alt="icon"
                  width={20}
                  height={20}
                  className={`${previewUrls.length === 0 ? "block" : "hidden"}`}
                />
                <p
                  className={`${
                    previewUrls.length === 0 ? "block" : "hidden"
                  } text-sm`}
                >
                  Click to select files
                </p>
                <p
                  className={`${
                    previewUrls.length === 0 ? "block" : "hidden"
                  } text-sm`}
                >
                  Suport File Type : jpg or png
                </p>
                {previewUrls.map((url, idx) => (
                  <Image
                    src={url}
                    alt="preview"
                    key={idx}
                    fill
                    className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0"
                  />
                ))}
              </label>
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
              <p
                className={`${
                  validateThumbnail ? "hidden" : "block"
                } text-sm text-red-600 italic`}
              >
                {messThumbnail}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                onChange={(e) => {
                  setTitleValue(e.target.value);
                }}
                type="text"
                name="title"
                id="title"
                placeholder="Input title"
                className="py-1 px-3 bg-white border border-gray-300 rounded-lg focus:outline-primary"
              />
              <p
                className={`${
                  validateTitle ? "hidden" : "block"
                } text-sm text-red-600 italic`}
              >
                {messTitle}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="title" className="font-semibold">
                Category
              </label>
              <select
                name="category"
                id="category"
                defaultValue={""}
                className="p-2 bg-white border border-gray-300 rounded-lg focus:outline-primary"
              >
                <option value="" hidden>
                  Select category
                </option>
                {categories.map((category, idx) => (
                  <option value={`${category.id}`} key={idx}>
                    {category.name}
                  </option>
                ))}
              </select>
              <p
                className={`${
                  validateCategory ? "hidden" : "block"
                } text-sm text-red-600 italic`}
              >
                {messCategory}
              </p>
            </div>
          </div>
          <div className="z-20 w-full bg-[#f3f3f3] p-2 flex flex-col gap-y-2">
            <TextArea value={value} onChange={setValue} />
            <div>{charCount} Characters</div>
            <p
              className={`${
                validateContent ? "hidden" : "block"
              } text-sm text-red-600 italic`}
            >
              {messContent}
            </p>
          </div>
          <div className="flex gap-x-2 justify-end px-4 bg-[#f3f3f3] pb-4">
            <Link
              href={"/admin/articles"}
              className="py-2 px-3 border border-gray-300 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75"
            >
              Cancel
            </Link>
            <Link
              onClick={() => {
                dispatch(setPreviewStatus("draft"));
              }}
              href={"/preview"}
              className="py-2 px-3 border border-gray-300 bg-gray-300 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75"
            >
              Preview
            </Link>
            <button
              type="submit"
              className={`bg-primary py-2 px-3 text-white rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75`}
            >
              Upload
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
