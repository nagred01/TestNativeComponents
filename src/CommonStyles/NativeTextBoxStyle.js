import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-cross-platform-responsive-dimensions';

const NativeTextBoxStyles = StyleSheet.create({
    primaryTextBox:{
        fontSize: responsiveFontSize(2),
        color: 'black',
        fontWeight: 'normal',
        fontFamily: 'Cochin',
        fontStyle: 'normal',
        borderColor: 'black',
        borderWidth: responsiveWidth(0.2),
        borderRadius: responsiveWidth(1),
        padding : responsiveHeight(0.5),
        margin: responsiveHeight(2),
      },
    secondaryTextBox:{
        fontSize: responsiveFontSize(2),
        color: 'blue',
        fontWeight: 'normal',
        fontFamily: 'Cochin',
        fontStyle: 'normal',
        borderColor: 'black',
        borderWidth: responsiveWidth(0.2),
        borderRadius: responsiveWidth(1),
        padding : responsiveHeight(0.5),
        margin: responsiveHeight(2),
      },
      emailTextBox: {
        fontSize: responsiveFontSize(2.5),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: 40, 
        borderColor: 'black',
        borderWidth: 1,
      },
      userNameTextBox:{
        fontSize: responsiveFontSize(2.5),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: 40, 
        borderColor: 'black',
        borderWidth: 1,
      },
      passwordTextBox: {
        fontSize: responsiveFontSize(2.5),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: 50, 
        borderColor: 'black',
        borderWidth: 1,
      },
      telephoneNumberTextBox: {
        fontSize: responsiveFontSize(2.5),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: 50, 
        borderColor: 'black',
        borderWidth: 1,
      },
      numberTextBox: {
        fontSize: responsiveFontSize(2.5),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: 50, 
        borderColor: 'black',
        borderWidth: 1,
      },


});

export default NativeTextBoxStyles