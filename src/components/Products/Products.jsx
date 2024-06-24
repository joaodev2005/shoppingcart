import { useState, useEffect } from 'react'

import ProductCard from '../ProductCard/ProductCard'

import fetchProducts from '../../api/fetchProducts'

import './Products.css'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts('computador').then((response) =>
      setProducts(response))
  }, )

  return (
    <section className="products container">
      
      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
          />
        ))
      }

    </section>
  )
}

export default Products