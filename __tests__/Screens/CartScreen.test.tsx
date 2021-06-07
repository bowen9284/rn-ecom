import React from 'react';
import { Provider } from 'react-redux';
import { render } from '../../jest/setup';
import store from '../../Redux/store';
import CartScreen from '../../Screens/Cart/CartScreen';

test('<CartScreen />', () => {
  const navigation = { navigate: jest.fn() };

  render(
    <Provider store={store}>
      <CartScreen navigation={navigation} />
    </Provider>
  );
});
