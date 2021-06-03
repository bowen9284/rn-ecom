import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import ProductCard from './ProductCard';

interface Props {
  items: Product[];
}

const ProductList = (props: Props) => {
  const { items } = props;
  
  return (
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity>
            <ProductCard key={item.name} {...item} />
          </TouchableOpacity>
        </>
      )}
    />
  );
};

export default ProductList;
