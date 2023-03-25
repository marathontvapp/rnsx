import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type WrapValue = 'wrap' | 'reverse' | 'none';

export function wrap(
  value: WrapValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  style: StyleContextValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: ThemeContextValue
) {
  if (value === 'wrap') {
    return { flexWrap: 'wrap' };
  } else if (value === 'reverse') {
    return { flexWrap: 'wrap-reverse' };
  } else {
    return { flexWrap: 'nowrap' };
  }
}
