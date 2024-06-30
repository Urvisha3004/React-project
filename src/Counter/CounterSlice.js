import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  carts: []
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    cart: (state, action) => {
      state.carts.push(action.payload);
    }
  },
});

// Action creators are generated for each case reducer function
export const { cart } = counterSlice.actions;

export default counterSlice.reducer;
