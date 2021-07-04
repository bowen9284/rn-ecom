import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import ProductListItem from './ProductListItem';
import { ProductsScreenNavigationProp } from '../../Screens/ProductsScreen';
import { Text } from '../Restyle/Restyle';
import { useNavigation } from '@react-navigation/native';

interface Props {
  products: Product[];
  fetchError: any;
  isFetching: boolean;
}

const ProductList = (props: Props) => {
  const { products, fetchError, isFetching } = props;
  const navigation = useNavigation<ProductsScreenNavigationProp>();

  if (isFetching) {
    return <ActivityIndicator testID="activity-indicator" />;
  }

  if (fetchError) {
    return <Text>There was an error fetching products.</Text>;
  }

  if (!products.length) {
    return <Text>No Products Found.</Text>
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
