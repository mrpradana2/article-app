const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isModalCategory: false,
  modalCategoryStatus: null,
  previewStatus: null,
  idPreview: 0,
  dataPreviewArticle: {
    title: "",
    images: null,
  },
  previewArticle: [
    {
      type: "paragraph",
      children: [
        {
          text: "Type a content...",
        },
      ],
    },
  ],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsModalCategory(state) {
      state.isModalCategory = !state.isModalCategory;
    },
    setModalCategoryStatus(state, { payload }) {
      state.modalCategoryStatus = payload;
    },
    setPreviewArticle(state, { payload }) {
      state.previewArticle = payload;
    },
    setPreviewStatus(state, { payload }) {
      state.previewStatus = payload;
    },
    setIdPreview(state, { payload }) {
      state.idPreview = payload;
    },
    setDataPreviewArticle(state, { payload }) {
      state.dataPreviewArticle = payload;
    },
  },
});

export const {
  setIsModalCategory,
  setModalCategoryStatus,
  setPreviewArticle,
  setPreviewStatus,
  setIdPreview,
  setDataPreviewArticle,
} = uiSlice.actions;
export default uiSlice.reducer;
