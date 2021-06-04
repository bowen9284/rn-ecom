import theme, { Theme } from '../../util/theme';
import { createBox } from '@shopify/restyle';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import Text from '../../Components/restyle/Text';
import Box from '../../Components/restyle/Box';
import ProductList from './ProductList';
import { Container, Header, Icon, Item, Input } from 'native-base';
import SearchedProducts from './SearchedProducts';
import { EvilIcons } from '@expo/vector-icons';
import CategoryFilter from './CategoryFilter';
import { select } from '@storybook/addon-knobs';
import usePrevious from '../../hooks/usePrevious';

const mockProducts: Product[] = require('../../assets/mockData/products.json');
const mockCategories: Category[] = require('../../assets/mockData/categories.json');

const ProductScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [focus, setFocus] = useState<boolean>();

  const [active, setActive] = useState<number>(-1);

  const [initialState, setInitialState] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(mockProducts);

    setProductsFiltered(mockProducts);
    setFocus(false);
    setCategories(mockCategories);
    setActive(-1);
    setInitialState(mockProducts);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setCategories([]);
      setFocus(false);
      setActive(-1);
      setInitialState([]);
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

  const filterByCategory = (category: Category, okActive: number) => {
    if (okActive === -1) {
      setProducts(initialState);
      return;
    }

    const filteredProducts = initialState.filter(
      (product) => product.category.id === category.id
    );

    setProducts(filteredProducts);
  };

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box
        style={styles.searchBar}
        padding="s"
        margin="s"
        backgroundColor="cardPrimaryBackground"
        borderColor="buttonPrimaryBackground"
      >
        <EvilIcons name="search" size={20} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onFocus={openList}
          onChangeText={(text) => searchProduct(text)}
          autoCorrect={false}
        />
        {focus === true ? (
          <Pressable onPress={() => closeList()}>
            <EvilIcons name="close" size={20} color="black" />
          </Pressable>
        ) : null}
      </Box>
      {focus ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <>
          <CategoryFilter
            categories={mockCategories}
            onCategoryFilter={filterByCategory}
            active={active}
            setActive={setActive}
          />
          <Box flex={1} alignItems="center">
            <ProductList items={products} />
          </Box>
        </>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  searchInput: {
    flexGrow: 1,
  },
});

export default ProductScreen;
