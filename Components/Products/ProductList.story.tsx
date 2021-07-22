import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import ProductList from './ProductList';
import { product } from './ProductCard.story';
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

productListStories.add('Default view', () => (
  <ProductList
    products={defaultProducts}
    fetchError={undefined}
    isLoading={false}
  />
));

productListStories.add('Loading skeleton view', () => (
  <ProductList
    products={[]}
    fetchError={undefined}
    isLoading
  />
));

productListStories.add('No products view', () => (
  <ProductList
    products={[]}
    fetchError={undefined}
    isLoading={false}
  />
));

productListStories.add('Error fetching view', () => (
  <ProductList
    products={[]}
    fetchError
    isLoading={false}
  />
));

