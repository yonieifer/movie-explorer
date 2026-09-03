import { useNavigate } from "react-router-dom";
import type { Movie } from "../types";

function MovieCard({ movie }: { movie: Movie }) {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/movies/${movie.id}`);
    };
    return (
        <article onClick={onClick}>
            <img src={movie.image?.medium} alt={movie.name} />
            <p>{movie.name}</p>
        </article>
    );
}

export default MovieCard;
