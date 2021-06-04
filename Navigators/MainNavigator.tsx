import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from '../Screens/Products/ProductScreen';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import CartScreen from '../Screens/Cart/CartScreen';
import UserScreen from '../Screens/User/UserScreen';
import AdminScreen from '../Screens/Admin/AdminScreen';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

interface Props {}

const MainNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#5A31F4',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="admin-panel-settings"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
