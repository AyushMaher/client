// Services.js
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="subtitle">
        Custom-built digital solutions designed to meet your business goals.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Responsive websites and full-stack applications using the MERN stack. Clean code and scalable architecture are our priorities.
          </p>
        </div>

        <div className="service-card">
          <h2>Android App Development</h2>
          <p>
            Native Android applications built with Kotlin or Java, featuring modern UI, performance optimization, and Firebase integration.
          </p>
        </div>

        <div className="service-card">
          <h2>Machine Learning Solutions</h2>
          <p>
            Data-driven ML models for prediction, automation, and personalization. Delivered with Python, Scikit-learn, and TensorFlow.
          </p>
        </div>

        <div className="service-card">
          <h2>Custom Software Tools</h2>
          <p>
            Tailored desktop/web tools for business automation, ERP systems, reporting dashboards, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
