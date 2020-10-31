import BaseHost from './BaseHost'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import RootView from '../view/RootView'
import HeaderCard from '../card/base/HeaderCard'
import React from 'react'
import CardsManager from '../manager/CardsManager'
import FooterCard from "../card/base/FooterCard";

export default class FloorHost extends BaseHost{

  constructor(props) {
    super(props)
  }

  // 显示item
  _renderCards = () => {
    if(!this.data.cards){
      return null
    }
    const result = []
    let host = this
    this.data.cards.map((card, index) => {
      let cardView = CardsManager.getCard(card, this._onPress, index, host)
      if (cardView) {
        result.push(cardView)
      }
    })
    return result
  }

  render() {
    return (
      <RootView style={styles.container}>
        {this.data.header ? <HeaderCard data={this.data.header} onPress={this._onPress} /> : null}
        <ScrollView  keyboardShouldPersistTaps="handled" style={[{backgroundColor: '#ffffff', flex: 1 },(this.style)]}>
          {this._renderCards()}
        </ScrollView>
        {this.data.footer ? <FooterCard data={this.footer} onPress={this._onPress}/> : null}
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
