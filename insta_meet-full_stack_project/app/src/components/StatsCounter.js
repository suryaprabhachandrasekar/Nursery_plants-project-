import React from 'react';
import { FaChalkboardTeacher, FaSmile, FaBookOpen, FaTrophy } from 'react-icons/fa';
import '../StatsCounter.css'; // optional for styling

const stats = [
  {
    icon: <FaChalkboardTeacher />,
    number: '1,500',
    label: 'Total Teacher',
  },
  {
    icon: <FaSmile />,
    number: '4,500',
    label: 'Student',
  },
  {
    icon: <FaBookOpen />,
    number: '5,500',
    label: 'Our Course',
  },
  {
    icon: <FaTrophy />,
    number: '6,500',
    label: 'Award Winner',
  },
];

const StatsCounter = () => {
  return (
    <section className="py-5 bg-light-blue">
      <div className="container">
        <div className="row text-center justify-content-center">
          {stats.map((stat, idx) => (
            <div className="col-6 col-md-3 mb-4" key={idx}>
              <div className="icon-circle mb-2">
                {stat.icon}
              </div>
              <h5 className="text-danger fw-bold">{stat.number}</h5>
              <p className="text-purple fw-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
