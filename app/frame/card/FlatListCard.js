import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import BaseCard from "./base/BaseCard";
import CardsManager from "../manager/CardsManager";

export default class FlatListCard extends BaseCard {

    constructor(props) {
        super(props)
    }

    _renderItems = () => {
        const result = []
        let item1,index1
        this._data.items.map((item, index) =>
        {
            let item2 = item
            let index2 = index
            if(index2%2 === 1){ //保证两列
                result.push(CardsManager.getCard({name:'Product2Card', data: {item1, index1, item2, index2}}, this._data._onPress, index1))
            }else{
                item1 = item2
                index1 = index2
            }
        })
        return result
    }

  render() {
    return (
        <View style={styles.wrapper}>
            {this._renderItems()}
          {/*<FlatList style={{backgroundColor:'white'}}
              keyExtractor={(item, index) => item + index}
              numColumns ={2}
              data={this._data.items}
              renderItem={ (item) => this._renderImage(item.item)}
          />*/}
        </View >
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    flexDirection: 'column',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent: 'center',
  }
})

