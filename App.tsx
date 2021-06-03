import React from 'react';
import ProductContainer from './Screens/Products/ProductContainer';
import { ThemeProvider } from '@shopify/restyle';
import theme from './util/theme';
import Header from './Shared/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ProductContainer />
    </ThemeProvider>
  );
}
