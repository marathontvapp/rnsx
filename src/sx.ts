import { useContext } from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { color, ColorValue } from './functions/color';
import { border, BorderValue } from './mixins/border';
import { font, FontFamily, FontValue } from './mixins/font';
import { frame, FrameValue } from './mixins/frame';
import { items, ItemsValue } from './mixins/items';
import { justify, JustifyValue } from './mixins/justify';
import { margin, MarginValue } from './mixins/margin';
import { padding, PaddingValue } from './mixins/padding';
import { position, PositionValue } from './mixins/position';
import { rounded, RoundedValue } from './mixins/rounded';
import { textAlign, TextAlignValue } from './mixins/textAlign';
import { tracking, TrackingValue } from './mixins/tracking';
import { StyleContext, StyleContextValue } from './style-context';
import { ThemeContext, ThemeContextValue } from './theme-context';

export interface Sx<F extends FontFamily> {
  bg?: ColorValue;
  border?: BorderValue;
  color?: ColorValue;
  font?: FontValue<F>;
  frame?: FrameValue;
  items?: ItemsValue;
  justify?: JustifyValue;
  margin?: MarginValue;
  padding?: PaddingValue;
  position?: PositionValue;
  rounded?: RoundedValue;
  textAlign?: TextAlignValue;
  tracking?: TrackingValue;
  underline?: boolean;
}

export function makeStyles(
  value: Sx<any>,
  context: StyleContextValue,
  theme: ThemeContextValue
) {
  return StyleSheet.flatten<ViewStyle | TextStyle>([
    value.bg !== undefined && {
      backgroundColor: color(value.bg, context, theme),
    },
    value.border !== undefined && border(value.border, context, theme),
    value.color !== undefined && {
      color: color(value.color, context, theme),
    },
    value.font !== undefined && font(value.font, context, theme),
    value.frame !== undefined && frame(value.frame, context, theme),
    value.items !== undefined && items(value.items, context, theme),
    value.justify !== undefined && justify(value.justify, context, theme),
    value.margin !== undefined && margin(value.margin, context, theme),
    value.padding !== undefined && padding(value.padding, context, theme),
    value.position !== undefined && position(value.position, context, theme),
    value.rounded !== undefined && rounded(value.rounded, context, theme),
    value.textAlign !== undefined && textAlign(value.textAlign, context, theme),
    value.tracking !== undefined && tracking(value.tracking, context, theme),
    value.underline !== undefined && {
      textDecorationLine: 'underline',
    },
  ]);
}

export function sx(context: StyleContextValue, theme: ThemeContextValue) {
  return function <F extends FontFamily>(value: Sx<F>) {
    return makeStyles(value, context, theme);
  };
}

export function useSx() {
  const styleContext = useContext(StyleContext);
  const themeContext = useContext(ThemeContext);

  return sx(styleContext, themeContext);
}
