"use client";
import React, { useMemo, useState } from "react";
import Arrow from "../../../../assets/ArrowBack.svg";
import UploadImg from "../../../../assets/ImgUpload.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TextArea from "@/components/articles/create/textArea";

export default function CreateArticle() {
  const router = useRouter();
  const initialValue = useMemo(
    () => [
      {
        type: "paragraph",
        children: [{ text: "Type a content..." }],
      },
    ],
    []
  );

  const [value, setValue] = useState(initialValue);

  const plainText = value.map((n) => Node.toString(n)).join("\n");

  console.log("plain text", plainText);
  return (
    <>
      <section className="pt-[65px] pb-7 pl-[80px] md:pl-[210px] pr-5 md:pr-16 bg-[#eaeaea] text-slate">
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
                className="w-52 h-40 bg-white flex flex-col gap-y-1 items-center justify-center border border-dashed"
              >
                <Image src={UploadImg} alt="icon" width={20} height={20} />
                <p className="text-sm ">Click to select files</p>
                <p className="text-sm ">Suport File Type : jpg or png</p>
              </label>
              <input type="file" name="thumbnail" id="thumbnail" hidden />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Input title"
                className="py-1 px-3 bg-white border border-gray-300 rounded-lg focus:outline-primary"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="title" className="font-semibold">
                Category
              </label>
              <select
                name="category"
                id="category"
                defaultValue={"0"}
                className="p-2 bg-white border border-gray-300 rounded-lg focus:outline-primary"
              >
                <option value="0" hidden>
                  Select category
                </option>
                <option value="1">Economy</option>
                <option value="2">Politic</option>
                <option value="3">Social</option>
              </select>
            </div>
          </div>
          <div className="z-20 w-full bg-[#f3f3f3] p-2 flex flex-col gap-y-2">
            <TextArea value={value} onChange={setValue} />
            <div>0 Words</div>
          </div>
          <div className="flex gap-x-2 justify-end px-4 bg-[#f3f3f3] pb-4">
            <button
              type="button"
              className="py-2 px-3 border border-gray-300 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75"
            >
              Cancel
            </button>
            <button
              className="py-2 px-3 border border-gray-300 bg-gray-300 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75"
              type="button"
            >
              Preview
            </button>
            <button
              type="button"
              className={`bg-primary py-2 px-3 text-white rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75`}
            >
              Upload
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
