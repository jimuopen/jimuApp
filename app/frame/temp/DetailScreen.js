import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailsScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Details222222222222</Text>
                <Button
                    title="Go to find"
                    onPress={() =>  this.props.navigation.navigate('find')}
                />

            </View>
        );
    }
}