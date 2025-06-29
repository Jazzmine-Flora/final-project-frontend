import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

// Sample hard-coded news data for Stage 1.1
const sampleNews = [
  {
    title: "Everyone Needs a Special Trauma Surgeon",
    description:
      "The idea behind trauma surgeries is to save as many people as possible. Since trauma surgery demands that surgeons operate quickly and accurately, the recovery period is usually shorter than expected.",
    urlToImage: "/sample-image1.jpg",
    publishedAt: "2024-12-15T10:30:00Z",
    source: { name: "National Geographic" },
    url: "https://example.com/article1",
  },
  {
    title: "Scientists Discover New Climate Solution",
    description:
      "Researchers have found a breakthrough method to combat climate change using innovative technology that could transform how we approach environmental challenges.",
    urlToImage: "/sample-image2.jpg",
    publishedAt: "2024-12-14T15:45:00Z",
    source: { name: "Science Daily" },
    url: "https://example.com/article2",
  },
  {
    title: "Space Exploration Reaches New Milestone",
    description:
      "NASA announces successful completion of their latest mission, marking a significant step forward in space exploration and our understanding of the universe.",
    urlToImage: "/sample-image3.jpg",
    publishedAt: "2024-12-13T08:20:00Z",
    source: { name: "Space News" },
    url: "https://example.com/article3",
  },
];

function Main({
  isLoggedIn,
  onSaveArticle,
  onDeleteArticle,
  savedArticles = [],
}) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setIsLoading(true);
    setSearchQuery(query);
    setHasSearched(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      setSearchResults(sampleNews);
      setIsLoading(false);
    }, 2000);
  };

  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  return (
    <main className="main">
      <SearchForm onSearch={handleSearch} isLoading={isLoading} />

      {isLoading && (
        <section className="main__preloader">
          <Preloader />
        </section>
      )}

      {!isLoading && hasSearched && searchResults.length > 0 && (
        <section className="main__results">
          <div className="main__container">
            <h2 className="main__results-title">Search results</h2>
            <div className="main__news-grid">
              {searchResults.map((article, index) => (
                <NewsCard
                  key={index}
                  article={article}
                  isLoggedIn={isLoggedIn}
                  isSaved={isArticleSaved(article)}
                  onSave={onSaveArticle}
                  onDelete={onDeleteArticle}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {!isLoading && hasSearched && searchResults.length === 0 && (
        <section className="main__no-results">
          <div className="main__container">
            <div className="main__no-results-content">
              <div className="main__no-results-icon">
                <svg viewBox="0 0 96 96">
                  <circle
                    cx="48"
                    cy="48"
                    r="45"
                    fill="none"
                    stroke="#B6BCBF"
                    strokeWidth="6"
                  />
                  <path
                    d="M48 20v56M20 48h56"
                    stroke="#B6BCBF"
                    strokeWidth="6"
                  />
                </svg>
              </div>
              <h3 className="main__no-results-title">Nothing found</h3>
              <p className="main__no-results-text">
                Sorry, but nothing matched your search terms.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Main;
