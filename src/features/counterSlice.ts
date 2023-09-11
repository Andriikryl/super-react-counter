import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        incrementBy100: (state) => {
            state.count += 100;
        },
        incrementBy1000: (state) => {
            state.count += 1000;
        },
        incrementBy10000: (state) => {
            state.count += 10000;
        },
        incrementBy100000: (state) => {
            state.count += 100000;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement, reset, incrementByAmount,incrementBy100,incrementBy1000,incrementBy10000,incrementBy100000 } = counterSlice.actions;

export default counterSlice.reducer;