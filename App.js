/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, TouchableOpacity, LogBox} from 'react-native';
import {Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import {Home} from './screens/';

import {images, icons, COLORS, FONTS, SIZES} from './constants';

import Product from './screens/Detail';
import Category from './screens/Categories';
import ProductList from './screens/ProductList';
import Cart from './screens/Cart';
import Splashscreen from './screens/Splash/SplashScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function stackMenuScreens({navigation}) {
  return (
    <Stack.Navigator initialRouteName={'Category'}>
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          title: 'Categories',
          headerStyle: {
            //backgroundColor: '#f4511e',
          },
          headerTintColor: COLORS.lightGray,
          headerTitleStyle: {
            ...FONTS.navTitle,
          },
          headerLeft: ({onPress}) => (
            <TouchableOpacity
              style={{marginLeft: SIZES.padding}}
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
              style={{marginRight: SIZES.padding}}
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
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

function stackProductListScreen({navigation}) {
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
          headerLeft: ({onPress}) => (
            <TouchableOpacity
              style={{marginLeft: SIZES.padding}}
              onPress={() => navigation.back()}>
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
    </Stack.Navigator>
  );
}

function stackScreens({navigation}) {
  return (
    <Stack.Navigator initialRouteName={'Splashscreen'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'TRENDY ZONE',
          headerStyle: {
            //backgroundColor: '#f4511e',
          },
          headerTintColor: COLORS.lightGray,
          headerTitleStyle: {
            ...FONTS.navTitle,
          },
          headerLeft: ({onPress}) => (
            <TouchableOpacity
              style={{marginLeft: SIZES.padding}}
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
              style={{marginRight: SIZES.padding}}
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
const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="HomePage"
          options={{drawerLabel: 'Home'}}
          component={stackScreens}
        />

        <Drawer.Screen
          name="FirstSideMenuItem"
          options={{drawerLabel: 'Products'}}
          component={stackProductListScreen}
        />
        <Drawer.Screen
          name="FirstSideCMenuItem"
          options={{drawerLabel: 'Categories'}}
          component={stackMenuScreens}
        />
        <Drawer.Screen
          name="SecondSideMenuItem"
          options={{drawerLabel: 'Account'}}
          component={stackScreens}
        />
        <Drawer.Screen
          name="ThirdSideMenuItem"
          options={{drawerLabel: 'Addresses'}}
          component={stackScreens}
        />
        <Drawer.Screen
          name="FourthSideMenuItem"
          options={{drawerLabel: 'Call US'}}
          component={stackScreens}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
