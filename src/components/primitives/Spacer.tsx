import { compact } from 'lodash';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import {
  ANDROID_MENU_BAR_HEIGHT,
  TAB_BAR_HEIGHT,
} from '../../styles/measurements';

interface Props {
  flex?: boolean | number;
  height?: number;
  h?: number;
  width?: number;
  w?: number;
  safeTop?: boolean;
  safeBottom?: boolean;
  androidMenu?: boolean;
  tabBar?: boolean;
  style?: ViewStyle;
}

export const Spacer = ({
  flex: injectedFlex,
  height = 0,
  h = 0,
  width = 0,
  w = 0,
  safeTop,
  safeBottom,
  androidMenu,
  tabBar,
  style,
}: Props) => {
  const { top, bottom } = useSafeArea();

  const flex = injectedFlex
    ? typeof injectedFlex === 'number'
      ? injectedFlex
      : 1
    : null;
  const propsWidth = w + width;
  const propsHeight = h + height;
  const safeHeight = (safeTop ? top : 0) + (safeBottom ? bottom : 0);
  const tabHeight = tabBar ? TAB_BAR_HEIGHT : 0;
  const totalHeight =
    propsHeight +
    safeHeight +
    tabHeight +
    (androidMenu ? ANDROID_MENU_BAR_HEIGHT : 0);
  const baseStyles = compact([
    { height: totalHeight, width: propsWidth },
    style,
  ]);
  const spacerStyles = flex ? [...baseStyles, { flex }] : baseStyles;

  return <View style={spacerStyles} pointerEvents={'box-none'} />;
};
