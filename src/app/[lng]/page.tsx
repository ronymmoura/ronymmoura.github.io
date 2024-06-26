import { useTranslation } from "@/i18n";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-full px-20 items-center justify-between text-slate-400">
      <div className="flex flex-col space-y-3 font-semibold">
        <div className="text-2xl">{t("greetings")}</div>
        
        <div className="font-black text-7xl dark:text-white">
          {t("namePrefix")} <span className="text-accent">{t("name")}</span>,
        </div>

        <div className="text-4xl font-semibold dark:text-white">
          {t("rolePrefix")} <span className="text-slate-400">{t("role")}</span>.
        </div>

        <div className="pt-10 flex">
          <Link href="/contactme" className="bg-accent space-x-3 text-white px-10 py-3 items-center flex text-2xl font-extralight hover:bg-accent/80 transition-all">
            <div>{t("contactme")}</div>
            <ChevronRightIcon className="size-6" />
          </Link>
        </div>
      </div>

      <div className="pr-14">
        <Image unoptimized src={"https://avatars.githubusercontent.com/u/13119631"} width={380} height={380} alt="Me" className="rounded-full border-[10px] border-slate-400" />
      </div>
    </div>
  );
}
