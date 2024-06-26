import { useState, useContext } from 'react'

import { IoIosSearch } from "react-icons/io";

import fetchProducts from '../../api/fetchProducts'

import AppContext from '../../context/AppContext';

import './SearchBar.css'

const SearchBar = () => {

  const { setProducts, setLoading } = useContext(AppContext)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = async (event) => {
    event.preventDefault()

    setLoading(true)
    
    const products = await fetchProducts(searchValue)

    setProducts(products)

    setLoading(false)
    setSearchValue('')
  }

  return (

    <form className='search-bar' onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder='buscar produtos'
        className='search_input'
        onChange={({target}) => setSearchValue(target.value)}
        required
      />

      <button type='submit' className='search_button'>
        <IoIosSearch />
      </button>
    </form>

  )
}

export default SearchBar