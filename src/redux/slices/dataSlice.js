const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  articles: [],
  searchArticles: [],
  categoryUpdate: {
    id: null,
    name: "",
  },
  categoryDelete: {
    id: null,
    name: "",
  },
  refreshCategories: true,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setArticles(state, { payload }) {
      state.articles = payload;
    },
    setSearchArticles(state, { payload }) {
      state.searchArticles = payload;
    },
    setCategoryUpdate(state, { payload }) {
      state.categoryUpdate.id = payload.id;
      state.categoryUpdate.name = payload.name;
    },
    setCategoryDelete(state, { payload }) {
      state.categoryDelete.id = payload.id;
      state.categoryDelete.name = payload.name;
    },
    setRefreshCategory(state) {
      state.refreshCategories = !state.refreshCategories;
    },
  },
});

export const {
  setArticles,
  setSearchArticles,
  setCategoryUpdate,
  setCategoryDelete,
  setRefreshCategory,
} = dataSlice.actions;
export default dataSlice.reducer;
