export default function SearchBar({ query, onQueryChange, onSearch }) {
    return (

        <div className="d-flex gap-2 mb-4">
            <input type="text"
                value={query}
                className="form-control"
                placeholder="Cerca un Film.."
                onChange={onQueryChange}
            />
            <button className="btn btn-primary" onClick={onSearch}>
                Cerca
            </button>

        </div>
    )
}