import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum Tabs {
  TAB_ONE = 'TAB_ONE',
  TAB_TWO = 'TAB_TWO',
}

export enum Modals {
  A_MODAL = 'A_MODAL',
}

export enum Screens {
  // TabOne
  A_SCREEN = 'A_SCREEN',
  B_SCREEN = 'B_SCREEN',
  // TabTwo
  C_SCREEN = 'C_SCREEN',
  D_SCREEN = 'D_SCREEN',
}

export type ScreenParams = {
  [Modals.A_MODAL]: { modalNavProp: string };
  [Screens.A_SCREEN]: undefined;
  [Screens.B_SCREEN]: { navProp?: string } | undefined;
  [Screens.C_SCREEN]: undefined;
  [Screens.D_SCREEN]: { navProp?: string } | undefined;
};

export type NavigationProps<T extends keyof ScreenParams> = {
  navigation: StackNavigationProp<ScreenParams, T>;
  route: RouteProp<ScreenParams, T>;
};
