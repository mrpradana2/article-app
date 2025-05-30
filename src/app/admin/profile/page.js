"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { PrivateRouteAdmin } from "@/app/privateRoutes";

export default function ProfileAdmin() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <PrivateRouteAdmin>
        <section className="pt-[65px] pb-7 pl-[80px] md:pl-[210px] pr-5 md:pr-16 text-slate flex justify-center h-lvh">
          <div className="w-full max-w-[350px] flex flex-col gap-y-4 justify-center items-center">
            <h1 className="text-2xl font-semibold">Admin Profile</h1>
            <h1 className="size-14 text-center text-primary text-2xl font-semibold bg-[#BFDBFE] leading-14 rounded-full">
              {auth.user.username[0]}
            </h1>
            <table className="table-auto w-full border-separate [border-spacing:0_8px]">
              <tbody>
                <tr className="bg-[#F3F4F6] rounded-lg overflow-hidden border-2 border-[#E2E8F0]">
                  <th className="text-left max-w-5 p-3 rounded-l-lg">
                    Username
                  </th>
                  <td className="text-center">:</td>
                  <td className="text-center rounded-r-lg">
                    {auth.user.username}
                  </td>
                </tr>
                <tr className="bg-[#F3F4F6] rounded-lg overflow-hidden border-2 border-[#E2E8F0]">
                  <th className="text-left max-w-5 p-3 rounded-l-lg">Role</th>
                  <td className="text-center">:</td>
                  <td className="text-center rounded-r-lg">{auth.user.role}</td>
                </tr>
              </tbody>
            </table>

            <Link
              href={"/"}
              className="w-full p-2 bg-primary rounded-lg hover:scale-[1.01] hover:bg-blue-700 text-white active:scale-[1] transition duration-75 cursor-pointer text-center z-50"
            >
              Back to home
            </Link>
          </div>
        </section>
      </PrivateRouteAdmin>
    </>
  );
}
