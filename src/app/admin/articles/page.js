"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Search from "../../../assets/Search.svg";
import TableArticles from "@/components/admin/articles/TableArticles";
import axios from "axios";
import { constants } from "@/configs/constant";
import { PrivateRouteAdmin } from "@/app/privateRoutes";

export default function ArticlesAdmin() {
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
                type="button"
                className="bg-primary p-2 text-white rounded-lg cursor-pointer hover:scale-[1.01] hover:bg-blue-600 active:scale-[1] transition duration-75 h-max"
              >
                + Add Articles
              </button>
            </div>
          </div>
          <TableArticles data={data} />
        </div>
      </section>
    </PrivateRouteAdmin>
  );
}
