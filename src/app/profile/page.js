"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <section className="px-5 md:px-16 flex justify-center items-center h-lvh">
        <div className="w-full max-w-[350px] flex flex-col gap-y-4 justify-center items-center">
          <h1 className="text-2xl font-semibold">User Profile</h1>
          <h1 className="size-14 text-center text-primary text-2xl font-semibold bg-[#BFDBFE] leading-14 rounded-full">
            {auth.user.username[0]}
          </h1>
          <table class="table-auto w-full border-separate [border-spacing:0_8px]">
            <tbody>
              <tr className="bg-[#F3F4F6] rounded-lg overflow-hidden border-2 border-[#E2E8F0]">
                <th className="text-left max-w-5 p-3 rounded-l-lg">Username</th>
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

          <button
            onClick={() => {
              location.href = "/";
            }}
            type="button"
            className="w-full p-2 bg-primary rounded-lg hover:scale-[1.01] hover:bg-blue-700 text-white active:scale-[1] transition duration-75 cursor-pointer"
          >
            Back to home
          </button>
        </div>
      </section>
    </>
  );
}
