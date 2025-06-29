import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSignIn = (userData) => {
    // For Stage 1.1, we'll just simulate successful login
    console.log("Signing in with:", userData);
    setIsLoggedIn(true);
    setCurrentUser({
      username: userData.email.split("@")[0],
      email: userData.email,
    });
    setIsLoginModalOpen(false);
  };

  const handleSignUp = (userData) => {
    // For Stage 1.1, we'll just simulate successful registration
    console.log("Signing up with:", userData);
    setIsLoggedIn(true);
    setCurrentUser({
      username: userData.username,
      email: userData.email,
    });
    setIsRegisterModalOpen(false);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedArticles([]);
  };

  const handleSaveArticle = (article) => {
    if (!savedArticles.find((saved) => saved.url === article.url)) {
      setSavedArticles((prev) => [...prev, article]);
    }
  };

  const handleDeleteArticle = (article) => {
    setSavedArticles((prev) =>
      prev.filter((saved) => saved.url !== article.url)
    );
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Header
          isLoggedIn={isLoggedIn}
          onSignInClick={openLoginModal}
          onSignUpClick={openRegisterModal}
          onSignOut={handleSignOut}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  isLoggedIn={isLoggedIn}
                  onSaveArticle={handleSaveArticle}
                  onDeleteArticle={handleDeleteArticle}
                  savedArticles={savedArticles}
                />
                <About />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              isLoggedIn ? (
                <SavedNews
                  savedArticles={savedArticles}
                  onDeleteArticle={handleDeleteArticle}
                  currentUser={currentUser}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>

        <Footer />

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeModals}
          onSubmit={handleSignIn}
          onSwitchToRegister={openRegisterModal}
        />

        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={closeModals}
          onSubmit={handleSignUp}
          onSwitchToLogin={openLoginModal}
        />
      </div>
    </Router>
  );
}

export default App;
