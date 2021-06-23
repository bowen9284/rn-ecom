import { Picker } from '@react-native-community/picker';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Box } from '../../Shared/Restyle/Restyle';
import { useAppSelector } from '../../hooks/redux';
import { CheckoutTabParamList } from '../../Navigators/CheckoutNavigator';
import Form from '../../Shared/Form/Form';
import Input from '../../Shared/Form/Input';
import TabAdvanceButton from '../../Shared/Form/TabAdvanceButton';

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
  const [countries, setCountries] = useState<Country[]>([]);
  const [phone, setPhone] = useState('781-777-2323');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOrderItems(cart.items);
    setCountries(countriesList);
  }, []);

  const goToCheckout = () => {
    let order: Order = {
      city,
      country,
      dateOfOrder: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
    };

    navigation.navigate('Payment', { order: order });
  };

  return (
    <>
      <Box>
        <KeyboardAwareScrollView
          viewIsInsideTabBar={true}
          extraHeight={200}
          enableOnAndroid={true}
        >
          <Form title="Shipping Address">
            <Input
              placeholder="Phone"
              name="phone"
              value={phone}
              keyboardType="numeric"
              onChangeText={(text) => setPhone(text)}
            />
            <Input
              placeholder="Shipping Address"
              name="shipping address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
            <Input
              placeholder="Shipping Address 2"
              name="shipping address 2"
              value={address2}
              keyboardType="default"
              onChangeText={(text) => setAddress2(text)}
            />
            <Input
              placeholder="City"
              name="city"
              value={city}
              keyboardType="default"
              onChangeText={(text) => setCity(text)}
            />
            <Input
              placeholder="Zip Code"
              name="zip code"
              value={zip}
              keyboardType="default"
              onChangeText={(text) => setZip(text)}
            />
            <Picker
              testID="country-picker"
              selectedValue={country}
              onValueChange={(item) => setCountry(item)}
            >
              <Picker.Item label="United States" value="US" />
              <Picker.Item label="Java" value="java" />

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
