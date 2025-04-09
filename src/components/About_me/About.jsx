import React from 'react';
import './About.css';

const AboutMe = () => {
  return (
    <section className="about-me-section" id="about">
      <h2>About Me</h2>

      <div className="about-cards">
        <div className="card">
          <h3>✅ Education</h3>
          <p>Pursuing BTech in Computer Science & AI at Newton School of Technology, Delhi</p>
        </div>

        <div className="card">
          <h3>✅ Frontend Focus</h3>
          <p>Specializing in Javascript, React and responsive design</p>
        </div>

        <div className="card">
          <h3>✅ Full-stack Coming</h3>
          <p>Learning backend technologies and database systems</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
