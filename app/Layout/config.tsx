import {AppColor} from '../Utils';
import innerStyles from './style';

type TabInteface = {
  focused: boolean;
  color: string;
  size: number;
};

type tabbarLabelInterface = {
  focused: boolean;
};

type tabProps = {
  activeColor: string;
  InActiveColor: string;
};

export interface tabLabels {
  focused?: boolean;
  activeColor?: string;
  InActiveColor?: string;
}

export const tabConfig = {
  tabBarStyle: innerStyles().tabBarStyle,
  tabBarActiveTintColor: AppColor.appWhite,
  tabBarInactiveTintColor: 'white',
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: true,
};

export type {TabInteface, tabbarLabelInterface, tabProps};
