"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ChangeThemeButton() {
  const { theme, setTheme } = useTheme();

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  function changeTheme() {
    if (theme === "dark") {
      return setTheme('light')
    }
    return setTheme('dark')
  }

  return (
    <button onClick={changeTheme} className="text-white font-bold px-4 py-2">
      {isDark ? <SunIcon className="size-6 text-white" /> : <MoonIcon className="size-6 text-slate-400" />}
    </button>
  )
}