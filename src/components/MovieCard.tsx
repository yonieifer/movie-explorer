import { useNavigate } from "react-router-dom";
import type { Movie } from "../types";
import "./MovieCard.css";
import useFavoritesStoe from "../store/Favorites";

function MovieCard({ movie }: { movie: Movie }) {
    const favotires = useFavoritesStoe((state) => state.favorites);
    const add = useFavoritesStoe((state) => state.add);
    const remove = useFavoritesStoe((state) => state.remove);

    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/movies/${movie.id}`);
    };

    const isFavorite = favotires.some((f) => f.id === movie.id);
    const onToggle = () => {
        isFavorite ? remove(movie.id) : add(movie);
    };
    return (
        <article className="card">
            <img src={movie.image?.medium} alt={movie.name} />
            <h2>{movie.name}</h2>
            <div className="genres">
                {movie.genres.map((g) => (
                    <span key={g}>{g}</span>
                ))}
            </div>
            <p>⭐{movie.rating?.average}</p>
            <button onClick={onClick}>View</button>
            <div>
                <button onClick={onToggle}>{isFavorite ? "❤️": "🤍"}</button>
            </div>
        </article>
    );
}

export default MovieCard;
