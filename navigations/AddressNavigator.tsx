import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { icons, COLORS, FONTS, SIZES } from '../constants';
import { AddressStackParamList } from '../src/types/NavigationTypes';
//screens
import Address from '../screens/Forms/Address';

const Stack = createStackNavigator<AddressStackParamList>()

export default function AddressNavigator() {
    const navigation = useNavigation<StackNavigationProp<AddressStackParamList>>()
    return (
        <Stack.Navigator initialRouteName={'Address'}>
            <Stack.Screen
                name="Address"
                component={Address}
                options={{
                    title: 'Address',
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
                            onPress={() => navigation.navigate('Home')}>
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
        </Stack.Navigator>
    );
}