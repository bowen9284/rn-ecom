import React from 'react';
import { TouchableOpacity, FlatList, Platform, Pressable } from 'react-native';
import ProductCard from './ProductCard';
import { ProductsScreenNavigationProp } from './ProductsScreen';

interface Props {
  items: Product[];
  navigation: ProductsScreenNavigationProp;
}

const ProductList = (props: Props) => {
  const { items, navigation } = props;
  return (
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <>
          {Platform.OS === 'ios' ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  product: item,
                })
              }
            >
              <ProductCard key={item.name} product={item} />
            </TouchableOpacity>
          ) : (
            <Pressable
              android_ripple={{ color: '#8C6FF7', borderless: true }}
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  product: item,
                })
              }
            >
              <ProductCard key={item.name} product={item} />
            </Pressable>
          )}
        </>
      )}
    />
  );
};

export default ProductList;
