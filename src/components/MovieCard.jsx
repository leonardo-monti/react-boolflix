import Flag from "./Flags";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w342"
const FALLBACK = "https://via.placeholder.com/342x513?text=No+Image"

export default function MovieCard({ movie }) {


    const posterUrl = movie.posterPath
        ? `${IMAGE_BASE}${movie.posterPath}`
        : FALLBACK

    let stars = movie.vote / 2

    if (stars % 1 !== 0) {
        stars = parseInt(stars) + 1
    }

    return (

        <div className="movie-card">
            <div
                className="poster"
                style={{ backgroundImage: `url(${posterUrl})` }}
            >
                <div className="overlay">
                    <h5>{movie.title}</h5>
                    <p><strong>Originale:</strong> {movie.originalTitle}</p>
                    <p><Flag language={movie.language} /></p>

                    <p>
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>
                                {i < stars ? "★" : "☆"}
                            </span>
                        ))}
                    </p>

                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )

}