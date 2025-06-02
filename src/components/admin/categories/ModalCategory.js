import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsModalCategory,
  setModalCategoryStatus,
} from "@/redux/slices/uiSlice";
import {
  setRefreshCategory,
  setCategoryUpdate,
} from "@/redux/slices/dataSlice";
import { toast } from "react-toastify";
import { validateInputEmpty } from "@/utils/validation";
import axios from "axios";
import { constants } from "@/configs/constant";

export default function ModalCategory() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ui.isModalCategory);
  const modalStatus = useSelector((state) => state.ui.modalCategoryStatus);
  const token = useSelector((state) => state.auth.token);
  const valueCategory = useSelector((state) => state.data.categoryUpdate);
  const valueDelete = useSelector((state) => state.data.categoryDelete);
  const [inputValue, setInputValue] = useState("");

  const [validateInput, setValidateInput] = useState(true);
  const [messValidate, setMessValidate] = useState("");

  useEffect(() => {
    if (modalStatus === "edit" && valueCategory) {
      setInputValue(valueCategory.name);
    } else {
      setInputValue("");
    }
  }, [modalStatus, valueCategory]);

  function submitHandler(e) {
    e.preventDefault();
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (modalStatus === "delete") {
      axios
        .delete(`${constants.apiURL}/categories/${valueDelete.id}`, option)
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("failed to delete category");
          }
          toast.success("Successfully delete category");
          dispatch(setIsModalCategory());
          dispatch(setRefreshCategory());
          dispatch(setModalCategoryStatus(null));
        })
        .catch((err) => {
          toast.error("Failed delete category");
          if (err instanceof Error) console.error(err.message);
        });
      return;
    }

    if (modalStatus === "add") {
      const name = e.target.addCategory.value;

      const [validate, messValidate] = validateInputEmpty(
        name,
        "Category field cannot be empty"
      );

      setValidateInput(validate);
      setMessValidate(messValidate);

      if (validate) {
        const category = { name };
        axios
          .post(`${constants.apiURL}/categories`, category, option)
          .then((res) => {
            if (res.status !== 200) {
              throw new Error("failed to create category");
            }
            toast.success("Successfully create an category");
            dispatch(setIsModalCategory());
            dispatch(setRefreshCategory());
            dispatch(setModalCategoryStatus(null));
          })
          .catch((err) => {
            toast.error("Failed create an category");
            if (err instanceof Error) console.error(err.message);
          });
      }
    }

    if (modalStatus === "edit") {
      const name = e.target.editCategory.value;

      const [validate, messValidate] = validateInputEmpty(
        name,
        "Category field cannot be empty"
      );

      setValidateInput(validate);
      setMessValidate(messValidate);

      if (validate) {
        const category = { name };
        axios
          .put(
            `${constants.apiURL}/categories/${valueCategory.id}`,
            category,
            option
          )
          .then((res) => {
            if (res.status !== 200) {
              throw new Error("failed to update category");
            }
            toast.success("Successfully update category");
            dispatch(setIsModalCategory());
            dispatch(setRefreshCategory());
            dispatch(setModalCategoryStatus(null));
          })
          .catch((err) => {
            toast.error("Failed update category");
            if (err instanceof Error) console.error(err.message);
          });
      }
    }
  }

  return (
    <>
      <form
        onSubmit={submitHandler}
        className={`${
          isModalOpen ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-[110]`}
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
                  Delete category “{valueDelete.name}”? This will remove it from
                  master data permanently.
                </p>
              </>
            ) : (
              <>
                {modalStatus === "edit" ? (
                  <>
                    <label htmlFor="editCategory">Category</label>
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      type="text"
                      placeholder="Input Category"
                      name="editCategory"
                      id="editCategory"
                      className="border border-yellow-500 rounded-md w-full focus:outline-primary pl-2 pr-8 py-1"
                    />
                    <p
                      className={`${
                        validateInput ? "hidden" : "block"
                      } text-sm text-red-600 italic`}
                    >
                      {messValidate}
                    </p>
                  </>
                ) : (
                  <>
                    <label htmlFor="addCategory">Category</label>
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      type="text"
                      placeholder="Input Category"
                      name="addCategory"
                      id="addCategory"
                      className="border border-gray-300 rounded-md w-full focus:outline-primary pl-2 pr-8 py-1"
                    />
                    <p
                      className={`${
                        validateInput ? "hidden" : "block"
                      } text-sm text-red-600 italic`}
                    >
                      {messValidate}
                    </p>
                  </>
                )}
              </>
            )}
          </div>
          <div className="flex gap-x-4 justify-end">
            <button
              onClick={() => {
                dispatch(setIsModalCategory());
                dispatch(setModalCategoryStatus(null));
                setValidateInput(true);
                setMessValidate("");
                setInputValue("");
                dispatch(setCategoryUpdate({ id: "", name: "" }));
              }}
              type="button"
              className="py-2 px-3 border border-gray-300 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[1] transition duration-75"
            >
              Cancel
            </button>
            <button
              type="submit"
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
      </form>
    </>
  );
}
