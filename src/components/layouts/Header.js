"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Frame.svg";
import Logo2 from "../../assets/Logo2.svg";

export default function Header() {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("window", windowWidth);

  return (
    <section className="w-full h-[50px] backdrop-blur-md sticky top-0 flex justify-between items-center px-5 md:px-16 shadow-lg">
      <div>
        <Image
          src={windowWidth < 0 ? Logo2 : Logo}
          alt="logo"
          className="scale-[0.9]"
        />
      </div>
      <div>
        <div
          className="size-[35px] bg-[#BFDBFE] text-[#0073ff] rounded-full text-xl font-semibold text-center leading-[35px] cursor-pointer"
          onClick={() => {
            setOpenModalProfile((openModal) => {
              return !openModal;
            });
          }}
        >
          J
        </div>
      </div>
      <div
        className={`${
          openModalProfile ? "block" : "hidden"
        } absolute -bottom-28 right-4 bg-gray-100 rounded-md border border-gray-300 w-44 p-2.5 flex flex-col gap-y-2`}
      >
        <button
          type="button"
          className="py-2 px-4 bg-gray-200 text-gray-400 font-semibold hover:text-gray-200 hover:bg-gray-400 cursor-pointer transition-all w-full rounded-md"
        >
          Profile
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-red-400 text-white font-semibold hover:bg-red-500 cursor-pointer transition-all w-full rounded-md"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
