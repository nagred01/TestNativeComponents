import React, { Component } from "react";
import { View } from "react-native";
import NativeField from "../Interfaces/NativeField";

interface Containerprops extends NativeField {
    collapsable?: Boolean
}

export class Container extends Component<Containerprops> {

    render() {
        const {style } = this.props;
        return (
            <View ref={c => (this._root = c)} {...this.props} style={style}>
                {this.props.children}
            </View>
        );
    }
}
