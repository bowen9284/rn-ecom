import React from 'react';
import { fireEvent, render } from '../../../jest/setup';
import ProductDetail from '../../../Components/Products/ProductDetail';
import fakeProducts from '../../../util/mockData/products.json';

const fakeProduct: any = fakeProducts[0];
const route: any = {
  params: {
    product: fakeProduct,
  },
};
const navigation: any = jest.fn();

test('<ProductDetail>', () => {
  const { getByText, getByTestId } = render(
    <ProductDetail route={route} navigation={navigation} />
  );

  expect(getByTestId('scrollView'));
  const scrollView = getByTestId('scrollView');
  // Verical scrollview
  expect(scrollView.props.horizontal).toBe(undefined);
  // Name
  expect(getByText('FIFA 20'));
  // Description
  expect(getByText('The latest FIFA'));
  // Price
  expect(getByText('$250.00'));
  // Custom button text
  expect(getByText('Add'));
});

test('<ProductDetail> onPress Add button dispatches action ', () => {
  const dispatch = jest.fn();
  const { getByText, getByTestId } = render(
    <ProductDetail route={route} navigation={navigation} />
  );
  fireEvent.press(getByText('Add'));
});
