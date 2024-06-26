import { BsCartDashFill } from "react-icons/bs";

import propTypes from 'prop-types'
import FormatCurrency from '../../utils/FormatCurrency'

import './CartItem.css'

const CartItem = ({ data }) => {

  const { title, price, thumbnail } = data

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
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem