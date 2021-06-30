import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import {COLORS, SIZES, FONTS} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';

const Address = ({navigation}) => {
  const [formState, setFormState] = useState([])
  const onAlertTriggered = (message) => {
    return (
      Alert.alert("Add Address",message,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
    );
  }
  const onSubmit = () => {
    if(formState.first_name!== undefined && formState.first_name.length> 2){
      if(formState.last_name!== undefined && formState.last_name.length> 2){
          if(formState.pincode!== undefined && formState.pincode.length==6){
            if(formState.f_address!== undefined && formState.f_address.length> 5){
              if(formState.landmark_name!== undefined && formState.landmark_name.length> 3){
                if(formState.city_name!== undefined && formState.city_name.length> 3){
                  if(formState.state_name!== undefined && formState.state_name.length> 3){
                    if(formState.phone_number!== undefined && formState.phone_number.length == 10){
                      console.log(
                        formState
                      )
                      onAlertTriggered(JSON.stringify(formState))
                    }
                    else
                      onAlertTriggered("Please enter proper phone number.")
                  }
                  else
                    onAlertTriggered("Please enter proper state name.")
                }
                else
                  onAlertTriggered("Please enter proper city name.")
              }
              else
                onAlertTriggered("Please enter house landmark details.")
            }
            else
              onAlertTriggered("Please enter full address with house details.")
          }
          else
            onAlertTriggered("Please enter six digit Pin code")
      }
      else
        onAlertTriggered("Please enter proper Last name")
    }
    else
      onAlertTriggered("Please enter proper First name")

  }
  const onHandleChange= (label, value ) => {
    setFormState({
      ...formState,
      [label]: value
    })
    console.log('form phone number : ', formState.phone_number);
  }
  return (
    <View  style={styles.container}>
      <View style={styles.sub_container}>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row',padding:6, }}>
            <Text style={{...FONTS.big_button_text, fontWeight:'bold', marginLeft:6}}>Add Address</Text>
          </View>
          <View style={{flex: 3, flexDirection: 'column', marginLeft:5, marginRight:5}}>
            <View style={styles.input_container}>
              <TextInput placeholder={'Enter your PIN Code*'}
                         keyboardType={"numeric"}
                         maxLength={6}
                         returnKeyType={"done"}
                         onChangeText={pincode => onHandleChange("pincode", pincode)}
                         placeholderTextColor={'#212121'} style={styles.input_box}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'First Name*'}
                         textContentType={"name"}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={first_name => onHandleChange("first_name", first_name)}
                         placeholderTextColor={'#212121'} style={styles.input_box}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Last Name*'}
                         textContentType={"name"}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={last_name => onHandleChange("last_name", last_name)}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.inputarea_container}>
              <TextInput placeholder={'Address* \n \n only 120 characters allowed'}
                         maxLength={120}
                         returnKeyType={"done"}
                         onChangeText={f_address => onHandleChange("f_address", f_address)}
                         style={styles.input_box} multiline={true} numberOfLines={4} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Landmark*'}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={landmark_name => onHandleChange("landmark_name", landmark_name)}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'City/district*'}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={city_name => onHandleChange("city_name", city_name)}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'State*'}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={state_name => onHandleChange("state_name", state_name)}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Phone number*'}
                         keyboardType={"numeric"}
                         maxLength={12}
                         returnKeyType={"done"}
                         onChangeText={phone => onHandleChange("phone_number", phone)}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{...FONTS.big_button_text, marginLeft:10 ,fontWeight:'bold', marginTop:10}}>Make this default address</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.submit_btn_container}>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.submit_box}>
            Save Address
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
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
  inputarea_container:{
    width: '96%',
    height: 80,
    position:'relative',
    margin:6,
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
  submit_box:{color: COLORS.white, ...FONTS.box_shadow, ...FONTS.h2,fontWeight:'bold'}
});
export default Address;
