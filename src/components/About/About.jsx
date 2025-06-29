import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <img src="/author-photo.jpg" alt="Author" className="about__photo" />
          <div className="about__info">
            <h2 className="about__title">About the author</h2>
            <p className="about__description">
              This block describes the project author. Here you should indicate
              your name, what you do, and which development technologies you
              know.
            </p>
            <p className="about__description">
              You can also talk about your experience, what academic projects
              you have participated in, and what you plan to do after graduation
              from the course.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
