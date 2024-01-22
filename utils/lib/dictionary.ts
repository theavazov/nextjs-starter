import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  uz: () => import("@/translations/uz.json").then((module) => module.default),
  en: () => import("@/translations/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
