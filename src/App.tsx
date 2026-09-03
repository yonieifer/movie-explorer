import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movies/favorites" element={<Favorites/>}/>
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
