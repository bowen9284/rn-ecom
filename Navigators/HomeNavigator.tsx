import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { Box } from '../Shared/Restyle/Restyle';
import ProductDetail from '../Screens/Products/ProductDetail';
import ProductsScreen from '../Screens/Products/ProductsScreen';

export type HomeStackParamList = {
  ProductsScreen: undefined;
  ProductDetail: { product: Product };
};

const Stack = createStackNavigator<HomeStackParamList>();

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

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => <LogoTitle />,
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
