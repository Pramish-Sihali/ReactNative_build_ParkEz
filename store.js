import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./Slices/navSlices";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});