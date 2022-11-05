import React, { ComponentType, forwardRef } from 'react';
import type { Falsy, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Sx, useSx } from './sx';

interface WithStyledProps {
  style?:
    | StyleProp<ViewStyle | TextStyle>
    | ((...state: any[]) => StyleProp<ViewStyle | TextStyle>);
}

export interface StyledProps {
  sx?: Sx | (Sx | Falsy)[];
}

export function styled<P extends WithStyledProps>(
  WrappedComponent: ComponentType<P>
) {
  const ComponentWithStyle = forwardRef(
    ({ sx: stylex, ...props }: P & StyledProps, ref) => {
      const sx = useSx();

      let style: P['style'] = [];
      if (Array.isArray(stylex)) {
        style = stylex.flatMap((s) => (!s ? [] : sx(s)));
      } else if (typeof stylex !== 'undefined') {
        style = sx(stylex);
      }

      return (
        <WrappedComponent
          ref={ref}
          {...(props as P)}
          style={[style, props.style]}
        />
      );
    }
  );

  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ComponentWithStyle.displayName = `styled(${displayName})`;

  return ComponentWithStyle;
}
