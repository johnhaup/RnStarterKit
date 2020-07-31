import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const TAB_BAR_HEIGHT = 49; // Default tab bar height in react-navigation
export const ANDROID_MENU_BAR_HEIGHT =
  Dimensions.get('screen').height - Dimensions.get('window').height;
