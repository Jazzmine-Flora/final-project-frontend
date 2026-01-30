import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({
  isLoggedIn = false,
  onSignInClick,
  onSignUpClick,
  onSignOut,
}) {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link
            to="/"
            className={`navigation__link ${
              location.pathname === "/" ? "navigation__link_active" : ""
            }`}
          >
            Home
          </Link>
        </li>
        {isLoggedIn && (
          <li className="navigation__item">
            <Link
              to="/saved-news"
              className={`navigation__link ${
                location.pathname === "/saved-news"
                  ? "navigation__link_active"
                  : ""
              }`}
            >
              Saved
            </Link>
          </li>
        )}
      </ul>
      <div className="navigation__auth">
        {isLoggedIn ? (
          <button
            type="button"
            className="navigation__button navigation__button_type_logout"
            onClick={onSignOut}
          >
            Sign out
          </button>
        ) : (
          <>
            <button
              type="button"
              className="navigation__button navigation__button_type_login"
              onClick={onSignInClick}
            >
              Sign in
            </button>
            <button
              type="button"
              className="navigation__button navigation__button_type_register"
              onClick={onSignUpClick}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
