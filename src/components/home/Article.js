"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CardArticle from "./Card";
import Arrow from "../../assets/Arrow.svg";
import axios from "axios";
import { constants } from "@/configs/constant";
import { useSelector, useDispatch } from "react-redux";
import { setArticles } from "@/redux/slices/dataSlice";

export default function ListArticle() {
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.data.articles);
  const dataSearch = useSelector((state) => state.data.searchArticles);

  const dispatch = useDispatch();

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
        dispatch(setArticles(res));
      })
      .catch((err) => {
        if (err instanceof Error) console.log("[ERROR] : ", err.message);
      });
  }, []);

  let start = 0;
  let end = 0;

  start = page * 9 - 9;
  end = page * 9;

  console.log(start, end);

  let totalPagination = Math.ceil(data.length / 9);

  const articles = data.slice(start, end);
  const searchArticles = data.slice(start, end);

  return (
    <>
      <section className="pb-8">
        <p className="hidden md:block">
          Showing : {articles.length} of {data.length} articles
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataSearch.length === 0
            ? articles.map((article, idx) => (
                <CardArticle data={article} key={idx} />
              ))
            : dataSearch.map((article, idx) => (
                <CardArticle data={article} key={idx} />
              ))}
        </div>
        <div className="flex gap-2 justify-center">
          <div
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
            className={`${
              page > 1
                ? "text-primary  cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            } flex gap-2 items-center justify-center select-none`}
          >
            <Image src={Arrow} alt="arrow" />
            <p>Previous</p>
          </div>
          <div className="flex gap-2 select-none">
            <div
              className={`${
                page === 1 ? "hidden" : "block"
              } size-10 rounded-md cursor-pointer select-none`}
            >
              <p className={`font-semibold text-center leading-10`}>
                {page <= 2 ? page - 1 : "..."}
              </p>
            </div>
            <div className="size-10 border border-gray-300 rounded-md cursor-pointer select-none">
              <p className="font-bold text-center leading-10 text-primary">
                {page}
              </p>
            </div>
            <div
              className={`${
                page === totalPagination ? "hidden" : "block"
              } size-10 rounded-md cursor-pointer select-none`}
            >
              <p className={`font-semibold text-center leading-10`}>
                {page > totalPagination - 2 ? page + 1 : "..."}
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              if (page < totalPagination) {
                setPage(page + 1);
              }
            }}
            className={`${
              page < totalPagination
                ? "text-primary cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            } flex gap-2 items-center justify-center select-none`}
          >
            <p>Next</p>
            <Image src={Arrow} alt="arrow" className="rotate-180" />
          </div>
        </div>
      </section>
    </>
  );
}
