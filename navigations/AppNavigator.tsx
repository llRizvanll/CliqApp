import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppDrawerParamList } from '../src/types/NavigationTypes';
// navigators
import AddressNavigator from './AddressNavigator';
import HomeNavigator from './HomeNavigator';
import LoginNavigator from './LoginNavigator';
import MenuNavigator from './MenuNavigator';
import ProductListNavigator from './ProductListNavigator';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer theme={theme}>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                }}>
                <Drawer.Screen
                    name="HomePage"
                    options={{ drawerLabel: 'Home' }}
                    component={HomeNavigator}
                />
                <Drawer.Screen
                    name="Address"
                    options={{ drawerLabel: 'Address' }}
                    component={AddressNavigator}
                />
                <Drawer.Screen
                    name="Login"
                    options={{ drawerLabel: 'Login' }}
                    component={LoginNavigator}
                />
                <Drawer.Screen
                    name="ProductList"
                    options={{ drawerLabel: 'Products' }}
                    component={ProductListNavigator}
                />
                <Drawer.Screen
                    name="Categories"
                    options={{ drawerLabel: 'Categories' }}
                    component={MenuNavigator}
                />
                {/* <Drawer.Screen
                    name="SecondSideMenuItem"
                    options={{ drawerLabel: 'Account' }}
                    component={HomeNavigator}
                />
                <Drawer.Screen
                    name="ThirdSideMenuItem"
                    options={{ drawerLabel: 'Addresses' }}
                    component={HomeNavigator}
                />
                <Drawer.Screen
                    name="FourthSideMenuItem"
                    options={{ drawerLabel: 'Call US' }}
                    component={HomeNavigator}
                /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}