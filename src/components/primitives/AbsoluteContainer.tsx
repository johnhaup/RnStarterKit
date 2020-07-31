import { get, isEmpty } from 'lodash';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  children?: JSX.Element | JSX.Element[];
  top?: boolean | number;
  bottom?: boolean | number;
  left?: boolean | number;
  right?: boolean | number;
  center?: boolean;
  style?: ViewStyle | ViewStyle[];
  pointerEvents?: 'auto' | 'box-none' | 'none' | 'box-only';
}

const positionProps = ['top', 'bottom', 'left', 'right'];

export const AbsoluteContainer = ({
  children,
  pointerEvents = 'box-none',
  center,
  style = {},
  ...rest
}: Props) => {
  const positionProperties = positionProps.reduce((a, c) => {
    const value = get(rest, c, undefined);
    if (value) {
      return {
        ...a,
        [c]: typeof value === 'number' ? value : 0,
      };
    }
    return a;
  }, {});
  const centerStyles = center ? styles.center : null;

  const containerStyle = isEmpty(positionProperties)
    ? [StyleSheet.absoluteFill, centerStyles, style]
    : [styles.base, positionProperties, centerStyles, style];
  return (
    <View style={containerStyle} pointerEvents={pointerEvents}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: { position: 'absolute' },
  t: {
    top: 0,
  },
  b: {
    bottom: 0,
  },
  l: {
    left: 0,
  },
  r: {
    right: 0,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {},
});
