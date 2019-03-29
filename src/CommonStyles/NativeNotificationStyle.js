import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-cross-platform-responsive-dimensions';

const NativeNotificationStyles = StyleSheet.create({
    alertError: {
        color: '#721c24',
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb'
    },
    alerErrorText:{
        
    },
    alertSuccessText:{

    },
    alertSuccess: {
        color: '#155724',
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb'
    },
    flexWrap:{
        flexWrap :"wrap"
    },
    alert: {
        flexDirection: 'row',
        // flexGrow:1,
        margin: responsiveHeight(2),
        padding: responsiveHeight(2),
        borderRadius: responsiveHeight(1),
        borderWidth: responsiveHeight(0.1),
        borderColor: 'transparent',
        minHeight : 50,
    }
});

export default NativeNotificationStyles