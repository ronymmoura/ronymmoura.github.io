import { create } from "zustand";

interface StoreProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const useTheme = create<StoreProps>((set) => ({
  isDark: true,
  setIsDark: (isDark: boolean) => {
    !isDark
     ? document.querySelector("html")?.removeAttribute("class")
     : document.querySelector("html")?.setAttribute("class", "dark");

    set(() => ({ isDark }));
  },
}));