import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  User: string;
}

const initialState: CounterState = {
  User: "",
};

export const EcommerceSlice = createSlice({
  name: "Ecommerce",
  initialState,
  reducers: {},
});

export const {} = EcommerceSlice.actions;

export default EcommerceSlice.reducer;
