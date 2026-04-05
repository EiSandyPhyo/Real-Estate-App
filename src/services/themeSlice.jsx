import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialTheme = Cookies.get("theme") || "light";

const initialState = {
  theme: initialTheme,
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    /* addTheme: (state, { payload }) => {
      state.theme = payload;
      Cookies.set("theme", JSON.stringify(state.theme), { expires: 7 });
    }, */
    setTheme: (state, action) => {
      state.theme = action.payload;
      Cookies.set("theme", action.payload, { expires: 7 });
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      Cookies.set("theme", state.theme, { expires: 7 });
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
