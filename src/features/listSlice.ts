import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListState {
  numberList: number[];
}

const initialState: ListState = {
  numberList: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<number>) => {
      state.numberList.push(action.payload);
    },
    deleteNumber: (state, action: PayloadAction<number>) => {
      state.numberList = state.numberList.filter(
        (_, index) => index !== action.payload
      );
    },
    deleteAllNumbers: (state) => {
      state.numberList = [];
    },
    sortNumberList: (state) => {
      state.numberList.sort((a, b) => a - b);
    },
    randomSortNumberList: (state) => {
      const shuffledList = [...state.numberList];
      for (let i = shuffledList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
      }
      state.numberList = shuffledList;
    },
    bubbleSortNumberList: (state) => {
      const { numberList } = state;
      const len = numberList.length;
      let swapped;
      
      do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
          if (numberList[i] > numberList[i + 1]) {
            [numberList[i], numberList[i + 1]] = [numberList[i + 1], numberList[i]];
            swapped = true;
          }
        }
      } while (swapped);
    },
  },
});

export const { addNumber, deleteNumber, deleteAllNumbers, sortNumberList, randomSortNumberList, bubbleSortNumberList } = listSlice.actions;

export default listSlice.reducer;
