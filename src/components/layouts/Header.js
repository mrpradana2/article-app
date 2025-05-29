"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Frame.svg";
import Logo2 from "../../assets/Logo2.svg";
import LogOut from "../../assets/Log-out.svg";
import Link from "next/link";

export default function Header() {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const [openModalLogout, setOpenModalLogout] = useState(false);
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
            onClick={() => {
              location.href = "/";
            }}
            src={windowWidth < 0 ? Logo2 : Logo}
            alt="logo"
            className="scale-[0.9] cursor-pointer"
          />
        </div>
        <div className="flex gap-x-3">
          <Link
            href={"/auth/login"}
            className="px-3 py-1.5 bg-white border border-primary text-sm rounded-md text-primary cursor-pointer hover:scale-[1.03] active:scale-[1] transition duration-75"
          >
            Login
          </Link>
          <Link
            href={"/auth/register"}
            className="px-3 py-1.5 bg-primary border border-primary text-sm rounded-md text-white cursor-pointer hover:scale-[1.03] active:scale-[1] transition duration-75"
          >
            Register
          </Link>
        </div>
        <div className="flex gap-x-2 items-center">
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
          <p
            onClick={() => {
              setOpenModalProfile((openModalProfile) => {
                return !openModalProfile;
              });
            }}
            className="hidden md:block text-sm font-semibold cursor-pointer underline"
          >
            James Dean
          </p>
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
            onClick={() => {
              setOpenModalProfile(!openModalProfile);
              setOpenModalLogout(!openModalLogout);
            }}
            type="button"
            className="py-2 px-4 text-red-500 text-left hover:bg-[#eaeaea] cursor-pointer transition-all w-full flex gap-x-2"
          >
            <Image src={LogOut} alt="icon" />
            Logout
          </button>
        </div>
      </header>
      <div
        className={`${
          openModalLogout ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-[31] flex justify-center items-center`}
      >
        <div className="mx-5 md:mx-1 bg-white rounded-lg py-4 px-8 max-w-[350px] flex flex-col gap-y-2">
          <h1 className="font-semibold text-lg">Logout</h1>
          <p>Are you sure want to logout?</p>
          <div className="flex gap-x-4 justify-end">
            <button
              onClick={() => {
                setOpenModalLogout(false);
              }}
              type="button"
              className="py-2 px-3 border border-gray-300 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75"
            >
              Cancel
            </button>
            <button
              type="button"
              className={`py-2 px-3 bg-primary text-white rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75`}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setOpenModalProfile((openModalProfile) => {
            return !openModalProfile;
          });
        }}
        className={`${
          openModalProfile ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-[30]`}
      ></div>
      <div
        onClick={() => {
          setOpenModalLogout((openModalLogout) => {
            return !openModalLogout;
          });
        }}
        className={`${
          openModalLogout ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-[30]`}
      ></div>
    </>
  );
}
