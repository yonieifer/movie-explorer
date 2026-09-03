import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import useFetch from "../hooks/useFetch";
import type { Movie } from "../types";

function Movies() {
    const [search, setSearch] = useState("");
    const [movies, isLoading, error] = useFetch<Movie[]>(
        "https://api.tvmaze.com/shows",
    );

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredMovies = movies?.filter(m => m.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <SearchBar search={search} onSearch={onSearch}/>
            {error && <p>Error</p>}
            {isLoading && <p>Loading...</p>}
            {filteredMovies && <MovieList movies={filteredMovies} />}
        </>
    );
}

export default Movies;
