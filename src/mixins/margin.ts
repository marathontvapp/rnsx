import { em, EmValue } from '../functions/em';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type MarginValue =
  | EmValue
  | {
      x?: EmValue;
      y?: EmValue;
      t?: EmValue;
      s?: EmValue;
      b?: EmValue;
      e?: EmValue;
    };

export function margin(
  value: MarginValue,
  context: StyleContextValue,
  theme: ThemeContextValue
) {
  if (typeof value === 'object') {
    return {
      ...(value.x !== undefined
        ? { marginHorizontal: em(value.x, context, theme) }
        : {}),
      ...(value.y !== undefined
        ? { marginVertical: em(value.y, context, theme) }
        : {}),
      ...(value.t !== undefined
        ? { marginTop: em(value.t, context, theme) }
        : {}),
      ...(value.s !== undefined
        ? { marginStart: em(value.s, context, theme) }
        : {}),
      ...(value.b !== undefined
        ? { marginBottom: em(value.b, context, theme) }
        : {}),
      ...(value.e !== undefined
        ? { marginEnd: em(value.e, context, theme) }
        : {}),
    };
  } else {
    return {
      margin: em(value, context, theme),
    };
  }
}
