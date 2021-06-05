import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
import Box from '../../Components/restyle/Box';
import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';
import { EvilIcons } from '@expo/vector-icons';
import CategoryFilter from './CategoryFilter';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../Navigators/HomeNavigator';

// mock data
import mockProducts from '../../assets/mockData/products.json';
import mockCategories from '../../assets/mockData/categories.json';
import { RouteProp } from '@react-navigation/native';

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

  useEffect(() => {
    setProducts(mockProducts);
    setProductsFiltered(mockProducts);
    setFocus(false);
    setCategories(mockCategories);
    setActive(-1);
    setInitialState(mockProducts);
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
          <Pressable android_ripple onPress={() => closeList()}>
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
          />
          <Box flex={1} alignItems="center">
            <ProductList items={products} navigation={navigation} />
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

export default ProductsScreen;
