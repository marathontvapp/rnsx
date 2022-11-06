import type { ViewStyle } from 'react-native';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type DirValue = 'row' | 'row-reverse' | 'col' | 'col-reverse';

export function dir(
  value: DirValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context: StyleContextValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: ThemeContextValue
): ViewStyle {
  if (value === 'col') {
    return { flexDirection: 'column' };
  } else if (value === 'col-reverse') {
    return { flexDirection: 'column-reverse' };
  } else {
    return { flexDirection: value };
  }
}
