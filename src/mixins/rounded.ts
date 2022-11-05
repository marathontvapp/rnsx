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
      tl?: keyof MergeTheme<CustomTheme>['borderRadius'];
      tr?: keyof MergeTheme<CustomTheme>['borderRadius'];
      bl?: keyof MergeTheme<CustomTheme>['borderRadius'];
      br?: keyof MergeTheme<CustomTheme>['borderRadius'];
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
    const tl = value.t ?? value.tl;
    const tr = value.t ?? value.tr;
    const bl = value.b ?? value.bl;
    const br = value.b ?? value.br;
    return {
      ...(tl
        ? {
            borderTopLeftRadius: em(theme.borderRadius[tl], context, theme),
          }
        : {}),
      ...(tr
        ? {
            borderTopRightRadius: em(theme.borderRadius[tr], context, theme),
          }
        : {}),
      ...(bl
        ? {
            borderBottomLeftRadius: em(theme.borderRadius[bl], context, theme),
          }
        : {}),
      ...(br
        ? {
            borderBottomRightRadius: em(theme.borderRadius[br], context, theme),
          }
        : {}),
    };
  }
}
