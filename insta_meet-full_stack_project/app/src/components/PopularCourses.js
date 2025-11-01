import React from 'react';
//import './PopularCourses.css'; // External styling
import { FaUser, FaComment, FaTag } from 'react-icons/fa';
import crs from '../components/01.jpg'
import './common.css'
const courses = [
  {
    title: "Number Of One..",
    image: "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    type: "Free",
    instructor: "Al Matin",
    views: "888",
    comments: "1.7k",
    // label: "FREE",
  },
  {
    title: "New Bootstrap Theme",
    image: "https://www.leadsquared.com/wp-content/uploads/2021/11/Education-Website-Design.png",
    type: "Premium",
    instructor: "Al Matin",
    views: "888",
    comments: "1.7k",
    // label: "FEE",
  },
  {
    title: "You Are Best Course",
    image: "https://static.vecteezy.com/system/resources/previews/001/937/697/non_2x/online-education-application-learning-worldwide-on-computer-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-vector.jpg",
    type: "Premium",
    instructor: "Al Matin",
    views: "888",
    comments: "1.7k",
    // label: "$26",
  },
];

const PopularCourses = () => {
  return (
    <div className="popular-courses-section py-5">
      <div className="container text-center">
        <span className="badge bg-danger mb-2">Training</span>
        <h2 className="fw-bold text-purple">Popular Course</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet elit, consectetur adipiscing, sed eiusmod<br />
          tempor sit amet elit dolor sit amet elit sed eiusmod.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-2 my-3">
          {["UX/UI", "Music", "Marketing", "Stretch", "Finance", "Economics"].map((cat, idx) => (
            <button key={idx} className={`btn btn-outline-primary rounded-pill ${cat === "UX/UI" ? "active" : ""}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="row mt-4">
          {courses.map((course, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="position-relative pop_div">
                  <img src={course.image} className="card-img-top pop_img" alt={course.title} height="250" />
                  <span className="badge bg-primary position-absolute top-0 start-0 m-2">{course.label}</span>
                  {/* <div className="video-icon">
                    <i className="fa fa-play-circle text-white" style={{ fontSize: '40px' }}></i>
                  </div> */}
                </div>
                <div className="card-body ">
                  <h6 className="fw-bold text-purple">{course.title}</h6>
                  <div className="d-flex align-items-center mt-3 justify-content-center">
                    <img src={crs} className="rounded-circle me-2" width="40" alt="instructor" />
                    <div>
                      <small className="fw-bold text-dark">{course.instructor}</small><br />
                      <small className="text-muted">View Profile</small>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-around text-muted small bg-light" >
                  <span style={{color:"orangered"}}><FaUser className="me-1" />{course.views}</span>
                  <span style={{color:"orangered"}}><FaComment className="me-1" />{course.comments}</span>
                  <span style={{color:"orangered"}}><FaTag className="me-1" />{course.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
