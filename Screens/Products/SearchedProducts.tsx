import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Content,
  Left,
  List,
  Body,
  ListItem,
  Thumbnail,
  Text,
  Container,
} from 'native-base';

interface Props {
  productsFiltered: Product[];
}

const SearchedProducts = (props: Props) => {
  const { productsFiltered } = props;

  return (
    <Content contentContainerStyle={styles.center}>
      <List>
        {productsFiltered.length > 0 ? (
          productsFiltered.map((item: Product) => {
            console.log('searched', item.name);
            <ListItem key={item.name} avatar>
              <Left>
                {item.image ? (
                  <Thumbnail source={{ uri: item.image }} />
                ) : (
                  <Thumbnail
                    source={require('../../assets/placeholder.jpeg')}
                  />
                )}
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.description}</Text>
              </Body>
            </ListItem>;
          })
        ) : (
          <View>
            <Text>No Products found</Text>
          </View>
        )}
      </List>
    </Content>
  );
};

export default SearchedProducts;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
