import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "musicSlice",
  initialState: {
    open: true,
  },
  reducers: {
    updateMusicOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { updateMusicOpen } = musicSlice.actions;

export default musicSlice.reducer;
