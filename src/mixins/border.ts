import type { ViewStyle } from 'react-native';
import { color, ColorValue } from 'src/functions/color';
import { em, EmValue } from 'src/functions/em';
import type { StyleContextValue } from 'src/style-context';
import type { NumberValue } from 'src/theme';
import type { ThemeContextValue } from 'src/theme-context';

export type BorderValue = {
  width:
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
  if (typeof value.width === 'object') {
    const t = value.width.t ?? value.width.y;
    const b = value.width.b ?? value.width.y;
    const s = value.width.s ?? value.width.x;
    const e = value.width.e ?? value.width.x;
    widthStyle = {
      ...(t ? { borderTopWidth: em(t, context, theme) } : {}),
      ...(b ? { borderBottomWidth: em(b, context, theme) } : {}),
      ...(s ? { borderStartWidth: em(s, context, theme) } : {}),
      ...(e ? { borderEndWidth: em(e, context, theme) } : {}),
    };
  } else {
    widthStyle = {
      borderWidth: em(value.width, context, theme),
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
