import CartItem from "../CartItem/CartItem"

import './Cart.css'

const Cart = () => {
  return (
    <section className='cart'>
      <div className='cart-itens'>

        <CartItem />
      </div>

      <div className='cart-resume'>total</div>
    </section>
  )
}

export default Cart