import type { ViewStyle } from 'react-native';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type ItemsValue = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export function items(
  value: ItemsValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context: StyleContextValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: ThemeContextValue
): ViewStyle {
  if (value === 'start') {
    return { alignItems: 'flex-start' };
  } else if (value === 'end') {
    return { alignItems: 'flex-end' };
  } else {
    return { alignItems: value };
  }
}
