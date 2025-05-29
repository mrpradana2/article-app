import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Thumbnail from "../../assets/ThumbArticle1.jpg";

export default function CardArticle({ data }) {
  const imageUrl = encodeURI(data.imageUrl);
  const date = new Date(data.createdAt);
  const formatDate = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      <section className="flex flex-col gap-y-2 py-8">
        <div className="relative w-full aspect-[1280/720] rounded-md overflow-hidden">
          <Image
            src={imageUrl || <Skeleton />}
            alt="thumbnail"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-slate">{formatDate || <Skeleton />}</p>
        <h1 className="text-slate-title font-semibold">
          {data.title || <Skeleton />}
        </h1>
        <p className="text-slate line-clamp-3">
          {data.content || <Skeleton />}
        </p>
        <div className="flex gap-2 flex-wrap select-none">
          <p className="text-[#1E3A8A] bg-secondary py-1.5 px-4 w-max rounded-full">
            {data.category.name || <Skeleton />}
          </p>
        </div>
      </section>
    </>
  );
}
