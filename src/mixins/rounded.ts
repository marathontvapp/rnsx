import type { CustomTheme } from 'rnsx';
import { em } from '../functions/em';
import type { MergeTheme } from '../merge-theme';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

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
) {
  if (typeof value === 'string') {
    return {
      borderRadius: em(theme.borderRadius[value], context, theme),
    };
  } else {
    return {
      ...(value.ts !== undefined
        ? {
            borderTopStartRadius: em(
              theme.borderRadius[value.ts],
              context,
              theme
            ),
          }
        : {}),
      ...(value.te !== undefined
        ? {
            borderTopEndRadius: em(
              theme.borderRadius[value.te],
              context,
              theme
            ),
          }
        : {}),
      ...(value.bs !== undefined
        ? {
            borderBottomStartRadius: em(
              theme.borderRadius[value.bs],
              context,
              theme
            ),
          }
        : {}),
      ...(value.be !== undefined
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
