"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { constants } from "@/configs/constant";
import Image from "next/image";
import CardArticle from "./Card";
import Arrow from "../../assets/Arrow.svg";

export default function ListArticle() {
  const [data, setData] = useState([]);

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
  }, []);

  return (
    <>
      <section className="pb-8">
        <p className="hidden md:block">Showing : 20 of 240 articles</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((article) => (
            <CardArticle data={article} key={article.id} />
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          <div className="flex gap-2 items-center justify-center cursor-pointer select-none">
            <Image src={Arrow} alt="arrow" />
            <p>Previous</p>
          </div>
          <div className="flex gap-2">
            <div className="size-10 hidden cursor-pointer select-none">
              <p className="font-semibold text-center leading-10">...</p>
            </div>
            <div className="size-10 rounded-md cursor-pointer select-none">
              <p className="font-semibold text-center leading-10">1</p>
            </div>
            <div className="size-10 border border-gray-300 rounded-md cursor-pointer select-none">
              <p className="font-bold text-center leading-10 text-primary">2</p>
            </div>
            <div className="size-10">
              <p className="font-semibold text-center leading-10">...</p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center cursor-pointer select-none">
            <p>Next</p>
            <Image src={Arrow} alt="arrow" className="rotate-180" />
          </div>
        </div>
      </section>
    </>
  );
}
