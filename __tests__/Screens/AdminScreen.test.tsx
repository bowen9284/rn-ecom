import React from 'react';
import AdminScreen from '../../Screens/Admin/AdminScreen';
import renderer from 'react-test-renderer';

describe('<AdminScreen />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<AdminScreen />).toJSON();
      expect(tree.children.length).toBe(1);
    });
  });