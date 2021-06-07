import React from 'react';
import { FlatList } from 'react-native';
import ProductListItem from './ProductListItem';
import { ProductsScreenNavigationProp } from './ProductsScreen';

interface Props {
  items: Product[];
  navigation: ProductsScreenNavigationProp;
}

const ProductList = (props: Props) => {
  const { items, navigation } = props;
  return (
    <FlatList
      testID="product-list"
      numColumns={2}
      data={items}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <ProductListItem navigation={navigation} item={item} />
      )}
    />
  );
};

export default ProductList;
