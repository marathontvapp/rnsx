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
      l?: EmValue;
      b?: EmValue;
      r?: EmValue;
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
      ...(value.l ? { paddingLeft: em(value.l, context, theme) } : {}),
      ...(value.b ? { paddingBottom: em(value.b, context, theme) } : {}),
      ...(value.r ? { paddingRight: em(value.r, context, theme) } : {}),
    };
  } else {
    return {
      padding: em(value, context, theme),
    };
  }
}
