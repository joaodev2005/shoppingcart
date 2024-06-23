import './ProductCard.css'

const ProductCard = () => {
  return (
    <section className='product-card'>

      <img src="" alt="product" className='product_image' />

      <div className="card_infos">
        <h2 className='card_price'>121221,0909</h2>
        <h2 className="card_title">Computador</h2>
      </div>

      <button>Comprar</button>
    </section>
  )
}

export default ProductCard