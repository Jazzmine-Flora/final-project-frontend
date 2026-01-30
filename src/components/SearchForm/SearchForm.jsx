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
          Search the latest news by topic. Sign in to save articles to your
          personal collection and read them anytime.
        </p>
        <form className="search__form" onSubmit={handleSubmit}>
          <div className="search__input-container">
            <input
              className="search__input"
              type="text"
              placeholder="e.g. technology, climate, sports"
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
