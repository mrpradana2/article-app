import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.token = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
