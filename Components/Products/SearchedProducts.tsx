import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import ImageWithFallback from '../ImageWithFallback';
import { Text, Box } from '../Restyle/Restyle';
import { ProductsScreenNavigationProp } from '../../Screens/ProductsScreen';

interface Props {
  productsFiltered: Product[];
  navigation: ProductsScreenNavigationProp;
}

const SearchedProducts = (props: Props) => {
  const { navigation, productsFiltered } = props;

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Box
        backgroundColor="cardPrimaryBackground"
        flexDirection="row"
        marginTop="s"
        borderRadius={10}
      >
        <ImageWithFallback image={item.image} width={75} height={75} />
        <Box padding="s" flexShrink={1}>
          <Text variant="title">{item.name}</Text>
          <Text variant="body">{item.description}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );

  return (
    <Box flex={1} paddingHorizontal="m" backgroundColor="mainBackground">
      {productsFiltered && productsFiltered.length > 0 ? (
        <FlatList
          data={productsFiltered}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Box>
          <Text>No products meet criteria</Text>
        </Box>
      )}
    </Box>
  );
};

export default SearchedProducts;

const styles = StyleSheet.create({
  thumbnail: {
    height: 75,
    width: 75,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
