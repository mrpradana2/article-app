"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Search from "../../../assets/Search.svg";
import TableArticles from "@/components/admin/articles/TableArticles";
import axios from "axios";
import { constants } from "@/configs/constant";
import { PrivateRouteAdmin } from "@/app/privateRoutes";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setModalDeleteArticle } from "@/redux/slices/uiSlice";
import { toast } from "react-toastify";

export default function ArticlesAdmin() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const router = useRouter();
  const isOpenModal = useSelector((state) => state.ui.modalDeleteArticle);
  const token = useSelector((state) => state.auth.token);
  const idDelete = useSelector((state) => state.ui.idDeleteArticle);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(`${constants.apiURL}/articles`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("failed to fatch data");
        }
        return res.data.data;
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        if (err instanceof Error) console.log("[ERROR] : ", err.message);
      });
  }, [refresh]);

  function deleteArticleHandler() {
    axios
      .delete(`${constants.apiURL}/articles/${idDelete}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          throw new Error("failed delete articles");
        }
        toast.success("Successfully delete article");
        setRefresh(refresh ? false : true);
        return res;
      })
      .catch((err) => {
        toast.error("Failed delete article");
        if (err instanceof Error) console.error(err.message);
      });
  }

  return (
    <PrivateRouteAdmin>
      <section className="pt-[65px] pb-7 pl-[80px] md:pl-[210px] pr-5 md:pr-16 bg-[#eaeaea] text-slate">
        <div className="flex flex-col bg-white rounded-lg">
          <div className="p-2 border border-gray-300">
            <p className="font-semibold text-[15px]">
              Total Articles : {data.length}
            </p>
          </div>
          <div className="grid grid-cols-2 p-2 border border-gray-300">
            <div className="flex flex-col gap-3 md:flex-row">
              <select
                name="category"
                id="category"
                defaultValue={"0"}
                className="z-20 px-2 py-1 border-2 border-gray-300 rounded-lg"
              >
                <option value="0" disabled hidden>
                  Category
                </option>
                <option
                  value="1"
                  className="border-0 bg-primary font-semibold text-white"
                >
                  Economy
                </option>
                <option
                  value="2"
                  className="border-0 bg-primary font-semibold text-white cursor-pointer"
                >
                  Politic
                </option>
                <option
                  value="3"
                  className="border-0 bg-primary font-semibold text-white cursor-pointer"
                >
                  Social
                </option>
              </select>
              <div className="z-20 relative md:col-span-3">
                <Image
                  src={Search}
                  alt="icon-search"
                  className="absolute top-1/2 left-3 -translate-y-1/2"
                />
                <input
                  type="search"
                  placeholder="Search by title "
                  className="bg-white w-full p-2 pl-9 rounded-md focus:outline-primary border-2 border-gray-300"
                />
              </div>
            </div>
            <div className="flex justify-end items-center z-20">
              <button
                onClick={() => {
                  router.replace("/admin/articles/create");
                }}
                type="button"
                className="bg-primary p-2 text-white rounded-lg cursor-pointer hover:scale-[1.01] hover:bg-blue-600 active:scale-[1] transition duration-75 h-max"
              >
                + Add Articles
              </button>
            </div>
          </div>
          <TableArticles data={data} />
        </div>
        <section
          className={`${
            isOpenModal ? "block" : "hidden"
          } absolute top-0 left-0 right-0 bottom-0 z-[100]`}
        >
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-50"></div>
          <div className="w-max h-max py-5 px-7 bg-white fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-3 rounded-lg max-w-96 z-[60]">
            <h1 className="font-semibold text-lg">Delete Articles</h1>
            <p className="text-gray-500">
              Deleting this article is permanent and cannot be undone. All
              related content will be removed.
            </p>
            <div className="flex gap-x-4 justify-end">
              <button
                onClick={() => {
                  dispatch(setModalDeleteArticle());
                }}
                type="button"
                className="py-2 px-3 border border-gray-300 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteArticleHandler();
                  dispatch(setModalDeleteArticle());
                }}
                type="button"
                className={`bg-red-600 py-2 px-3 text-white rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75`}
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      </section>
    </PrivateRouteAdmin>
  );
}
