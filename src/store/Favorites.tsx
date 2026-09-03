import { create } from "zustand";
import type { Movie } from "../types";

interface FavoritesStoe {
    favorites: Movie[];
    add: (movie: Movie) => void;
    remove: (movieId: number) => void;
}

const useFavoritesStoe = create<FavoritesStoe>((set, get) => ({
    favorites: [],
    add: (movie) =>
        set((state) => ({ favorites: [...state.favorites, movie] })),
    remove: (movieId) =>
        set((state) => ({
            favorites: state.favorites.filter((m) => m.id !== movieId),
        })),
}));

export default useFavoritesStoe;
