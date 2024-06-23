import { CiShoppingCart } from "react-icons/ci";

import './CartButton.css'

const CartButton = () => {
  return (
    <button type='button' className='cart_button'>

      <CiShoppingCart size={30} />

      <span className="cart-status">
        1
      </span>

    </button>
  )
}

export default CartButton