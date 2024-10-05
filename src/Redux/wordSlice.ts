import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "wordSlice",
  initialState: {
    splitedWord: [],
  },
  reducers: {
    updateWord: (state, action) => {
      state.splitedWord = action.payload;
    },
  },
});

export const { updateWord } = wordSlice.actions;

export default wordSlice.reducer;
