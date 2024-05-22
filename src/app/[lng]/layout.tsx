import type { Metadata } from "next";
import "../globals.css";
import { languages } from "../i18n/settings";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { cn } from "@/util";
import Theme from "../theme-toggle";

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
    <html lang={lng} dir={dir(lng)}>
      <body className={cn(inter.className, "bg-white dark:bg-slate-700 transition-colors")}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
