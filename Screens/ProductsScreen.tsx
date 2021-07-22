import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import ProductList from '../Components/Products/ProductList';
import SearchedProducts from '../Components/Products/SearchedProducts';
import CategoryFilter from '../Components/Products/CategoryFilter';
import { HomeStackParamList } from '../Navigators/HomeNavigator';
import { useGetAllProductsQuery } from '../Services/productApi';
import { Box } from '../Components/Restyle/Restyle';
import { useGetAllCategoriesQuery } from '../Services/categoryApi';
import Product from '../Models/Product';
import Category from '../Models/Category';

export type ProductsScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ProductsScreen'
>;

interface Props {
  navigation: ProductsScreenNavigationProp;
}

const ProductsScreen = (props: Props) => {
  const { navigation } = props;

  const [initialState, setInitialState] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

  const [focus, setFocus] = useState<boolean>();
  const [active, setActive] = useState<number>(-1);

  const {
    data: fetchedProducts = [],
    error: productsError,
    isLoading: productsIsLoading,
  } = useGetAllProductsQuery();

  const {
    data: fetchedCategories = [],
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useGetAllCategoriesQuery();

  useEffect(() => {
    setInitialState(fetchedProducts);
    setFocus(false);
    setActive(-1);
    setProducts(fetchedProducts);
  }, []);

  const searchProduct = (text: string) => {
    if (!products) {
      return;
    }

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

  // -1 indicates a non-filtered state
  const filterByCategory = (category: Category, activeCategory: number) => {
    if (activeCategory === -1) {
      setProducts(initialState);
      return;
    }

    setProducts(
      fetchedProducts.filter((product) => product.category.id === category.id)
    );
  };

  // Workaround RTK Query and useEffect not working nicely together here.
  // calling setProducts(fetchProducts) in useEffect does not set state before initial render :-/
  const productsList = () =>
    active === -1 && products.length === 0 ? fetchedProducts : products;

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box
        flexDirection="row"
        padding="s"
        margin="s"
        borderRadius={5}
        borderWidth={1}
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
        <SearchedProducts
          productsFiltered={productsFiltered}
          navigation={navigation}
        />
      ) : (
        <>
          <CategoryFilter
            categories={fetchedCategories}
            onCategoryFilter={filterByCategory}
            active={active}
            setActive={setActive}
            isLoading={categoriesIsLoading}
            fetchError={categoriesError}
          />
          <Box flex={1} alignItems="center">
            <ProductList
              products={productsList()}
              isLoading={productsIsLoading}
              fetchError={productsError}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    flexGrow: 1,
  },
});

export default ProductsScreen;
