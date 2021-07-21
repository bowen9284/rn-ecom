import { Picker } from '@react-native-community/picker';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Box } from '../../Components/Restyle/Restyle';
import { useAppSelector } from '../../hooks/redux';
import { CheckoutTabParamList } from '../../Navigators/CheckoutNavigator';
import Form from '../../Components/Form/Form';
import Input from '../../Components/Form/Input';
import TabAdvanceButton from '../../Components/Form/TabAdvanceButton';
import Product from '../../Models/Product';
import Country from '../../Models/Country';
import Order from '../../Models/Order';

const countriesList = require('../../assets/countries.json');

export type ShippingScreenNavigationProp = MaterialTopTabNavigationProp<
  CheckoutTabParamList,
  'Shipping'
>;

interface Props {
  navigation: ShippingScreenNavigationProp;
}

const ShippingScreen = (props: Props) => {
  const { navigation } = props;
  const cart = useAppSelector((state) => state.cart);

  const [orderItems, setOrderItems] = useState<Product[]>([]);
  const [address, setAddress] = useState('123 Main street');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('Providence');
  const [zip, setZip] = useState<string>('55555');
  const [country, setCountry] = useState<string>('United States');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [countries, setCountries] = useState<Country[]>([]);
  const [phone, setPhone] = useState('781-777-2323');

  useEffect(() => {
    setOrderItems(cart.items);
    setCountries(countriesList);
  }, []);

  const goToCheckout = () => {
    const order: Order = {
      city,
      country,
      dateOfOrder: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
    };

    navigation.navigate('Payment', { order });
  };

  return (
    <>
      <Box>
        <KeyboardAwareScrollView
          viewIsInsideTabBar
          extraHeight={200}
          enableOnAndroid
        >
          <Form title="Shipping Address">
            <Input
              placeholder="Phone"
              value={phone}
              keyboardType="numeric"
              onChangeText={(text: string) => setPhone(text)}
            />
            <Input
              placeholder="Shipping Address"
              value={address}
              onChangeText={(text: string) => setAddress(text)}
            />
            <Input
              placeholder="Shipping Address 2"
              value={address2}
              onChangeText={(text: string) => setAddress2(text)}
            />
            <Input
              placeholder="City"
              value={city}
              onChangeText={(text: string) => setCity(text)}
            />
            <Input
              placeholder="Zip Code"
              value={zip}
              onChangeText={(text: string) => setZip(text)}
            />
            <Picker
              testID="country-picker"
              selectedValue={country}
              onValueChange={(item: any) => setCountry(item)}
            >
              <Picker.Item label="United States" value="US" />
              <Picker.Item label="Canada" value="Canada" />

              {/* {countries.map((country) => {
              <Picker.Item label={country.code} value={country.name} />;
            })} */}
            </Picker>
          </Form>
        </KeyboardAwareScrollView>
      </Box>
      <TabAdvanceButton label="Next" onPress={() => goToCheckout()} />
    </>
  );
};

export default ShippingScreen;
