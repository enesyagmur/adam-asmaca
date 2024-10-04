import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "wordSlice",
  initialState: {
    sipletedWord: [],
  },
  reducers: {
    updateWord: (state, action) => {
      state.sipletedWord = action.payload;
    },
  },
});

export const { updateWord } = wordSlice.actions;

export default wordSlice.reducer;
