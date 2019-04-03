import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-cross-platform-responsive-dimensions';
import StyleConfig from './StyleConfig';
const NativeTextStyles = StyleSheet.create({
    labelText:{
        fontSize: StyleConfig.fontSizeH1,
        color: 'black',
        fontWeight: 'bold',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      },
    titleText:{
        fontSize: StyleConfig.fontSizeH2,
        color: 'darkgray',
        fontWeight: 'bold',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      },
      subTitleText: {
        fontSize: StyleConfig.fontSizeH2,
        color: 'darkgray',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      },
      primaryText:{
        fontSize: StyleConfig.fontSizeH3,
        color: '#87cefa',
        fontWeight: 'normal',
        padding: responsiveHeight(2)
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      },
      secondaryText: {
        fontSize: StyleConfig.fontSizeH4,
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      }

});

export default NativeTextStyles
