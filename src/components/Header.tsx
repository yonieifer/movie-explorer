import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <Link to="/">Movies Explorer</Link>
        <Link to="/movies">Movies</Link>
        <Link to="favortes">Favorites</Link>
    </>
  )
}

export default Header