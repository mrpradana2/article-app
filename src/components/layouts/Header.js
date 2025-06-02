"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Frame.svg";
import Logo2 from "../../assets/Logo2.svg";
import Logo4 from "../../assets/Logo4.svg";
import LogOut from "../../assets/Log-out.svg";
import Categories from "../../assets/Categories.svg";
import Articles from "../../assets/Articles.svg";
import LogOutWhite from "../../assets/Logout-white.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Header() {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const [openModalLogout, setOpenModalLogout] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isNavActive, setIsNavActive] = useState(1);

  const pathname = usePathname();
  const router = useRouter();
  const isAuthLayout = pathname.startsWith("/auth");
  const isAdminLayout = pathname.startsWith("/admin");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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

  if (isAuthLayout) {
    return <></>;
  }

  if (isAdminLayout) {
    return (
      <section className="flex absolute w-full z-[100]">
        <aside className="fixed top-0 w-[75px] md:w-full h-lvh flex flex-col px-3 gap-y-8 pt-4 max-w-48 justify-start items-center bg-primary z-[70]">
          <Image
            src={windowWidth > 768 ? Logo2 : Logo4}
            onClick={() => router.replace("/")}
            alt="logo"
            className="cursor-pointer"
          />
          <div className="flex flex-col gap-y-4 justify-start items-start w-full relative">
            <div
              className={`h-[38.5px] bg-[#3B82F6] rounded-lg absolute left-0 right-0 transition-all ${
                isNavActive === 1
                  ? "translate-y-0"
                  : isNavActive === 2
                  ? "translate-y-[50px] md:translate-y-[54.5px]"
                  : "translate-y-[102px] md:translate-y-[109px]"
              }`}
            />

            <Link
              href="/admin/articles"
              onClick={() => setIsNavActive(1)}
              className="flex justify-center md:justify-start items-center gap-4 p-2 w-full z-20 rounded-lg transition duration-75"
            >
              <Image src={Articles} alt="Articles Icon" />
              <p className="hidden md:block text-[15px] text-white font-semibold">
                Articles
              </p>
            </Link>

            <Link
              href="/admin/categories"
              onClick={() => setIsNavActive(2)}
              className="flex justify-center md:justify-start items-center gap-4 p-2 w-full z-20 rounded-lg transition duration-75"
            >
              <Image src={Categories} alt="Categories Icon" />
              <p className="hidden md:block text-[15px] text-white font-semibold">
                Category
              </p>
            </Link>
            <div
              onClick={() => {
                setOpenModalLogout(true);
              }}
              className="flex justify-center md:justify-start items-center gap-4 p-2 w-full z-20 hover:bg-red-500 rounded-lg transition duration-75 cursor-pointer"
            >
              <Image src={LogOutWhite} alt="Logout Icon" />
              <p className="hidden md:block text-[15px] text-white font-semibold">
                Logout
              </p>
            </div>
          </div>
        </aside>
        <header className="pl-[85px] md:pl-[215px] w-full h-[50px] backdrop-blur-md fixed top-0 flex justify-between items-center px-5 md:px-16 shadow-lg z-50">
          <h1 className="font-semibold text-xl">Articles</h1>
          {auth.token === null ? (
            <div className="flex gap-x-3">
              <Link
                href="/auth/login"
                className="px-3 py-1.5 bg-white border border-primary text-sm rounded-md text-primary hover:scale-[1.03] transition duration-75"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="px-3 py-1.5 bg-primary border border-primary text-sm rounded-md text-white hover:scale-[1.03] transition duration-75"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex gap-x-2 items-center">
              <div
                className="size-[35px] bg-[#BFDBFE] text-[#0073ff] rounded-full text-xl font-semibold text-center leading-[35px] cursor-pointer"
                onClick={() => setOpenModalProfile((prev) => !prev)}
              >
                {auth.user.username[0]}
              </div>
              <p
                onClick={() => setOpenModalProfile((prev) => !prev)}
                className="hidden md:block text-sm font-semibold underline cursor-pointer"
              >
                {auth.user.username}
              </p>
            </div>
          )}
          <div
            className={`${
              openModalProfile ? "block" : "hidden"
            } absolute -bottom-[85px] right-0 bg-white rounded-lg overflow-hidden w-44 flex flex-col mx-5 md:mx-16 shadow-md`}
          >
            <Link
              href="/admin/profile"
              onClick={() => setOpenModalProfile(false)}
              className="py-2 px-4 hover:bg-[#eaeaea] transition w-full text-left"
            >
              My Account
            </Link>
            <button
              onClick={() => {
                setOpenModalProfile(false);
                setOpenModalLogout(true);
              }}
              className="py-2 px-4 text-red-500 hover:bg-[#eaeaea] transition w-full flex items-center gap-x-2"
            >
              <Image src={LogOut} alt="Logout Icon" />
              Logout
            </button>
          </div>
        </header>
        <div
          className={`${
            openModalLogout ? "block" : "hidden"
          } fixed inset-0 z-[70] flex justify-center items-center`}
        >
          <div className="mx-5 md:mx-1 bg-white rounded-lg py-4 px-8 max-w-[350px] flex flex-col gap-y-2">
            <h1 className="font-semibold text-lg">Logout</h1>
            <p>Are you sure you want to logout?</p>
            <div className="flex justify-end gap-x-4">
              <button
                onClick={() => setOpenModalLogout(false)}
                className="py-2 px-3 border border-gray-300 rounded-md hover:scale-[1.02] transition duration-75"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  router.replace("/");
                  dispatch(userLogout());
                  setOpenModalLogout(false);
                  toast.success("You've been successfully logged out.");
                }}
                className="py-2 px-3 bg-primary text-white rounded-md hover:scale-[1.02] transition duration-75"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        {openModalProfile && (
          <div
            onClick={() => setOpenModalProfile(false)}
            className="fixed inset-0 bg-black opacity-40 z-[30]"
          />
        )}
        {openModalLogout && (
          <div
            onClick={() => setOpenModalLogout(false)}
            className="fixed inset-0 bg-black opacity-40 z-[50]"
          />
        )}
      </section>
    );
  }

  return (
    <>
      <header className="w-full h-[50px] backdrop-blur-md sticky top-0 flex justify-between items-center px-5 md:px-16 shadow-lg z-50">
        <div>
          <Image
            onClick={() => {
              router.replace("/");
            }}
            src={windowWidth < 0 ? Logo2 : Logo}
            alt="logo"
            className="scale-[0.9] cursor-pointer"
          />
        </div>

        {auth.token === null ? (
          <>
            {/* if login */}
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
          </>
        ) : (
          <>
            {/* if success login */}
            <div className="flex gap-x-2 items-center">
              <div
                className="size-[35px] bg-[#BFDBFE] text-[#0073ff] rounded-full text-xl font-semibold text-center leading-[35px] cursor-pointer"
                onClick={() => {
                  setOpenModalProfile((openModalProfile) => {
                    return !openModalProfile;
                  });
                }}
              >
                {auth.user.username[0]}
              </div>
              <p
                onClick={() => {
                  setOpenModalProfile((openModalProfile) => {
                    return !openModalProfile;
                  });
                }}
                className="hidden md:block text-sm font-semibold cursor-pointer underline"
              >
                {auth.user.username}
              </p>
            </div>
          </>
        )}
        <div
          className={`${
            openModalProfile ? "block" : "hidden"
          } absolute -bottom-[85px] right-0 bg-white rounded-lg overflow-hidden w-44 flex flex-col mx-5 md:mx-16 shadow-md`}
        >
          <Link
            onClick={() => {
              setOpenModalProfile(!openModalProfile);
            }}
            href={"/profile"}
            className="py-2 px-4 bg-white text-slate hover:bg-[#eaeaea] cursor-pointer transition-all w-full text-left"
          >
            My Account
          </Link>
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
              onClick={() => {
                dispatch(userLogout());
                setOpenModalLogout(false);
                toast.success(
                  "You've been successfully logged out. See you next time!"
                );

                router.replace("/");
              }}
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
