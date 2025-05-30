import React from "react";
import { useDispatch } from "react-redux";
import {
  setIsModalCategory,
  setModalCategoryStatus,
} from "@/redux/slices/uiSlice";

export default function RowListCategories({ data }) {
  const dispatch = useDispatch();
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
            <button
              onClick={() => {
                dispatch(setIsModalCategory());
                dispatch(setModalCategoryStatus("edit"));
              }}
              type="button"
              className="underline text-primary cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => {
                dispatch(setIsModalCategory());
                dispatch(setModalCategoryStatus("delete"));
              }}
              type="button"
              className="underline text-red-500 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
