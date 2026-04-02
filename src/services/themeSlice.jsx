import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    addTheme: (state, { payload }) => {
      state.theme = payload;
      Cookies.set("theme", JSON.stringify(state.theme), { expires: 7 });
    },
  },
});

export const { addTheme } = themeSlice.actions;
export default themeSlice.reducer;
