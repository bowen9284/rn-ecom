import React from 'react';
import ProductScreen from './Screens/Products/ProductScreen';
import { ThemeProvider } from '@shopify/restyle';
import theme from './util/theme';
import Header from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './Navigators/MainNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Header />
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
