import "./About.css";
import authorPhoto from "../../images/IMG_8149.JPG";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <img src={authorPhoto} alt="Taliba Ali Latif" className="about__photo" />
          <div className="about__info">
            <h2 className="about__title">About the developer</h2>
            <p className="about__description">
              News Explorer is a portfolio project created by{" "}
              <strong>Taliba Ali Latif</strong>. It was built as part of the
              TripleTen Software Engineering program to demonstrate modern
              full-stack web development, from UI design to data flow and user
              authentication.
            </p>
            <p className="about__description">
              This project highlights a contemporary tech stack and practices:
              React with hooks for the frontend, responsive and accessible UI
              with CSS custom properties, client-side routing, RESTful API
              integration for news search, and a structured auth flow with
              token-based sessions. The codebase is organized for clarity and
              maintainability, with reusable components and a consistent design
              system, reflecting the kind of work I deliver as a full-stack
              developer focused on modern web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
