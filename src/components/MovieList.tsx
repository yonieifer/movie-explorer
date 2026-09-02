import React from 'react'
import type { Movie } from '../types'
import MovieCard from './MovieCard'

function MovieList({movies}: {movies: Movie[]}) {
  return (
    <>
        {movies.map(m => <MovieCard movie={m}/>)}
    </>
  )
}

export default MovieList