import React from 'react'
import "./Search.css"

const Search = ({searchItem,handleSearchItem}) => {
  return (
    <div className = "searchBar">
        <input type = "text" 
        onChange = {handleSearchItem} value = {searchItem} 
        placeholder = "Enter an item"
        id ='search-input'/>
    </div>
  )
}

export default Search