import { useContext } from "react"

import AppContext from "../../context/AppContext"
import CartItem from "../CartItem/CartItem"

import './Cart.css'

const Cart = () => {

  const { cartItems } = useContext(AppContext)

  const cartResume = cartItems.reduce(() => {} )

  return (
    <section className='cart'>
      <div className='cart-itens'>

        {cartItems.map(item => <CartItem key={item.id} data={item} />)}

      </div>

      <div className='cart-resume'>{cartResume}</div>
    </section>
  )
}

export default Cart