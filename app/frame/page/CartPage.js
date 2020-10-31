export function CartPage() {
  return {
    "returnCode": "200",
    "page": "CartPage",
    "data": {
      "header": {
        "title": "购物车",
        "hideRight": false,
        "hideLeft": true
      },
      "footer": {
      },
      "cards": [
        {
          "name": "CartProductCard",
          "data": {
            "imgUrl": "http://123.56.254.117:9000/shop/item05.png",
            "desc": "菲律普电动牙刷",
            "price": ",￥199",
            "count": 1
          }
        },
        {
          "name": "CartProductCard",
          "data": {
            "imgUrl": "http://123.56.254.117:9000/shop/item06.png",
            "desc": "透气记忆枕",
            "price": "￥78",
            "count": 2
          }
        },
        {
          "name": "CartProductCard",
          "data": {
            "imgUrl": "http://123.56.254.117:9000/shop/item07.png",
            "desc": "办公室午休神器，无线穴位指压按摩器",
            "price": "￥369",
            "count": 3
          }
        }
      ]
    }
  }
}


