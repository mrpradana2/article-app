import React from "react";
import Link from "next/link";
import Search from "../../../assets/Search.svg";
import Image from "next/image";

export default function RowListArticles({ data }) {
  const date = new Date(data?.createdAt);

  const formatDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <>
      <tr className="border border-gray-200">
        <td className="p-2 flex justify-center items-center">
          <div className="size-14 bg-amber-200 relative">
            <Image src={data?.imageUrl} alt="thumbnail" fill />
          </div>
        </td>
        <td className="p-2">{data?.title}</td>
        <td className="p-2 text-center">{data?.category?.name}</td>
        <td className="p-2 text-center">{formatDate}</td>
        <td className="p-2">
          <div className="flex gap-2 items-center justify-center">
            <Link href={"/"} className="underline text-primary">
              Preview
            </Link>
            <Link href={"/"} className="underline text-primary">
              Edit
            </Link>
            <Link href={"/"} className="underline text-red-500">
              Delete
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}
