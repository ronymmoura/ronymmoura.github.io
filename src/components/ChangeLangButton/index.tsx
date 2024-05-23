import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/i18n/settings";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import { cn } from "@/util";
import { Select } from "../Select";

export async function ChangeLangButton({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);

  return (
    <div>
      <div className="flex">
        <Select languages={languages} lng={lng} />
      </div>
    </div>
  )
}