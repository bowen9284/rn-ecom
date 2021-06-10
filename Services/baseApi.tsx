import { Platform } from 'react-native';

export const baseUrl = {
  baseUrl:
    Platform.OS === 'android'
      ? 'http://10.0.2.2.3000/api/v1/'
      : 'http://localhost:3000/api/v1/',
};
