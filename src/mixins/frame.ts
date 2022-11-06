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
      ...(value.w !== undefined ? { width: em(value.w, context, theme) } : {}),
      ...(value.h !== undefined ? { height: em(value.h, context, theme) } : {}),
      ...(value.minW !== undefined
        ? { minWidth: em(value.minW, context, theme) }
        : {}),
      ...(value.minH !== undefined
        ? { minHeight: em(value.minH, context, theme) }
        : {}),
      ...(value.maxW !== undefined
        ? { maxWidth: em(value.maxW, context, theme) }
        : {}),
      ...(value.maxH !== undefined
        ? { maxHeight: em(value.maxH, context, theme) }
        : {}),
    };
  } else {
    return {
      width: em(value, context, theme),
      height: em(value, context, theme),
    };
  }
}
