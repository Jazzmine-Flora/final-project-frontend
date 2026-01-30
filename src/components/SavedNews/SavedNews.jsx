import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles = [], onDeleteArticle, currentUser }) {
  const getKeywordsText = () => {
    if (savedArticles.length === 0) return "";

    const sources = [...new Set(savedArticles.map((a) => a.source?.name).filter(Boolean))];
    if (sources.length === 0) return "Various topics";

    if (sources.length <= 2) {
      return sources.join(" and ");
    }
    return `${sources.slice(0, 2).join(", ")}, and ${sources.length - 2} others`;
  };

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <div className="saved-news__container">
          <p className="saved-news__subtitle">Your saved articles</p>
          <h1 className="saved-news__title">
            {currentUser?.username
              ? `${currentUser.username}, you have ${savedArticles.length} saved article${savedArticles.length !== 1 ? "s" : ""}`
              : `You have ${savedArticles.length} saved article${savedArticles.length !== 1 ? "s" : ""}`}
          </h1>
          {savedArticles.length > 0 && (
            <p className="saved-news__keywords">
              By topic:{" "}
              <span className="saved-news__keywords-list">
                {getKeywordsText()}
              </span>
            </p>
          )}
        </div>
      </section>

      {savedArticles.length > 0 ? (
        <section className="saved-news__articles">
          <div className="saved-news__container">
            <div className="saved-news__grid">
              {savedArticles.map((article, index) => (
                <NewsCard
                  key={index}
                  article={article}
                  isLoggedIn={true}
                  isSaved={true}
                  onDelete={onDeleteArticle}
                  showDeleteButton={true}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="saved-news__empty">
          <div className="saved-news__container">
            <div className="saved-news__empty-content">
              <div className="saved-news__empty-icon" aria-hidden>
                <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 3H7a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z" />
                  <path d="M20 12v60l14-6 14 6V12" strokeDasharray="4 2" />
                </svg>
              </div>
              <h3 className="saved-news__empty-title">No saved articles yet</h3>
              <p className="saved-news__empty-text">
                Search for news on the home page, then click the bookmark icon
                on any article to save it here. You need to be signed in to
                save articles.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default SavedNews;
