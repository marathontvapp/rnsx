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
        l?: EmValue<NumberValue>;
        b?: EmValue<NumberValue>;
        r?: EmValue<NumberValue>;
      };
  color:
    | ColorValue
    | {
        x?: ColorValue;
        y?: ColorValue;
        t?: ColorValue;
        l?: ColorValue;
        b?: ColorValue;
        r?: ColorValue;
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
    const l = value.width.l ?? value.width.x;
    const r = value.width.r ?? value.width.x;
    widthStyle = {
      ...(t ? { borderTopWidth: em(t, context, theme) } : {}),
      ...(b ? { borderBottomWidth: em(b, context, theme) } : {}),
      ...(l ? { borderLeftWidth: em(l, context, theme) } : {}),
      ...(r ? { borderRightWidth: em(r, context, theme) } : {}),
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
    const l = value.color.l ?? value.color.x;
    const r = value.color.r ?? value.color.x;
    colorStyle = {
      ...(t ? { borderTopColor: color(t, context, theme) } : {}),
      ...(b ? { borderBottomColor: color(b, context, theme) } : {}),
      ...(l ? { borderLeftColor: color(l, context, theme) } : {}),
      ...(r ? { borderRightColor: color(r, context, theme) } : {}),
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
