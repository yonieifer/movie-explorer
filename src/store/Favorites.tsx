import { create } from "zustand";
import type { Movie } from "../types";
import { persist } from "zustand/middleware";

interface FavoritesStoe {
    favorites: Movie[];
    add: (movie: Movie) => void;
    remove: (movieId: number) => void;
}

const useFavoritesStoe = create<FavoritesStoe>()(
    persist(
        (set) => ({
            favorites: [],
            add: (movie) =>
                set((state) => ({ favorites: [...state.favorites, movie] })),
            remove: (movieId) =>
                set((state) => ({
                    favorites: state.favorites.filter((m) => m.id !== movieId),
                })),
        }),
        { name: "favorites" },
    ),
);

export default useFavoritesStoe;
