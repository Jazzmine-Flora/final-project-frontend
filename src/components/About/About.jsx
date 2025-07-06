import "./About.css";
import authorPhoto from "../../images/IMG_8149.JPG";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <img src={authorPhoto} alt="Author" className="about__photo" />
          <div className="about__info">
            <h2 className="about__title">About the author</h2>
            <p className="about__description">
              This project was created by Taliba Ali Latif, a student of the
              TripleTen Practicum Software Engineering course. The project is a
              news search service that allows users to find and save articles on
              various topics.
            </p>
            <p className="about__description">
              I am a passionate frontend developer with a focus on creating
              user-friendly and efficient web applications. My skills include
              HTML, CSS, JavaScript, React, and other modern web development
              technologies. I am also experienced in working with APIs and
              databases to fetch and display data from various sources. My goal,
              after graduation, is to continue developing my skills and
              contribute to innovative projects that make a positive impact on
              people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
