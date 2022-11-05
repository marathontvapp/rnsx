import type { StyleContextValue } from './style-context';

export interface DynamicFontConfiguration {
  regular: string;
  bold?: string;
}

export const DynamicFont = {
  create(configuration: DynamicFontConfiguration) {
    return (context: StyleContextValue) => {
      return {
        regular: configuration.regular,
        bold: configuration.bold ?? configuration.regular,
      }[context.universalWeight];
    };
  },
};
