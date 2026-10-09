"use client";

import Lenis from "lenis";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ThemeMode = "dark" | "light";

type ThemeModeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

function applyTheme(mode: ThemeMode) {
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.style.colorScheme = mode;
  localStorage.setItem("theme", mode);
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used inside Providers");
  }
  return context;
}

export function Providers({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const reduced = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextMode: ThemeMode = stored === "light" ? "light" : stored === "dark" ? "dark" : prefersDark ? "dark" : "dark";
    applyTheme(nextMode);
    setMode(nextMode);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      prevent: (node) => node instanceof HTMLElement && Boolean(node.closest("textarea, input, select, [data-native-scroll]")),
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reduced]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#2563EB" },
          secondary: { main: "#7C3AED" },
          background: {
            default: mode === "dark" ? "#050816" : "#f8fafc",
            paper: mode === "dark" ? "#0f172a" : "#ffffff",
          },
          text: {
            primary: mode === "dark" ? "#F8FAFC" : "#0F172A",
            secondary: mode === "dark" ? "#94A3B8" : "#475569",
          },
        },
        shape: { borderRadius: 12 },
      }),
    [mode],
  );

  const contextValue = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      toggleTheme: () => {
        setMode((current) => {
          const next = current === "dark" ? "light" : "dark";
          applyTheme(next);
          return next;
        });
      },
    }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
