import React from 'react';
import { Pressable } from 'react-native';
import { Box } from '../Restyle/Restyle';
import ProductCard from './ProductCard';
import { ProductsScreenNavigationProp } from '../../Screens/ProductsScreen';

interface Props {
  item: Product;
  navigation: ProductsScreenNavigationProp;
}

const ProductListItem = (props: Props) => {
  const { item, navigation } = props;

  return (
    <Box testID={`product-` + item.id}>
      <Pressable
        testID={`product-pressable-` + item.id}
        android_ripple={{ color: '#8C6FF7', borderless: true }}
        onPress={() =>
          navigation.navigate('ProductDetail', {
            product: item,
          })
        }
      >
        <ProductCard key={item.name} product={item} />
      </Pressable>
    </Box>
  );
};

export default ProductListItem;
