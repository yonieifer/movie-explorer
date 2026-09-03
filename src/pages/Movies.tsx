import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import useFetch from '../hooks/useFetch'
import type { Movie } from '../types'

function Movies() {
    const [movies, isLoading, error] = useFetch<Movie[]>("https://api.tvmaze.com/shows")
  return (
    <>
    <SearchBar/>
    {error && <p>Error</p>}
    {isLoading && <p>Loading...</p>}
    {movies && <MovieList movies={movies}/>}
    
    </>
  )
}

export default Movies