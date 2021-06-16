import React from 'react';
import { fireEvent, render } from '../../../jest/setup';
import fakeCategories from '../../mockData/categories.json';
import CategoryFilter from '../../../Screens/Products/CategoryFilter';

const setActive: any = jest.fn();
const onCategoryFilter: any = jest.fn();
const firstFakeCateogry: any = fakeCategories[0];

test('loading categories displays activity indicator', () => {
  const categories: any = fakeCategories;

  const { getByTestId } = render(
    <CategoryFilter
      categoriesIsLoading={true}
      active={-1}
      categories={categories}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
    />
  );

  expect(getByTestId('activity-indicator'));
});

test('Empty Categories displays No Products Found', () => {
  const emptyCategories = [] as any[];

  const { getByText } = render(
    <CategoryFilter
      categoriesIsLoading={false}
      active={-1}
      categories={emptyCategories}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
    />
  );

  expect(getByText('No Products found'));
});

test('<CategoryFilter> ScrollView config', () => {
  const categories: any = fakeCategories;

  const { getByTestId } = render(
    <CategoryFilter
      categoriesIsLoading={false}
      active={-1}
      categories={categories}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
    />
  );
  expect(getByTestId('scrollView'));

  const scrollView = getByTestId('scrollView');
  const props = scrollView.props;

  expect(props.horizontal).toBe(true);
  expect(props.showsHorizontalScrollIndicator).toBe(false);
});

test('<CategoryFilter> onPress filters products and is active', () => {
  const { getByTestId } = render(
    <CategoryFilter
      categoriesIsLoading={false}
      active={-1}
      categories={[firstFakeCateogry]}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
    />
  );

  const buttonLabel = getByTestId('button-label');
  expect(buttonLabel.props.children).toBe('Electronics');

  const categoryTestId = `category-pressable-5f15d5cdcb4a6642bddc0fe9`;
  fireEvent.press(getByTestId(categoryTestId));

  expect(onCategoryFilter).toBeCalledWith(firstFakeCateogry, 0);
  expect(setActive).toBeCalledWith(0);
});
