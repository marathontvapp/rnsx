import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { AccessibilityInfo, useColorScheme } from 'react-native';

export interface StyleContextValue {
  colorScheme: 'light' | 'dark';
  universalWeight: 'regular' | 'bold';
}

export const StyleContext = createContext<StyleContextValue>({
  colorScheme: 'light',
  universalWeight: 'regular',
});

export interface StyleProviderProps {}

export function StyleProvider({
  children,
}: PropsWithChildren<StyleProviderProps>) {
  // Check the current color scheme
  const colorScheme = useColorScheme();

  // Check if bold text is enabled
  const [isBoldTextEnabled, setIsBoldTextEnabled] = useState(false);
  useEffect(() => {
    (async () => {
      const enabled = await AccessibilityInfo.isBoldTextEnabled();
      setIsBoldTextEnabled(enabled);
    })();

    const subscription = AccessibilityInfo.addEventListener(
      'boldTextChanged',
      (enabled) => {
        setIsBoldTextEnabled(enabled);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <StyleContext.Provider
      value={{
        colorScheme: colorScheme ?? 'light',
        universalWeight: isBoldTextEnabled ? 'bold' : 'regular',
      }}
    >
      {children}
    </StyleContext.Provider>
  );
}
