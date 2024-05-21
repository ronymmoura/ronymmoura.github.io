import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "../i18n";
import { languages } from "../i18n/settings";
import Link from "next/link";
import { ChangeThemeButton } from "@/components/ChangeThemeButton";

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <main className="">
      <div>{t("title")}</div>
      
      <div className="text-accent font-black text-6xl">
        Rony Moura
      </div>

      <div>
        <Trans i18nKey="languageSwitcher" t={t}>
          Switch from <strong>{lng}</strong> to:{' '}
        </Trans>
        
        {languages.filter((l) => lng !== l).map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && (' or ')}
              <Link href={`/${l}`}>
                {l}
              </Link>
            </span>
          )
        })}
      </div>

      <ChangeThemeButton />
    </main>
  );
}
