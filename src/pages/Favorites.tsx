import MovieList from '../components/MovieList'
import useFavoritesStoe from '../store/Favorites'
import { useNavigate } from 'react-router-dom'

function Favorites() {
    const favorites = useFavoritesStoe(state => state.favorites)
    const  navigate = useNavigate()
    const onBack = () => {
        navigate(-1)
    }
  return (
    <>
        <button onClick={onBack}>Back to Movies</button>
        <h2>My Favorites ❤️</h2>
        <MovieList movies={favorites}/>
    </>
  )
}

export default Favorites