import React, { useState } from 'react'

function SearchBar() {
  const [search, setSearch] = useState("")
  const onSearch = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {setSearch(e.target.value)
  }
  return (
    <>
      <input type="text" onChange={onSearch} value={search} placeholder="Search Movies..."/>
    </>
  )
}

export default SearchBar