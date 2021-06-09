/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../constants';

const ProductList = ({navigation}) => {
  const [product_list, setProductList] = React.useState([
    {
      id: 0,
      name: 'Rangriti Blue Printed A-Line Dress',
      price: 1079,
      brand_name: 'Rangriti',
      offer: '40% Off',
      img: 'https://img.tatacliq.com/images/i6/437Wx649H/MP000000007288363_437Wx649H_20200716044236.jpeg',
      type: 'women',
    },
    {
      id: 1,
      name: 'GAP Purple Full Length Shirt Dress',
      price: 2098,
      brand_name: 'GAP',
      offer: '45% Off',
      img: 'https://img.tatacliq.com/images/i7/437Wx649H/MP000000009096587_437Wx649H_202103170225581.jpeg',
      type: 'women',
    },
    {
      id: 2,
      name: 'PlusS Mustard Floral Print Dress',
      price: 809,
      brand_name: 'PlusS',
      offer: '70% Off',
      img: 'https://img.tatacliq.com/images/i6/437Wx649H/MP000000005559578_437Wx649H_20200122195119.jpeg',
      type: 'women',
    },
    {
      id: 3,
      name: 'PlusS Yellow Printed Below Knee Dress',
      price: 689,
      brand_name: 'PlusS',
      offer: '70% Off',
      img: 'https://img.tatacliq.com/images/i3/437Wx649H/MP000000004774937_437Wx649H_20190512205828.jpeg',
      type: 'women',
    },
    {
      id: 4,
      name: 'Rangriti Blue Printed A-Line Dress',
      price: 1079,
      brand_name: 'Rangriti',
      offer: '40% Off',
      img: 'https://img.tatacliq.com/images/i6/437Wx649H/MP000000007288363_437Wx649H_20200716044236.jpeg',
      type: 'women',
    },
    {
      id: 5,
      name: 'GAP Purple Full Length Shirt Dress',
      price: 2098,
      brand_name: 'GAP',
      offer: '45% Off',
      img: 'https://img.tatacliq.com/images/i7/437Wx649H/MP000000009096587_437Wx649H_202103170225581.jpeg',
      type: 'women',
    },
    {
      id: 6,
      name: 'PlusS Mustard Floral Print Dress',
      price: 809,
      brand_name: 'PlusS',
      offer: '70% Off',
      img: 'https://img.tatacliq.com/images/i6/437Wx649H/MP000000005559578_437Wx649H_20200122195119.jpeg',
      type: 'women',
    },
    {
      id: 7,
      name: 'PlusS Yellow Printed Below Knee Dress',
      price: 689,
      brand_name: 'PlusS',
      offer: '70% Off',
      img: 'https://img.tatacliq.com/images/i3/437Wx649H/MP000000004774937_437Wx649H_20190512205828.jpeg',
      type: 'women',
    },
  ]);
  function renderProductList(item, index) {
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
            <View style={{zIndex: 20, position: 'absolute'}}>
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
              style={{flex: 7, backgroundColor: COLORS.white, marginBottom: 4}}>
              <Image
                resizeMode="contain"
                source={{uri: item.img}}
                style={{height: 240, width: '100%'}}
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
                style={{color: COLORS.black, ...FONTS.prod_list_title_text}}>
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
        renderItem={({item, index}) => renderProductList(item, index)}
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
