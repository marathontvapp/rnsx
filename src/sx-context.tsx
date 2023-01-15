import React, { PropsWithChildren } from 'react';

import { StyleContextValue, StyleProvider } from './style-context';
import type { BaseTheme } from './theme';
import { ThemeProvider } from './theme-context';

export interface SxProviderProps {
  theme: BaseTheme;
  dangerouslySetColorScheme?: StyleContextValue['colorScheme'];
}

export function SxProvider({
  children,
  theme,
  dangerouslySetColorScheme,
}: PropsWithChildren<SxProviderProps>) {
  return (
    <StyleProvider dangerouslySetColorScheme={dangerouslySetColorScheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleProvider>
  );
}
