import "./FullMovieCard.css"
import type { FullMovie } from "../types";



function FullMovieCard({data}: {data: FullMovie}) {
    return (
        <article className="FullMovieCard">
            <img src={data.image?.medium} alt={data.name} />
            <h2>{data.name}</h2>
            <div className="genres">
                {data.genres.map((g) => (
                    <span key={g}>{g}</span>
                ))}
            </div>
            <p>⭐ {data.rating?.average}</p>
            <div dangerouslySetInnerHTML={{ __html: data.summary }} className="movie-text"></div>
        </article>
    );
}

export default FullMovieCard;
