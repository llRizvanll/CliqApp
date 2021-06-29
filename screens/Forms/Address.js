import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,TextInput} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';

const Address = ({navigation}) => {
  return (
    <View  style={styles.container}>
      <View style={styles.sub_container}>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row',padding:6, }}>
            <Text style={{...FONTS.big_button_text, fontWeight:'bold', marginLeft:6}}>Add Address</Text>
          </View>
          <View style={{flex: 3, flexDirection: 'column', marginLeft:5, marginRight:5}}>
            <View style={styles.input_container}>
              <TextInput placeholder={'Enter your PIN Code*'} style={styles.input_box}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'First Name*'} style={styles.input_box}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Last Name*'} style={styles.input_box}></TextInput>
            </View>
            <View style={styles.inputarea_container}>
              <TextInput placeholder={'Address*'} style={styles.input_box} multiline={true} numberOfLines={4}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Landmark*'} style={styles.input_box}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'City/district*'} style={styles.input_box}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'State*'} style={styles.input_box}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Phone number*'} style={styles.input_box}></TextInput>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{...FONTS.big_button_text, marginLeft:10 ,fontWeight:'bold', marginTop:10}}>Make this default address</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.submit_btn_container}>
        <TouchableOpacity onPress={() => {}}>
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
