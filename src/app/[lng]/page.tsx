import { useTranslation } from "@/i18n";

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div>{t("title")}</div>
      
      <div className="font-black text-6xl text-white">
        I'm <span className="text-accent">Rony Moura</span>,
      </div>
    </>
  );
}
