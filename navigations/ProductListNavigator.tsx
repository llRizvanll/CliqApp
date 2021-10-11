import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { icons, COLORS, FONTS, SIZES } from '../constants';
import { MenuAndProductListStackParamList } from '../src/types/NavigationTypes';
// screens
import Address from '../screens/Forms/Address';
import Cart from '../screens/Cart';
import Category from '../screens/Categories';
import Product from '../screens/Detail';
import ProductList from '../screens/ProductList';

const Stack = createStackNavigator<MenuAndProductListStackParamList>()

export default function ProductListNavigator() {
    const navigation = useNavigation<StackNavigationProp<MenuAndProductListStackParamList>>()
    return (
        <Stack.Navigator initialRouteName={'ProductList'}>
            <Stack.Screen
                name="ProductList"
                component={ProductList}
                options={{
                    title: 'Products',
                    headerStyle: {
                        //backgroundColor: '#f4511e',
                    },
                    headerTintColor: COLORS.lightGray,
                    headerTitleStyle: {
                        ...FONTS.navTitle,
                    },
                    headerLeft: ({ onPress }) => (
                        <TouchableOpacity
                            style={{ marginLeft: SIZES.padding }}
                            onPress={() => navigation.goBack()}>
                            <Image
                                source={icons.arrow_back}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Address" component={Address} />
        </Stack.Navigator>
    );
}