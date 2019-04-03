import { StyleSheet} from 'react-native';
import StyleConfig from './StyleConfig'
const NativeDataListStyles = StyleSheet.create({
    itemParent:{ backgroundColor: '#E8E8E8', padding: StyleConfig.countPixelRatio(8) },
    subItemParent:{
        padding: StyleConfig.countPixelRatio(12),
        backgroundColor: 'white',
        borderColor:'#ccc',
        borderBottomWidth:StyleConfig.countPixelRatio(1)
    },
    titleThemeText:{
        fontSize: StyleConfig.fontSizeH2,
        color: '#4B759B'
    },
    titleBlackText:{
        fontSize: StyleConfig.fontSizeH2,
        color:'black'
    },
    detailText:{
        fontSize: StyleConfig.fontSizeH4,
        color:'black'
    }
});

export default NativeDataListStyles
