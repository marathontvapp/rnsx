import * as React from 'react';

import { View, Text } from 'react-native';
import { DynamicColor, DynamicFont, makeTheme, SxProvider, useSx } from 'rnsx';

export const theme = makeTheme({
  em: 5,
  fonts: {
    mori: DynamicFont.create({
      regular: 'PPMori-Regular',
      bold: 'PPMori-SemiBold',
    }),
    fraktion: DynamicFont.create({
      regular: 'PPFraktion-SemiBold',
      bold: 'PPFraktion-Bold',
    }),
  },
  extend: {
    tracking: {
      loose: 1,
    },
    colors: {
      success: DynamicColor.create({
        light: '#95E99E',
        dark: '#366B4B',
      }),
      failure: DynamicColor.create({
        light: '#FF9781',
        dark: '#983B35',
      }),
    },
  },
});

export type MyTheme = typeof theme;

declare module 'rnsx' {
  interface CustomTheme extends MyTheme {}
}

interface ExampleComponentProps {
  variant: 'success' | 'failure';
}
function ExampleComponent({ variant }: ExampleComponentProps) {
  const sx = useSx();

  return (
    <View
      style={[
        sx({ padding: { x: 3, y: 2 } }),
        variant === 'success' && sx({ bg: 'success' }),
        variant === 'failure' && sx({ bg: 'failure' }),
      ]}
    >
      <Text
        style={sx({
          font: { family: 'mori', size: '3em' },
          color: 'black',
        })}
      >
        This was an absolute{' '}
        <Text
          style={sx({
            font: { family: 'fraktion', size: '3em' },
            tracking: 'loose',
            color: 'white',
          })}
        >
          {variant}
        </Text>
        !
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <SxProvider theme={theme}>
      <ExampleComponent variant="success" />
    </SxProvider>
  );
}
