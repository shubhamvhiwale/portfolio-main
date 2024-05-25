"use client";

import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  theme: {
    // bg: string;
    // color: string;
    isDark: boolean;
  };
}

const initialState: InitialStateProps = {
  theme: {
    //DARK : "#171100" , #141414
    isDark: false,
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme.isDark = action.payload.isDark;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
