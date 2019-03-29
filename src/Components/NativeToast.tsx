import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import NativeToastStyles from '../CommonStyles/NativeToastStyle';
import NativeField from "../Interfaces/NativeField";

export const DURATION = { 
    LENGTH_SHORT: 500,
    FOREVER: 0,
};

const {height, width} = Dimensions.get('window');

interface NativeToastProps extends NativeField {
    position: string,
    textStyle: {},
    positionValue: number,
    fadeInDuration: null,
    fadeOutDuration: number,
    opacity: number
}

export default class NativeToast extends Component<NativeToastProps> {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            text: '',
            opacityValue: new Animated.Value(this.props.opacity),
        }
    }

    show(text, duration, callback) {
        this.duration = typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;
        this.callback = callback;
        this.setState({
            isShow: true,
            text: text,
        });

        this.animation = Animated.timing(
            this.state.opacityValue,
            {
                toValue: this.props.opacity,
                duration: this.props.fadeInDuration,
            }
        )
        this.animation.start(() => {
            this.isShow = true;
            if(duration !== DURATION.FOREVER) this.close();
        });
    }

    close( duration ) {
        let delay = typeof duration === 'undefined' ? this.duration : duration;

        if(delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 250;

        if (!this.isShow && !this.state.isShow) return;
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.animation = Animated.timing(
                this.state.opacityValue,
                {
                    toValue: 0.0,
                    duration: this.props.fadeOutDuration,
                }
            )
            this.animation.start(() => {
                this.setState({
                    isShow: false,
                });
                this.isShow = false;
                if(typeof this.callback === 'function') {
                    this.callback();
                }
            });
        }, delay);
    }

    componentWillUnmount() {
        this.animation && this.animation.stop()
        this.timer && clearTimeout(this.timer);
    }

    render() {
        let pos;
        switch (this.props.position) {
            case 'top':
                pos = this.props.positionValue;
                break;
            case 'center':
                pos = height / 2;
                break;
            case 'bottom':
                pos = height - this.props.positionValue;
                break;
        }

        const view = this.state.isShow ?
            <View
                style={[NativeToastStyles.container, { top: pos },this.props.viewStyle]}
                pointerEvents="none"
            >
                <Animated.View
                    style={[NativeToastStyles.content, { opacity: this.state.opacityValue }, this.props.style]}
                >
                    {React.isValidElement(this.state.text) ? this.state.text : 
                    <Text style={this.props.textStyle}>{this.state.text}</Text>}
                </Animated.View>
            </View> : null;
        return view;
    }
}



NativeToast.defaultProps = {
    position: 'bottom',
    textStyle: NativeToastStyles.text,
    positionValue: 120,
    fadeInDuration: 500,
    fadeOutDuration: 500,
    opacity: 1
}