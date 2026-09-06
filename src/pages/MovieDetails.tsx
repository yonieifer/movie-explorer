import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type {FullMovie} from "../types"
import FullMovieCard from "../components/FullMovieCard";

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
            <button onClick={onBack}>Back</button>
            {error && <p>Error</p>}
            {isLoading && <p>Loading...</p>}
            {data && (
                <FullMovieCard data={data}/>
            )}
        </>
    );
}

export default MovieDetails;
