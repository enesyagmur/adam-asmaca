import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: {
    wordStore: wordSlice,
    errorStore: errorSlice,
  },
});

export type stateRoot = ReturnType<typeof store.getState>;
