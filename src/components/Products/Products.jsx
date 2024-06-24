import { useState, useEffect } from 'react'

import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'

import fetchProducts from '../../api/fetchProducts'

import './Products.css'

const Products = () => {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts('computador').then((response) =>
      setProducts(response))
    setLoading(false)
  }, [])

  return (
    <>
      {loading && <Loading /> || (

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

      )}
    </>

  )
}

export default Products