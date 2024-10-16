import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "resultSlice",
  initialState: {
    result: null,
  },
  reducers: {
    updateResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { updateResult } = resultSlice.actions;
export default resultSlice.reducer;
