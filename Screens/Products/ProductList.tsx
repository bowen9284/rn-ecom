import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import ProductCard from './ProductCard';

interface Props {
  items: Product[];
  navigation: any;
}

const ProductList = (props: Props) => {
  const { items, navigation } = props;

  return (
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {
                product: item,
              })
            }
          >
            <ProductCard key={item.name} {...item} />
          </TouchableOpacity>
        </>
      )}
    />
  );
};

export default ProductList;
