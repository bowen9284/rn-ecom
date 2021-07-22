import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductListItem from './ProductListItem';
import { ProductsScreenNavigationProp } from '../../Screens/ProductsScreen';
import ErrorText from '../ErrorText';

import ProductsSkeleton from '../Skeletons/ProductsSkeleton';
import Product from '../../Models/Product';

interface Props {
  products: Product[];
  fetchError: any;
  isLoading: boolean;
}

const ProductList = (props: Props) => {
  const { products, fetchError, isLoading } = props;
  const navigation = useNavigation<ProductsScreenNavigationProp>();

  if (fetchError !== undefined) {
    return <ErrorText>There was an error fetching products.</ErrorText>;
  }

  if (isLoading) {
    return <ProductsSkeleton isLoading={isLoading} />;
  }

  if (!products.length) {
    return <ErrorText>No Products Found</ErrorText>;
  }

  return (
    <FlatList
      testID="product-list"
      numColumns={2}
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <ProductListItem navigation={navigation} item={item} />
      )}
    />
  );
};

//    height: 225,
// width: 160,
export default ProductList;
