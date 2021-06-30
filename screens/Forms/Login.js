import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import {COLORS, SIZES, FONTS} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';


const Login = ({navigation}) => {
  const [formState, setFormState] = useState([])
  const onAlertTriggered = (message) => {
    return (
      Alert.alert("Add Address",message,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
    );
  }
  const onHandleChange= (label, value ) => {
    setFormState({
      ...formState,
      [label]: value
    })
    console.log('form phone number : ', formState.phone_number);
  }
  const onSubmit = () => {
    if(formState.phone_number!== undefined && formState.phone_number.length == 10) {
      console.log(
        formState
      )
    }
    else
      onAlertTriggered(JSON.stringify(formState))
  }
  return(
    <View  style={styles.container}>
      <View style={styles.sub_container}>
        <ScrollView>
          <Text style={{...FONTS.checkout_btn_text, fontWeight:'bold', marginLeft:6}}>Welcome to Cliq App</Text>
          <Text style={{...FONTS.home_btm_text, marginLeft:6}}>Please enter your mobile number</Text>
          <View style={styles.input_container}>
            <View style={{flexDirection:'row'}}>
              <Text style={{justifyContent:'center',padding:6,
                margin:2, alignContent:'center', alignSelf:'center'}}>+91</Text>
              <TextInput placeholder={'Mobile Number*'}
                         keyboardType={"numeric"}
                         maxLength={12}
                         returnKeyType={"done"}
                         onChangeText={phone => onHandleChange("phone_number", phone)}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
          </View>

          <Text style={{...FONTS.home_btm_text, marginLeft:6, marginTop:10}}>Please enter OTP received on your mobile number</Text>
          <View style={{flexDirection:'row'}}>
            <View style={styles.input_otp_container}>
              <TextInput numberOfLines={1} maxLength={1} keyboardType={"numeric"}></TextInput>
            </View>
            <View style={styles.input_otp_container}>
              <TextInput numberOfLines={1} maxLength={1} keyboardType={"numeric"}></TextInput>
            </View>
            <View style={styles.input_otp_container}>
              <TextInput numberOfLines={1} maxLength={1} keyboardType={"numeric"}></TextInput>
            </View>
            <View style={styles.input_otp_container}>
              <TextInput numberOfLines={1} maxLength={1} keyboardType={"numeric"}></TextInput>
            </View>
            <View style={styles.input_otp_container}>
              <TextInput numberOfLines={1} maxLength={1} keyboardType={"numeric"}></TextInput>
            </View>
            <View style={styles.input_otp_container}>
              <TextInput numberOfLines={1} maxLength={1} keyboardType={"numeric"}></TextInput>
            </View>
          </View>
          <Text style={{...FONTS.big_button_text, marginLeft:0,alignSelf:'center', color:'#0077b6'}}>Resend OTP</Text>
        </ScrollView>

      </View>
      <View style={styles.submit_btn_container}>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.submit_box}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ececec',
  },
  sub_container:{
    height: '85%',
    width: '96%',
    margin:8,
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
  },
  input_container:{
    width: '96%',
    height: 40,
    position:'relative',
    margin:5,
    paddingLeft:4,
    paddingRight:4,
    borderWidth:1,
    borderColor:'#d2d2d2',
    borderRadius: 2,
    borderStyle: 'solid',
  },
  input_box:{
    backgroundColor:'#00000000',
    color:'#212121',
    ...FONTS.home_btm_text
  },
  submit_btn_container:{
    backgroundColor: '#DA1C4C',
    height: 50,
    width:'60%',
    bottom:0,
    position:'absolute',
    marginBottom:10,
    alignSelf:'center',
    alignItems: 'center',
    borderRadius:5,
    justifyContent: 'center',
  },
  submit_box:{color: COLORS.white, ...FONTS.box_shadow, ...FONTS.h2,fontWeight:'bold'},
  input_otp_container:{
    minWidth:'10%',
    flex:1,
    justifyContent:'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: 40,
    position:'relative',
    margin:6,
    paddingLeft:4,
    paddingRight:4,
    borderWidth:2,
    borderColor:'#d2d2d2',
    borderRadius: 2,
    borderStyle: 'solid',
  }
});

export  default Login;
