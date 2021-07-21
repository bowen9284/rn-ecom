import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '../Restyle/Restyle';
import CategoryFilter from './CategoryFilter';
import mockCategories from '../../util/mockData/categories.json';

const categoryFilterStories = storiesOf('CategoryFilter', module);
categoryFilterStories.addDecorator(withKnobs);
categoryFilterStories.addDecorator((story) => (
  <Box flex={1} backgroundColor='mainBackground'>
    {story()}
  </Box>
));

categoryFilterStories.add('Default view', () => (
  <CategoryFilter
    categories={mockCategories}
    onCategoryFilter={() => {}}
    active={-1}
    setActive={() => {}}
    isLoading={false}
    fetchError={undefined}
  />
));


categoryFilterStories.add('Loading skeleton view', () => (
    <CategoryFilter
      categories={mockCategories}
      onCategoryFilter={() => {}}
      active={-1}
      setActive={() => {}}
      isLoading
      fetchError={undefined}
    />
  ));
  
