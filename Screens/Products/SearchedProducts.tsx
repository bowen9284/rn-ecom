import React, { useEffect } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import Box from '../../Components/restyle/Box';
import Text from '../../Components/restyle/Text';

interface Props {
  productsFiltered: Product[];
}

const SearchedProducts = (props: Props) => {
  const { productsFiltered } = props;

  const renderItem = ({ item }: { item: Product }) => (
    <Box
      backgroundColor="cardPrimaryBackground"
      flexDirection="row"
      marginTop="s"
      borderRadius={10}
    >
      <Box>
        {item.image ? (
          <Image source={{ uri: item.image }} />
        ) : (
          <Image
            style={styles.thumbnail}
            source={require('../../assets/placeholder.jpeg')}
          />
        )}
      </Box>
      <Box padding="s">
        <Text variant="title">{item.name}</Text>
        <Text variant="body">{item.description}</Text>
      </Box>
    </Box>
  );

  return (
    <Box flex={1} paddingHorizontal="m" backgroundColor="mainBackground">
      {productsFiltered.length > 0 ? (
        <FlatList
          data={productsFiltered}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Box>
          <Text>No Products found</Text>
        </Box>
      )}
    </Box>
  );
};

export default SearchedProducts;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    height: 75,
    width: 75,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
