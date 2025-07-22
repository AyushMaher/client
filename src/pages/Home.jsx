// Home.js
import './Home.css';
import { Link } from 'react-router-dom';

const teamMembers = [
  { role: "Mobile App Developer" },
  { role: "Frontend Developer" },
  { role: "ML & Full Stack Developer" },
  { role: "Data Analyst" },
];

const services = [
  "Website Design & Development",
  "Android Application Development",
  "Machine Learning Models",
  "Custom Business Software",
];

function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">Visionary Devs</span>
          </h1>
          <p>
            We craft scalable websites, robust mobile apps, and intelligent AI-driven software tailored to modern businesses.
          </p>
          <Link to="/contact" className="cta-button">
            Let's Connect
          </Link>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team">
        <h2>Our Expertise</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Visionary Devs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
