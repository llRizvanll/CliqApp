import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { icons, COLORS, FONTS, SIZES } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStackParamList, HomeBottmTabParamList } from '../src/types/NavigationTypes';
// screens
import { Home } from '../screens/';
import Cart from '../screens/Cart';
import Category from '../screens/Categories';
import Product from '../screens/Detail';
import ProductList from '../screens/ProductList';
import Splashscreen from '../screens/Splash/SplashScreen';

const Stack = createStackNavigator<HomeStackParamList>()
const Tab = createBottomTabNavigator<HomeBottmTabParamList>()

function HomeTabs() {
    return (
        <Tab.Navigator initialRouteName="Home"
            tabBarOptions={{
                labelStyle: { ...FONTS.home_btm_text },
                inactiveTintColor: COLORS.black,
                activeTintColor: COLORS.light2,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }} />
            <Tab.Screen
                name="Category"
                component={Category}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="format-list-bulleted-square" color={color} size={size} />
                    )
                }} />
            <Tab.Screen
                name="Brand"
                component={Home}
                listeners={{
                    tabPress: e => {
                        e.preventDefault()
                    }
                }}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cards-outline" color={color} size={size} />
                    )
                }} />
            <Tab.Screen
                name="Account"
                component={Home}
                listeners={{
                    tabPress: e => {
                        e.preventDefault()
                    }
                }}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
                    )
                }} />
            <Tab.Screen
                name="MyBag"
                component={Home}
                listeners={{
                    tabPress: e => {
                        e.preventDefault()
                    }
                }}
                options={{
                    title: 'My Bag',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shopping-outline" color={color} size={size} />
                    )
                }} />
        </Tab.Navigator >
    )
}

export default function HomeNavigator() {
    const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>()
    return (
        <Stack.Navigator initialRouteName="Splashscreen">
            <Stack.Screen
                name="Home"
                component={HomeTabs}
                options={{
                    title: 'JUST CLIQ',
                    headerStyle: {
                        //backgroundColor: '#f4511e',
                    },
                    headerTintColor: COLORS.lightGray,
                    headerTitleStyle: {
                        ...FONTS.navTitle
                    },
                    headerLeft: ({ onPress }) => (
                        <TouchableOpacity
                            style={{ marginLeft: SIZES.padding }}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
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