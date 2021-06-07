import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Box from '../../Components/restyle/Box';
import Button from '../../Components/restyle/Button';
import Text from '../../Components/restyle/Text';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CartStackParamList } from '../../Navigators/CartNavigator';
import { clearCart, removeFromCart } from '../../Redux/Slices/cartSlice';
import { formatPrice } from '../../util/currency';

export type CartScreenNavigationProp = StackNavigationProp<
  CartStackParamList,
  'CartScreen'
>;

type CartScreenRouteProp = RouteProp<CartStackParamList, 'CartScreen'>;

interface Props {
  navigation: CartScreenNavigationProp;
  route: CartScreenRouteProp;
}

const CartScreen = (props: Props) => {
  const { navigation } = props;
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Box flex={1} marginHorizontal="m" marginVertical="s">
      {cart.items.length ? (
        <>
          <ScrollView style={{ height: '85%' }}>
            <Box flex={1}>
              {cart.items.map((item: any, index: number) => {
                return (
                  <Box key={index} flexDirection="row">
                    {item.image != '' ? (
                      <Image
                        resizeMode="center"
                        source={{ uri: item.image }}
                        style={styles.image}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/placeholder.jpeg')}
                        style={styles.image}
                      />
                    )}
                    <Box
                      flex={1}
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      paddingLeft="m"
                    >
                      <Text variant="body">{item.name}</Text>
                      <Box justifyContent="center" alignItems="flex-end">
                        <Text variant="body">{formatPrice(item.price)}</Text>
                        <Button
                          variant="dangerButtonLabel"
                          label="Remove"
                          onPress={() => dispatch(removeFromCart(item))}
                        />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </ScrollView>

          <Box flex={1} flexDirection="column-reverse">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Text variant="title">{formatPrice(cart.totalPrice)}</Text>

              <Button
                label="Clear cart"
                onPress={() => dispatch(clearCart())}
              />
              <Button label="Checkout" onPress={() => {navigation.navigate('CartCheckout')}} />
            </Box>
          </Box>
        </>
      ) : (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text variant="title">Looks like you have an empty cart</Text>
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
});

export default CartScreen;
