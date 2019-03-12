'use strict';
import React from "react";
import { Platform, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

type ButtonProps = $ReadOnly<{|

  title: string,

  onPress: () => void,

  accessibilityLabel?: ?string,

  disabled?: ?boolean,

|}>;



export default class App extends React.Component<ButtonProps> {
  render() {
    const {
      accessibilityLabel,
      onPress,
      title,
      disabled,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    const accessibilityStates = [];
    return (
      <TouchableOpacity 
        style={buttonStyles}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityStates={accessibilityStates}
        disabled={disabled}
        onPress={onPress}>

          <Text style={textStyles} disabled={disabled}>
            {title}
          </Text>
        
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2,
    },
  }),
  text: {
    textAlign: 'center',
    padding: 8,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: '#007AFF',
        fontSize: 18,
      },
      android: {
        color: 'white',
        fontWeight: '500',
      },
    }),
  },
});
