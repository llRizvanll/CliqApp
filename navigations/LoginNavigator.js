import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../constants';
// screens
import Login from "../screens/Forms/Login";

const Stack = createStackNavigator()

export default function LoginNavigator() {
    const navigation = useNavigation()
    return (
        <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                    headerStyle: {
                        //backgroundColor: '#f4511e',
                    },
                    headerTintColor: COLORS.lightGray,
                    headerTitleStyle: {
                        ...FONTS.navTitle,
                    },
                }}
            />
        </Stack.Navigator>
    );
}