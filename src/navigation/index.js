import React from 'react';
import AnalyticsPage from '../views/AnalyticsPage';
import HomePage from '../views/HomePage';
import SettingPage from '../views/SettingPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DashboardPage from '../views/DashboardPage';
import Colors from '../../assets/colors';

const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');
const Tab = createBottomTabNavigator();

const IonIcon = focus => (
  <Ionicons
    name="analytics"
    size={20}
    color={focus ? Colors.dark.primary : `${Colors.dark.primary}40`}
  />
);

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: Colors.dark.background,
        tabBarInactiveBackgroundColor: Colors.dark.background,
        tabBarActiveTintColor: Colors.dark.background,
        tabBarInactiveTintColor: Colors.dark.background,
        tabBarStyle: { borderTopWidth: 0 },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dashboard"
              size={20}
              color={
                focused ? Colors.dark.primary : `${Colors.dark.primary}40`
              }
              active
            />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <IonIcon focus={focused} />,
        }}
      />
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen
        name="Setting"
        component={SettingPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={20}
              color={
                focused ? Colors.dark.primary : `${Colors.dark.primary}40`
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
