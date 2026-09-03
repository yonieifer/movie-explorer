import type { Movie } from '../types'
import MovieCard from './MovieCard'
import "./MovieList.css"

function MovieList({movies}: {movies: Movie[]}) {
  return (
    <div className='movie-list'>
        {movies.map(m => <MovieCard key={m.id} movie={m}/>)}
    </div>
  )
}

export default MovieList