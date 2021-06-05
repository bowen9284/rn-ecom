import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import Box from '../Components/restyle/Box';
import Checkout from '../Screens/Cart/Checkout';
import CartScreen from '../Screens/Cart/CartScreen';

export type CartStackParamList = {
  CartScreen: undefined;
  CartCheckout: undefined;
};

const Stack = createStackNavigator<CartStackParamList>();

const LogoTitle = () => {
  return (
    <Box>
      <Image
        resizeMode="contain"
        style={{ width: 40 }}
        source={require('../assets/logo.jpeg')}
      />
    </Box>
  );
};

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => <LogoTitle />,
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CartCheckout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
