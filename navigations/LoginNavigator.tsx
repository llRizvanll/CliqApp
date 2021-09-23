import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../constants';
import { LoginStackParamList } from '../src/types/NavigationTypes';
// screens
import Login from "../screens/Forms/Login";

const Stack = createStackNavigator()

export default function LoginNavigator() {
    const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>()
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