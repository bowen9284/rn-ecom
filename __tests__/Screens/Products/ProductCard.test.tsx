import React from 'react';
import { render } from '../../../jest/setup';
import fakeProducts from '../../../assets/mockData/products.json';
import ProductCard from '../../../Screens/Products/ProductCard';

const fakeProduct: any = fakeProducts[0];
const fakeProductNotInStock: any = fakeProducts[5];

test('Product in stock shows add button', async () => {
  const { getByText } = render(<ProductCard product={fakeProduct} />);

  getByText('FIFA 20');
  getByText('Add');
  getByText('$250.00');
});

test('Product out of stock shows unavailable', async () => {
  const { getByText } = render(<ProductCard product={fakeProductNotInStock} />);

  getByText('Chop Saw wit...');
  getByText('Currently Unavailable');
});

test('Product with image displays image', async () => {
  const { getByTestId } = render(
    <ProductCard product={fakeProductNotInStock} />
  );
  expect(getByTestId('card-remote-image')).toHaveProperty('type', 'Image');
});

test('Product without image displays local image', async () => {
  const { getByTestId } = render(
    <ProductCard product={fakeProduct} />
  );
  expect(getByTestId('card-local-image')).toHaveProperty('type', 'Image');
});
