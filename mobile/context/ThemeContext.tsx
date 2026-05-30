import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Appearance,
  ColorSchemeName,
} from "react-native";

import {
  getTheme,
  saveTheme,
} from "../services/storage/themeStorage";

import { Colors } from "../constants/colors";

type ThemeMode =
  | "light"
  | "dark";

interface ThemeContextValue {
  theme: ThemeMode;

  colors:
    typeof Colors.light;

  toggleTheme: () => void;
}

const ThemeContext =
  createContext<
    ThemeContextValue | undefined
  >(undefined);

export function ThemeProvider({
  children,
}: React.PropsWithChildren) {

  const systemTheme =
    Appearance.getColorScheme();

  const [theme, setTheme] =
    useState<ThemeMode>(
      (systemTheme ??
        "light") as ThemeMode
    );

  useEffect(() => {
    loadTheme();
  }, []);

  async function loadTheme() {
    const saved =
      await getTheme();

    if (
      saved === "light" ||
      saved === "dark"
    ) {
      setTheme(saved);
    }
  }

  async function toggleTheme() {

    const next =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(next);

    await saveTheme(next);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors:
          Colors[theme],
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {

  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "ThemeProvider missing"
    );
  }

  return context;
}