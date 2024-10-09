import { createSlice } from "@reduxjs/toolkit";
import easyWords from "../data/easyWords.json";
import normalWords from "../data/normalWords.json";
import hardWords from "../data/hardWords.json";

export const wordSlice = createSlice({
  name: "wordSlice",
  initialState: {
    splitedWord: [] as string[],
  },
  reducers: {
    createNewRandomWord: (
      state,
      action: { payload: "easy" | "normal" | "hard" }
    ) => {
      let newWordSplited: string[] = [];
      const wordArrays = {
        easy: easyWords,
        normal: normalWords,
        hard: hardWords,
      };

      const selectedArray = wordArrays[action.payload];
      if (selectedArray) {
        const newWord: string =
          selectedArray[Math.floor(Math.random() * selectedArray.length)];
        newWordSplited = newWord.split("");
      }
      state.splitedWord = newWordSplited;
    },
  },
});

export const { createNewRandomWord } = wordSlice.actions;

export default wordSlice.reducer;
