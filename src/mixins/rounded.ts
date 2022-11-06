import type { ViewStyle } from 'react-native';
import type { CustomTheme } from 'rnsx';
import { em } from 'src/functions/em';
import type { MergeTheme } from 'src/merge-theme';
import type { StyleContextValue } from 'src/style-context';
import type { ThemeContextValue } from 'src/theme-context';

export type RoundedValue =
  | keyof MergeTheme<CustomTheme>['borderRadius']
  | {
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
    return {
      ...(value.ts
        ? {
            borderTopStartRadius: em(
              theme.borderRadius[value.ts],
              context,
              theme
            ),
          }
        : {}),
      ...(value.te
        ? {
            borderTopEndRadius: em(
              theme.borderRadius[value.te],
              context,
              theme
            ),
          }
        : {}),
      ...(value.bs
        ? {
            borderBottomStartRadius: em(
              theme.borderRadius[value.bs],
              context,
              theme
            ),
          }
        : {}),
      ...(value.be
        ? {
            borderBottomEndRadius: em(
              theme.borderRadius[value.be],
              context,
              theme
            ),
          }
        : {}),
    };
  }
}
