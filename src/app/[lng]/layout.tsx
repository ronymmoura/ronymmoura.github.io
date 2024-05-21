import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/util";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rony Moura",
  description: "Fullstack developer",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: any
}>) {
  return (
    <html lang={lng} dir={dir(lng)} className="dark">
      <body className={cn(inter.className, "bg-white dark:bg-slate-700 transition-colors")}>{children}</body>
    </html>
  );
}
