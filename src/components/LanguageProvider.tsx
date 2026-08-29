"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

type Lang = "zh" | "en";

const LANG_KEY = "lang";

const listeners = new Set<() => void>();

function readLang(): Lang {
  if (typeof window === "undefined") return "zh";
  return localStorage.getItem(LANG_KEY) === "en" ? "en" : "zh";
}

function writeLang(lang: Lang) {
  localStorage.setItem(LANG_KEY, lang);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "zh",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "zh" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const toggle = useCallback(() => {
    writeLang(readLang() === "zh" ? "en" : "zh");
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
