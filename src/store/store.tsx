import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import listReducer from "../features/listSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
