import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../Shared/Restyle/Button';
import { Text, Box } from '../../Shared/Restyle/Restyle';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CartStackParamList } from '../../Navigators/CartNavigator';
import { clearCart, removeFromCart } from '../../Redux/Slices/cartSlice';
import { formatPrice } from '../../util/currency';
import ImageWithFallback from '../../Shared/ImageWithFallback';

export type CartScreenNavigationProp = StackNavigationProp<
  CartStackParamList,
  'Cart'
>;

type CartScreenRouteProp = RouteProp<CartStackParamList, 'Cart'>;

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
              {cart.items.map((item: any) => {
                return (
                  <Box key={item.id} flexDirection="row">
                    <ImageWithFallback image={item.image} />
                    <Box
                      flex={1}
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      paddingLeft="m"
                    >
                      <Box flexShrink={1} padding="s">
                        <Text numberOfLines={1} variant="body">
                          {item.name}
                        </Text>
                      </Box>
                      <Box justifyContent="center" alignItems="flex-end">
                        <Text variant="body">Qty: {item.quantity}</Text>
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
              <Button
                label="Checkout"
                onPress={() => {
                  navigation.navigate('CartCheckout');
                }}
              />
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
