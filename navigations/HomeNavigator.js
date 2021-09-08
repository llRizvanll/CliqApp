import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { icons, COLORS, FONTS, SIZES } from '../constants';
// screens
import { Home } from '../screens/';
import Cart from '../screens/Cart';
import Category from '../screens/Categories';
import Product from '../screens/Detail';
import ProductList from '../screens/ProductList';
import Splashscreen from '../screens/Splash/SplashScreen';

const Stack = createStackNavigator()

export default function HomeNavigator() {
    const navigation = useNavigation()
    return (
        <Stack.Navigator initialRouteName={'Splashscreen'}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'JUST CLIQ',
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
                            onPress={() => navigation.openDrawer()}>
                            <Image
                                source={icons.menu}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: SIZES.padding }}
                            onPress={() => console.log('Pressed')}>
                            <Image
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="Splashscreen"
                component={Splashscreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
}