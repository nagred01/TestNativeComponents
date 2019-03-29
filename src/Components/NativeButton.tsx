import * as React from "react";
import { TouchableOpacity, Text, Picker } from 'react-native';
import NativeControl from "../Interfaces/NativeControl";

interface ButtonProps extends NativeControl {
    label?: string;
    checkFormValidity?: boolean;
    disabled?: boolean;
    onClick: (arg: string) => void;
    clickArgument: string;
    buttonStyle: {};
    textStyle:{}
}

export default class NativeSelectButton extends React.Component<ButtonProps> {
    
    handleClick=() : void =>{
        const {onClick, clickArgument}=this.props ;
        onClick(clickArgument)
    }
    render() {
        const {disabled,label,buttonStyle,textStyle} = this.props
        return (
            <TouchableOpacity style={buttonStyle} disabled={disabled}
             onPress={this.handleClick}>
                <Text style={textStyle}>{label}</Text>
            </TouchableOpacity>
        );
    }
}