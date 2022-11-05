import { useContext } from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { color, ColorValue } from './functions/color';
import { font, FontFamily, FontValue } from './mixins/font';
import { frame, FrameValue } from './mixins/frame';
import { margin, MarginValue } from './mixins/margin';
import { padding, PaddingValue } from './mixins/padding';
import { position, PositionValue } from './mixins/position';
import { tracking, TrackingValue } from './mixins/tracking';
import { StyleContext, StyleContextValue } from './style-context';
import { ThemeContext, ThemeContextValue } from './theme-context';

export interface Sx<F extends FontFamily> {
  bg?: ColorValue;
  color?: ColorValue;
  font?: FontValue<F>;
  frame?: FrameValue;
  margin?: MarginValue;
  padding?: PaddingValue;
  position?: PositionValue;
  tracking?: TrackingValue;
}

export function makeStyles(
  value: Sx<any>,
  context: StyleContextValue,
  theme: ThemeContextValue
): ViewStyle | TextStyle {
  return StyleSheet.flatten([
    value.bg !== undefined && {
      backgroundColor: color(value.bg, context, theme),
    },
    value.color !== undefined && {
      color: color(value.color, context, theme),
    },
    value.font !== undefined && font(value.font, context, theme),
    value.frame !== undefined && frame(value.frame, context, theme),
    value.margin !== undefined && margin(value.margin, context, theme),
    value.padding !== undefined && padding(value.padding, context, theme),
    value.position !== undefined && position(value.position, context, theme),
    value.tracking !== undefined && tracking(value.tracking, context, theme),
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
