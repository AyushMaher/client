// About.js
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* INTRO */}
      <section className="about-intro">
        <h1>About Visionary Devs</h1>
        <p>
          Visionary Devs is a collaborative team of engineers focused on building intelligent, scalable software. We specialize in crafting high-performance websites, mobile applications, and AI-powered solutions tailored for modern businesses.
        </p>
      </section>

      {/* MISSION + VISION */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To simplify digital transformation through reliable, efficient, and forward-thinking technology.
        </p>
        <h2>Our Vision</h2>
        <p>
          To be recognized as a trusted partner for startups and enterprises seeking custom-built, future-ready solutions.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="about-tech">
        <h2>Our Core Technologies</h2>
        <ul>
          <li>MERN Stack: MongoDB, Express.js, React, Node.js</li>
          <li>Android Development: Kotlin & Java</li>
          <li>Machine Learning: Python, TensorFlow, Scikit-learn</li>
          <li>Cloud & DevOps: Firebase, REST APIs, Docker</li>
        </ul>
      </section>

      {/* WHY US */}
      <section className="about-why">
        <h2>Why Choose Us</h2>
        <ul>
          <li>Results-driven development with strong attention to performance and UI/UX</li>
          <li>Reliable communication and collaborative mindset</li>
          <li>Agile workflow and scalable project delivery</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
