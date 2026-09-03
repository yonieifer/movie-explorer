import type { Movie } from '../types'
import MovieCard from './MovieCard'

function MovieList({movies}: {movies: Movie[]}) {
  return (
    <>
        {movies.map(m => <MovieCard key={m.id} movie={m}/>)}
    </>
  )
}

export default MovieList