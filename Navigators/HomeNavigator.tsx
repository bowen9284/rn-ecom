import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { Box } from '../Components/Restyle/Restyle';
import ProductDetail from '../Components/Products/ProductDetail';
import ProductsScreen from '../Screens/ProductsScreen';
import Product from '../Models/Product';

export type HomeStackParamList = {
  ProductsScreen: undefined;
  ProductDetail: { product: Product };
};

const Stack = createStackNavigator<HomeStackParamList>();

const LogoTitle = () => (
  <Box>
    <Image
      resizeMode="contain"
      style={{ width: 40 }}
      source={require('../assets/logo.jpeg')}
    />
  </Box>
);

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: () => <LogoTitle />,
      headerBackTitle: 'Back',
    }}
  >
    <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
  </Stack.Navigator>
);

export default HomeNavigator;
