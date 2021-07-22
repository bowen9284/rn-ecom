import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ShippingScreen from '../Screens/Cart/ShippingScreen';
import ConfirmScreen from '../Screens/Cart/ConfirmScreen';
import PaymentScreen from '../Screens/Cart/PaymentScreen';
import Order from '../Models/Order';

export type CheckoutTabParamList = {
  Cart: undefined;
  Shipping: undefined;
  Payment: { order: Order };
  Confirm: { order: Order };
};

const Tab = createMaterialTopTabNavigator<CheckoutTabParamList>();

const CheckoutNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Shipping" component={ShippingScreen} />
    <Tab.Screen name="Payment" component={PaymentScreen} />
    <Tab.Screen name="Confirm" component={ConfirmScreen} />
  </Tab.Navigator>
);

export default CheckoutNavigator;
