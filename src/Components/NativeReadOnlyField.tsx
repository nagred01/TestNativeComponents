import * as React from "react";
import NativeField from "../Interfaces/NativeField";
import { Text } from 'react-native';

interface ReadOnlyFieldProps extends NativeField {
    bindingMode: string;
    keyboardAppearance?: string;
    spellCheck?: boolean;
    textContentType?: string;
    scrollEnabled?: boolean;
    enablesReturnKeyAutomatically?: boolean;
    clearTextOnFocus?: boolean;
    clearButtonMode?: string;
    numberOfLines?: number;
    underlineColorAndroid?: string;
    lineBreakMode?: "head" | "middle" | "tail" | "clip";
    ellipsizeMode?: "head" | "middle" | "tail" | "clip";
    allowFontScaling?: boolean;
    disabled?: boolean;
    value?: string;
}

export default class NativeReadOnlyField extends React.Component<ReadOnlyFieldProps, {}> {

    private textValue: string;
    private isBindingOneTime: boolean;

    constructor(props: Readonly<ReadOnlyFieldProps>) {
        super(props);
        // one-time access of the value from the state
        this.textValue = this.props.value;
        if(this.props.bindingMode && typeof(this.props.bindingMode)==="string")
        this.isBindingOneTime = this.props.bindingMode.toLowerCase() === "onetime";
    }

    render() {

        const {
            keyboardAppearance,
            spellCheck,
            textContentType,
            scrollEnabled,
            enablesReturnKeyAutomatically,
            clearTextOnFocus,
            clearButtonMode,
            numberOfLines,
            underlineColorAndroid,
            lineBreakMode,
            ellipsizeMode,
            allowFontScaling,
            disabled,
            value,
            style
        } = this.props;


        // always update the value if binding mode is not onetime
        if (!this.isBindingOneTime)
            this.textValue = value;

        return <Text style={style}
            keyboardAppearance={keyboardAppearance}
            spellCheck={spellCheck}
            textContentType={textContentType}
            scrollEnabled={scrollEnabled}
            enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
            clearTextOnFocus={clearTextOnFocus}
            clearButtonMode={clearButtonMode}
            numberOfLines={numberOfLines}
            underlineColorAndroid={underlineColorAndroid}
            lineBreakMode={lineBreakMode}
            ellipsizeMode={ellipsizeMode}
            allowFontScaling={allowFontScaling}
            disabled={disabled}>
            {this.textValue}
        </Text>
    }
}
