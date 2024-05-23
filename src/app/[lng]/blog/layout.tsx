import { useTranslation } from "@/app/i18n";
import { ReactNode } from "react";

export default async function BlogLayout({ children, params: {
  lng
} }: { children: ReactNode; params:any }) {
  const {t} = await useTranslation(lng, "blog");
  return (
    <div>
      {t("title")}
      {children}
    </div>
  )
}