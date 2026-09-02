import React from 'react'
import type { Movie } from '../types'



function MovieCard({movie}: {movie: Movie}) {
  return (
    <article key={movie.id}>
        <img src={movie.image.medium} alt={movie.name} />
        <p>{movie.name}</p>
    </article>
  )
}

export default MovieCard