"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Search from "../../../assets/Search.svg";
import TableCategories from "@/components/admin/categories/TableCategories";
import axios from "axios";
import { constants } from "@/configs/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsModalCategory,
  setModalCategoryStatus,
} from "@/redux/slices/uiSlice";
import { setCategoryUpdate } from "@/redux/slices/dataSlice";
import ModalCategory from "@/components/admin/categories/ModalCategory";
import { PrivateRouteAdmin } from "@/app/privateRoutes";

export default function CategoriesAdmin() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const refreshTable = useSelector((state) => state.data.refreshCategories);

  data?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

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
        setData(res);
      })
      .catch((err) => {
        if (err instanceof Error) console.log("[ERROR] : ", err.message);
      });
  }, [refreshTable]);

  return (
    <PrivateRouteAdmin>
      <section className="pt-[65px] pb-7 pl-[80px] md:pl-[210px] pr-5 md:pr-16 bg-[#eaeaea] text-slate">
        <div className="flex flex-col bg-white rounded-lg">
          <div className="p-2 border border-gray-300">
            <p className="font-semibold text-[15px]">
              Total Category : {data.length}
            </p>
          </div>
          <div className="grid grid-cols-2 p-2 border border-gray-300">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="z-20 relative md:col-span-3">
                <Image
                  src={Search}
                  alt="icon-search"
                  className="absolute top-1/2 left-3 -translate-y-1/2"
                />
                <input
                  type="search"
                  placeholder="Search by category"
                  className="bg-white w-full p-2 pl-9 rounded-md focus:outline-primary border-2 border-gray-300"
                />
              </div>
            </div>
            <div className="flex justify-end items-center z-20">
              <button
                onClick={() => {
                  dispatch(setIsModalCategory());
                  dispatch(setModalCategoryStatus("add"));
                }}
                type="button"
                className="bg-primary p-2 text-white rounded-lg cursor-pointer hover:scale-[1.01] hover:bg-blue-600 active:scale-[1] transition duration-75 h-max"
              >
                + Add Category
              </button>
            </div>
          </div>
          <TableCategories data={data} />
        </div>
        <ModalCategory />
      </section>
    </PrivateRouteAdmin>
  );
}
