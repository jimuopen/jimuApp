import BaseHost from './BaseHost'
import {
  FlatList,
  StyleSheet
} from 'react-native'
import RootView from '../view/RootView'
import HeaderCard from '../card/base/HeaderCard'
import React from 'react'
import CardsManager from '../manager/CardsManager'

export default class ListHost extends BaseHost{

  constructor(props) {
    super(props)
  }

  // 显示item
  _renderItem = (item, index) => {
    let card = {
      name: this.data.name,
      data:item,
      index:index
    }
    return CardsManager.getCard(card, this._onPress, index, this)
  }


  render() {
    return (
      <RootView style={styles.container}>
        {this.data.header ? <HeaderCard data={this.data.header} onPress={this._onPress} /> : null}
        <FlatList keyExtractor={(item, index) => item + index}
                  style={{backgroundColor:'white'}}
                  numColumns ={1}
                  data={this.data.items}
                  renderItem={ ({item, index}) => this._renderItem(item, index)}
        />
      </RootView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
