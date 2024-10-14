import { createSlice } from "@reduxjs/toolkit";
import easyWords from "../data/words/enWords/easyWords.json";
import mediumWords from "../data/words/enWords/mediumWords.json";
import hardWords from "../data/words/enWords/hardWords.json";
import kolayKelimeler from "../data/words/trWords/kolayKelimeler.json";
import ortaKelimeler from "../data/words/trWords/ortaKelimeler.json";
import zorKelimeler from "../data/words/trWords/zorKelimeler.json";

export const wordSlice = createSlice({
  name: "wordSlice",
  initialState: {
    splitedWord: [] as string[],
  },
  reducers: {
    createNewRandomWord: (state, action) => {
      type WordDifficulty =
        | "easy"
        | "medium"
        | "hard"
        | "kolay"
        | "orta"
        | "zor";
      let newWordSplited: string[] = [];
      const wordArrays = {
        easy: easyWords,
        medium: mediumWords,
        hard: hardWords,
        kolay: kolayKelimeler,
        orta: ortaKelimeler,
        zor: zorKelimeler,
      };

      if (action.payload in wordArrays) {
        const selectedArray = wordArrays[action.payload as WordDifficulty];
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
