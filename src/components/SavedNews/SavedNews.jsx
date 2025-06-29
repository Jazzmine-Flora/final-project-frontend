import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles = [], onDeleteArticle, currentUser }) {
  const getKeywordsText = () => {
    if (savedArticles.length === 0) return "";

    // This would normally come from your backend based on saved articles
    // For now, we'll just return a placeholder
    const keywords = ["Technology", "Science", "Health"];

    if (keywords.length <= 2) {
      return keywords.join(" and ");
    } else {
      return `${keywords.slice(0, 2).join(", ")}, and ${
        keywords.length - 2
      } others`;
    }
  };

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <div className="saved-news__container">
          <p className="saved-news__subtitle">Saved articles</p>
          <h1 className="saved-news__title">
            {currentUser?.username || "User"}, you have {savedArticles.length}{" "}
            saved article{savedArticles.length !== 1 ? "s" : ""}
          </h1>
          {savedArticles.length > 0 && (
            <p className="saved-news__keywords">
              By keywords:{" "}
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
              <h3 className="saved-news__empty-title">No saved articles yet</h3>
              <p className="saved-news__empty-text">
                Start exploring news and save articles you find interesting.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default SavedNews;
