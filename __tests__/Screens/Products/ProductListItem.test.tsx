import React from 'react';
import { fireEvent, render } from '../../../jest/setup';

import fakeProducts from '../../mockData/products.json';
import ProductListItem from '../../../Screens/Products/ProductListItem';

const mockNavigation: any = {
  navigate: jest.fn(),
};

const firstProduct: any = fakeProducts[0];

//@todo determine a way to test ios versus android when conditions exist
test('<ProductListItem /> Android Config', () => {
  const component = render(
    <ProductListItem navigation={mockNavigation} item={firstProduct} />
  ).toJSON();

  const children = component?.children;
  expect(children!.length).toBe(1);
});

test('<ProductListItem /> iOS Config', () => {
  const component = render(
    <ProductListItem navigation={mockNavigation} item={firstProduct} />
  ).toJSON();

  const children = component?.children;
  expect(children!.length).toBe(1);
});

test('press product navigates to product detail', async () => {
  const { getByTestId } = render(
    <ProductListItem navigation={mockNavigation} item={firstProduct} />
  );

  fireEvent.press(getByTestId(`product-pressable-${firstProduct.id}`));

  expect(mockNavigation.navigate).toBeCalledWith('ProductDetail', {
    product: firstProduct,
  });
});
