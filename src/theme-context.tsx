import React, { createContext, PropsWithChildren } from 'react';

import { defaultTheme } from './default-theme';
import { mergeTheme } from './merge-theme';
import type { BaseTheme } from './theme';

export type ThemeContextValue = Required<Omit<BaseTheme, 'extend'>>;

export const ThemeContext = createContext<ThemeContextValue>(
  defaultTheme as unknown as ThemeContextValue
);

interface ThemeProviderProps {
  theme: BaseTheme;
}

export function ThemeProvider({
  children,
  theme,
}: PropsWithChildren<ThemeProviderProps>) {
  const mergedTheme = mergeTheme(theme);
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
