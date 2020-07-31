import { compact, get } from 'lodash';
import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { SCREEN_WIDTH } from '../../styles/measurements';

interface Props extends ViewProps {
  children?: (ReactElement | null)[] | null;
  screenWidth?: boolean;
  between?: boolean;
  stretch?: boolean;
  flex?: boolean;
  height?: number;
  style?: ViewStyle | ViewStyle[];
}

const styleSheetProps = ['screenWidth', 'between', 'stretch', 'flex'];

export const Row = ({ children, height, style, ...rest }: Props) => {
  if (!children) {
    return null;
  }

  const dynamicStyles = styleSheetProps.reduce((a: ViewStyle[], c) => {
    const value = get(rest, c, null);
    if (value) {
      return compact([...a, get(styles, c, null)]);
    }
    return a;
  }, []);

  const heightStyle = height ? { height } : null;

  const rowStyles = compact([
    styles.container,
    ...dynamicStyles,
    heightStyle,
    style,
  ]);

  return (
    <View style={rowStyles} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenWidth: { width: SCREEN_WIDTH },
  between: { justifyContent: 'space-between' },
  stretch: { alignSelf: 'stretch' },
  flex: { flex: 1 },
});
