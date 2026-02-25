import MovieCard from "./MovieCard"

export default function MovieList({ movies }) {
    return (
        <div className="bb-grid">
            {movies.map((movie) => (
                <div key={`${movie.type}-${movie.id}`} className="bb-grid-item">
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    )
}