import React, { createContext, PropsWithChildren } from 'react';

export interface StyleContextValue {
  isRTL: boolean;
  colorScheme: 'light' | 'dark';
  universalWeight: 'regular' | 'bold';
}

export const StyleContext = createContext<StyleContextValue>({
  isRTL: false,
  colorScheme: 'light',
  universalWeight: 'regular',
});

export interface StyleProviderProps extends Partial<StyleContextValue> {}

export function StyleProvider({
  children,
  isRTL,
  colorScheme,
  universalWeight,
}: PropsWithChildren<StyleProviderProps>) {
  return (
    <StyleContext.Provider
      value={{
        isRTL: isRTL ?? false,
        colorScheme: colorScheme ?? 'light',
        universalWeight: universalWeight ?? 'regular',
      }}
    >
      {children}
    </StyleContext.Provider>
  );
}
