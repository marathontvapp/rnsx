import type { CustomTheme } from '../custom-theme';
import type { MergeTheme } from '../merge-theme';
import type { StyleContextValue } from '../style-context';
import type { NumberValueWithPercentage } from '../theme';
import type { ThemeContextValue } from '../theme-context';

export type EmValue =
  | NumberValueWithPercentage
  | keyof MergeTheme<CustomTheme>['spacing'];

export type EmReturnType<V extends EmValue> = V extends `${number}%`
  ? string
  : number;

export function em<V extends EmValue>(
  value: V,
  context: StyleContextValue,
  theme: ThemeContextValue
): EmReturnType<V> {
  if (typeof value === 'string') {
    if (value.endsWith('em')) {
      return (Number.parseInt(value, 10) * theme.em) as EmReturnType<V>;
    } else if (value.endsWith('%')) {
      return value as EmReturnType<V>;
    } else {
      return em(theme.spacing[value] as V, context, theme);
    }
  } else {
    return value as EmReturnType<V>;
  }
}
