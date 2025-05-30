const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isModalCategory: false,
  modalCategoryStatus: null,
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
  },
});

export const { setIsModalCategory, setModalCategoryStatus } = uiSlice.actions;
export default uiSlice.reducer;
