/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons } from '../constants';
import { ProductsDummyData } from '../src/data';
import { ProductType } from '../src/types/DataTypes';

const ProductList: React.FC = () => {
  const navigation = useNavigation()
  const [product_list, setProductList] = useState<ProductType[]>(ProductsDummyData);
  function renderProductList(item: ProductType, index: number) {
    return (
      <View
        style={{
          backgroundColor: '#e5e5e5',
          padding: 1,
          height: 300,
          width: '50%',
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed on category');
            navigation.navigate('Product', {
              id: item.id,
              name: item.name,
              img: item.img,
              type: item.type,
              price: item.price,
            });
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: COLORS.white,
              alignContent: 'center',
              height: '100%',
            }}>
            <View style={{ zIndex: 20, position: 'absolute' }}>
              <Image
                resizeMode="contain"
                source={icons.discount_tag}
                style={{
                  marginTop: 10,
                  height: 20,
                  width: 60,
                  zIndex: 10,
                  position: 'absolute',
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  padding: 10,
                  color: COLORS.white,
                  ...FONTS.prod_list_offer_title_text,
                  zIndex: 20,
                }}>
                {item.offer}
              </Text>
            </View>
            <View
              style={{ flex: 7, backgroundColor: COLORS.white, marginBottom: 4 }}>
              <Image
                resizeMode="contain"
                source={{ uri: item.img }}
                style={{ height: 240, width: '100%' }}
              />
            </View>
            <View
              style={{
                flex: 3,
                paddingLeft: 16,
                marginTop: 10,
                backgroundColor: COLORS.white,
              }}>
              <Text
                style={{
                  color: COLORS.cat_title_color,
                  ...FONTS.prod_list_brand_title_text,
                }}>
                {item.brand_name}
              </Text>
              <Text
                style={{ color: COLORS.black, ...FONTS.prod_list_title_text }}>
                {item.name}
              </Text>

              <Text
                style={{
                  color: COLORS.cat_title_color,
                  ...FONTS.prod_list_price_text,
                }}>
                ₹{item.price}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={product_list}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => renderProductList(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: '100%',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default ProductList;
