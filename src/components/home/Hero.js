"use client";
import React from "react";
import Image from "next/image";
import Hero from "../../assets/Hero.jpg";
import Search from "../../assets/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchArticles } from "@/redux/slices/dataSlice";

export default function HeroLandingPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.articles);

  function searchHandler(e) {
    setTimeout(() => {
      const filtered = data.filter((article) =>
        article.title.toLowerCase().includes(e.target.value)
      );
      dispatch(setSearchArticles(filtered));
    }, 2000);
  }

  return (
    <>
      <section className="px-5 md:px-16 py-20 overflow-hidden relative h-[500px] w-full flex items-center justify-center">
        <div className="flex flex-col gap-y-4">
          <Image
            src={Hero}
            alt="hero"
            className="absolute left-0 top-[50px] -z-10 right-0 bg-top scale-[3.5] md:scale-[1.6]"
          />
          <div className="h-full w-full flex flex-col gap-y-2 justify-center items-center">
            <p className="text-lg text-white z-20 text-center">Blog genzet</p>
            <h1 className="text-4xl text-white z-20 text-center md:max-w-xl">
              The Journal : Design Resources, Interviews, and Industry News
            </h1>
            <p className="text-lg text-white z-20 text-center">
              Your daily dose of design insights!
            </p>
          </div>
          <div className="h-full w-full flex flex-col gap-y-2 p-3 bg-[#3B82F6] rounded-md md:grid md:grid-cols-4 md:gap-x-4">
            <select
              name="category"
              id="category"
              className="z-20 bg-white w-full p-2 rounded-md focus:outline-primary"
              defaultValue={"0"}
            >
              <option value="0" disabled hidden>
                Select Category
              </option>
              <option value="1">Ekonomi</option>
              <option value="2">Politik</option>
              <option value="3">Sosial</option>
              <option value="4">Budaya</option>
            </select>
            <div className="z-20 relative md:col-span-3">
              <Image
                src={Search}
                alt="icon-search"
                className="absolute top-1/2 left-3 -translate-y-1/2"
              />
              <input
                onChange={searchHandler}
                placeholder="Search articles"
                type="search"
                className="bg-white w-full p-2 pl-9 rounded-md focus:outline-primary"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary opacity-80"></div>
      </section>
    </>
  );
}
