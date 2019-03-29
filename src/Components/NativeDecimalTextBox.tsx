import * as React from "react";
import ReactNative from 'react-native'
import NativeField from "../Interfaces/NativeField";
import { TextInput } from 'react-native';

interface DecimalTextBoxProps extends NativeField {
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
       onChangeText : void
}

interface DecimalTextBoxState {
       changed: boolean;
}

export default class NativeDecimalTextBox extends React.PureComponent<DecimalTextBoxProps, DecimalTextBoxState> {

       //private inputRef: React.RefObject<HTMLInputElement>;
       constructor(props: Readonly<DecimalTextBoxProps>) {
              super(props);
              //this.inputRef = React.createRef() as React.RefObject<HTMLInputElement>;
              this.state = {
                     changed: false,
              };
       }

       private handleTextChange = (value): void => {
              let input = value;
              let parsed = this.parseNumber(input);
              if (this.props.onChangeText) {
                     this.props.onChangeText(input);
                     if (typeof parsed !== "number")
                            this.props.onChangeText(undefined);
                     this.setState({ changed: true });
              }
       };

       private reformat() {
              let element = this.props.value;
              let value = this.parseNumber(element);
              if (value === null || typeof value === "string")
                     this.props.onChangeText(undefined);
              else {
                     this.props.onChangeText(value);
                     value = this.formatNumber(value);
              }
       }

       private formatNumber(value: number): string {
              if (value === null)
                     return '';
              let m = value.toFixed(this.props.fractionalDigits).match(/^(-?)(\d{1,3})((?:\d{3})*)(\.\d*)?$/);
              return m[1] + m[2] + (this.props.groupDigits ? m[3].replace(/(\d{3})/g, ',$1') : m[3]) + (m[4] || '');
       }

       /**
       * Attempts to parse a specified string as a number.
       * @param value The string to parse.
       * @returns null if the string is empty or contains only white space characters;
       * the parsed amount if the string contains a valid number;
       * the string if the string does not contain a valid number.
       */
       private parseNumber(value: string): number | null | string {
              if (value){
                     value = value.replace(/\s/g, ''); // Ignore all white space characters.
                     if (!value)
                            return null;
                     let pattern = '^' +
                            '-?' +
                            `(?=.*\\d)(\\d{1,3}(,?\\d{3})*)?(\\.\\d{0,${this.props.fractionalDigits}}0*)?$`;
                     if (!new RegExp(pattern).test(value))
                            return value;
                     value = value.replace(new RegExp(`[,]`, 'g'), '');
                     let max = 1e9 - 1 / Math.pow(10, this.props.fractionalDigits);
                     return Math.max(Math.min(parseFloat(value), max), -max);
              }
       }

       private handleBlur = (): void => {
              this.reformat();
              if (this.state.changed) {
                     this.setState({ changed: false });
              }
       };

       private handleClearClick = (): void => {
              this.props.onChange(undefined);
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
                     =
                     this.props;

              return (
                     <TextInput
                            style={style}
                            value={value}
                            onChangeText={this.handleTextChange}
                            onBlur={this.handleBlur}
                            placeholder={placeholder}
                            autoCorrect={autoCorrect}
                            autoCapitalize={autoCapitalize}
                            keyboardType={keyboardType}
                            multiline={multiline}
                            returnKeyLabel={returnKeyLabel}
                            secureTextEntry={secureTextEntry}
                            defaultValue={defaultValue}
                            textContentType={textContentType}
                            editable={editable} >
                     </TextInput>
              );
       }
}
