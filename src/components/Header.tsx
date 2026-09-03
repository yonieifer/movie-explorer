import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <>
            <h1>🎬 Movies Explorer</h1>
            <nav>
                <Link to="/">Movies</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </>
    );
}

export default Header;
