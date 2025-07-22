// Contact.js
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Let’s Connect</h1>
      <p className="subtitle">Tell us your goals — we’ll help you build the solution.</p>

      <div className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="example@domain.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Briefly describe your project or idea..." required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-block">
            <strong>Email:</strong>
            <p>visionarydevs@gmail.com</p>
          </div>
          <div className="info-block">
            <strong>Phone:</strong>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-block">
            <strong>Location:</strong>
            <p>Maharashtra, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
