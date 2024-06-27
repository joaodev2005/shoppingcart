import AppContext from "./AppContext"
import propTypes from 'prop-types'

import { useState } from "react";

const Provider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [isCartVisable, setIsCartVisable] = useState(false)

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisable,
    setIsCartVisable
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider

Provider.propTypes = {
  children: propTypes.any,
}.isRequired