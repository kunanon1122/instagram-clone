import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface menuSliceState {
  isExpand: boolean;
}

const initialState: menuSliceState = {
  isExpand: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsExpand(state, action: PayloadAction<boolean>) {
      state.isExpand = action.payload;
    },
  },
});

export const { setIsExpand } = menuSlice.actions;

export default menuSlice.reducer;
