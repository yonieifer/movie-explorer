import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type {FullMovie} from "../types"

function MovieDetails() {
    const { id } = useParams();
    const [data, isLoading, error] = useFetch<FullMovie>(
        `https://api.tvmaze.com/shows/${id}`,
    );
    const navigate = useNavigate()
    const onBack = () => {
        navigate(-1)
    }
    return (
        <>
            <button onClick={onBack}>Back to Movies</button>
            {error && <p>Error</p>}
            {isLoading && <p>Loading...</p>}
            {data && (
                <article>
                    <img src={data.image?.medium} alt={data.name} />
                    <h2>{data.name}</h2>
                    <div>{data.genres.map(g => (<span key={g}>{g}</span>))}</div>
                    <p>⭐ {data.rating?.average}</p>
                    <div dangerouslySetInnerHTML={{__html:data.summary}}></div>
                </article>
            )}
        </>
    );
}

export default MovieDetails;
