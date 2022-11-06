import type { TextStyle } from 'react-native';
import type { CustomTheme } from 'rnsx';
import { em } from '../functions/em';
import type { MergeTheme } from '../merge-theme';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

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
