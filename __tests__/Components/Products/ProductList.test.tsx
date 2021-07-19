import React from 'react';
import { render, waitFor } from '../../../jest/setup';
import ProductList from '../../../Components/Products/ProductList';

import fakeProducts from '../../../util/mockData/products.json';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));

const fakeProductsProp: any = fakeProducts;

test('Product List shows skeleton while fetching', () => {
  const { getByTestId } = render(
    <ProductList
      products={fakeProductsProp}
      fetchError={undefined}
      isLoading={true}
    />
  );

  expect(getByTestId('product-loading-skeleton'));
});

test('Product List shows Activity Indicator while fetching', () => {
  const fetchError: any = jest.fn();

  const { getByText } = render(
    <ProductList
      products={fakeProductsProp}
      fetchError={fetchError}
      isLoading={false}
    />
  );

  expect(getByText('There was an error fetching products.'));
});

test('Product List shows Activity Indicator while fetching', () => {
  const { getByText } = render(
    <ProductList products={[]} fetchError={undefined} isLoading={false} />
  );

  expect(getByText('No Products Found'));
});

test('<ProductList /> FlatList Config', async () => {
  const { getByTestId } = render(
    <ProductList
      products={fakeProductsProp}
      fetchError={undefined}
      isLoading={false}
    />
  );

  const element = getByTestId('product-list');
  await waitFor(() => expect(element).toBeTruthy());

  expect(element.props.horizontal).toBe(false);
  expect(element.props.data.length).toBe(6);
});
