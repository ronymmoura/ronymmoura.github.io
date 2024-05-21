import type { Metadata } from "next";
import "../globals.css";
import { languages } from "../i18n/settings";
import { Html } from "./html";

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
    <Html lng={lng}>{children}</Html>
  );
}
