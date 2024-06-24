import { useState } from 'react'

import { IoIosSearch } from "react-icons/io";

import fetchProducts from '../../api/fetchProducts'

import './SearchBar.css'

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = async (event) => {
    event.preventDefault()
    
    const products = await fetchProducts(searchValue)
    console.log(products)

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