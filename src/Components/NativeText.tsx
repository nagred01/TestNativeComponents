import * as React from "react";
import NativeField from "../Interfaces/NativeField";
import {Text} from 'react-native';
import  ReactNative from 'react-native';

export interface TextProps extends NativeField {

    keyboardAppearance?: string;
    spellCheck?: boolean;
    textContentType?: string;
    scrollEnabled?: boolean;
    enablesReturnKeyAutomatically?: boolean;
    clearTextOnFocus?: boolean;
    clearButtonMode?: string;
    numberOfLines?: string;
    underlineColorAndroid?: string;
    lineBreakMode?: "head" | "middle" | "tail" | "clip";
    ellipsizeMode?: "head" | "middle" | "tail" | "clip";
    allowFontScaling?: boolean;
    disabled?: boolean;
    value?: string;
    onPress?: (event: ReactNative.GestureResponderEvent) => void;
    onLongPress?: (event: ReactNative.GestureResponderEvent) => void;
}

interface TextState {
    changed: boolean;
}

export default class NativeText extends React.PureComponent<TextProps, TextState> {

    constructor(props: Readonly<TextBoxProps>) {
        super(props);
        this.state = { changed: false };
    }

    private onPress = (e: ReactNative.GestureResponderEvent): void => {
        if(this.props.onPress){ 
            this.props.onPress(e);
            this.setState({ changed: true });
        }
    };

    render(): React.ReactNode {

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
        }
            = this.props;

        return (
            <Text style={style}
                keyboardAppearance={keyboardAppearance}
                spellCheck={spellCheck}
                textContentType={textContentType}
                scrollEnabled={scrollEnabled}
                onPress={this.onPress}
                enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
                clearTextOnFocus={clearTextOnFocus}
                clearButtonMode={clearButtonMode}
                numberOfLines={numberOfLines}
                underlineColorAndroid={underlineColorAndroid}
                lineBreakMode={lineBreakMode}
                ellipsizeMode={ellipsizeMode}
                allowFontScaling={allowFontScaling}
                disabled={disabled}
            >
                {value}
            </Text>
        );
    }
}



