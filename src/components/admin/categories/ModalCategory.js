import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsModalCategory,
  setModalCategoryStatus,
} from "@/redux/slices/uiSlice";

export default function ModalCategory() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ui.isModalCategory);
  const modalStatus = useSelector((state) => state.ui.modalCategoryStatus);

  return (
    <>
      <section
        className={`${
          isModalOpen ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-60`}
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
        <div className="w-max h-max py-5 px-7 bg-white fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-3 rounded-lg max-w-96">
          <h1 className="font-semibold text-lg">
            {modalStatus === "add"
              ? "Add Category"
              : modalStatus === "edit"
              ? "Edit Category"
              : "Delete Category"}
          </h1>
          <div className="flex flex-col gap-y-2">
            {modalStatus === "delete" ? (
              <>
                <p className="text-gray-500">
                  Delete category “Technology”? This will remove it from master
                  data permanently.
                </p>
              </>
            ) : (
              <>
                <label htmlFor="addCategory">Category</label>
                <input
                  type="text"
                  placeholder="Input Category"
                  id="addCategory"
                  className="border border-gray-300 rounded-md w-full focus:outline-primary pl-2 pr-8 py-1"
                />
              </>
            )}
          </div>
          <div className="flex gap-x-4 justify-end">
            <button
              onClick={() => {
                dispatch(setIsModalCategory());
                dispatch(setModalCategoryStatus(null));
              }}
              type="button"
              className="py-2 px-3 border border-gray-300 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75"
            >
              Cancel
            </button>
            <button
              type="button"
              className={`${
                modalStatus === "delete" ? "bg-red-600" : "bg-primary"
              } py-2 px-3 text-white rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75`}
            >
              {modalStatus === "add"
                ? "Add"
                : modalStatus === "edit"
                ? "Save Change"
                : "Delete"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
