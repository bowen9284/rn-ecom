import React from 'react';
import { render, waitFor } from '../../../jest/setup';
import ProductList from '../../../Screens/Products/ProductList';

import fakeProducts from '../../../assets/mockData/products.json';

const navigationProp: any = jest.fn();
const fakeProductsProp: any = fakeProducts;

test('<ProductList />', () => {
  const tree = render(
    <ProductList navigation={navigationProp} items={fakeProductsProp} />
  ).toJSON();

  expect(tree!.children!.length).toBe(1);
});

test('<ProductList /> FlatList Config', async () => {
  const { getByTestId } = render(
    <ProductList navigation={navigationProp} items={fakeProductsProp} />
  );

  const element = getByTestId('product-list');
  await waitFor(() => expect(element).toBeTruthy());

  expect(element.props.horizontal).toBe(false);
  expect(element.props.data.length).toBe(5);
});
