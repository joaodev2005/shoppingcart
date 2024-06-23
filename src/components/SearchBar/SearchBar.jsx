import { useState } from 'react'

import { IoIosSearch } from "react-icons/io";

import './SearchBar.css'

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('')

  return (

    <form className='search-bar'>
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