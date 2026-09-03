import { useNavigate } from "react-router-dom";
import type { Movie } from "../types";
import "./MovieCard.css"

function MovieCard({ movie }: { movie: Movie }) {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/movies/${movie.id}`);
    };
    return (
        <article className="card" onClick={onClick}>
            <img src={movie.image?.medium} alt={movie.name} />
            <h2>{movie.name}</h2>
            <div className="genres">{movie.genres.map(g => (<span key={g}>{g}</span>))}</div>
            <p>⭐{movie.rating?.average}</p>
        </article>
    );
}

export default MovieCard;
