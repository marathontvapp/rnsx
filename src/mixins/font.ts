import type { CustomTheme } from '../custom-theme';
import { em } from '../functions/em';
import type { MergeTheme } from '../merge-theme';
import type { StyleContextValue } from '../style-context';
import type { NumberValue } from '../theme';
import type { ThemeContextValue } from '../theme-context';

export type FontFamily = keyof MergeTheme<CustomTheme>['fonts'];

export type FontValue = {
  family: FontFamily;
  size: NumberValue;
  leading?: keyof MergeTheme<CustomTheme>['leading'];
};

export function font(
  value: FontValue,
  context: StyleContextValue,
  theme: ThemeContextValue
) {
  const family = theme.fonts[value.family];
  const fontSize = em(value.size, context, theme);
  const leading = value.leading ? theme.leading[value.leading] : 1;

  return {
    ...(family
      ? {
          fontFamily: family(context),
          fontWeight: 'normal' as const,
        }
      : {}),
    fontSize,
    lineHeight: leading * fontSize,
  };
}
