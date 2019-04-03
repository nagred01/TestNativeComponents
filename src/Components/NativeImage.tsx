import * as React from "react";
import { Image, View, Text } from 'react-native';
import NativeControl from "../Interfaces/NativeControl";

interface ImageProps extends NativeControl {
    className:string,
    imageUrl:string,
    imageAlt:string,
    imgStyle:{}
}

export default class NativeImage extends React.Component<ImageProps> {
    constructor(props){
        super(props)
        this.state={imageError:0}
    }
    _onError = () => {
        let { imageError } = this.state;
        imageError++;
        this.setState({imageError})
    }
    render() {
        const {imageUrl, imageAlt,imgStyle} = this.props
        return (
            <View>
            {/*{this.state.imageError > 1 ?*/}
               {/*<View style={{flexDirection:'row'}}>*/}
               {/*<Image*/}
                {/*resizeMode={'contain'}*/}
                 {/*source={{uri:'brocken image uri'}}*/}
                 {/*style={{height:20, width:20}}*/}
                 {/*onError={this._onError}*/}
            {/*/>*/}
            {/*<Text>{'imageName'}</Text>*/}
               {/*</View>*/}
                {/*: <Image*/}
                {/*resizeMode={'contain'}*/}
                 {/*source={{uri:this.state.imageError === 1 ? imageAlt : imageUrl}}*/}
                 {/*style={imgStyle}*/}
                 {/*onError={this._onError}*/}
            {/*/>*/}
            {/*}*/}
            </View>

    );
    }
}
