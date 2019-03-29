import * as React from "react";
import { View, Text, ScrollView } from 'react-native'
import NativeNotificationStyles from "../CommonStyles/NativeNotificationStyle";

interface NotificationProps {
       content: any;
}

export default class NativeNotification extends React.Component<NotificationProps, {}> {

       render() {
              let notification = this.props.content ? this.props.content.type : "";
              let message = this.props.content ? this.props.content.text : "";
              let title = this.props.content ? this.props.content.title : "";
              let style = NativeNotificationStyles.alertSuccess;
              if (notification === 'error') {
                     notification = 'danger';
                     style = NativeNotificationStyles.alertError
              }
              return (
                     message &&
                     <View style={[style, NativeNotificationStyles.alert]}>
                            <View>
                                   <Text style={NativeNotificationStyles.flexWrap}> {title} </Text>
                                   <Text style={NativeNotificationStyles.flexWrap}> {notification} </Text>
                                   <Text style={NativeNotificationStyles.flexWrap}> {message} </Text>
                            </View>
                     </View>
              );

       }

}

