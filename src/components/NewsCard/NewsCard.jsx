import { useState, useEffect } from "react";
import "./NewsCard.css";

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='272' viewBox='0 0 400 272'%3E%3Crect fill='%23e8e8e8' width='400' height='272'/%3E%3Ctext fill='%23b6bcbf' font-family='Roboto' font-size='18' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3ENo image%3C/text%3E%3C/svg%3E";

function NewsCard({
  article,
  isLoggedIn = false,
  isSaved = false,
  onSave,
  onDelete,
  showDeleteButton = false,
}) {
  const [isBookmarked, setIsBookmarked] = useState(isSaved);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsBookmarked(isSaved);
  }, [isSaved]);

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    if (isLoggedIn) {
      if (isBookmarked) {
        onDelete?.(article);
      } else {
        onSave?.(article);
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

  const handleCardClick = (e) => {
    if (e.target.closest("button") || e.target.closest(".news-card__tooltip-wrap")) {
      return;
    }
    if (article.url) {
      window.open(article.url, "_blank", "noopener,noreferrer");
    }
  };

  const imageSrc = article.urlToImage && !imageError ? article.urlToImage : PLACEHOLDER_IMAGE;

  return (
    <article className="news-card" onClick={handleCardClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleCardClick(e)}>
      <div className="news-card__image-container">
        <img
          src={imageSrc}
          alt={article.title}
          className="news-card__image"
          onError={() => setImageError(true)}
        />
        <div className="news-card__buttons">
          {showDeleteButton ? (
            <button
              className="news-card__delete-button"
              onClick={handleBookmarkClick}
              aria-label="Delete article"
              type="button"
            >
              <svg className="news-card__delete-icon" viewBox="0 0 24 24">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          ) : (
            <div className="news-card__tooltip-wrap">
              <button
                className={`news-card__bookmark-button ${
                  isBookmarked ? "news-card__bookmark-button_active" : ""
                } ${!isLoggedIn ? "news-card__bookmark-button_disabled" : ""}`}
                onClick={handleBookmarkClick}
                disabled={!isLoggedIn}
                aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
                type="button"
              >
                <svg className="news-card__bookmark-icon" viewBox="0 0 24 24">
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                </svg>
              </button>
              {!isLoggedIn && (
                <div className="news-card__tooltip" role="tooltip">Sign in to save articles</div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="news-card__content">
        <time className="news-card__date" dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description || ""}</p>
        <span className="news-card__source">{article.source?.name}</span>
      </div>
    </article>
  );
}

export default NewsCard;
