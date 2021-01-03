import React from 'react'
import {
  Image,
} from 'react-native'

export default class ImageCard extends React.Component {

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
    return (
          <Image {...this.props} />
    )
  }
}
