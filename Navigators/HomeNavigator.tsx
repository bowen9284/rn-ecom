import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import ProductScreen from '../Screens/Products/ProductScreen';

const Stack = createStackNavigator();

interface Props {}

const HomeNavigator = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
