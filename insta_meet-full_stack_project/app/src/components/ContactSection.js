import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaBehance, FaDribbble, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import '../ContactSection.css'; // optional styling

const ContactSection = () => {
  return (
    <section className="py-5 contact-section">
      <div className="container text-center">
        <span className="badge bg-danger text-white mb-2">Contact Us</span>
        <h2 className="fw-bold text-purple">Connected With Us</h2>
        <p className="text-muted mb-5">Lorem ipsum dolor sit amet elit, consectetur adipiscing, sed eiusmod tempor sit amet elit dolor sit amet elit.</p>

        <div className="row justify-content-center">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold text-start text-purple">Send a Message</h5>
            <form>
              <div className="row g-3 mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
              </div>
              <input type="text" className="form-control mb-3" placeholder="Your Subject" />
              <textarea className="form-control mb-3" rows="4" placeholder="Your Message"></textarea>
              <button className="btn btn-danger w-100">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded text-start">
              <h5 className="fw-bold text-purple mb-4">Our Location</h5>
              <p><FaEnvelope className="me-2 text-danger" /> <strong>Send a Message</strong><br />Monday-Friday: 9:00–20:00<br />Sunday & Saturday: 10:00–22:00</p>
              <p><FaPhoneAlt className="me-2 text-danger" /> <strong>Mobile Number</strong><br />+135 478 4442<br />+222 545 4442</p>
              <p><FaEnvelope className="me-2 text-danger" /> <strong>Email Address</strong><br />demo@example.com</p>

              <div className="mt-4">
                <h6 className="text-purple">Quick Connect</h6>
                <div className="d-flex gap-2 mt-2">
                  <a href="#" className="social-icon"><FaFacebookF /></a>
                  <a href="#" className="social-icon"><FaBehance /></a>
                  <a href="#" className="social-icon"><FaDribbble /></a>
                  <a href="#" className="social-icon"><FaLinkedinIn /></a>
                  <a href="#" className="social-icon"><FaTelegramPlane /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
