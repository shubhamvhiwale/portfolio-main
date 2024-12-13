"use client";

import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  isDark: boolean;
  theme: {
    text: string;
    bg: string;
  };
}

const initialState: InitialStateProps = {
  isDark: false,
  theme: {
    text: "black",
    bg: "#d5bbff",
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
