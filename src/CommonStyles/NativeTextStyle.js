import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-cross-platform-responsive-dimensions';

const NativeTextStyles = StyleSheet.create({
    labelText:{
        fontSize: responsiveFontSize(4),
        color: 'black',
        fontWeight: 'bold',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      },
    titleText:{
        fontSize: responsiveFontSize(3.5),
        color: 'darkgray',
        fontWeight: 'bold',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      },
      subTitleText: {
        fontSize: responsiveFontSize(3),
        color: 'darkgray',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      },
      primaryText:{
        fontSize: responsiveFontSize(2.5),
        color: '#87cefa',
        fontWeight: 'normal',
        padding: responsiveHeight(2)
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      },
      secondaryText: {
        fontSize: responsiveFontSize(2),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
      }

});

export default NativeTextStyles