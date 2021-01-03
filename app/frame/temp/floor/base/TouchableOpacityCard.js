import React from 'react'
import {
  TouchableOpacity,
} from 'react-native'
import CardsManager from './CardsManager'

export default class TouchableOpacityCard extends React.Component {

  constructor(props) {
    super(props)
    this.children = this.props.children
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.children = nextProps.children
    }
  }

  _renderChildren = () => {
    if(this.children instanceof Array){
      let array = []
      this.children.forEach(x => {
        array.push(CardsManager.getCard(x, this.props.onPress))
      })
      return array
    }else{
      return CardsManager.getCard(this.children, this.props.onPress)
    }
  }

  render() {
    return (
          <TouchableOpacity {...this.props} onPress={() => this.props.onPress(this.props.navigate)}>
            {this._renderChildren()}
          </TouchableOpacity>
    )
  }
}
