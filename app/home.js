import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class home extends Component {
  static navigationOptions = {
    title: 'home',
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Component</Text>
      </View>    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default home;
