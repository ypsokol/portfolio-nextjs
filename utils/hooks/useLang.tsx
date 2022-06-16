import { useRouter } from "next/router";

export type Languages = "en" | "ru" | "uk";
export const defaultLang: Languages = "en";

export const useLang = (): Languages => {
  const { locale } = useRouter();
  return (locale as Languages) || defaultLang;
};
