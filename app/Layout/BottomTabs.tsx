import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabInteface, tabConfig, tabLabels} from './config';

import innerStyles from './style';

import SVG from '../Assets/SVG';

import {MainRoutes} from '../Routes/Routes';
import Home from '../Screens/Home/Home';
import Quotes from '../Screens/Quotes/Quotes';
import Proposal from '../Screens/Proposal/Proposal';
import Settings from '../Screens/Settings/Settings';
import {AppFonts} from '../Utils';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={tabConfig}>
      <Tab.Screen
        name={MainRoutes.HOME}
        options={{
          tabBarLabel: (props: tabLabels) => (
            <Text style={innerStyles(props).tabText}>{AppFonts.home}</Text>
          ),
          tabBarIcon: (props: TabInteface) => (
            <View style={innerStyles(props).iconContainer}>
              {props.focused ? <SVG.HomeFilled /> : <SVG.HomeUnfilled />}
            </View>
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name={MainRoutes.QUOTES}
        options={{
          tabBarLabel: (props: tabLabels) => (
            <Text style={innerStyles(props).tabText}>{AppFonts.quotes}</Text>
          ),
          tabBarIcon: (props: TabInteface) => (
            <View style={innerStyles(props).iconContainer}>
              {props.focused ? <SVG.QuoteFilled /> : <SVG.QuoteUnfilled />}
            </View>
          ),
        }}
        component={Quotes}
      />
      <Tab.Screen
        name={MainRoutes.PROPOSALS}
        options={{
          tabBarLabel: (props: tabLabels) => (
            <Text style={innerStyles(props).tabText}>{AppFonts.proposals}</Text>
          ),
          tabBarIcon: (props: TabInteface) => (
            <View style={innerStyles(props).iconContainer}>
              {props.focused ? (
                <SVG.ProposalFilled />
              ) : (
                <SVG.ProposalsUnfilled />
              )}
            </View>
          ),
        }}
        component={Proposal}
      />
      <Tab.Screen
        name={MainRoutes.SETTINGS}
        options={{
          tabBarLabel: (props: tabLabels) => (
            <Text style={innerStyles(props).tabText}>{AppFonts.settings}</Text>
          ),
          tabBarIcon: (props: TabInteface) => (
            <View style={innerStyles(props).iconContainer}>
              {props.focused ? (
                <SVG.SettingsFilled />
              ) : (
                <SVG.SettingsUnfilled />
              )}
            </View>
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
