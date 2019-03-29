import { StyleSheet} from 'react-native';

const NativeToastStyles = StyleSheet.create({
  container: {
      position: 'absolute',
      left: 10,
      right: 10,
      elevation: 999,
      alignItems: 'center',
      zIndex: 10000
  },
  content: {
      backgroundColor: "#114B5F",
      borderRadius: 10,
      padding: 10,
  },
  text: {
      color: 'white'
  }
});

export default NativeToastStyles
