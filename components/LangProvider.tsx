"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { strings, type Lang, type Strings } from "@/lib/strings";

const LangContext = createContext<{
  lang: Lang;
  t: Strings;
  setLang: (l: Lang) => void;
}>({ lang: "en", t: strings.en, setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Persist across pages/visits
  useEffect(() => {
    const saved = window.localStorage.getItem("bytelab-lang");
    if (saved === "km" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("bytelab-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, t: strings[lang] as Strings, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
