import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Text } from '../../Shared/Restyle/Restyle';
import Button from '../../Shared/Restyle/Button';
import { useAppDispatch } from '../../hooks/redux';
import { addToCart } from '../../Redux/Slices/cartSlice';
import Card from '../../Shared/Restyle/Card';
import { formatPrice } from '../../util/currency';
import ImageWithFallback from '../../Shared/ImageWithFallback';

let { width } = Dimensions.get('window');

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { product } = props;
  const { name, price, countInStock, image } = product;
  const dispatch = useAppDispatch();
  
  return (
    <Card
      style={styles.container}
      alignItems="center"
      justifyContent="space-evenly"
      margin="s"
    >
      <ImageWithFallback image={image} />
      <Text textAlign="auto" variant="title">
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text variant="body">{formatPrice(price)}</Text>

      {countInStock > 0 ? (
        <Button
          onPress={() => {
            dispatch(addToCart(product));
          }}
          label="Add"
        />
      ) : (
        <Text>Currently Unavailable</Text>
      )}
    </Card>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: 225,
    width: 160,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  card: {
    height: width / 2 - 20 - 90,
  },
  image: {
    width: 100,
    height: 100,
  },
});
