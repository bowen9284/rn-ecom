import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import UserScreen from '../Screens/User/UserScreen';
import AdminScreen from '../Screens/AdminScreen';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import { useAppSelector } from '../hooks/redux';
import StorybookScreen from '../Screens/StorybookScreen';

type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  User: undefined;
  Admin: undefined;
  Storybook: undefined;
};

// workaround for eslint rule react/no-unused-prop-types
interface TabBarIconProps {
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const MainNavigator = () => {
  const cart = useAppSelector((state) => state.cart);

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
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
          tabBarBadge: cart.cartSize || undefined,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />

      {
        // eslint-disable-next-line no-undef
        __DEV__ ? (
          <>
            <Tab.Screen
              name="Admin"
              component={AdminScreen}
              options={{
                tabBarIcon: ({ color, size }: TabBarIconProps) => (
                  <MaterialIcons
                    name="admin-panel-settings"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Storybook"
              component={StorybookScreen}
              options={{
                tabBarIcon: ({ color, size }: TabBarIconProps) => (
                  <MaterialIcons name="book" size={size} color={color} />
                ),
              }}
            />
          </>
        ) : null
      }
    </Tab.Navigator>
  );
};

export default MainNavigator;
