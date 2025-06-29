import { useState } from "react";
import "./NewsCard.css";

function NewsCard({
  article,
  isLoggedIn = false,
  isSaved = false,
  onSave,
  onDelete,
  showDeleteButton = false,
}) {
  const [isBookmarked, setIsBookmarked] = useState(isSaved);

  const handleBookmarkClick = () => {
    if (isLoggedIn) {
      if (isBookmarked) {
        onDelete && onDelete(article);
      } else {
        onSave && onSave(article);
      }
      setIsBookmarked(!isBookmarked);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img
          src={article.urlToImage || "/placeholder-image.jpg"}
          alt={article.title}
          className="news-card__image"
        />
        <div className="news-card__buttons">
          {showDeleteButton ? (
            <button
              className="news-card__delete-button"
              onClick={handleBookmarkClick}
              aria-label="Delete article"
            >
              <svg className="news-card__delete-icon" viewBox="0 0 24 24">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          ) : (
            <button
              className={`news-card__bookmark-button ${
                isBookmarked ? "news-card__bookmark-button_active" : ""
              } ${!isLoggedIn ? "news-card__bookmark-button_disabled" : ""}`}
              onClick={handleBookmarkClick}
              disabled={!isLoggedIn}
              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              <svg className="news-card__bookmark-icon" viewBox="0 0 24 24">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
              </svg>
            </button>
          )}
        </div>
        {!isLoggedIn && (
          <div className="news-card__tooltip">Sign in to save articles</div>
        )}
      </div>
      <div className="news-card__content">
        <time className="news-card__date">
          {formatDate(article.publishedAt)}
        </time>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <span className="news-card__source">{article.source?.name}</span>
      </div>
    </article>
  );
}

export default NewsCard;
