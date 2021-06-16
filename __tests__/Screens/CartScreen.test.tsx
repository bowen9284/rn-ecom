import React from 'react';
import { Provider } from 'react-redux';
import { render } from '../../jest/setup';
import store from '../../Redux/store';
import CartScreen from '../../Screens/Cart/CartScreen';

const navigation: any = { navigate: jest.fn() };
const route: any = jest.fn();

test('<CartScreen />', () => {
  render(<CartScreen navigation={navigation} route={route} />);
});
