import { compact } from 'lodash';
import get from 'lodash/get';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import React from 'react';
import { StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { ColorPalette } from '../../styles';

interface Props extends TextProps {
  children: string | undefined | null;
  style?: StyleProp<TextStyle>;
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  red?: boolean;
  gray?: boolean;
  white?: boolean;
  bold?: boolean;
  medBold?: boolean;
  color?: string | Animated.Node<number>;
}

const styleSheetProps = [
  'xs',
  'sm',
  'lg',
  'xl',
  'gray',
  'white',
  'red',
  'bold',
  'medBold',
];

export const MasterText = ({ children, style, color, ...rest }: Props) => {
  // If value sent is an optional from an object and is not defined, render null
  // instead of an empty component
  if (!children) {
    return null;
  }

  const flaggedStyles = pick(rest, styleSheetProps);
  const dynamicStyleKeys = compact(Object.keys(flaggedStyles));
  const dynamicStyleSheets: TextStyle[] = compact(
    dynamicStyleKeys.map((key) => get(styles, key, null)),
  );
  const textStyles = [styles.base, { color }, ...dynamicStyleSheets, style];

  const textComponentProps = omit(rest, styleSheetProps);

  return (
    <Animated.Text style={textStyles} {...textComponentProps}>
      {children}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  base: {
    // fontFamily: PUT YOUR CUSTOM BASE FONT HERE,
    fontSize: 15,
    lineHeight: 20,
    color: ColorPalette.black,
  },
  xs: {
    fontSize: 11,
    lineHeight: 15,
  },
  sm: {
    fontSize: 13,
    lineHeight: 18,
  },
  lg: {
    fontSize: 17,
    lineHeight: 23,
  },
  xl: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
  },
  gray: {
    color: ColorPalette.gray,
  },
  red: {
    color: ColorPalette.red,
  },
  white: {
    color: ColorPalette.white,
  },
  bold: {
    fontWeight: '800',
  },
  medBold: {
    fontWeight: '500',
  },
});
