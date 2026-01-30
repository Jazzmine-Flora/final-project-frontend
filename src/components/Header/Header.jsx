import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({
  isLoggedIn = false,
  currentUser = null,
  onSignInClick,
  onSignUpClick,
  onSignOut,
}) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">News Explorer</Link>
        <Navigation
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onSignInClick={onSignInClick}
          onSignUpClick={onSignUpClick}
          onSignOut={onSignOut}
        />
      </div>
    </header>
  );
}

export default Header;
