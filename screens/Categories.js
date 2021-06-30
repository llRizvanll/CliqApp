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
import ProductList from './ProductList';

const Category = ({navigation}) => {
  const [category_list, setCategoryList] = React.useState([
    {
      id: 1,
      name: "Women's Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 2,
      name: "Men's Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 3,
      name: "Kids' Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 4,
      name: 'Beauty',
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 5,
      name: 'Jewellary',
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 6,
      name: 'Home Furnishings',
      bgColor: '#BF012C',
      cmp: '',
    },
  ]);
  function renderCategoryList(item, index) {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('pressed on category');
          navigation.navigate('ProductList', {});
        }}>
        <View
          style={{
            height: 20,
            padding: 20,
            margin: 6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text
              style={{
                color: '#212121',
                height:40,
                ...FONTS.cat_title_text,
                textDecorationColor:'#212121'
              }}>
              {item.name}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image source={icons.right_arrow} style={{height: 20, width: 20}} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={category_list}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => renderCategoryList(item, index)}
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
export default Category;
