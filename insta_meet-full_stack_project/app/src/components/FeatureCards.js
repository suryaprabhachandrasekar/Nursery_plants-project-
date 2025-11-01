import React from 'react';
//import './FeatureCards.css'; // External CSS for custom styling
import { FaTrophy, FaGraduationCap, FaBullhorn } from 'react-icons/fa';
import { SiElementor } from 'react-icons/si';

const features = [
  { icon: <FaTrophy />, title: "Best Award" },
  { icon: <FaGraduationCap />, title: "Online Education" },
  { icon: <FaBullhorn />, title: "Web Marketing" },
  { icon: <SiElementor />, title: "Upcoming Event" },
];

const FeatureCards = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        {features.map((feature, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <div className="feature-card">
              <div className="icon-circle">
                {feature.icon}
              </div>
              <h5 className="mt-3 fw-bold text-uppercase text-purple">{feature.title}</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur repudian illum.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

