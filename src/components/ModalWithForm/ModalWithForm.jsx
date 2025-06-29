import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  isOpen,
  onClose,
  onSubmit,
  buttonText = "Submit",
  isValid = true,
  alternativeAction,
}) {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__container">
        <button
          className="modal__close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="modal__close-icon" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            className={`modal__submit-button ${
              !isValid ? "modal__submit-button_disabled" : ""
            }`}
            type="submit"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
        {alternativeAction && (
          <div className="modal__alternative">{alternativeAction}</div>
        )}
      </div>
    </div>
  );
}

export default ModalWithForm;
