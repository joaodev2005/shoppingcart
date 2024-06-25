import { useState, useEffect, useContext } from 'react'

import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'
import fetchProducts from '../../api/fetchProducts'

import './Products.css'

const Products = () => {

  const [products, setProducts] = useContext(AppContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
      setLoading(false)
    });
  }, []);

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