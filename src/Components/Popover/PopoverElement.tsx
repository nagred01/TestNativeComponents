import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import computeGeometry from './computeGeometry';
import {
  PLACEMENT_OPTIONS,
  capitalizeFirstLetter,
  findDirectionWithoutColor,
} from './utils';

import NativeField from '../../Interfaces/NativeField';

interface PopoverElementProps extends NativeField {
    containerSize: {},
    fromRect: {},
    padding:number,
    arrowColor: string,
    arrowWidth: number,
    arrowHeight: number,
    placement: string,
    pointerEvents: string,
    offset:{}
}

class PopoverElement extends React.Component<PopoverElementProps> {

  static defaultProps = {
    pointerEvents: 'box-none',
    offset: {
      x: 0,
      y: 0,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      // render offscren initially
      containerStyle: {
        top: -9999,
        left: -9999,
        maxWidth: this.props.containerSize.width - this.props.padding * 2,
        maxHeight: this.props.containerSize.height - this.props.padding * 2,
      },
      arrowStyle: null,
      width: 0,
      height: 0,
    };
  }

  computeStyles({
    arrowHeight,
    arrowWidth,
    containerSize,
    fromRect,
    padding,
    placement,
  }) {
    const { offset } = this.props;
    const { width, height } = this.state;
    const geom = computeGeometry({
      contentSize: { width, height },
      fromRect,
      containerSize,
      arrowSize: {
        width: arrowWidth,
        height: arrowHeight,
      },
      padding,
      placement,
    });
    this.setState({
      containerStyle: {
        ...this.state.containerStyle,
        top: geom.popoverOrigin.y + offset.y,
        left: geom.popoverOrigin.x + offset.x,
      },
      arrowStyle: geom.arrowStyle,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.computeStyles(nextProps);
    return false;
  }

  measureLayout = ({ nativeEvent: { layout: { width, height } } }) => {
    this.setState({ width, height }, () => this.computeStyles(this.props));
  };

  render() {
    const { pointerEvents, component, placement, arrowColor } = this.props;
    const borderDirection = capitalizeFirstLetter(findDirectionWithoutColor(this.state.arrowStyle));

    return (
      <View
        style={[styles.abs, this.state.containerStyle]}
      >
        <View onLayout={this.measureLayout}>
          {React.createElement(component)}
        </View>
        <View
          style={[
            styles.abs,
            this.state.arrowStyle,
            { [`border${borderDirection}Color`]: arrowColor },
          ]}
          pointerEvents={pointerEvents}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  abs: {
    position: 'absolute',
  },
});

export default PopoverElement;
