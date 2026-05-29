/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const CartContext = createContext()

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = product => {
    setCartItems([...cartItems, product])

    toast.success(`${product.name} added to cart`)
  }

  const removeFromCart = id => {
    const updatedCart = cartItems.filter(
      item => item.id !== id
    )

    setCartItems(updatedCart)
  }

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + Number(item.price.replace('$', ''))
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider