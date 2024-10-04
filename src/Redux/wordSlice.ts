import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "randomWord",
  initialState: {
    word: "",
  },
  reducers: {
    updateWord: (state, action) => {
      state.word = action.payload;
    },
  },
});

export const { updateWord } = wordSlice.actions;

export default wordSlice.reducer;
