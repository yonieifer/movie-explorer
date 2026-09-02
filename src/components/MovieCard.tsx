import React from 'react'
import type { Movie } from '../types'



function MovieCard({movie}: {movie: Movie}) {
  return (
    <article>
        <img src={movie.img} alt={movie.title} />
        <h1>{movie.title}</h1>
    </article>
  )
}

export default MovieCard