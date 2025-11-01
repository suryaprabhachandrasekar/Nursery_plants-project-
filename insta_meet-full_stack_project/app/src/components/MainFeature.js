import React from 'react';
//import './MainFeature.css'; // External styles
import { FaPlayCircle } from 'react-icons/fa';

const MainFeature = () => {
  return (
    <div className="main-feature-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column */}
          <div className="col-md-6">
            <span className="badge bg-danger mb-2">Why Choose Us</span>
            <h2 className="fw-bold text-purple">Our Main Feature</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed eiusmod tempor sit amet elit dolor sit amet elit.
            </p>

            <div className="row">
              {[
                { title: 'Online Course', desc: 'Lorem ipsum dolor sit amet elit consectetur adipiscing sed.' },
                { title: 'Wordpress Course', desc: 'Lorem ipsum dolor sit amet elit consectetur adipiscing sed.' },
                { title: 'Web Design Course', desc: 'Lorem ipsum dolor sit amet elit consectetur adipiscing sed.' },
                { title: 'Updates & Support', desc: 'Lorem ipsum dolor sit amet elit consectetur adipiscing sed.' },
              ].map((item, idx) => (
                <div className="col-6 mb-4" key={idx}>
                  <h6 className="fw-bold text-purple">{item.title}</h6>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 text-center">
            <div className="position-relative d-inline-block">
              <img
                src={"https://st.depositphotos.com/1594308/1714/i/450/depositphotos_17140165-stock-photo-youthful-learners.jpg"}
                className="img-fluid rounded"
                alt="feature"
              />
              <FaPlayCircle className="play-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeature;
