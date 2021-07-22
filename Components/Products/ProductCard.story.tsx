import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import ProductCard from './ProductCard';
import { imageUrl } from '../ImageWithFallback.story';
import { Box } from '../Restyle/Restyle';
import Product from '../../Models/Product';

export const product: Product = {
  id: '5f15d8852a025143f9593a7c',
  image: imageUrl,
  brand: 'PS3',
  price: 250.0,
  rating: 1,
  numReviews: 0,
  isFeatured: true,
  name: 'FIFA 20',
  description: 'The latest FIFA',
  category: {
    id: '5f15d5cdcb4a6642bddc0fe9',
    name: 'Electronics',
  },
  countInStock: 25,
  quantity: 0,
};

const longProductName = 'abcdefghij klmnopqr stuvwxyz 123 456';

const productCardStories = storiesOf('ProductCard', module);
productCardStories.addDecorator(withKnobs);
productCardStories.addDecorator((story) => (
  <Box flex={1} alignItems="center" justifyContent="center">
    {story()}
  </Box>
));

productCardStories.add('Default view', () => <ProductCard product={product} />);

productCardStories.add('With fallback image', () => (
  <ProductCard product={{ ...product, image: '' }} />
));

productCardStories.add('With long name', () => (
  <ProductCard product={{ ...product, name: longProductName }} />
));

productCardStories.add('With long price', () => (
  <ProductCard product={{ ...product, price: 1000000 }} />
));
