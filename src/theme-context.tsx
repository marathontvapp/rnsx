import React, { createContext, PropsWithChildren, useMemo } from 'react';

import { defaultTheme } from './default-theme';
import { mergeTheme } from './merge-theme';
import type { BaseTheme } from './theme';

export type ThemeContextValue = Required<Omit<BaseTheme, 'extend'>>;

export const ThemeContext = createContext<ThemeContextValue>(defaultTheme);

interface ThemeProviderProps {
  theme: BaseTheme;
}

export function ThemeProvider({
  children,
  theme,
}: PropsWithChildren<ThemeProviderProps>) {
  const mergedTheme = useMemo(() => mergeTheme(theme), [theme]);
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
