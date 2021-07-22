import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import ImageWithFallback from '../ImageWithFallback';
import { Text, Box } from '../Restyle/Restyle';
import { ProductsScreenNavigationProp } from '../../Screens/ProductsScreen';
import ErrorText from '../ErrorText';
import Product from '../../Models/Product';

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
      {productsFiltered.length ? (
        <FlatList
          data={productsFiltered}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Box>
          <ErrorText>No products meet criteria</ErrorText>
        </Box>
      )}
    </Box>
  );
};

export default SearchedProducts;
