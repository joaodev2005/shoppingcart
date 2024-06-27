import { useContext } from "react"

import AppContext from "../../context/AppContext"
import CartItem from "../CartItem/CartItem"
import formatCurrency from "../../utils/FormatCurrency"

import './Cart.css'

const Cart = () => {

  const { cartItems, isCartVisable } = useContext(AppContext)

  const cartResume = cartItems.reduce((acumulator, item) => {

    return acumulator + item.price
  }, 0 )

  return (
    <section className={`cart ${isCartVisable ? 'cart_active' : ''}`}>
      <div className='cart-itens'>

        {cartItems.map(item => <CartItem key={item.id} data={item} />)}

      </div>

      <div className='cart-resume'>{formatCurrency(cartResume)}</div>
    </section>
  )
}

export default Cart