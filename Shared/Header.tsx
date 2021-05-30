import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';

interface Props {}

const Header = (props: Props) => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.jpeg')}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    height: 50,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
});
