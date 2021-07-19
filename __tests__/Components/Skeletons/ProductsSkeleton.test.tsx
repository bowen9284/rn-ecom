import React from 'react';
import ProductsSkeleton from '../../../Components/Skeletons/ProductsSkeleton';
import { render } from '../../../jest/setup';

test('loading displays skeleton', () => {
  const { getByTestId } = render(<ProductsSkeleton isLoading={true} />);

  expect(getByTestId('product-loading-skeleton'));
});

test('loading set to false does not display skeleton', () => {
  const { queryByTestId } = render(<ProductsSkeleton isLoading={false} />);
  expect(queryByTestId('product-loading-skeleton')).toBeNull();
});
