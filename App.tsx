import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductContainer from './Screens/Products/ProductContainer';
import { createBox, ThemeProvider } from '@shopify/restyle';
import theme, { Theme } from './util/theme';
import Header from './Shared/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ProductContainer />
    </ThemeProvider>
  );
}
