import { Dimensions, TextStyle } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#ABAFB8',
  gray: '#BEC1D2',
  light1: '#f2f2f2',
  light2: '#8c8c8c',
  cat_title_color: '#212121',
};

export const SIZES: { [key: string]: number } = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  navTitle: 25,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS: { [key: string]: TextStyle } = {
  // export const FONTS = {
  navTitle: { fontFamily: 'CarmenSans-Thin', fontSize: SIZES.navTitle },
  largeTitleBold: { fontFamily: 'CarmenSans-SemiBold', fontSize: SIZES.h2 },
  h1: { fontFamily: 'CarmenSans-SemiBold', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'CarmenSans-SemiBold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'CarmenSans-SemiBold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'CarmenSans-SemiBold', fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: 'CarmenSans-SemiBold', fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'CarmenSans-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  big_button_text: { fontFamily: 'Rubik-Regular', fontSize: 18, lineHeight: 60 },
  checkout_btn_text: {
    fontFamily: 'Rubik-Regular',
    fontSize: 24,
    lineHeight: 60,
  },
  product_title_text: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
    lineHeight: 22,
  },
  cart_text: {
    fontFamily: 'Rubik-ExtraBold',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
  },
  home_btm_text: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
  },
  product_sub_title_text: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 16,
    lineHeight: 22,
  },
  cat_title_text: {
    fontFamily: 'Rubik-VariableFont_wght',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
  prod_list_title_text: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  prod_list_brand_title_text: {
    fontFamily: 'Rubik-VariableFont_wght',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
  },
  prod_list_offer_title_text: {
    fontFamily: 'Rubik-Bold',
    fontSize: 10,
    lineHeight: 18,
    fontWeight: '400',
  },
  prod_list_price_text: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  box_shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 15,
  },
  home_menu_box_shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
