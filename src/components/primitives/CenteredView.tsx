import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  children?: JSX.Element | JSX.Element[];
  style?: ViewStyle;
}

export const CenteredView = ({ children, style }: Props) => {
  const containerStyles = style ? [styles.container, style] : styles.container;

  return <View style={containerStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
