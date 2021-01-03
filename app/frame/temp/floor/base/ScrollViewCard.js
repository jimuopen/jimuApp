import React from 'react'
import {
  ScrollView,
} from 'react-native'
import CardsManager from './CardsManager'

export default class ScrollViewCard extends React.Component {

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
    if(this.props.hide){ //hide为true，用于不展示
      return null
    }
    return (
          <ScrollView {...this.props} >
            {this._renderChildren()}
          </ScrollView>
    )
  }
}
