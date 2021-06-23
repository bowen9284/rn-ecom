import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import Button from '../../Shared/Restyle/Button';
import { Text, Box } from '../../Shared/Restyle/Restyle';
import { useAppDispatch } from '../../hooks/redux';

import { HomeStackParamList } from '../../Navigators/HomeNavigator';
import { addToCart } from '../../Redux/Slices/cartSlice';
import { formatPrice } from '../../util/currency';
import ImageWithFallback from '../../Shared/ImageWithFallback';

export type ProductDetailScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ProductDetail'
>;

type ProductDetailRouteProp = RouteProp<HomeStackParamList, 'ProductDetail'>;

interface Props {
  navigation: ProductDetailScreenNavigationProp;
  route: ProductDetailRouteProp;
}

const ProductDetail = (props: Props) => {
  const dispatch = useAppDispatch();

  const { route } = props;
  const [product, setProduct] = useState<Product>(route.params.product);
  const [availability, setAvailability] = useState('');

  return (
    <>
      <Box margin="s">
        <ScrollView testID="scrollView">
          <ImageWithFallback image={product.image} height={250} width="100%" />
          <Text variant="header" marginBottom="s">
            {product.name}
          </Text>
          <Text variant="body">{product.description}</Text>
        </ScrollView>
      </Box>
      <Box flex={1} justifyContent="flex-end" margin="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text variant="subheader">{formatPrice(product.price)}</Text>
          <Button
            label="Add"
            onPress={() => {
              dispatch(addToCart(product));
            }}
          />
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
