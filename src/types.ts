export type Movie = {
    id: number
    image: {medium: string, original: string}
    name: string
    rating: {average: number}
    genres: string[]
}

export type FullMovie = {
    id: number
    image: {medium: string, original: string}
    name: string
    summary: string
    rating: {average: number}
    genres: string[]
}
