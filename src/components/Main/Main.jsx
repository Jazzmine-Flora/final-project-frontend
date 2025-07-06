import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main({
  isLoggedIn,
  onSaveArticle,
  onDeleteArticle,
  savedArticles = [],
  articles = [],
  displayedArticlesCount,
  onSearch,
  onShowMore,
  isLoading,
  searchError,
  hasSearched,
  currentKeyword,
}) {
  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  const displayedArticles = articles.slice(0, displayedArticlesCount);
  const hasMoreArticles = displayedArticles.length < articles.length;

  return (
    <main className="main">
      <SearchForm onSearch={onSearch} isLoading={isLoading} />

      {isLoading && (
        <section className="main__preloader">
          <Preloader />
        </section>
      )}

      {searchError && (
        <section className="main__error">
          <div className="main__container">
            <div className="main__error-content">
              {searchError === "Nothing found" ? (
                <>
                  <div className="main__error-icon">
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
                  <h3 className="main__error-title">Nothing found</h3>
                  <p className="main__error-text">
                    Sorry, but nothing matched your search terms.
                  </p>
                </>
              ) : searchError === "Please enter a keyword" ? (
                <>
                  <h3 className="main__error-title">Please enter a keyword</h3>
                </>
              ) : (
                <>
                  <h3 className="main__error-title">Something went wrong</h3>
                  <p className="main__error-text">{searchError}</p>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {!isLoading && !searchError && hasSearched && articles.length > 0 && (
        <section className="main__results">
          <div className="main__container">
            <h2 className="main__results-title">
              Search results for "{currentKeyword}"
            </h2>
            <div className="main__news-grid">
              {displayedArticles.map((article, index) => (
                <NewsCard
                  key={article.url || index}
                  article={article}
                  isLoggedIn={isLoggedIn}
                  isSaved={isArticleSaved(article)}
                  onSave={onSaveArticle}
                  onDelete={onDeleteArticle}
                />
              ))}
            </div>
            {hasMoreArticles && (
              <button 
                className="main__show-more" 
                onClick={onShowMore}
                type="button"
              >
                Show more
              </button>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default Main;
