"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: "dark" | "light" | "system";
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 