import { useState, useEffect } from 'react'

import ProductCard from '../ProductCard/ProductCard'

import fetchProducts from '../../api/fetchProducts'

import './Products.css'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts('computador').then((response) =>
      setProducts(response))
      console.log(products)
  }, )

  return (
    <section className="products container">
      <ProductCard />
    </section>
  )
}

export default Products