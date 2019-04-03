import {Dimensions, Platform} from 'react-native';

const WINDOW = Dimensions.get('window');
const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';
const iPhoneX = (Platform.OS === 'ios' && WINDOW.height === 812) || (Platform.OS === 'ios' && WINDOW.height === 896);
const iPhone5 = (Platform.OS === 'ios' && WINDOW.height === 568);

const smartScale = (value) => {
    const height = Platform.OS === 'ios' ? iPhoneX ? WINDOW.height - 78 : WINDOW.height : WINDOW.height - 24
    return (value * height) / 667;

}

export default {
    countPixelRatio: (defaultValue) => {
        return smartScale(defaultValue);
    },
    width:WINDOW.width,
    height: WINDOW.height,
    fontSizeH1: smartScale((deviceType == 'phone') ? 26 : 36),
    fontSizeH2: smartScale((deviceType == 'phone') ? 20 : 26),
    fontSizeH3: smartScale((deviceType == 'phone') ? 18 : 22),
    fontSizeH4: smartScale((deviceType == 'phone') ? 15 : 18),
    fontSizeH5: smartScale((deviceType == 'phone') ? 13 : 15),
    fontSizeH6: smartScale((deviceType == 'phone') ? 10 : 12),

    black: '#000',
    white: '#ffffff',
    grey: '#808080',
    grey_light: '#D3D3D3',
    isIphone: Platform.OS === 'ios',
    iPhoneX,
}
