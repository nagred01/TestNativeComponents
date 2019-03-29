import { StyleSheet} from 'react-native';

const NativeButtonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    top: 0,
    left: 0,
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'#999',
    borderRadius:2
  },
  
  buttonText: {
    fontSize:16,
    fontWeight:'bold',
    paddingVertical:8
  }
});

export default NativeButtonStyles
