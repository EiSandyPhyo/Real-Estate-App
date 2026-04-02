import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
  },
});

setupListeners(store.dispatch);
