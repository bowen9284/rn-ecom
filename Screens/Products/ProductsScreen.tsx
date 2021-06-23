import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';
import { EvilIcons } from '@expo/vector-icons';
import CategoryFilter from './CategoryFilter';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../Navigators/HomeNavigator';
import { useGetAllProductsQuery } from '../../Services/productApi';
import { RouteProp } from '@react-navigation/native';
import { Box } from '../../Shared/Restyle/Restyle';
import { useGetAllCategoriesQuery } from '../../Services/categoryApi';

export type ProductsScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ProductsScreen'
>;

type ProductsScreenRouteProp = RouteProp<HomeStackParamList, 'ProductsScreen'>;

interface Props {
  navigation: ProductsScreenNavigationProp;
  route: ProductsScreenRouteProp;
}

const ProductsScreen = (props: Props) => {
  const { navigation } = props;

  const [initialState, setInitialState] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

  const [focus, setFocus] = useState<boolean>();
  const [active, setActive] = useState<number>(-1);

  const {
    data: fetchedProducts,
    error: productsError,
    isFetching: productsIsFetching,
  } = useGetAllProductsQuery();

  const {
    data: fetchedCategories,
    error: categoriesError,
    isFetching: categoriesIsFetching,
  } = useGetAllCategoriesQuery();

  useEffect(() => {
    setInitialState(fetchedProducts ?? []);
    setProducts(fetchedProducts ?? []);
    setProductsFiltered(fetchedProducts ?? []);
    setFocus(false);
    setCategories(fetchedCategories ?? []);
    setActive(-1);
  }, [fetchedProducts]);

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

    const filteredProducts = initialState.filter(
      (product) => product.category.id === category.id
    );

    setProducts(filteredProducts);
  };

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
            categories={categories}
            onCategoryFilter={filterByCategory}
            active={active}
            setActive={setActive}
            isFetching={categoriesIsFetching}
            fetchError={categoriesError}
          />
          <Box flex={1} alignItems="center">
            <ProductList
              products={products}
              navigation={navigation}
              isFetching={productsIsFetching}
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
