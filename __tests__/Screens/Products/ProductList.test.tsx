import React from 'react';
import { render, waitFor } from '../../../jest/setup';
import ProductList from '../../../Screens/Products/ProductList';

import fakeProducts from '../../mockData/products.json';

const navigationProp: any = jest.fn();
const fakeProductsProp: any = fakeProducts;

test('Product List shows Activity Indicator while fetching', () => {
  const { getByTestId } = render(
    <ProductList
      navigation={navigationProp}
      products={fakeProductsProp}
      fetchError={undefined}
      isFetching={true}
    />
  );

  expect(getByTestId('activity-indicator'));
});

test('Product List shows Activity Indicator while fetching', () => {
  const fetchError: any = jest.fn();

  const { getByText } = render(
    <ProductList
      navigation={navigationProp}
      products={fakeProductsProp}
      fetchError={fetchError}
      isFetching={false}
    />
  );

  expect(getByText('There was an error fetching products.'));
});

test('Product List shows Activity Indicator while fetching', () => {

  const { getByText } = render(
    <ProductList
      navigation={navigationProp}
      products={[]}
      fetchError={undefined}
      isFetching={false}
    />
  );

  expect(getByText('No Products Found.'));
});

test('<ProductList /> FlatList Config', async () => {
  const { getByTestId } = render(
    <ProductList
      navigation={navigationProp}
      products={fakeProductsProp}
      fetchError={undefined}
      isFetching={false}
    />
  );

  const element = getByTestId('product-list');
  await waitFor(() => expect(element).toBeTruthy());

  expect(element.props.horizontal).toBe(false);
  expect(element.props.data.length).toBe(6);
});
