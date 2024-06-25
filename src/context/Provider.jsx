import AppContext from "./AppContext"
import propTypes from 'prop-types'

import { useState } from "react";

const Provider = ({ children }) => {

  const [products, setProducts] = useState([])

  const value = {
    products,
    setProducts
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