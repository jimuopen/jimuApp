
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class FindScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{margin:20}}>--------发现页面-------</Text>
{/*                <Button
                    title="Go to detail"
                    onPress={() => this.props.navigation.navigate('detail')}
                />
                <Button
                    title="Go to detailFunction"
                    onPress={() =>  this.props.navigation.navigate('detailFunction')}
                />*/}
                <Button
                    title="进入  组件库-分类列表"
                    onPress={() =>  this.props.navigation.navigate('G3CategoryHost')}
                />
                <Button
                    title="进入  组件库-组件详情"
                    onPress={() =>  this.props.navigation.navigate('G3FloorHost')}
                />

            </View>
        );
    }
}
