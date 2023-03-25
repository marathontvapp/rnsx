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
      s?: EmValue;
      b?: EmValue;
      e?: EmValue;
    };

export function position(
  value: PositionValue,
  context: StyleContextValue,
  theme: ThemeContextValue
) {
  if (typeof value === 'object') {
    const t = value.t ?? value.y ?? value.inset;
    const s = value.s ?? value.x ?? value.inset;
    const b = value.b ?? value.y ?? value.inset;
    const e = value.e ?? value.x ?? value.inset;
    return {
      position: 'absolute',
      ...(t !== undefined ? { top: em(t, context, theme) } : {}),
      ...(s !== undefined ? { start: em(s, context, theme) } : {}),
      ...(b !== undefined ? { bottom: em(b, context, theme) } : {}),
      ...(e !== undefined ? { end: em(e, context, theme) } : {}),
    };
  } else {
    return {
      position: 'absolute',
    };
  }
}
