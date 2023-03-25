import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type JustifyValue =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export function justify(
  value: JustifyValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context: StyleContextValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: ThemeContextValue
) {
  if (value === 'start') {
    return { justifyContent: 'flex-start' };
  } else if (value === 'end') {
    return { justifyContent: 'flex-end' };
  } else if (value === 'between') {
    return { justifyContent: 'space-between' };
  } else if (value === 'around') {
    return { justifyContent: 'space-around' };
  } else if (value === 'evenly') {
    return { justifyContent: 'space-evenly' };
  } else {
    return { justifyContent: value };
  }
}
