import theme, { Theme } from '../../util/theme';
import { createBox } from '@shopify/restyle';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import Text from '../../Components/restyle/Text';
import Box from '../../Components/restyle/Box';
import ProductList from './ProductList';
import { Container, Header, Icon, Item, Input } from 'native-base';
import SearchedProducts from './SearchedProducts';

const data: Product[] = require('../../assets/mockData/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [focus, setFocus] = useState<boolean>(true);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(true);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus(false);
    };
  }, []);

  const searchProduct = (text: string) => {
    setProductsFiltered(
      products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const closeList = () => {
    setFocus(false);
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus === true ? (
            <Icon onPress={closeList} name="ios-close" />
          ) : null}
        </Item>
      </Header>
      {focus ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <Box flex={1} paddingHorizontal="s" backgroundColor="mainBackground">
          <Box alignItems="center">
            <ProductList items={products} />
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default ProductContainer;
