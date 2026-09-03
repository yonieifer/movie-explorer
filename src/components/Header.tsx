import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <h2>🎬 Movies Explorer</h2>
            <nav>
                <Link to="/">Movies</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </>
    );
}

export default Header;
