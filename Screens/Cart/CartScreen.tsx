import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../Components/Restyle/Button';
import { Text, Box } from '../../Components/Restyle/Restyle';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CartStackParamList } from '../../Navigators/CartNavigator';
import { clearCart, removeFromCart } from '../../Redux/Slices/cartSlice';
import { formatPrice } from '../../util/currency';
import ImageWithFallback from '../../Components/ImageWithFallback';

export type CartScreenNavigationProp = StackNavigationProp<
  CartStackParamList,
  'Cart'
>;

interface Props {
  navigation: CartScreenNavigationProp;
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
              {cart.items.map((item: any) => (
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
              ))}
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

export default CartScreen;
