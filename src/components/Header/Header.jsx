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
        <h1 className="header__logo">NewsExplorer</h1>
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
