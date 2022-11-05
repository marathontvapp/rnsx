import { DynamicColor } from './dynamic-color';
import { DynamicFont } from './dynamic-font';
import { makeTheme } from './theme';

export const defaultTheme = makeTheme({
  em: 4,
  colors: {
    black: DynamicColor.create({ light: '#000000' }),
    white: DynamicColor.create({ light: '#ffffff' }),
  },
  fonts: {
    default: {
      // https://gist.github.com/parshap/cf9cf0388d55a044004e5e78fa317b39
      400: DynamicFont.create({ regular: 'System' }),
    },
  },
  spacing: {
    '2xs': '0.5em',
    'xs': '1em',
    'sm': '2em',
    'base': '3em',
    'lg': '5em',
    'xl': '7em',
    '2xl': '10em',
  },
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  leading: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
});

export type DefaultTheme = typeof defaultTheme;
