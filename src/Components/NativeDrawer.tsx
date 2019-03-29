import * as React from "react";
import NativeControl from "../Interfaces/NativeControl";
import Drawer from 'react-native-drawer';

interface DrawerProps extends NativeControl {
       openDrawer: () => void;
       closeDrawer :() => void;
       tapToClose:boolean;
       openDrawerOffset : 0.2;
       panCloseMask : 0.2;
       closedDrawerOffset : 0;
       onClose? : () => void;
}

export default class NativeDrawer extends React.Component<DrawerProps, {}> {

       state = {
            drawerOpen: true,
       };

       closeDrawer = (e) => {
           this.setState({ drawerOpen: false });
           this.drawer.close()
      };

      openDrawer = () => {
        this.setState({ drawerOpen: true });
        this.drawer.open()
      };

       render() {
           const {content,mainView,tapToClose} = this.props;
           return (
                <Drawer  
                ref={(ref) => { this.drawer = ref; }}
                content={content}
                tapToClose = {tapToClose}
                onClose = {(e) => this.closeDrawer(e)}
                >
                {mainView}
               </Drawer>
              );
       }
}

