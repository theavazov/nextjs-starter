import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// <== For async functions ==>

// export const asyncFunc = createAsyncThunk(
//   "asyncFunc",
//   async (amount: number) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return amount;
//   }
// );

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
