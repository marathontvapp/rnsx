import type { ViewStyle } from 'react-native';
import type { CustomTheme } from 'rnsx';
import { em } from 'src/functions/em';
import type { MergeTheme } from 'src/merge-theme';
import type { StyleContextValue } from 'src/style-context';
import type { ThemeContextValue } from 'src/theme-context';

export type RoundedValue =
  | keyof MergeTheme<CustomTheme>['borderRadius']
  | {
      t?: keyof MergeTheme<CustomTheme>['borderRadius'];
      l?: keyof MergeTheme<CustomTheme>['borderRadius'];
      b?: keyof MergeTheme<CustomTheme>['borderRadius'];
      r?: keyof MergeTheme<CustomTheme>['borderRadius'];
      ts?: keyof MergeTheme<CustomTheme>['borderRadius'];
      te?: keyof MergeTheme<CustomTheme>['borderRadius'];
      bs?: keyof MergeTheme<CustomTheme>['borderRadius'];
      be?: keyof MergeTheme<CustomTheme>['borderRadius'];
    };

export function rounded(
  value: RoundedValue,
  context: StyleContextValue,
  theme: ThemeContextValue
): ViewStyle {
  if (typeof value === 'string') {
    return {
      borderRadius: em(theme.borderRadius[value], context, theme),
    };
  } else {
    const ts = value.ts ?? value.t;
    const te = value.te ?? value.t;
    const bs = value.bs ?? value.b;
    const be = value.be ?? value.b;
    return {
      ...(ts
        ? {
            borderTopStartRadius: em(theme.borderRadius[ts], context, theme),
          }
        : {}),
      ...(te
        ? {
            borderTopEndRadius: em(theme.borderRadius[te], context, theme),
          }
        : {}),
      ...(bs
        ? {
            borderBottomStartRadius: em(theme.borderRadius[bs], context, theme),
          }
        : {}),
      ...(be
        ? {
            borderBottomEndRadius: em(theme.borderRadius[be], context, theme),
          }
        : {}),
    };
  }
}
