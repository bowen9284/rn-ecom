import React from 'react';
import { fireEvent, render } from '../../../jest/setup';
import fakeCategories from '../../../util/mockData/categories.json';
import CategoryFilter from '../../../Components/Products/CategoryFilter';

const setActive: any = jest.fn();
const onCategoryFilter: any = jest.fn();

const firstFakeCateogry: any = fakeCategories[0];

test('fetching categories displays loading skeleton', () => {
  const categories: any = fakeCategories;

  const { getByTestId } = render(
    <CategoryFilter
      active={-1}
      categories={categories}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
      isLoading={true}
      fetchError={undefined}
    />
  );

  expect(getByTestId('category-loading-skeleton'));
});

test('fetching categories error displays "There was an error fetching categories."', () => {
  const categories: any = fakeCategories;
  const fetchError: any = jest.fn();

  const { getByText } = render(
    <CategoryFilter
      active={-1}
      categories={categories}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
      isLoading={false}
      fetchError={fetchError}
    />
  );

  expect(getByText('There was an error fetching categories.'));
});

test('Empty Categories displays No Products found that match category.', () => {
  const emptyCategories = [] as any[];

  const { getByText } = render(
    <CategoryFilter
      active={-1}
      categories={emptyCategories}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
      isLoading={false}
      fetchError={undefined}
    />
  );

  expect(getByText('No Products found that match category.'));
});

test('<CategoryFilter> ScrollView config', () => {
  const categories: any = fakeCategories;

  const { getByTestId } = render(
    <CategoryFilter
      active={-1}
      categories={categories}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
      isLoading={false}
      fetchError={undefined}
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
      active={-1}
      categories={[firstFakeCateogry]}
      setActive={setActive}
      onCategoryFilter={onCategoryFilter}
      isLoading={false}
      fetchError={undefined}
    />
  );

  const buttonLabel = getByTestId('button-label');
  expect(buttonLabel.props.children).toBe('Electronics');

  const categoryTestId = `category-pressable-5f15d5cdcb4a6642bddc0fe9`;
  fireEvent.press(getByTestId(categoryTestId));

  expect(onCategoryFilter).toBeCalledWith(firstFakeCateogry, 0);
  expect(setActive).toBeCalledWith(0);
});
