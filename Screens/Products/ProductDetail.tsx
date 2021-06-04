import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import Box from '../../Components/restyle/Box';
import Button from '../../Components/restyle/Button';
import Text from '../../Components/restyle/Text';

import { HomeStackParamList } from '../../Navigators/HomeNavigator';

type ProductDetailScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ProductDetail'
>;

type ProductDetailRouteProp = RouteProp<HomeStackParamList, 'ProductDetail'>;

interface Props {
  navigation: ProductDetailScreenNavigationProp;
  route: ProductDetailRouteProp;
}

const ProductDetail = (props: Props) => {
  const { route } = props;
  const [product, setProduct] = useState<Product>(route.params.product);
  const [availability, setAvailability] = useState('');

  return (
    <>
      <Box alignItems="center" margin="s">
        <ScrollView>
          <Box>
            {product.image != '' ? (
              <Image
                resizeMode="contain"
                source={{ uri: product.image }}
                style={styles.image}
              />
            ) : (
              <Image
                resizeMode="contain"
                source={require('../../assets/placeholder.jpeg')}
                style={styles.image}
              />
            )}
          </Box>
          <Box>
            <Text variant="header">{product.name}</Text>
            <Text variant="body">{product.description}</Text>
          </Box>
        </ScrollView>
      </Box>
      <Box flex={1} justifyContent="flex-end" margin="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text variant="subheader">${product.price}</Text>
          <Button label="Add" onPress={() => {}} />
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
});

export default ProductDetail;
