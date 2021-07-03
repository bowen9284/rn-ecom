import React from 'react';
import { render } from '../../jest/setup';
import AdminScreen from '../../Screens/AdminScreen';

test('<AdminScreen />', () => {
  const tree = render(<AdminScreen />).toJSON();
  expect(tree.children.length).toBe(1);
});
