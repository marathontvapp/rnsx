import type { StyleContextValue } from './style-context';

export interface DynamicColorConfiguration {
  light: string;
  dark?: string;
}

export const DynamicColor = {
  create(configuration: DynamicColorConfiguration) {
    return (context: StyleContextValue) => {
      return {
        light: configuration.light,
        dark: configuration.dark ?? configuration.light,
      }[context.colorScheme];
    };
  },
};
