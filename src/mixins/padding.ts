import type { ViewStyle } from 'react-native';

import { em, EmValue } from '../functions/em';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type PaddingValue =
  | EmValue
  | {
      x?: EmValue;
      y?: EmValue;
      t?: EmValue;
      s?: EmValue;
      b?: EmValue;
      e?: EmValue;
    };

export function padding(
  value: PaddingValue,
  context: StyleContextValue,
  theme: ThemeContextValue
): ViewStyle {
  if (typeof value === 'object') {
    return {
      ...(value.x ? { paddingHorizontal: em(value.x, context, theme) } : {}),
      ...(value.y ? { paddingVertical: em(value.y, context, theme) } : {}),
      ...(value.t ? { paddingTop: em(value.t, context, theme) } : {}),
      ...(value.s ? { paddingStart: em(value.s, context, theme) } : {}),
      ...(value.b ? { paddingBottom: em(value.b, context, theme) } : {}),
      ...(value.e ? { paddingEnd: em(value.e, context, theme) } : {}),
    };
  } else {
    return {
      padding: em(value, context, theme),
    };
  }
}
