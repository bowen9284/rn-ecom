import { Platform } from 'react-native';
import type { RootState } from '../Redux/store';

export const baseUrl = {
  baseUrl:
    Platform.OS === 'android'
      ? 'http://10.0.2.2.3000/api/v1/'
      : 'http://localhost:3000/api/v1/',
  prepareHeaders: (headers, { getState }) => {
    // @todo add token to redux store
    // const token = (getState() as RootState).auth.token

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGE1MzBmZDJmZDljNDZkNTg2Y2QxYTAiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MjQ0NTc3OTIsImV4cCI6MTYyNDU0NDE5Mn0.dcImHMGGwL714pqB-bRd9rqJzMt3UOXbweWzM7adE4U';
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
};