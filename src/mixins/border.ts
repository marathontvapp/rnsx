import type { ViewStyle } from 'react-native';
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
): ViewStyle {
  let widthStyle: ViewStyle;
  if (typeof value.w === 'object') {
    const t = value.w.t ?? value.w.y;
    const b = value.w.b ?? value.w.y;
    const s = value.w.s ?? value.w.x;
    const e = value.w.e ?? value.w.x;
    widthStyle = {
      ...(t ? { borderTopWidth: em(t, context, theme) } : {}),
      ...(b ? { borderBottomWidth: em(b, context, theme) } : {}),
      ...(s ? { borderStartWidth: em(s, context, theme) } : {}),
      ...(e ? { borderEndWidth: em(e, context, theme) } : {}),
    };
  } else {
    widthStyle = {
      borderWidth: em(value.w, context, theme),
    };
  }

  let colorStyle: ViewStyle;
  if (typeof value.color === 'object' && !('color' in value.color)) {
    const t = value.color.t ?? value.color.y;
    const b = value.color.b ?? value.color.y;
    const s = value.color.s ?? value.color.x;
    const e = value.color.e ?? value.color.x;
    colorStyle = {
      ...(t ? { borderTopColor: color(t, context, theme) } : {}),
      ...(b ? { borderBottomColor: color(b, context, theme) } : {}),
      ...(s ? { borderStartColor: color(s, context, theme) } : {}),
      ...(e ? { borderEndColor: color(e, context, theme) } : {}),
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
