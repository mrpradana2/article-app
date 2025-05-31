const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  articles: [],
  searchArticles: [],
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
  },
});

export const { setArticles, setSearchArticles } = dataSlice.actions;
export default dataSlice.reducer;
