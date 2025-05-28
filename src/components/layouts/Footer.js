import React from "react";
import Image from "next/image";
import Logo2 from "../../assets/Logo2.svg";

export default function Footer() {
  return (
    <>
      <section className="px-5 md:px-16 bg-primary flex flex-col gap-y-2 justify-center items-center py-4 md:flex-row md:gap-x-4">
        <Image src={Logo2} alt="icon" />
        <p className="text-white">
          &copy; 2025 Blog genzet. All rights reserved.
        </p>
      </section>
    </>
  );
}
