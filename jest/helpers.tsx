import React from 'react';

import { Platform } from 'react-native';

export const onAndroid = () => Platform.OS === 'android'

export const oniOS = () => Platform.OS === 'ios'
