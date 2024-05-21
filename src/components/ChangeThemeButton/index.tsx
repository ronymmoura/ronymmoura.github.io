"use client";

import { useTheme } from "@/stores/useTheme";

export function ChangeThemeButton() {

  const { isDark, toggleIsDark } = useTheme();

  function changeTheme() {
    toggleIsDark();
  }

  return (
    <button onClick={changeTheme} className="bg-accent text-white font-bold px-4 py-2">
      Change theme {isDark.toString()}
    </button>
  )
}