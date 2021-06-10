import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Box } from '../../Shared/Restyle/Restyle';
import { CheckoutTabParamList } from '../../Navigators/CheckoutNavigator';
import { Feather } from '@expo/vector-icons';
import TabAdvanceButton from '../../Shared/Form/TabAdvanceButton';

type PaymentScreenNavigationProp = MaterialTopTabNavigationProp<
  CheckoutTabParamList,
  'Payment'
>;

type ProductDetailRouteProp = RouteProp<CheckoutTabParamList, 'Payment'>;

interface Props {
  navigation: PaymentScreenNavigationProp;
  route: ProductDetailRouteProp;
}

const PaymentScreen = (props: Props) => {
  const { route, navigation } = props;
  const { params } = route;

  const paymentCards: any = [
    { name: 'Wallet', value: 1 },
    { name: 'Visa', value: 2 },
    { name: 'MasterCard', value: 3 },
  ];

  const [paymentMethod, setPaymentMethod] = useState();
  const [card, setCard] = useState({ name: '', value: 0 });

  const goToConfirm = () => {
    navigation.navigate('Confirm', { order: params.order });
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
          <Text variant="title">Choose your payment method</Text>
        </Box>
        {paymentCards.map((paymentCard, index) => {
          return (
            <TouchableOpacity
              key={paymentCard.value}
              onPress={() => {
                setCard(paymentCard);
              }}
            >
              <Box
                flexDirection="row"
                justifyContent="space-between"
                paddingVertical="s"
                paddingHorizontal="m"
                borderBottomWidth={1}
                borderBottomColor="borderPrimary"
              >
                <Text variant="body">{paymentCard.name}</Text>
                {card.value === index + 1 ? (
                  <Feather name="check" size={24} color="#5A31F4" />
                ) : null}
              </Box>
            </TouchableOpacity>
          );
        })}
      </Box>
      <TabAdvanceButton label="Next" onPress={() => goToConfirm()} />
    </>
  );
};

export default PaymentScreen;
