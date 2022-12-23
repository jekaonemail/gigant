import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menuWindow",
  initialState: {
    value: false,
  },

  reducers: {
    showMenuWindow: (state) => {
      state.value = true;
    },

    hideMenuWindow: (state) => {
      state.value = false;
    },
  },
});

export const { showMenuWindow, hideMenuWindow } = menuSlice.actions;
export default menuSlice.reducer;
