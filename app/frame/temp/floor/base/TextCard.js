import React from 'react'
import {
  Text,
} from 'react-native'

export default class TextCard extends React.Component {

  constructor(props) {
    super(props)
    this.children = this.props.children
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.children = nextProps.children
    }
  }

  render() {
    if(this.props.hide){ //hide为true，用于不展示
      return null
    }
    return (
          <Text {...this.props} >
            {this.children}
          </Text>
    )
  }
}
