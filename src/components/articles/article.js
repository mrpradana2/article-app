import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import DOMPurify from "dompurify";
import Image from "next/image";

export default function ArticlePage({ data }) {
  // const cleanContent = DOMPurify.sanitize(data?.content);
  const date = new Date(data?.createdAt);
  const dateFormat = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return (
    <>
      <div className="py-10 flex flex-col gap-y-4">
        <p className="text-[15px] md:text-lg text-slate text-center">
          {dateFormat || <Skeleton />} ● Created by{" "}
          {data?.user?.username || <Skeleton />}
        </p>
        <h1 className="font-bold text-2xl text-center">
          {data?.title || <Skeleton />}
        </h1>
        <div className="flex items-center justify-center w-full">
          <div className="relative w-full max-w-[600px] aspect-[1280/720] rounded-lg overflow-hidden">
            {data?.imageUrl ? (
              <Image
                src={data?.imageUrl}
                alt="thumbnail"
                fill
                className="object-contain"
              />
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
        {/* <section
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        /> */}
        <p>{data?.content}</p>
      </div>
    </>
  );
}
