import type { ViewStyle } from 'react-native';
import type { StyleContextValue } from 'src/style-context';
import type { ThemeContextValue } from 'src/theme-context';

export type WrapValue = 'wrap' | 'reverse' | 'none';

export function wrap(
  value: WrapValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  style: StyleContextValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: ThemeContextValue
): ViewStyle {
  if (value === 'wrap') {
    return { flexWrap: 'wrap' };
  } else if (value === 'reverse') {
    return { flexWrap: 'wrap-reverse' };
  } else {
    return { flexWrap: 'nowrap' };
  }
}
