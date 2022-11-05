import type { TextStyle } from 'react-native';
import type { CustomTheme } from 'rnsx';
import { em } from 'src/functions/em';
import type { MergeTheme } from 'src/merge-theme';
import type { StyleContextValue } from 'src/style-context';
import type { ThemeContextValue } from 'src/theme-context';

export type TrackingValue = keyof MergeTheme<CustomTheme>['tracking'];

export function tracking(
  value: TrackingValue,
  context: StyleContextValue,
  theme: ThemeContextValue
): TextStyle {
  const emValue = theme.tracking[value];
  return {
    letterSpacing: em(emValue, context, theme),
  };
}
