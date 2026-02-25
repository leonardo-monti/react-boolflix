import Flag from "./Flags"

const IMAGE_BASE = "https://image.tmdb.org/t/p/w342"
const FALLBACK = "https://via.placeholder.com/342x513?text=No+Image"

export default function MovieList({ movies }) {

    return (
        <ul className="list-group">
            {movies.map((movie) => {

                const posterUrl = movie.posterPath
                    ? `${IMAGE_BASE}${movie.posterPath}`
                    : FALLBACK

                let stars = movie.vote / 2

                if (stars % 1 !== 0) {
                    stars = parseInt(stars) + 1
                }

                return (
                    <li
                        key={`${movie.type}-${movie.id}`}
                        className="list-group-item"
                    >

                        <img
                            src={posterUrl}
                            alt={movie.title}
                            style={{ width: "120px", marginBottom: "10px" }}
                        />

                        <div>Titolo: {movie.title}</div>
                        <div>
                            Titolo Originale: {movie.originalTitle}
                        </div>
                        <div>
                            Lingua: <Flag language={movie.language} />
                        </div>
                        <div>
                            Rank:{" "}
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                    {i < stars ? "★" : "☆"}
                                </span>
                            ))}
                        </div>
                        <div>Tipo: {movie.type}</div>

                    </li>
                )
            })}
        </ul>
    )
}