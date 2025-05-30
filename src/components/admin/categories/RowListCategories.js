import React from "react";
import Link from "next/link";

export default function RowListCategories({ data }) {
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
        <td className="p-2 text-center">{data?.name}</td>
        <td className="p-2 text-center">{formatDate}</td>
        <td className="p-2">
          <div className="flex gap-2 items-center justify-center">
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
