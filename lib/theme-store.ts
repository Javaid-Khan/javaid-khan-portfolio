"use client";

import { create } from "zustand";

type ThemeMode = "dark" | "light";

type ThemeState = {
  mode: ThemeMode;
  toggleMode: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "dark",
  toggleMode: () =>
    set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" }))
}));
