import type { Metadata } from "next";
import { languages } from "@/i18n/settings";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { cn } from "@/util";
import Theme from "../theme-toggle";
import { ChangeThemeButton } from "@/components/ChangeThemeButton";
import { Logo } from "@/components/Logo";
import { ChangeLangButton } from "@/components/ChangeLangButton";
import githubLogo from "../../assets/github.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rony Moura",
  description: "Fullstack developer",
};

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }))
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
    <html lang={lng} dir={dir(lng)}  suppressHydrationWarning={true}>
      <body className={cn(inter.className, "bg-white text-slate-400 transition-colors", " dark:bg-slate-700 dark:text-white")} suppressHydrationWarning={true}>
        <Theme>
          <div className="h-screen grid grid-rows-[auto,1fr,auto]">
            <header className={cn("flex justify-between p-10", )}>
              <Logo />

              <nav>
                <ul className="flex items-center space-x-5 font-semibold">
                  <li>
                    <ChangeLangButton lng={lng} />
                  </li>
                  <li>
                    <ChangeThemeButton />
                  </li>
                  <li>Home</li>
                  <li>About</li>
                  <li>Apps</li>
                  <li>Blog</li>
                  <li className="text-accent">Contact Me</li>
                </ul>
              </nav>
            </header>
            
            <main className="p-10">
              {children}
            </main>

            <footer className="relative flex p-10 justify-end items-center space-x-3">
              <div>Made with 💕</div>
              <div className="text-3xl">⸱</div>
              <div className="flex items-center">Code at <a href="https://github.com/ronymmoura/ronymmoura.github.io" className="text-black ml-2" target="_blank"><Image src={githubLogo} width={20} alt="GitHub" /></a></div>
            </footer>
          </div>
        </Theme>
      </body>
    </html>
  );
}
