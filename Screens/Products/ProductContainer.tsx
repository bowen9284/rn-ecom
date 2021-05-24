import theme, { Theme } from '../../util/theme';
import { createBox } from '@shopify/restyle';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import Text from '../../Components/restyle/Text';
import Box from '../../Components/restyle/Box';

const data: Product[] = require('../../assets/mockData/products.json');

interface Props {}

const ProductContainer = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <Box flex={1} paddingVertical="xl" paddingHorizontal="m">
      <Text variant="header">Prod Container</Text>
      <View>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => <Text>{item.brand}</Text>}
          keyExtractor={(item) => item.name}
        />
      </View>
    </Box>
  );
};

export default ProductContainer;
