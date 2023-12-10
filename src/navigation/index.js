import React from 'react';
import AnalyticsPage from '../views/AnalyticsPage';
import HomePage from '../views/HomePage';
import SettingPage from '../views/SettingPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardPage from '../views/DashboardPage';
import { Dark } from '../../assets/colors';
import FavouritePage from '../views/FavouritePage';

const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');
const Tab = createBottomTabNavigator();

const Icon = ({ isFocus, icon }) => (
  <Ionicons
    name={isFocus ? icon : `${icon}-outline`}
    size={24}
    color={isFocus ? Dark.accent : `${Dark.accent}40`}
  />
);

const tabBarOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: { borderTopWidth: 0 },
  tabBarActiveBackgroundColor: Dark.background,
  tabBarInactiveBackgroundColor: Dark.background,
  tabBarActiveTintColor: Dark.accent,
  tabBarInactiveTintColor: Dark.accent * 0.4,
};

const screens = [
  {
    name: 'home',
    component: DashboardPage,
    options: {
      ...tabBarOptions,
    },
  },
  {
    name: 'favourite',
    component: FavouritePage,
    options: {
      ...tabBarOptions,
    },
  },
  {
    name: 'analytics',
    component: AnalyticsPage,
    options: {
      ...tabBarOptions,
    },
  },
  {
    name: 'settings',
    component: SettingPage,
    options: {
      ...tabBarOptions,
    },
  },
];

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = route.name;
          if (route.name == 'favourite') {
            iconName = 'star';
          }
          return <Icon icon={iconName} isFocus={focused} />;
        },
      })}>
      {screens.map(screen => (
        <Tab.Screen key={screen.name} {...screen} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
