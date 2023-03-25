import { color, ColorValue } from '../functions/color';
import { em, EmValue } from '../functions/em';
import type { StyleContextValue } from '../style-context';
import type { NumberValue } from '../theme';
import type { ThemeContextValue } from '../theme-context';

export type BorderValue = {
  w:
    | EmValue<NumberValue>
    | {
        x?: EmValue<NumberValue>;
        y?: EmValue<NumberValue>;
        t?: EmValue<NumberValue>;
        s?: EmValue<NumberValue>;
        b?: EmValue<NumberValue>;
        e?: EmValue<NumberValue>;
      };
  color:
    | ColorValue
    | {
        x?: ColorValue;
        y?: ColorValue;
        t?: ColorValue;
        s?: ColorValue;
        b?: ColorValue;
        e?: ColorValue;
      };
  style?: 'dashed' | 'dotted' | 'solid';
};

export function border(
  value: BorderValue,
  context: StyleContextValue,
  theme: ThemeContextValue
) {
  let widthStyle;
  if (typeof value.w === 'object') {
    const t = value.w.t ?? value.w.y;
    const b = value.w.b ?? value.w.y;
    const s = value.w.s ?? value.w.x;
    const e = value.w.e ?? value.w.x;
    widthStyle = {
      ...(t !== undefined ? { borderTopWidth: em(t, context, theme) } : {}),
      ...(b !== undefined ? { borderBottomWidth: em(b, context, theme) } : {}),
      ...(s !== undefined ? { borderStartWidth: em(s, context, theme) } : {}),
      ...(e !== undefined ? { borderEndWidth: em(e, context, theme) } : {}),
    };
  } else {
    widthStyle = {
      borderWidth: em(value.w, context, theme),
    };
  }

  let colorStyle;
  if (typeof value.color === 'object' && !('color' in value.color)) {
    const t = value.color.t ?? value.color.y;
    const b = value.color.b ?? value.color.y;
    const s = value.color.s ?? value.color.x;
    const e = value.color.e ?? value.color.x;
    colorStyle = {
      ...(t !== undefined ? { borderTopColor: color(t, context, theme) } : {}),
      ...(b !== undefined
        ? { borderBottomColor: color(b, context, theme) }
        : {}),
      ...(s !== undefined
        ? { borderStartColor: color(s, context, theme) }
        : {}),
      ...(e !== undefined ? { borderEndColor: color(e, context, theme) } : {}),
    };
  } else {
    colorStyle = {
      borderColor: color(value.color, context, theme),
    };
  }

  return {
    ...widthStyle,
    ...colorStyle,
    borderStyle: value.style,
  };
}
