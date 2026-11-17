import React, { createContext, useContext, useEffect, useState } from "react";

export const THEMES = [
  { id: "theme-light-blue", label: "Light Blue", icon: "Sparkles", description: "Default signature sky blue" },
  { id: "theme-light", label: "Light", icon: "Sun", description: "Clean minimalist light" },
  { id: "theme-dark", label: "Dark", icon: "Moon", description: "Deep charcoal dark" },
];

const STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME = "theme-light-blue";

const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  cycleTheme: () => {},
  availableThemes: THEMES,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return DEFAULT_THEME;
  });

  const setTheme = (newTheme) => {
    if (THEMES.some((t) => t.id === newTheme)) {
      setThemeState(newTheme);
      try {
        localStorage.setItem(STORAGE_KEY, newTheme);
      } catch (e) {
        console.warn("Could not save theme to localStorage:", e);
      }
    }
  };

  const cycleTheme = () => {
    const currentIndex = THEMES.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex].id);
  };

  useEffect(() => {
    const root = document.documentElement;
    // Remove previous theme classes
    THEMES.forEach((t) => root.classList.remove(t.id));
    root.classList.remove("dark");

    // Add active theme class
    root.classList.add(theme);
    if (theme === "theme-dark") {
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, availableThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
