# rnsx

`rnsx` is an accessible styling solution for React Native.

It takes heavy inspiration from Tailwind CSS's tokens to create simplified inline stylesheets.

## Installation

```sh
yarn add rnsx
# or
npm install rnsx
```

## Usage

### 1. Define a custom theme

Theme configuration is heavily inspired by [Tailwind CSS](https://tailwindcss.com/).

```tsx
import { DynamicColor, DynamicFont, makeTheme } from 'rnsx';

export const myTheme = makeTheme({
  // Define the base em value (default: 4)
  em: 5,
  // Use top-level attributes to override the default theme
  fonts: {
    'mori.400': DynamicFont.create({
      regular: 'PPMori-Regular',
      bold: 'PPMori-SemiBold',
    }),
    'fraktion.400': DynamicFont.create({
      regular: 'PPFraktion-SemiBold',
      bold: 'PPFraktion-Bold',
    }),
  },
  // Use nested `extend` attributes to append to the default theme
  extend: {
    spacing: {
      '8xl': '96em,
    },
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
```

Check out the [source code](https://github.com/joshpensky/rnsx/blob/main/src/default-theme.ts) to see theme defaults.

#### 1a. Update global types for Intellisense

This makes it possible for the `sx` function to automagically fill in your configuration via Intellisense.

```tsx
type MyTheme = typeof myTheme;

declare module 'rsnx' {
  interface CustomTheme extends MyTheme {}
}
```

### 2. Add the SxProvider to the root

It's required to install this at the root of your app so the `useSx` hook can have access to your theme and accessibility info.

```tsx
import { SxProvider } from 'rnsx';

export default function App() {
  return (
    <SxProvider theme={myTheme}>
      <RestOfApp />
    </SxProvider>
  );
}
```

### 3. Start using `sx` in your components!

```tsx
import { useSx } from 'rnsx';

export function ExampleComponent() {
  const sx = useSx();

  return (
    <View style={sx({ padding: { x: '3em', y: 2 } })}>
      <Text style={sx({ font: { family: 'mori', weight: 400, size: '3em' } })}>
        This is an example!
      </Text>
    </View>
  );
}
```

## Recommendations

### Use hex values for colors

It's recommended to use hex values for colors rather than their direct names. Why?

Everywhere a color can be used with `sx`, you can adjust the opacity.

```diff
- sx({ bg: 'background' })
+ sx({ bg: { color: 'background', opacity: 0.5 } })
```

This functionality _only_ works when your colors are defined as hex values.

## FAQ

## What do you mean by "accessible"?

`rnsx` takes three things (so far!) into consideration when it comes to accessibility:

- Light and dark mode: using the `DynamicColor` object, we can automatically switch between light and dark mode colors on both iOS and Android (as opposed to only iOS via the [DynamicColorIOS](https://reactnative.dev/docs/dynamiccolorios) API).

- Bold text: when a user enables the bold text setting, the `DynamicFont` object will automatically switch between defined font families to present a bolder options for better legibility.

- Internationalization: All directional tokens use `s` and `e` (standing for `start` and `end`) rather than left and right to support RTL languages.

More accessibility considerations will be added in the future.

This library is **best** paired with other a11y-forward React Native libraries, such as:

- [react-native-ama](https://www.npmjs.com/package/react-native-ama)
- [eslint-plugin-react-native-a11y](https://www.npmjs.com/package/eslint-plugin-react-native-a11y)

### What's the difference between `3` and `'3em'`?

In React Native, an individual numeric value is treated as a `pt` (instead of a `px` on the web). `rnsx` extends this by borrowing a new type of value from the web: the `em`.

The default theme defines an `em` as 4pt (though this can be overriden in your custom theme).

So, whereas a value of `3` would result in 3pt, a value of `3em` would result in 12pt (using a multiplier of 4).

The difference is entirely up to you! If you choose, you don't even have to use `em`s and just pass all your numeric values as just that — numbers.

### How do I apply multiple `sx` styles?

Since this library just uses the existing `style` prop, you can pass an array of `sx` function calls (with possibly falsy values!).

```tsx
<View
  style={[
    sx({ bg: 'background' }),
    error && sx({ bg: { color: 'failure', opacity: 0.5 }})
  ]}
>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
