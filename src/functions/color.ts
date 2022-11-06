import type { CustomTheme } from '../custom-theme';
import type { MergeTheme } from '../merge-theme';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type ColorValue =
  | keyof MergeTheme<CustomTheme>['colors']
  | {
      color: keyof MergeTheme<CustomTheme>['colors'];
      /** A value between 0 and 1. */
      opacity: number;
    };

export function color(
  value: ColorValue,
  context: StyleContextValue,
  theme: ThemeContextValue
): string {
  if (typeof value === 'string') {
    return theme.colors[value](context);
  } else {
    const clampedOpacity = Math.min(1, Math.max(0, value.opacity));
    const opacityHex = Math.floor(clampedOpacity * 255)
      .toString(16)
      .padStart(2, '0');
    return theme.colors[value.color](context) + opacityHex;
  }
}
