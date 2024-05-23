import { useTranslation } from "@/i18n";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-full px-20 items-center justify-between text-slate-400">
      <div className="flex flex-col space-y-3">
        <div className="text-2xl">{t("greetings")}</div>
        
        <div className="font-black text-7xl dark:text-white">
          {t("namePrefix")} <span className="text-accent">{t("name")}</span>,
        </div>

        <div className="text-4xl font-semibold dark:text-white">
          {t("rolePrefix")} <span className="text-slate-400">{t("role")}</span>.
        </div>

        <div className="pt-10">
          <Link href="/contactme" className="bg-accent text-white h-14 w-fit px-10 flex text-2xl items-center justify-center hover:bg-accent/80 transition-all">
            {t("contactme")}
          </Link>
        </div>
      </div>

      <div>
        <Image unoptimized src={"https://avatars.githubusercontent.com/u/13119631"} width={380} height={380} alt="Me" className="rounded-full border-[10px] border-slate-400" />
      </div>
    </div>
  );
}
