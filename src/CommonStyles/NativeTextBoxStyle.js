import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-cross-platform-responsive-dimensions';
import StyleConfig from './StyleConfig';
const NativeTextBoxStyles = StyleSheet.create({
    primaryTextBox:{
        fontSize: StyleConfig.fontSizeH4,
        color: 'black',
        fontWeight: 'normal',
        fontFamily: 'Cochin',
        fontStyle: 'normal',
        borderColor: 'black',
        borderWidth: StyleConfig.countPixelRatio(1),
        borderRadius: StyleConfig.countPixelRatio(4),
        padding : StyleConfig.countPixelRatio(2),
        margin: StyleConfig.countPixelRatio(12),
      },
    secondaryTextBox:{
        fontSize:StyleConfig.fontSizeH4,
        color: 'blue',
        fontWeight: 'normal',
        fontFamily: 'Cochin',
        fontStyle: 'normal',
        borderColor: 'black',
        borderWidth: StyleConfig.countPixelRatio(1),
        borderRadius: StyleConfig.countPixelRatio(4),
        padding : StyleConfig.countPixelRatio(2),
        margin: StyleConfig.countPixelRatio(12),
      },
      emailTextBox: {
        fontSize: StyleConfig.fontSizeH3,
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: StyleConfig.countPixelRatio(40),
        borderColor: 'black',
        borderWidth:  StyleConfig.countPixelRatio(1),
      },
      userNameTextBox:{
        fontSize: StyleConfig.fontSizeH3,
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height:  StyleConfig.countPixelRatio(40),
        borderColor: 'black',
        borderWidth: StyleConfig.countPixelRatio(1),
      },
      passwordTextBox: {
        fontSize: StyleConfig.fontSizeH3,
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height:  StyleConfig.countPixelRatio(50),
        borderColor: 'black',
        borderWidth:  StyleConfig.countPixelRatio(1),
      },
      telephoneNumberTextBox: {
        fontSize: StyleConfig.fontSizeH3,
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height:  StyleConfig.countPixelRatio(50),
        borderColor: 'black',
        borderWidth:  StyleConfig.countPixelRatio(1),
      },
      numberTextBox: {
        fontSize: StyleConfig.fontSizeH3,
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height:  StyleConfig.countPixelRatio(50),
        borderColor: 'black',
        borderWidth:  StyleConfig.countPixelRatio(1),
      },


});

export default NativeTextBoxStyles
