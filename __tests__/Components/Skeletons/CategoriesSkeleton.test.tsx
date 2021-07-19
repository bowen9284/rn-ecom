import React from 'react';
import CategoriesSkeleton from '../../../Components/Skeletons/CategoriesSkeleton';
import { render } from '../../../jest/setup';

test('loading displays skeleton', () => {
  const { getByTestId } = render(<CategoriesSkeleton isLoading={true} />);

  expect(getByTestId('category-loading-skeleton'));
});

test('loading set to false does not display skeleton', () => {
  const { queryByTestId } = render(<CategoriesSkeleton isLoading={false} />);
  expect(queryByTestId('category-loading-skeleton')).toBeNull();
});
