import type { ViewStyle } from 'react-native';

import { em, EmValue } from '../functions/em';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type PositionValue =
  | 'absolute'
  | {
      inset?: EmValue;
      x?: EmValue;
      y?: EmValue;
      t?: EmValue;
      l?: EmValue;
      b?: EmValue;
      r?: EmValue;
    };

export function position(
  value: PositionValue,
  context: StyleContextValue,
  theme: ThemeContextValue
): ViewStyle {
  if (typeof value === 'object') {
    const t = value.t ?? value.y ?? value.inset;
    const l = value.l ?? value.x ?? value.inset;
    const b = value.b ?? value.y ?? value.inset;
    const r = value.r ?? value.x ?? value.inset;
    return {
      position: 'absolute',
      ...(t ? { top: em(t, context, theme) } : {}),
      ...(l ? { left: em(l, context, theme) } : {}),
      ...(b ? { bottom: em(b, context, theme) } : {}),
      ...(r ? { right: em(r, context, theme) } : {}),
    };
  } else {
    return {
      position: 'absolute',
    };
  }
}
