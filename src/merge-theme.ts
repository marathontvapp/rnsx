import { defaultTheme, DefaultTheme } from './default-theme';
import type { BaseTheme } from './theme';
import type { ThemeContextValue } from './theme-context';

export type AccessOrDefault<Theme, Key, Default> = Key extends keyof Theme
  ? Theme[Key]
  : Default;

export type MergeTheme<Theme extends BaseTheme> = {
  em: AccessOrDefault<Theme, 'em', DefaultTheme['em']>;
  colors: AccessOrDefault<
    Theme,
    'colors',
    DefaultTheme['colors'] & NonNullable<Theme['extend']>['colors']
  >;
  fonts: Theme['fonts'];
  spacing: AccessOrDefault<
    Theme,
    'spacing',
    DefaultTheme['spacing'] & NonNullable<Theme['extend']>['spacing']
  >;
  tracking: AccessOrDefault<
    Theme,
    'tracking',
    DefaultTheme['tracking'] & NonNullable<Theme['extend']>['tracking']
  >;
  leading: AccessOrDefault<
    Theme,
    'leading',
    DefaultTheme['leading'] & NonNullable<Theme['extend']>['leading']
  >;
  borderRadius: AccessOrDefault<
    Theme,
    'borderRadius',
    DefaultTheme['borderRadius'] & NonNullable<Theme['extend']>['borderRadius']
  >;
};

export function mergeTheme<Theme extends BaseTheme>(theme: Theme) {
  return {
    em: theme.em ?? defaultTheme.em,
    colors: theme.colors ?? {
      ...defaultTheme.colors,
      ...(theme.extend?.colors ?? {}),
    },
    fonts: theme.fonts,
    spacing: theme.spacing ?? {
      ...defaultTheme.spacing,
      ...(theme.extend?.spacing ?? {}),
    },
    tracking: theme.tracking ?? {
      ...defaultTheme.tracking,
      ...(theme.extend?.tracking ?? {}),
    },
    leading: theme.leading ?? {
      ...defaultTheme.leading,
      ...(theme.extend?.leading ?? {}),
    },
    borderRadius: theme.borderRadius ?? {
      ...defaultTheme.borderRadius,
      ...(theme.extend?.borderRadius ?? {}),
    },
  } as ThemeContextValue;
}
