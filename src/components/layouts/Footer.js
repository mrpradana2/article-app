"use client";
import React from "react";
import Image from "next/image";
import Logo2 from "../../assets/Logo2.svg";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAuthLayout = pathname.startsWith("/auth");

  if (isAuthLayout) {
    return <></>;
  }

  return (
    <>
      <footer className="px-5 md:px-16 bg-primary flex flex-col gap-y-2 justify-center items-center py-4 md:flex-row md:gap-x-4">
        <Image src={Logo2} alt="icon" />
        <p className="text-white">
          &copy; 2025 Blog genzet. All rights reserved.
        </p>
      </footer>
    </>
  );
}
