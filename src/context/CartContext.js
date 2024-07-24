import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  removeCartItem: () => {},
  incrementCardItemQuantity: () => {},
  deleteCartItemQuantity: () => {},
})

export default CartContext
