import { useContext } from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { color, ColorValue } from './functions/color';
import { border, BorderValue } from './mixins/border';
import { dir, DirValue } from './mixins/dir';
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
import { wrap, WrapValue } from './mixins/wrap';
import { StyleContext, StyleContextValue } from './style-context';
import { ThemeContext, ThemeContextValue } from './theme-context';

export interface Sx<F extends FontFamily> {
  aspect?: number;
  bg?: ColorValue;
  border?: BorderValue;
  color?: ColorValue;
  dir?: DirValue;
  flex?: number;
  font?: FontValue<F>;
  frame?: FrameValue;
  grow?: boolean;
  hidden?: boolean;
  items?: ItemsValue;
  justify?: JustifyValue;
  margin?: MarginValue;
  opacity?: number;
  overflow?: 'hidden' | 'scroll' | 'visible';
  padding?: PaddingValue;
  position?: PositionValue;
  rounded?: RoundedValue;
  shrink?: boolean;
  textAlign?: TextAlignValue;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  tracking?: TrackingValue;
  underline?: boolean;
  wrap?: WrapValue;
  z?: number;
}

export function makeStyles(
  value: Sx<any>,
  context: StyleContextValue,
  theme: ThemeContextValue
) {
  return StyleSheet.flatten<ViewStyle | TextStyle>([
    value.aspect !== undefined && {
      aspectRatio: value.aspect,
    },
    value.bg !== undefined && {
      backgroundColor: color(value.bg, context, theme),
    },
    value.border !== undefined && border(value.border, context, theme),
    value.color !== undefined && {
      color: color(value.color, context, theme),
    },
    value.dir !== undefined && dir(value.dir, context, theme),
    value.flex !== undefined && {
      flex: value.flex,
    },
    value.font !== undefined && font(value.font, context, theme),
    value.frame !== undefined && frame(value.frame, context, theme),
    value.grow !== undefined && {
      flexGrow: value.grow ? 1 : 0,
    },
    value.hidden !== undefined && {
      display: 'none',
    },
    value.items !== undefined && items(value.items, context, theme),
    value.justify !== undefined && justify(value.justify, context, theme),
    value.margin !== undefined && margin(value.margin, context, theme),
    value.opacity !== undefined && {
      opacity: value.opacity,
    },
    value.overflow !== undefined && {
      overflow: value.overflow,
    },
    value.padding !== undefined && padding(value.padding, context, theme),
    value.position !== undefined && position(value.position, context, theme),
    value.rounded !== undefined && rounded(value.rounded, context, theme),
    value.shrink !== undefined && {
      flexShrink: value.shrink ? 1 : 0,
    },
    value.textAlign !== undefined && textAlign(value.textAlign, context, theme),
    value.textTransform !== undefined && {
      textTransform: value.textTransform,
    },
    value.tracking !== undefined && tracking(value.tracking, context, theme),
    value.underline !== undefined && {
      textDecorationLine: value.underline ? 'underline' : 'none',
    },
    value.wrap !== undefined && wrap(value.wrap, context, theme),
    value.z !== undefined && {
      zIndex: value.z,
      elevation: value.z,
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
