import * as React from "react";
import { Picker } from 'react-native';
import NativeControl from "../Interfaces/NativeControl";

interface SelectListProps extends NativeControl {
    enabled?: boolean;
    mode?: string;
    prompt?: string;
    itemStyle?: {}
    selectedValue?: string;
}

export default class NativeSelectList extends React.Component<SelectListProps> {

    handleChange = (itemValue, itemIndex): void => {
        this.props.onChange(itemValue, itemIndex);
    }

    render() {
        return (
            <Picker
                selectedValue={this.props.selectedValue}
                style={this.props.style}
                mode= {this.props.mode}
                prompt = {this.props.prompt}
                enabled = {this.props.enabled}
                onValueChange={this.handleChange}>
                {this.props.Items.map((item) => {
                    return <Picker.Item
                        itemStyle = {this.props.itemStyle}
                        label={item.label} 
                        key={item.label}
                        value={item.label} />
                })
                }
            </Picker>
        );
    }
}