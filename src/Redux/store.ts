import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";

export const store = configureStore({
  reducer: {
    wordStore: wordSlice,
  },
});

export type stateRoot = ReturnType<typeof store.getState>;
