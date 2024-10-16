import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "languageSlice",
  initialState: {
    language: "en",
  },
  reducers: {
    updateLanguage: (state) => {
      if (state.language === "en") {
        state.language = "tr";
      } else {
        state.language = "en";
      }
    },
  },
});

export const { updateLanguage } = languageSlice.actions;

export default languageSlice.reducer;
