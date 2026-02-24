export default function MovieList({ movies }) {
    return (
        <ul className="list-group">
            {movies.map((movie) => (
                <li key={movie.id} className="list-group-item">
                    <div>Titolo: {movie.title}</div>
                    <div>Titolo Originale: {movie.original_title}</div>
                    <div>Lingua: {movie.original_language}</div>
                    <div>Rank: {movie.vote_average}</div>
                </li>
            ))}
        </ul>
    )
}