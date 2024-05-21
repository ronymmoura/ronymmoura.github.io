"use client";

import useStore from "@/stores/useStore";
import { useTheme } from "@/stores/useTheme";
import { cn } from "@/util";
import { dir } from "i18next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Html({children, lng}: {
  children: React.ReactNode;
  lng: string
}) {
  const isDark = useStore(useTheme, (store) => store.isDark);

  return (
    <html lang={lng} dir={dir(lng)} className={cn(isDark ? "dark" : "")}>
      <body className={cn(inter.className, "bg-white dark:bg-slate-700 transition-colors")}>{children}</body>
    </html>
  )
}