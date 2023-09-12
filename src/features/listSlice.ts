
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberList: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.numberList.push(action.payload);
    },
    deleteNumber: (state, action) => {
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
