/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import {ScrollView} from 'react-native-gesture-handler';

const Cart = ({route, navigate}) => {
  var {id, name, img, type, price} = route.params;
  //const name = "GAP Light Blue Above Knee Shift Dress", img = "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009096563_437Wx649H_202103170224521.jpeg",
  //price = 1588
  if (price.toString().includes('$'))
    price = Math.round(price.replace('$', ''));
  else if (price.toString().includes('₹'))
    price = Math.round(price.replace('₹', ''));

  const discount_value = Math.round(price / 40);
  const discounted_price = Math.round(price - discount_value);
  return (
    <View
      style={{height: '100%', width: '100%', backgroundColor: COLORS.light1}}>
      <ScrollView>
        <View
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            height: 260,
            margin: 10,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{flex: 2, justifyContent: 'space-evenly'}}>
              <Text style={{...FONTS.product_title_text, paddingBottom: 10}}>
                {name}
              </Text>
              <Text style={{...FONTS.product_title_text, paddingBottom: 10}}>
                ₹{price}
              </Text>
              <Text
                style={{
                  ...FONTS.product_sub_title_text,
                  paddingBottom: 10,
                  color: '#b71c1c',
                }}>
                (40%) Off Coupon Applicable
              </Text>
              <Text
                style={{...FONTS.product_sub_title_text, color: COLORS.black}}>
                Delivery By 21st July
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Image
                source={{uri: img}}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 120,
                }}
              />
            </View>
          </View>
          <View
            style={{
              padding: 10,
              position: 'absolute',
              bottom: 0,
              marginBottom: 20,
              marginLeft: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
            }}>
            <View
              style={{
                flex: 3,
                marginTop: 6,
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Image
                resizeMode="cover"
                source={icons.save_tag}
                style={{height: 20, width: 20}}></Image>
              <Text style={{...FONTS.cart_text}}>SAVE</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.cart_text}}>Qty : 1</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            borderRadius: 4,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 60,
            padding: 10,
            minHeight: 200,
            height: '100%',
            flexDirection: 'column',
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View style={{flex: 4}}>
              <Text style={{...FONTS.cart_text}}>Bag Total</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.product_title_text}}>₹{price}</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{flex: 4}}>
              <Text style={{...FONTS.cart_text}}>Shipping Charge</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.product_title_text}}>₹{price}</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{flex: 4}}>
              <Text style={{...FONTS.product_title_text}}>
                Product Discount
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.product_title_text, color: '#00964D'}}>
                - ₹{discount_value}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{flex: 4}}>
              <Text style={{...FONTS.product_title_text}}>Total Payable</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.product_title_text}}>
                ₹{discounted_price}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          ...FONTS.box_shadow,
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          height: 70,
          backgroundColor: '#000',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#DA1C4C',
            width: '100%',
            minHeight: 60,
            height: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: COLORS.white, ...FONTS.checkout_btn_text}}>
              CHECKOUT
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
export default Cart;
