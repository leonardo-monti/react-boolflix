import Flag from "./Flags"

export default function MovieList({ movies }) {
    return (
        <ul className="list-group">
            {movies.map((movie) => (
                <li key={`${movie.type}-${movie.id}`} className="list-group-item">
                    <div>Titolo: {movie.title}</div>
                    <div>Titolo Originale: {movie.originalTitle}</div>
                    <div>Lingua: <Flag language={movie.language} /></div>
                    <div>Rank: {movie.vote}</div>
                    <div>Tipo: {movie.type}</div>
                </li>
            ))}
        </ul>
    )
}