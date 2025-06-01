const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isModalCategory: false,
  modalCategoryStatus: null,
  previewStatus: null,
  idPreview: 0,
  idDeleteArticle: null,
  modalDeleteArticle: false,
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
    setModalDeleteArticle(state) {
      state.modalDeleteArticle = !state.modalDeleteArticle;
    },
    setIdDeleteArticle(state, { payload }) {
      state.idDeleteArticle = payload;
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
  setModalDeleteArticle,
  setIdDeleteArticle,
} = uiSlice.actions;
export default uiSlice.reducer;
