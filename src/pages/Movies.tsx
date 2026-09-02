import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'

function Movies() {
  return (
    <>
    <Header/>
    <SearchBar/>
    <MovieList movies={[{img: "", title: "just movie", }]}/>
    </>
  )
}

export default Movies