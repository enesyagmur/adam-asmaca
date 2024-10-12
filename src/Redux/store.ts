import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";
import errorSlice from "./errorSlice";
import resultSlice from "./resultSlice";
import languageSlice from "./languageSlice";

export const store = configureStore({
  reducer: {
    wordStore: wordSlice,
    errorStore: errorSlice,
    resultStore: resultSlice,
    languageStore: languageSlice,
  },
});

export type stateRoot = ReturnType<typeof store.getState>;
