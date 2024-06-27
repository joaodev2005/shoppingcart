import { CiShoppingCart } from "react-icons/ci";

import { useContext } from "react";

import AppContext from "../../context/AppContext";

import './CartButton.css'

const CartButton = () => {

  const { cartItems, isCartVisable, setIsCartVisable } = useContext(AppContext)

  return (
    <button
      type='button'
      className='cart_button'
      onClick={() => setIsCartVisable(!isCartVisable)}
    >

      <CiShoppingCart size={30} />

      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}

    </button>
  )
}

export default CartButton