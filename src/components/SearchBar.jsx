export default function SearchBar({ query, onQueryChange, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch()
    }

    return (
        <form className="bb-searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                placeholder="Cerca un film o serie..."
                onChange={onQueryChange}
            />

            <button type="submit">Cerca</button>
        </form>
    )
}