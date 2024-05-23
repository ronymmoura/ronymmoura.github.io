"use client";

import { cn } from "@/util";
import { capitalizeFirstLetter } from "@/util/capitalize";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import * as SelectPrimitive from "@radix-ui/react-select"
import Image from "next/image";
import { redirect, usePathname, useRouter } from "next/navigation";

export function Select({ languages, lng }: any) {

  const pathname = usePathname();
  const router = useRouter();

  function changeLang(selectedLng: string) {
    console.log(selectedLng);
    const nextUrl = pathname.replace(`/${lng}`, `/${selectedLng}`);
    console.log(nextUrl);
    router.push(nextUrl);
  }

  return (
    <SelectPrimitive.Root defaultValue="en" value={lng} onValueChange={changeLang}>
      <SelectPrimitive.Trigger className={cn(
          "inline-flex space-x-1 items-center",
          "outline-none"
        )}>
        <SelectPrimitive.Icon>
          <Image src={require(`../../i18n/locales/${lng}/flag.svg`)} alt={lng} width={24} className="" />
        </SelectPrimitive.Icon>

        <SelectPrimitive.Value>
          {capitalizeFirstLetter(new Intl.DisplayNames([lng], { type: 'language' }).of(lng))}
        </SelectPrimitive.Value>

        <SelectPrimitive.Icon>
          <ChevronDownIcon className="size-6" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content position="popper" sideOffset={-30} className="bg-white text-slate-700 p-2 rounded drop-shadow-md">
          <SelectPrimitive.Viewport>
            {languages.map((l: any) => (
              <SelectPrimitive.Item key={l} value={l}className={cn(
                "flex space-x-1 items-center outline-none p-2 rounded",
                "hover:cursor-pointer hover:bg-slate-300"
              )}>
                <SelectPrimitive.SelectIcon>
                  <Image src={require(`../../i18n/locales/${l}/flag.svg`)} alt={l} width={24} className="" />
                </SelectPrimitive.SelectIcon>

                <SelectPrimitive.ItemText className="flex flex-row">
                  <div>{capitalizeFirstLetter(new Intl.DisplayNames([lng], { type: 'language' }).of(l))}</div>
                </SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}