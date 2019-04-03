import { Text, Button, View } from 'native-base';
import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import MainComponent from './MainComponent';
import StyleDemoComponent from './StyleDemoComponent';
import Drawer from 'react-native-drawer';
import NativeNotification from '../Components/NativeNotifcation'
import NativeDrawer from '../Components/NativeDrawer';
import { ScrollView,Platform} from 'react-native';
import Container from '../Components/Container';

class Test extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
               this.state = {
             content:{
            text:"Success",
            type :"Sucess",
            text:"Thank you for successfully completed the transcation ",
            title :"Summary Text"
          }
        }
    }

    onClick = () => {
        this.drawer.openDrawer();
    };

    close = () => {
        this.drawer.closeDrawer();
    };


    closeControlPanel = () => {
        this.drawer.close()
    }

    openControlPanel = () => {
       this.drawer.open()
    }

    renderMainView(){
        let style = Platform.OS=="ios" ? { height : 20,flex : 1,backgroundColor:"white"} : { flex : 1}
        return (
            <ScrollView style={style}>
                {/*<View style={style}>*/}
                    {/*<Text onPress={this.onClick}> Open Drawer</Text>*/}
                    {/*<MainComponent />*/}
                {/*</View>*/}
                <View style={style}>
                    <StyleDemoComponent/>
                </View>
            </ScrollView>
        )
    }

    render() {
       return (

            <NativeDrawer
                ref={instance => { this.drawer = instance; }}
                openDrawer={this.openControlPanel} content={<ControlPanel closeDrawer={this.close} />}
                    mainView = { this.renderMainView()}
                />

            // <Drawer content={<ControlPanel closeDrawer={this.closeControlPanel}/>}
            //     ref={(ref) => { this.drawer = ref; }}>
            //     <Text onPress={this.openControlPanel}> Open Drawer</Text>
            // <NativeNotification content={this.state.content}></NativeNotification>

            //       { this.renderMainView()}
            //    {/* <MainComponent /> */}
            // </Drawer>
        //)
        //return (
        //    this.renderMainView()
            // <View style={{flex:1}}>
            //     <NativeDrawer
            //     ref={instance => { this.child = instance; }}
            //     openDrawer={this.openControlPanel} content={<ControlPanel closeDrawer={this.close} />}
            //         mainView = { this.renderMainView()}
            //     />
            // </View>
        )
    }
}

export default Test;
