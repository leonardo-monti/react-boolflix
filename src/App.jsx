import { useState, useEffect } from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList"
import "./App.css"

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export default function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const fetchHome = () => {
    const homeQuery = "a"

    let moviesMapped = []
    let tvMapped = []

    axios
      .get(`${BASE_URL}/search/movie`, {
        params: { api_key: API_KEY, query: homeQuery, language: "it-IT" },
      })
      .then((movieRes) => {
        moviesMapped = movieRes.data.results.slice(0, 15).map((item) => ({
          id: item.id,
          title: item.title,
          originalTitle: item.original_title,
          language: item.original_language,
          vote: item.vote_average,
          posterPath: item.poster_path,
          overview: item.overview,
          type: "movie",
        }))

        return axios.get(`${BASE_URL}/search/tv`, {
          params: { api_key: API_KEY, query: homeQuery, language: "it-IT" },
        })
      })
      .then((tvRes) => {
        tvMapped = tvRes.data.results.slice(0, 15).map((item) => ({
          id: item.id,
          title: item.name,
          originalTitle: item.original_name,
          language: item.original_language,
          vote: item.vote_average,
          posterPath: item.poster_path,
          overview: item.overview,
          type: "tv",
        }))

        setMovies([...moviesMapped, ...tvMapped])
      })
      .catch((err) => console.error("Errore home", err))
  }

  useEffect(() => {
    fetchHome()
  }, [])

  const handleSearch = () => {
    const q = query.trim()
    if (!q) return
    setMovies([])

    let moviesMapped = []
    let tvMapped = []

    axios
      .get(`${BASE_URL}/search/movie`, {
        params: { api_key: API_KEY, query: q, language: "it-IT" },
      })
      .then((movieRes) => {
        moviesMapped = movieRes.data.results.map((item) => ({
          id: item.id,
          title: item.title,
          originalTitle: item.original_title,
          language: item.original_language,
          vote: item.vote_average,
          posterPath: item.poster_path,
          overview: item.overview,
          type: "movie",
        }))

        return axios.get(`${BASE_URL}/search/tv`, {
          params: { api_key: API_KEY, query: q, language: "it-IT" },
        })
      })
      .then((tvRes) => {
        tvMapped = tvRes.data.results.map((item) => ({
          id: item.id,
          title: item.name,
          originalTitle: item.original_name,
          language: item.original_language,
          vote: item.vote_average,
          posterPath: item.poster_path,
          overview: item.overview,
          type: "tv",
        }))

        setMovies([...moviesMapped, ...tvMapped])
      })
      .catch((err) => console.error("Errore API", err))
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="bb-page">
      <header className="bb-header">
        <h1 className="bb-logo">BOOLFLIX</h1>

        <div className="bb-search">
          <SearchBar
            query={query}
            onQueryChange={handleQueryChange}
            onSearch={handleSearch}
          />
        </div>
      </header>

      <main className="bb-main">
        <MovieList movies={movies} />
      </main>
    </div>
  )
}