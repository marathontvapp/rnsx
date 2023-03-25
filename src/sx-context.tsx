import React, { PropsWithChildren } from 'react';

import { StyleProvider } from './style-context';
import type { BaseTheme } from './theme';
import { ThemeProvider } from './theme-context';

export interface SxProviderProps {
  theme: BaseTheme;
  isRTL?: boolean;
  colorScheme?: 'light' | 'dark';
  universalWeight?: 'regular' | 'bold';
}

export function SxProvider({
  children,
  theme,
  isRTL,
  colorScheme,
  universalWeight,
}: PropsWithChildren<SxProviderProps>) {
  return (
    <StyleProvider
      isRTL={isRTL}
      colorScheme={colorScheme}
      universalWeight={universalWeight}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleProvider>
  );
}
