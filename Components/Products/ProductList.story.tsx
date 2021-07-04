import React from 'react';

import { storiesOf } from '@storybook/react-native';
import ProductList from './ProductList';
import { product } from './ProductCard.story';
import { action } from '@storybook/addon-actions';
import { View } from 'react-native';
import { reactNavigationDecorator } from '../../storybook/StoryNavigator';

export const defaultProducts = [
  { ...product, id: '1', name: 'Card 1', price: 25.0 },
  { ...product, id: '2', name: 'Card 2', price: 50.0 },
  { ...product, id: '3', name: 'Card 3', price: 75.0 },
  { ...product, id: '4', name: 'Card 4', price: 100.0 },
  { ...product, id: '5', name: 'Card 5', price: 125.0 },
  { ...product, id: '6', name: 'Card 6', price: 150.0 },
];

const productListStories = storiesOf('ProductList', module);
productListStories
  .addDecorator((story) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {story()}
    </View>
  ))
  .addDecorator(reactNavigationDecorator);

productListStories.add('Default View', () => (
  <ProductList
    products={defaultProducts}
    fetchError={undefined}
    isFetching={false}
  />
));
