import React, { ComponentType, forwardRef, useMemo } from 'react';
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

      const style = useMemo(() => {
        let s: P['style'] = [];
        if (Array.isArray(stylex)) {
          s = stylex.flatMap((object) => (!object ? [] : sx(object)));
        } else if (typeof stylex !== 'undefined') {
          s = sx(stylex);
        }
        return s;
      }, [sx, stylex]);

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
