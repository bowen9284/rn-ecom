import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from './util/theme';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './Navigators/MainNavigator';
import { Provider } from 'react-redux';
import store from './Redux/store';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
