import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Text from '../../Components/restyle/Text';
import Button from '../../Components/restyle/Button';

let { width } = Dimensions.get('window');

interface Props {
  name: string;
  price: number;
  image: string;
  countInStock: number;
}

const ProductCard = (props: Props) => {
  const { name, price, image, countInStock } = props;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {image != '' ? (
          <Image
            resizeMode="contain"
            source={{ uri: image }}
            style={styles.image}
          />
        ) : (
        <Image
            resizeMode="contain"
            source={require('../../assets/placeholder.jpeg')}
            style={styles.image}
          />
        )}
      </View>
      <Text variant="title">
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text variant="body">${price}</Text>
      {countInStock > 0 ? (
        <View style={{ marginBottom: 60 }}>
          <Button onPress={() => {}} label="Add" />
        </View>
      ) : (
        <Text>Currently Unavailable</Text>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: 225,
    width: 160,
    padding: 5,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
  },
  card: {
    height: width / 2 - 20 - 90,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
});
