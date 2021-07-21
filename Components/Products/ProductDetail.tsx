import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native';
import Button from '../Restyle/Button';
import { Text, Box } from '../Restyle/Restyle';
import { useAppDispatch } from '../../hooks/redux';

import { HomeStackParamList } from '../../Navigators/HomeNavigator';
import { addToCart } from '../../Redux/Slices/cartSlice';
import { formatPrice } from '../../util/currency';
import ImageWithFallback from '../ImageWithFallback';

export type ProductDetailScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ProductDetail'
>;

type ProductDetailRouteProp = RouteProp<HomeStackParamList, 'ProductDetail'>;

interface Props {
  route: ProductDetailRouteProp;
}

const ProductDetail = ({ route }: Props) => {
  const dispatch = useAppDispatch();

  const { params } = route;
  const { product } = params;
  // const [product, setProduct] = useState<Product>(route.params.product);
  // const [availability, setAvailability] = useState('');

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

export default ProductDetail;
