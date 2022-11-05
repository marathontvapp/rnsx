import React, { PropsWithChildren } from 'react';

import { StyleProvider } from './style-context';
import type { BaseTheme } from './theme';
import { ThemeProvider } from './theme-context';

export interface SxProviderProps {
  theme: BaseTheme;
}

export function SxProvider({
  children,
  theme,
}: PropsWithChildren<SxProviderProps>) {
  return (
    <StyleProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleProvider>
  );
}
