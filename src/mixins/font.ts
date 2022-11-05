import type { TextStyle } from 'react-native';

import type { CustomTheme } from '../custom-theme';
import type { DynamicFont } from '../dynamic-font';
import { em } from '../functions/em';
import type { MergeTheme } from '../merge-theme';
import type { StyleContextValue } from '../style-context';
import type { NumberValue } from '../theme';
import type { ThemeContextValue } from '../theme-context';

export type FontFamily = keyof MergeTheme<CustomTheme>['fonts'] extends never
  ? undefined
  : keyof MergeTheme<CustomTheme>['fonts'];

export type FontValue<F extends FontFamily> = {
  family: F;
  weight?: keyof MergeTheme<CustomTheme>['fonts'][F];
  size: NumberValue;
  leading?: keyof MergeTheme<CustomTheme>['leading'];
};

export function font<F extends FontFamily>(
  value: FontValue<F>,
  context: StyleContextValue,
  theme: ThemeContextValue
): TextStyle {
  let fontFn: ReturnType<typeof DynamicFont['create']> | undefined;
  if (value.family) {
    const family = theme.fonts[value.family];
    if (value.weight) {
      fontFn = (family as any)[value.weight];
    } else if (Object.keys(family).length) {
      const firstWeightKey = Object.keys(family)[0];
      fontFn = family[firstWeightKey];
    }
  }

  const fontSize = em(value.size, context, theme);
  const leading = value.leading ? theme.leading[value.leading] : 1;

  return {
    ...(fontFn
      ? {
          fontFamily: fontFn(context),
          fontWeight: 'normal' as const,
        }
      : {}),
    fontSize,
    lineHeight: leading * fontSize,
  };
}
