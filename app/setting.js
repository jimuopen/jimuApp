import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

class setting extends Component {
  static navigationOptions = {
    title: 'setting',
  }

  render() {
    return (
      <Text allowFontScaling={false}  style={styles.container}>TabDemo</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default setting;
