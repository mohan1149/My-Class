/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import SplashScreen from 'react-native-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
enableScreens();
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

//import screens
import loginScreen from './src/components/login/loginScreen';
import menuScreen from './src/components/dashboard/menuScreen';

//bottom bar navigation
function BottomTabs({ navigation }) {
  return (
    <>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          style: { backgroundColor: '#fff', paddingBottom: 15 },
          activeTintColor: '#3d5ea1',
          inactiveTintColor: '#636b6f',
          indicatorContainerStyle: {
            marginBottom: 20,
          },
          indicatorStyle: {
            backgroundColor: "#fff",
          }
        }}
      >
        <Tab.Screen name="Home" component={menuScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="apps" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
//side bar for drawer navigation
function Sidebar() {
  return (
    <Drawer.Navigator
    //drawerContent={(props) => <SidebarComponent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={BottomTabs} />
    </Drawer.Navigator>
  );
}
export default class App extends Component {
  render() {
    SplashScreen.hide();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={loginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Sidebar} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}