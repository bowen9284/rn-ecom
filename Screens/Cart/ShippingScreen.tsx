import { Picker } from '@react-native-community/picker';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, Box } from '../../Components/restyle/Restyle';
import Form from '../../Shared/Form/Form';
import Input from '../../Shared/Form/Input';

const countriesList = require('../../assets/countries.json');

interface Props {
  cartItems: [Product];
}

const ShippingScreen = (props: Props) => {
  const { cartItems } = props;

  const [orderItems, setOrderItems] = useState<Product[]>();
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState<Country>();
  const [countries, setCountries] = useState<Country[]>([]);
  const [phone, setPhone] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOrderItems(cartItems);
    setCountries(countriesList);
  }, []);

  return (
    <Box flex={1}>
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
            {countries.map((country) => {
              <Picker.Item label={country.code} value={country.name} />;
            })}
          </Picker>
        </Form>
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default ShippingScreen;
