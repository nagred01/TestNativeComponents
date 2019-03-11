'use strict';
import React from "react";
import { Platform, Text, View, StyleSheet, Touchable, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

type ButtonProps = $ReadOnly<{|

  title: string,

  onPress: () => void,


  color?: ?string,

  hasTVPreferredFocus?: ?boolean,


  nextFocusDown?: ?number,


  nextFocusForward?: ?number,


  nextFocusLeft?: ?number,

 
  nextFocusRight?: ?number,


  nextFocusUp?: ?number,


  accessibilityLabel?: ?string,

  disabled?: ?boolean,

 
  testID?: ?string,
|}>;



export default class App extends React.Component<ButtonProps> {
  render() {
    const {
      accessibilityLabel,
      color,
      onPress,
      title,
      hasTVPreferredFocus,
      nextFocusDown,
      nextFocusForward,
      nextFocusLeft,
      nextFocusRight,
      nextFocusUp,
      disabled,
      testID,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    const accessibilityStates = [];
    return (
      <TouchableOpacity
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityStates={accessibilityStates}
        hasTVPreferredFocus={hasTVPreferredFocus}
        nextFocusDown={nextFocusDown}
        nextFocusForward={nextFocusForward}
        nextFocusLeft={nextFocusLeft}
        nextFocusRight={nextFocusRight}
        nextFocusUp={nextFocusUp}
        testID={testID}
        disabled={disabled}
        onPress={onPress}>
        <View style={buttonStyles}>
          <Text style={textStyles} disabled={disabled}>
            {title}
          </Text>
        </View>
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

