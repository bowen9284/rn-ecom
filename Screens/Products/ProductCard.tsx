import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import Text from '../../Components/restyle/Text';
import Box from '../../Components/restyle/Box';
import Button from '../../Components/restyle/Button';
import { useAppDispatch } from '../../hooks/redux';
import { addToCart } from '../../Redux/Slices/cartSlice';
import Card from '../../Components/restyle/Card';
import { formatPrice } from '../../util/currency';

let { width } = Dimensions.get('window');

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { product } = props;
  const { name, price, countInStock, image } = product;
  const dispatch = useAppDispatch();

  return (
    <Card style={styles.container} alignItems="center" margin="s" padding="s">
      <Box style={styles.image}>
        {/* @TODO extract uri + fallback local image to shared logic */}
        {image != '' ? (
          <Image
            testID="card-remote-image"
            resizeMode="contain"
            source={{ uri: image }}
            style={styles.image}
          />
        ) : (
          <Image
            testID="card-local-image"
            resizeMode="contain"
            source={require('../../assets/placeholder.jpeg')}
            style={styles.image}
          />
        )}
      </Box>
      <Text variant="title">
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text variant="body">{formatPrice(price)}</Text>

      {countInStock > 0 ? (
        <Box style={{ marginBottom: 10 }}>
          <Button
            onPress={() => {
              dispatch(addToCart(product));
            }}
            label="Add"
          />
        </Box>
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
