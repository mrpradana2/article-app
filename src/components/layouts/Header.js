"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Frame.svg";
import Logo2 from "../../assets/Logo2.svg";
import LogOut from "../../assets/Log-out.svg";

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

  return (
    <>
      <header className="w-full h-[50px] backdrop-blur-md sticky top-0 flex justify-between items-center px-5 md:px-16 shadow-lg z-50">
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
              setOpenModalProfile((openModalProfile) => {
                return !openModalProfile;
              });
            }}
          >
            J
          </div>
        </div>
        <div
          className={`${
            openModalProfile ? "block" : "hidden"
          } absolute -bottom-[85px] right-0 bg-white rounded-lg overflow-hidden w-44 flex flex-col mx-5 md:mx-16 shadow-md`}
        >
          <button
            type="button"
            className="py-2 px-4 bg-white text-slate hover:bg-[#eaeaea] cursor-pointer transition-all w-full text-left"
          >
            My Account
          </button>
          <button
            type="button"
            className="py-2 px-4 text-red-500 text-left hover:bg-[#eaeaea] cursor-pointer transition-all w-full flex gap-x-2"
          >
            <Image src={LogOut} alt="icon" />
            Logout
          </button>
        </div>
      </header>
      <div
        onClick={() => {
          setOpenModalProfile((openModalProfile) => {
            return !openModalProfile;
          });
        }}
        className={`${
          openModalProfile ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-30`}
      ></div>
    </>
  );
}
