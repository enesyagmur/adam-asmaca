import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";
import errorSlice from "./errorSlice";
import resultSlice from "./resultSlice";

export const store = configureStore({
  reducer: {
    wordStore: wordSlice,
    errorStore: errorSlice,
    resultStore: resultSlice,
  },
});

export type stateRoot = ReturnType<typeof store.getState>;
