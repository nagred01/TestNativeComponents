import * as React from "react";
import NativeField from "../Interfaces/NativeField";
import { Text } from 'react-native';

interface NativeValidationErrorMessageProps extends NativeField {
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

export default class NativeValidationErrorMessage extends React.Component<NativeValidationErrorMessageProps, {}> {

    constructor(props: Readonly<NativeValidationErrorMessageProps>) {
        super(props);
        // one-time access of the value from the state
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
            {value}
        </Text>
    }
}
