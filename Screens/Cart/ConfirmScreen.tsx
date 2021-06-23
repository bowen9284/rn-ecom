import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet } from 'react-native';
import { Text, Box } from '../../Shared/Restyle/Restyle';
import { useAppDispatch } from '../../hooks/redux';
import { CheckoutTabParamList } from '../../Navigators/CheckoutNavigator';
import { clearCart } from '../../Redux/Slices/cartSlice';
import TabAdvanceButton from '../../Shared/Form/TabAdvanceButton';
import { formatPrice } from '../../util/currency';
import { useAddOrderMutation } from '../../Services/orderApi';

export type ConfirmScreenNavigationProp = MaterialTopTabNavigationProp<
  CheckoutTabParamList,
  'Confirm'
>;

type ConfirmDetailRouteProp = RouteProp<CheckoutTabParamList, 'Confirm'>;

interface Props {
  navigation: ConfirmScreenNavigationProp;
  route: ConfirmDetailRouteProp;
}

const ConfirmScreen = (props: Props) => {
  const { route, navigation } = props;
  const { params } = route;
  const dispatch = useAppDispatch();
  const [addOrder, { isLoading, error, data }] = useAddOrderMutation();

  const placeOrder = async () => {
    await addOrder(params.order);

    // @todo add confirmation
    if (error) {
      console.log(error);
    }

    if (data) {
      console.log('Order was submitted successfully');
      dispatch(clearCart());
      navigation.navigate('Cart');
    }
  };

  const OrderConfirmation = () => {
    if (params?.order) {
      const order = params.order;
      return (
        <Box>
          <Text>Address: {order.shippingAddress1}</Text>
          <Text>Address 2: {order.shippingAddress2}</Text>
          <Text>City: {order.city}</Text>
          <Text>Zip Code: {order.zip}</Text>
          <Text>Country: {order.country}</Text>
          <Text variant="title">Items:</Text>
          <Box>
            {order.orderItems.map((item) => {
              return (
                <Box
                  key={item.id}
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
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
                  <Text>{item.name}</Text>
                  <Text>{formatPrice(item.price)}</Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      );
    }

    return <Text>Please Fill out Shipping and Payment Information</Text>;
  };

  return (
    <>
      <Box>
        <Box
          alignItems="center"
          borderBottomColor={'borderPrimary'}
          borderBottomWidth={2}
          paddingVertical="s"
        >
          <Text variant="title">Confirm Order</Text>
        </Box>
        <Box
          marginTop="s"
          alignItems="center"
          borderColor="buttonPrimaryBackground"
        >
          <OrderConfirmation />
        </Box>
      </Box>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TabAdvanceButton label="Place Order" onPress={() => placeOrder()} />
      )}
    </>
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

export default ConfirmScreen;
