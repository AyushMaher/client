// Projects.js
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1>Project Portfolio</h1>
      <p className="subtitle">
        A selection of solutions we’ve built across platforms and industries.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <h2>E-Commerce Platform</h2>
          <p>
            A full-featured online store built using the MERN stack, including user authentication, cart system, and an admin dashboard for managing inventory.
          </p>
        </div>

        <div className="project-card">
          <h2>Fitness Tracker</h2>
          <p>
            An Android application that enables users to monitor daily steps, plan diets, and set fitness goals. Integrated with Firebase for real-time tracking.
          </p>
        </div>

        <div className="project-card">
          <h2>Sales Forecasting Model</h2>
          <p>
            A machine learning model developed using Python and XGBoost to predict demand trends, enabling businesses to plan inventory more effectively.
          </p>
        </div>

        <div className="project-card">
          <h2>Billing & Inventory Software</h2>
          <p>
            Custom desktop solution for small businesses featuring GST-compliant invoicing, stock tracking, and client data management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
