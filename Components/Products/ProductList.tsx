import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import ProductListItem from './ProductListItem';
import { ProductsScreenNavigationProp } from '../../Screens/ProductsScreen';
import { useNavigation } from '@react-navigation/native';
import ErrorText from '../ErrorText';

interface Props {
  products: Product[];
  fetchError: any;
  isLoading: boolean;
}

const ProductList = (props: Props) => {
  const { products, fetchError, isLoading } = props;
  const navigation = useNavigation<ProductsScreenNavigationProp>();

  if (fetchError) {
    return <ErrorText>There was an error fetching products.</ErrorText>;
  }

  if (isLoading) {
    return <ActivityIndicator testID="activity-indicator" />;
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

export default ProductList;
