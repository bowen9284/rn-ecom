import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Box from '../../Components/restyle/Box';
import Text from '../../Components/restyle/Text';
import ProductCard from './ProductCard';

interface Props {
  items: Product[];
}

const ProductList = (props: Props) => {
  return (
    <FlatList
      numColumns={2}
      data={props.items}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <ProductCard key={item.name} {...item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default ProductList;
