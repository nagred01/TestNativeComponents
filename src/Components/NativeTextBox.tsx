import * as React from "react";
import ReactNative from "react-native";
import NativeField from "../Interfaces/NativeField";
import {TextInput} from 'react-native';

interface TextBoxProps extends NativeField {

    placeholder?: string;
    placeholderTextColor?: string;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    autoFocus?: boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search";
    allowFontScaling?: boolean;
    maxLength?: number;
    multiline?: boolean;
    secureTextEntry?: boolean;
    style: {};
    inputAccessoryViewID?: string;
    textContentType?: string;
    returnKeyLabel?: string;
    editable?: boolean;
    defaultValue?: string;
}

interface TextBoxState {
    changed: boolean;
}

export default class NativeTextBox extends React.PureComponent<TextBoxProps, TextBoxState> {

    constructor(props: Readonly<TextBoxProps>) {
        super(props);
        this.state = { changed: false };
    }

    private handleTextChange = (value: any): void => {
        if(this.props.onChangeText){
            this.props.onChangeText(value);
            this.setState({ changed: true });
        }
    };


    private handleBlur = (): void => {

        if (this.state.changed) {
            this.setState({ changed: false });
        }
    };


    private handleClearClick = (): void => {
        if(this.props.onChange){
            this.props.onChange("");
        }
    };


    render(): React.ReactNode {

        const {
            style,
            value,
            textContentType, 
            returnKeyLabel, 
            editable,
            defaultValue,
            autoCapitalize, 
            keyboardType, 
            multiline, 
            placeholder, 
            secureTextEntry,
            autoCorrect
        }
            = this.props;

        return (
            <TextInput style={style}
                onChangeText={this.handleTextChange}
                onBlur={this.handleBlur}
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                multiline={multiline}
                returnKeyLabel={returnKeyLabel}
                secureTextEntry={secureTextEntry}
                value={value}
                defaultValue={defaultValue}
                textContentType={textContentType}
                editable={editable}
            >
            </TextInput>
        );
    }
}