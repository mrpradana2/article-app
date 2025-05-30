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
      <>
        <section className="flex absolute w-full">
          <aside className="w-[75px] md:w-full h-lvh flex flex-col px-3 gap-y-8 pt-4 max-w-48 justify-start items-center bg-primary sticky top-0">
            <Image
              onClick={() => {
                router.replace("/");
              }}
              src={windowWidth > 768 ? Logo2 : Logo4}
              alt="logo"
              className="cursor-pointer"
            />
            <div className="flex flex-col gap-y-4 justify-start items-start w-full relative">
              <div
                className={`h-[38.5px] bg-[#3B82F6] rounded-lg absolute ${
                  isNavActive === 1
                    ? "translate-y-0"
                    : isNavActive === 2
                    ? "translate-y-[50px] md:translate-y-[54.5px]"
                    : "translate-y-[102px] md:translate-y-[109px]"
                } left-0 right-0 transition-all`}
              ></div>
              <Link
                href={"/admin/articles"}
                onClick={() => {
                  setIsNavActive(1);
                }}
                className="flex justify-center md:justify-start items-center gap-4 p-2 w-full cursor-pointer z-20 transition duration-75 rounded-lg"
              >
                <Image src={Articles} alt="icon" />
                <p className="hidden md:block text-[15px] text-white font-semibold">
                  Articles
                </p>
              </Link>
              <Link
                href={"/admin/categories"}
                onClick={() => {
                  setIsNavActive(2);
                }}
                className="flex justify-center md:justify-start items-center gap-4 p-2 w-full cursor-pointer z-20 transition duration-75 rounded-lg"
              >
                <Image src={Categories} alt="icon" />
                <p className="hidden md:block text-[15px] text-white font-semibold">
                  Category
                </p>
              </Link>
              <div
                onClick={() => {
                  setOpenModalLogout(true);
                }}
                className="flex justify-center md:justify-start items-center gap-4 p-2 w-full cursor-pointer z-20 hover:bg-red-500 transition duration-75 rounded-lg"
              >
                <Image src={LogOutWhite} alt="icon" />
                <p className="hidden md:block text-[15px] text-white font-semibold">
                  Logout
                </p>
              </div>
            </div>
          </aside>
          <header className="w-full h-[50px] backdrop-blur-md sticky top-0 flex justify-between items-center px-5 md:px-16 shadow-lg z-50">
            <div>
              <h1 className="font-semibold text-xl">Articles</h1>
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
                href={"/admin/profile"}
                onClick={() => {
                  setOpenModalProfile(!openModalProfile);
                }}
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
            } fixed top-0 left-0 right-0 bottom-0 z-[70] flex justify-center items-center`}
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
            } fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-[50]`}
          ></div>
        </section>
      </>
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
