import React from 'react';
import { render, waitFor } from '../../../jest/setup';

import fakeProducts from '../../../assets/mockData/products.json';
import ProductListItem from '../../../Screens/Products/ProductListItem';

const navigationProp: any = jest.fn();
const fakeProductsProp: any = fakeProducts;
const firstProduct: any = fakeProducts[0];

test('<ProductListItem /> Android Config', () => {
  const component = render(
    <ProductListItem navigation={navigationProp} item={firstProduct} />
  ).toJSON();

  const children = component?.children;
  expect(component!.children!.length).toBe(1);
});

test('<ProductListItem /> iOS Config', () => {
  const component = render(
    <ProductListItem navigation={navigationProp} item={firstProduct} />
  ).toJSON();

  const children = component?.children;

  expect(component!.children!.length).toBe(1);
});

test('<ProductListItem /> ', async () => {
  const { getByTestId } = render(
    <ProductListItem navigation={navigationProp} item={firstProduct} />
  );

  const component = getByTestId(`product-${firstProduct.id}`);
  await waitFor(() => expect(component).toBeTruthy());
});

//@todo determine a way to test ios versus android when conditions exist
