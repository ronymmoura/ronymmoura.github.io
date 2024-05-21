import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/util";
import { languages } from "./i18n/settings";
import "./globals.css";

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
    <html lang={lng} className="dark">
      <body className={cn(inter.className, "bg-white dark:bg-slate-700 transition-colors")}>{children}</body>
    </html>
  );
}
