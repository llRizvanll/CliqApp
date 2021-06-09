/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants';
import {ScrollView} from 'react-native-gesture-handler';

const Product = ({route, navigation}) => {
  var {id, name, img, type, price} = route.params;

  if (price.toString().includes('$')) {
    price = Math.round(price.replace('$', ''));
  } else if (price.toString().includes('₹')) {
    price = Math.round(price.replace('₹', ''));
  }

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#fafafa'}}>
      <ScrollView>
        <View style={{height: 500, padding: 2}}>
          <Image
            source={{uri: img}}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        {/* <View>
                    <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.black, ...FONTS.body2 }}>{name}</Text>
                    <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.black, ...FONTS.body3 }}>{type}</Text>
                    <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.black, ...FONTS.h1 }}>{price}</Text>
                    <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                            <View>
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Select size</Text>
                            </View>
                            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: SIZES.radius }}>

                            </View>
                    </View>
                </View> */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 10,
          }}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{...FONTS.product_title_text}}>{name}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{...FONTS.product_title_text}}>₹{price}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 10,
          }}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{...FONTS.product_sub_title_text}}>
              short description
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{...FONTS.product_sub_title_text}}>(40%)</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          display: 'flex',
          ...FONTS.box_shadow,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          bottom: 0,
          height: 70,
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fafafa',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart', {
                id: id,
                name: name,
                img: img,
                type: type,
                price: price,
              });
            }}>
            <Text style={{color: COLORS.black, ...FONTS.big_button_text}}>
              ADD TO BAG
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#DA1C4C',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart', {
                id: id,
                name: name,
                img: img,
                type: type,
                price: price,
              });
            }}>
            <Text style={{color: COLORS.white, ...FONTS.big_button_text}}>
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default Product;
