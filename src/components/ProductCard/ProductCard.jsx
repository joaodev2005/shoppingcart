import { FaCartArrowDown } from "react-icons/fa6";
import { useContext } from "react";

import propTypes from 'prop-types'
import FormatCurrency from '../../utils/FormatCurrency'

import AppContext from '../../context/AppContext'

import './ProductCard.css'

const ProductCard = ({ data }) => {

  const { title, price, thumbnail } = data

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => setCartItems([...cartItems, data])

  return (
    <section className='product-card'>

      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className='card_image'
      />

      <div className="card_infos">
        <h2 className='card_price'>{FormatCurrency(price, 'BRL')}</h2>

        <h2 className="card_title">{title}r</h2>
      </div>

      <button
        type='button'
        className='button_add-cart'
        onClick={handleAddCart}
      >
        <FaCartArrowDown />
      </button>
    </section>
  )
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired