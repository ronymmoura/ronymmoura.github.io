"use client";

import { useTheme } from "next-themes";

export function ChangeThemeButton() {

  const { theme, setTheme } = useTheme();

  function changeTheme() {
    if (theme === 'dark') {
      return setTheme('light')
    }
    return setTheme('dark')
  }

  return (
    <button onClick={changeTheme} className="bg-accent text-white font-bold px-4 py-2">
      Change theme
    </button>
  )
}