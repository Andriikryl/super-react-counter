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
  },
});

export const { addNumber, deleteNumber, deleteAllNumbers } = listSlice.actions;

export default listSlice.reducer;
