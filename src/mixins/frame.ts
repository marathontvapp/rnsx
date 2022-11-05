import type { ViewStyle } from 'react-native';

import { em, EmValue } from '../functions/em';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type FrameValue =
  | EmValue
  | {
      w?: EmValue;
      minW?: EmValue;
      maxW?: EmValue;
      h?: EmValue;
      minH?: EmValue;
      maxH?: EmValue;
    };

export function frame(
  value: FrameValue,
  context: StyleContextValue,
  theme: ThemeContextValue
): ViewStyle {
  if (typeof value === 'object') {
    return {
      ...(value.w ? { width: em(value.w, context, theme) } : {}),
      ...(value.h ? { height: em(value.h, context, theme) } : {}),
      ...(value.minW ? { minWidth: em(value.minW, context, theme) } : {}),
      ...(value.minH ? { minHeight: em(value.minH, context, theme) } : {}),
      ...(value.maxW ? { maxWidth: em(value.maxW, context, theme) } : {}),
      ...(value.maxH ? { maxHeight: em(value.maxH, context, theme) } : {}),
    };
  } else {
    return {
      width: em(value, context, theme),
      height: em(value, context, theme),
    };
  }
}
