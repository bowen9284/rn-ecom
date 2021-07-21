import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { Box } from '../Components/Restyle/Restyle';
import CartScreen from '../Screens/Cart/CartScreen';
import CheckoutNavigator from './CheckoutNavigator';

export type CartStackParamList = {
  Cart: undefined;
  CartCheckout: undefined;
};

const Stack = createStackNavigator<CartStackParamList>();

const LogoTitle = () => (
  <Box>
    <Image
      resizeMode="contain"
      style={{ width: 40 }}
      source={require('../assets/logo.jpeg')}
    />
  </Box>
);

const CartNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: () => <LogoTitle />,
      headerBackTitle: 'Back',
    }}
  >
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="CartCheckout" component={CheckoutNavigator} />
  </Stack.Navigator>
);

export default CartNavigator;
