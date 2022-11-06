import { I18nManager, TextStyle } from 'react-native';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

// https://reactnative.dev/blog/2016/08/19/right-to-left-support-for-react-native-apps#limitations-and-future-plan

export type TextAlignValue = 'start' | 'end' | 'center' | 'justify';

export function textAlign(
  value: TextAlignValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context: StyleContextValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: ThemeContextValue
): TextStyle {
  if (value === 'start') {
    return { textAlign: I18nManager.isRTL ? 'right' : 'left' };
  } else if (value === 'end') {
    return { textAlign: I18nManager.isRTL ? 'left' : 'right' };
  } else {
    return { textAlign: value };
  }
}
