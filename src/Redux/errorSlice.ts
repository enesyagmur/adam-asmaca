import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    updateError: (state) => {
      state.count = state.count + 1;
    },
    resetError: (state) => {
      state.count = 0;
    },
  },
});

export const { updateError, resetError } = errorSlice.actions;

export default errorSlice.reducer;
