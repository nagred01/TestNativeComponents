import * as React from 'react';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
import NativeControl from "../Interfaces/NativeControl";

interface DataListProps extends NativeControl {
    groupKey: string,
    itemKey: any,
    onClick: (e: any) => void,
    actionLinks: any,
    itemsSource: Array<any>,
    groupsSource?: Array<any>;
    groupId: string,
    groupText: string,
    expandable: boolean,
    noDataText: string,
    emptyListClassName: string,
    itemStyle:{},
    subItemStyle:{},
    titleText:{},
    titleBlackText:{},
    detailText:{}
}
export default class NativeDataList extends React.Component<DataListProps> {
    constructor(props) {
        super(props)
        let data = [];
        for (let ind in props.itemsSource) {
            let obj = props.itemsSource[ind]
            obj['expanded'] = obj.hasOwnProperty('items')
            data.push(obj)
        }
        this.state = {
            data
        }
    }

    handleClick = (item): void => {
        if (this.props.onClick)
            this.props.onClick(item);
    }
    _onExpand = (item, ind) => {
        if (item.hasOwnProperty('items')) {
            let { data } = this.state
            data[ind]['expanded'] = !data[ind]['expanded']
            this.setState({ data })
        }
    }
    render() {
        const {itemStyle, subItemStyle, titleText, titleBlackText, detailText } = this.props
        console.log({ data: this.state.data })
        return (
            <FlatList
                data={this.state.data}
                extraData={this.state}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => this._onExpand(item, index)}
                            style={itemStyle} key={index}>
                            <Text style={{ fontSize: 16 }}>{item.acType}</Text>
                        </TouchableOpacity>
                        {item.expanded === true && item.hasOwnProperty('items') && item.items.map((subItem, subIndex) => (
                            <TouchableOpacity key={subIndex+subIndex} onPress={() => this.handleClick(subItem)}
                                style={subItemStyle} key={subIndex + '' + subIndex}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={titleText}>{subItem.name}</Text>
                                    <View style={{ flex: 1 }} />
                                    <Text style={titleBlackText}>{subItem.balance}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop:2 }}>
                                    <Text style={detailText}>{subItem.xType}</Text>
                                    <View style={{ flex: 1 }} />
                                    <Text style={detailText}>{subItem.availableType === ''? subItem.outStanding : subItem.availableType+' Balance'}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

            />

        );
    }
}
