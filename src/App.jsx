import { useState } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY


export default function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const handleSearch = () => {
    const q = query.trim()
    if (!q) return
    setMovies([])

    axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: q,
        language: "it-IT",
      }
    })
      .then((movieRes) => {
        const movies = movieRes.data.results.map((item) => ({
          id: item.id,
          title: item.title,
          originalTitle: item.original_title,
          language: item.original_language,
          vote: item.vote_average,
          type: "movie",
        }))
        setMovies(movies)
      })
      .catch((err) =>
        console.error("Errore API", err))

    axios.get(`${BASE_URL}/search/tv`, {
      params: {
        api_key: API_KEY,
        query: q,
        language: "it-IT",
      }
    })
      .then((tvRes) => {
        const tvSeries = tvRes.data.results.map((item) => ({
          id: item.id,
          title: item.name,
          originalTitle: item.original_name,
          language: item.original_language,
          vote: item.vote_average,
          type: "tv",
        }))
        setMovies((prev) => [...prev, ...tvSeries])
      })
      .catch((err) =>
        console.error("Errore API", err))
  }


  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="container py-4">
      <h1>BOOLFLIX</h1>
      <SearchBar
        query={query}
        onQueryChange={handleQueryChange}
        onSearch={handleSearch}
      />
      <MovieList movies={movies} />
    </div>

  )
}


