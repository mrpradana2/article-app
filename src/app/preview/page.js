"use client";
import React from "react";
import ArticlePreview from "@/components/admin/articlePreview";
import { useSelector } from "react-redux";
import ArticleContent from "@/components/articles/articleContent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import OthersArticle from "@/components/articles/othersArticle";

export default function PreviewArticle() {
  const content = useSelector((state) => state.ui.previewArticle);
  const previewStatus = useSelector((state) => state.ui.previewStatus);
  const dataPreviewArticle = useSelector(
    (state) => state.ui.dataPreviewArticle
  );
  const idPreview = useSelector((state) => state.ui.idPreview);
  const articles = useSelector((state) => state.data.articles);
  const user = useSelector((state) => state.auth.user);
  const date = new Date(articles[idPreview].createdAt);
  const dateNow = new Date();
  const dateFormat = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const dateFormatNow = dateNow.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      {previewStatus === "draft" ? (
        <>
          <section className="pt-[50px] flex flex-col gap-y-4 px-5 md:px-16">
            <p className="text-[15px] md:text-lg text-slate text-center">
              {dateFormatNow} ● Created by {user.username}
            </p>
            <h1 className="font-bold text-2xl text-center">
              {dataPreviewArticle.title}
            </h1>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-[500px] aspect-video bg-[#eaeaea] flex flex-col gap-y-1 items-center justify-center relative">
                {dataPreviewArticle.images.map((url, idx) => (
                  <Image
                    src={url}
                    alt="preview"
                    key={idx}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0"
                  />
                ))}
              </div>
            </div>
            <ArticlePreview value={content} />
            <OthersArticle />
          </section>
        </>
      ) : (
        <>
          <section className="px-5 py-5 flex flex-col gap-y-4 md:px-16">
            <p className="text-[15px] md:text-lg text-slate text-center">
              {dateFormat || <Skeleton />} ● Created by{" "}
              {articles[idPreview].user.username || <Skeleton />}
            </p>
            <h1 className="font-bold text-2xl text-center">
              {articles[idPreview].title || <Skeleton />}
            </h1>
            <div className="flex items-center justify-center w-full">
              <div className="relative w-full max-w-[600px] aspect-[1280/720] rounded-lg overflow-hidden">
                {articles[idPreview].imageUrl ? (
                  <Image
                    src={articles[idPreview].imageUrl}
                    alt="thumbnail"
                    fill
                    className="object-contain"
                  />
                ) : (
                  <Skeleton />
                )}
              </div>
            </div>
            <ArticleContent content={articles[idPreview].content} />
          </section>
        </>
      )}
    </>
  );
}
