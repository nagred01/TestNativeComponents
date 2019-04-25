import React, { Component } from "react";
import { StyleSheet, View, ListView, Picker, Text, Button } from 'react-native';
import NativeText from '../Components/NativeText';
import NativeTextBox from '../Components/NativeTextBox';
import NativeDecimalTextBox from '../Components/NativeDecimalTextBox';
import NativeTextStyles from '../CommonStyles/NativeTextStyle';
import NativeTextBoxStyles from '../CommonStyles/NativeTextBoxStyle';
import NativeNotification from '../Components/NativeNotifcation';
import NativeValidationErrorMessage from '../Components/NativeValidationErrorMessage';
import NativeButtonStyle from '../CommonStyles/NativeButtonStyle';
import PopoverContainer from '../Components/Popover/PopoverContainer';
import NativePopover from '../Components/Popover/NativePopover';
import NativeReadOnlyField from '../Components/NativeReadOnlyField';
import NativeToast from '../Components/NativeToast';
import NativeSelect from '../Components/NativeSelect';
import NativeButton from '../Components/NativeButton';
import NativeDataList from '../Components/NativeDataList';
import NativeImage from '../Components/NativeImage';
import NativeDatePicker from '../Components/NativeDatePicker';
import { Container } from "../Components/Container";

export default class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isPopoverVisible: true,
      modalVisible: false,
      language: "",
      stateItems: [
        { "label": "Alabama" }, { "label": "Alaska" }, { "label": "Arizona" }, { "label": "Arkansas" }, { "label": "California" }, { "label": "Colorado" }, { "label": "Connecticut" }, { "label": "Delaware" }, { "label": "Florida" }, { "label": "Georgia" }, { "label": "Hawaii" }, { "label": "Idaho" }, { "label": "Illinois" }, { "label": "Indiana" }, { "label": "Iowa" }, { "label": "Kansas" }, { "label": "Kentucky" }, { "label": "Louisiana" }, { "label": "Maine" }, { "label": "Maryland" }, { "label": "Massachusetts" }, { "label": "Michigan" }, { "label": "Minnesota" }, { "label": "Mississippi" }, { "label": "Missouri" }, { "label": "Montana" }, { "label": "Nebraska" }, { "label": "Nevada" }, { "label": "New Hampshire" }, { "label": "New Jersey" }, { "label": "New Mexico" }, { "label": "New York" }, { "label": "North Carolina" }, { "label": "North Dakota" }, { "label": "Ohio" }, { "label": "Oklahoma" }, { "label": "Oregon" }, { "label": "Pennsylvania" }, { "label": "Rhode Island" }, { "label": "South Carolina" }, { "label": "South Dakota" }, { "label": "Tennessee" }, { "label": "Texas" }, { "label": "Utah" }, { "label": "Vermont" }, { "label": "Virginia" }, { "label": "Washington" }, { "label": "West Virginia" }, { "label": "Wisconsin" }, { "label": "Wyoming" }
      ],
      dataListItems: [
        {
          acType: 'Checking',
          items: [
            {
              name: 'Free Checking',
              type: 'Current',
              balance: '$2,341.39',
              LBalance: '$2,341.39',
              availableType: 'Available',
              xType: 'x456-90',
              iconType: 'star',
              outStanding: ''
            }
          ]
        },
        {
          acType: 'Saving',
          items: [
            {
              name: 'Super Saving',
              type: 'Current',
              balance: '$3.27',
              LBalance: '$781.63',
              availableType: 'Available',
              xType: 'x456-90',
              outStanding: ''
            }
          ]
        },
        {
          acType: 'Loan',
          items: [
            {
              name: 'Home morgage',
              type: '',
              balance: '$183,399.01',
              LBalance: '',
              availableType: '',
              xType: 'x456-02',
              outStanding: 'Outstanding Balance'
            },
            {
              name: '2015 Tesla Loan',
              type: '',
              balance: '$2,466.34',
              LBalance: '',
              availableType: '',
              xType: 'x456-48',
              outStanding: 'Outstanding Balance'
            }
          ]
        },
        {
          acType:'Test',
          items:[]
        }
      ],
      popoverPlacement: 'top',
      label: "This is label text",
      labelStyle: NativeTextStyles.labelText,
      title: "This is title text",
      titleStyle: NativeTextStyles.titleText,
      subTitle: "This is subtitle text",
      subTitleStyle: NativeTextStyles.subTitleText,
      primary: "This is primary text",
      primaryStyle: NativeTextStyles.primaryText,
      secondary: "This is secondary text",
      secondaryStyle: NativeTextStyles.secondaryText,
      value: "Nice for test",
      test: "1122",
      readOnlyValue: "This read only Text",
      decimalvalue: "0.0",
      content: {
        text: "Success",
        type: "Sucess",
        text: "Thank you for successfully completed the transcation Thank you for successfully completed the transcation",
        title: "Summary Text"
      },
      buttonLabel: 'My Button'
    };
  }

  handleTextChange1 = (value) => {
    this.setState({ decimalvalue: value })
  }

  handleTextChange = (value) => {
    this.setState({ value: value })
  }

  handleTextChangeTest = (value) => {
    this.setState({ test: value })
  }

  onPress = (value) => {
    alert("Hey");
  }

  closeToast = () => {
    alert("hey")
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <NativeReadOnlyField isBindingOneTime="oneTime" value={this.state.readOnlyValue}></NativeReadOnlyField>
        <NativeValidationErrorMessage style={{ color: "red" }} value={"Validation error message"}></NativeValidationErrorMessage>
        <NativeText
          value={this.state.label}
          style={this.state.labelStyle} onPress={this.onPress}>
        </NativeText>
        <Container><Text style={styles.welcome}>
          Test For Best
              </Text>
        </Container>
        <NativeText
          value={this.state.title}
          style={this.state.titleStyle}>
        </NativeText>
        <NativeText
          value={this.state.subTitle}
          style={this.state.subTitleStyle}>
        </NativeText>
        <NativeText
          value={this.state.primary}
          style={this.state.primaryStyle}>
        </NativeText>
        <NativeText
          value={this.state.value}
          style={this.state.secondaryStyle}>
        </NativeText>
        <NativeTextBox
          style={NativeTextBoxStyles.primaryTextBox}
          placeholder={"Enter your Email Address"}
          onChangeText={this.handleTextChange}
          value={this.state.value}
          textContentType="username">
        </NativeTextBox>
        <NativeTextBox
          style={NativeTextBoxStyles.secondaryTextBox}
          placeholder={"Enter your Password"}
          textContentType="password"
          secureTextEntry={true}>
        </NativeTextBox>
        <NativeDecimalTextBox
          style={NativeTextBoxStyles.secondaryTextBox}
          placeholder={"Amount"}
          value={this.state.decimalvalue}
          onChangeText={this.handleTextChange1}
        >
        </NativeDecimalTextBox>



        <PopoverContainer padding={20}>
          <View style={styles.container1}>
            <NativePopover
              placement={this.state.popoverPlacement}
              arrowColor="#114B5F"
              arrowWidth={16}
              arrowHeight={8}
              isVisible={this.state.isPopoverVisible}
              component={() => (
                <View style={styles.popoverContainer}>
                  <Text style={styles.popoverText}>
                    This is a very long popover text.
                    Container padding affects max width and height of this popover.
                </Text>
                </View>
              )}
            >
              <Text style={styles.welcome}>
                React Native
              </Text>
            </NativePopover>

          </View>
        </PopoverContainer>

        <NativeNotification content={this.state.content}></NativeNotification>

        <NativeSelect
          selectedValue={this.state.language}
          onChange={(itemValue, index) =>
            this.setState({ language: itemValue })
          }
          Items={this.state.stateItems}
        />

        <NativeToast ref="toastWithStyle"
          opacity={0.9} positionValue={0}
          position={"center"} />

        <Button onPress={() => this.refs.toastWithStyle.show("Created the custom toastbox which can used for showing the different types of messges to the customer", 800)}
          title="Open Toast"
        >
        </Button>

        <NativeButton
          label={this.state.buttonLabel}
          disabled={false}
          onClick={(args) => alert(args)}
          clickArgument={'my button'}
          buttonStyle={NativeButtonStyle.container}
          textStyle={NativeButtonStyle.buttonText}

        />

        <NativeDataList
          itemsSource={this.state.dataListItems}
         // onClick={(item) => alert(JSON.stringify(item))}
        />
        <NativeImage
            imageUrl={'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636-.jpeg'}
            imageAlt={'https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
          />
          <NativeDatePicker
              style={styles.dateContainer}
              renderDate={({ year, month, day, date }) => {
                  if (!date) {
                      return <Text style={ styles.text}>Select Date</Text>
                  }

                  const dateStr = `${month}-${day}-${year}`
                  return <Text style={styles.text}>{dateStr}</Text>
              }}

          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 100
  },
  container1: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  popoverContainer: {
    backgroundColor: '#114B5F',
    padding: 8,
    borderRadius: 5
  },
  popoverText: {
    color: '#E4FDE1',
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    top: 0,
    left: 0,
    marginTop: 20,
    justifyContent: 'space-around',
  },
    dateContainer: {
        backgroundColor: '#fff',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'center',
        borderRadius: 2,
        height: 50
    },
    placeholderText: {
        color: '#ddd'
    },
    text: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontSize: 18,

    }
})
