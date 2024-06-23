import { CiShoppingCart } from "react-icons/ci";

import './CartButton.css'

const CartButton = () => {
  return (
    <button type='button' className='cart_button'>

      <CiShoppingCart />
      
    </button>
  )
}

export default CartButton