import { BsCartDashFill } from "react-icons/bs";

import { useContext } from "react";

import AppContext from "../../context/AppContext";

import propTypes from 'prop-types'
import FormatCurrency from '../../utils/FormatCurrency'

import './CartItem.css'

const CartItem = ({ data }) => {

  const {cartItems, setCartItems} = useContext(AppContext)
  const { id, title, price, thumbnail } = data

  const handleRemoveItem = () => {
    const updatedItens = cartItems.filter(item => item.id !== id)

    setCartItems(updatedItens)
  }

  return (
    <section className='cart-item'>
      <img
        src={thumbnail}
        alt="img do produto"
        className='cart-item-image'
      />

      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{FormatCurrency(price)}</h3>

        <button
          type='button'
          className='button_remove-iten'
          onClick={ handleRemoveItem }
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem