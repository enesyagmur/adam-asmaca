import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";
import errorSlice from "./errorSlice";
import resultSlice from "./resultSlice";
import languageSlice from "./languageSlice";
import musicSlice from "./musicSlice";

export const store = configureStore({
  reducer: {
    wordStore: wordSlice,
    errorStore: errorSlice,
    resultStore: resultSlice,
    languageStore: languageSlice,
    musicSlice: musicSlice,
  },
});

export type stateRoot = ReturnType<typeof store.getState>;
