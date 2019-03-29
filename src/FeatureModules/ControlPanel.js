import React, { Component} from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity ,Dimensions} from 'react-native';
  
  export default class ControlPanel extends Component {
    
    render() {
      let {closeDrawer} = this.props
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.controlText}>Control Panel</Text>
          <TouchableOpacity style={styles.button} onPress={closeDrawer}>
            <Text>Close Drawer</Text>
          </TouchableOpacity>
        </ScrollView>
      )
    }
  }
  
  const {height, width} = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'black',
      width : (width/2)
    },
    controlText: {
      color: 'white',
    },
    button: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
    }
  })