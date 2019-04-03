import { StyleSheet} from 'react-native';
import StyleConfig from './StyleConfig';
const NativeButtonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    top: 0,
    left: 0,
    marginVertical: StyleConfig.countPixelRatio(8),
    alignItems:'center',
    justifyContent:'center',
    borderWidth: StyleConfig.countPixelRatio(2),
    borderColor:'#999',
    borderRadius: StyleConfig.countPixelRatio(8),
  },

  buttonText: {
    fontSize:StyleConfig.fontSizeH3,
    fontWeight:'bold',
    paddingVertical: StyleConfig.countPixelRatio(8),
  }
});

export default NativeButtonStyles
