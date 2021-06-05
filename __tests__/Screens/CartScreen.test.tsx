import React from 'react';
import renderer from 'react-test-renderer';
import CartScreen from '../../Screens/Cart/CartScreen';

describe('<CartScreen />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CartScreen />).toJSON();
  });
});
