import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, isLoading = false }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <section className="search">
      <div className="search__container">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form" onSubmit={handleSubmit}>
          <div className="search__input-container">
            <input
              className="search__input"
              type="text"
              placeholder="Enter topic"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading}
              required
            />
            <button
              className="search__button"
              type="submit"
              disabled={isLoading || !query.trim()}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
