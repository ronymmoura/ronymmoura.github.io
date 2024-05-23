"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function Logo() {
  const {theme} = useTheme();

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <Image unoptimized src={require(isDark ? "../../assets/logo-negative.svg" : "../../assets/logo.svg")} alt="Logo" />
  )
}