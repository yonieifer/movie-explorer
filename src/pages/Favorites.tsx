import MovieList from '../components/MovieList'
import useFavoritesStoe from '../store/Favorites'

function Favorites() {
    const favorites = useFavoritesStoe(state => state.favorites)
  return (
    <>
        <h2>My Favorites ❤️</h2>
        <MovieList movies={favorites}/>
    </>
  )
}

export default Favorites