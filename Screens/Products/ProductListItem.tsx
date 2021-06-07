import React from 'react';
import { Platform, Pressable, TouchableOpacity } from 'react-native';
import Box from '../../Components/restyle/Box';
import ProductCard from './ProductCard';
import { ProductsScreenNavigationProp } from './ProductsScreen';

interface Props {
  item: Product;
  navigation: ProductsScreenNavigationProp;
}

const ProductListItem = (props: Props) => {
  const { item, navigation } = props;

  return (
    <Box testID={`product-` + item.id}>
      {Platform.OS === 'ios' ? (
        <TouchableOpacity
          testID="ios"
          onPress={() =>
            navigation.navigate('ProductDetail', {
              product: item,
            })
          }
        >
          <ProductCard key={item.name} product={item} />
        </TouchableOpacity>
      ) : (
        <Pressable
          testID="android"
          android_ripple={{ color: '#8C6FF7', borderless: true }}
          onPress={() =>
            navigation.navigate('ProductDetail', {
              product: item,
            })
          }
        >
          <ProductCard key={item.name} product={item} />
        </Pressable>
      )}
    </Box>
  );
};

export default ProductListItem;