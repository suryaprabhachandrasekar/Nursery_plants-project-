import React from 'react';
//import './OurTeacher.css'; // Optional for custom styles

const teachers = [
  {
    name: 'Al–Malik',
    title: 'SENIOR TEACHER',
    image: 'https://images.unsplash.com/photo-1618355776464-8666794d2520?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGUlMjBzdHVkZW50fGVufDB8fDB8fHww',
  },
  {
    name: 'Al–Mubdi',
    title: 'SOCIAL MANAGER',
    image: 'https://img.freepik.com/premium-photo/celebrate-university-portrait-woman-graduation-ceremony-achievement-college-success-academy-happy-student-with-degree-certificate-education-learning-study-park_590464-375253.jpg?semt=ais_hybrid&w=740',
  },
  {
    name: 'As–Sallam',
    title: 'COORDINATOR',
    image: 'https://photos.peopleimages.com/picture/202303/2663292-university-graduation-and-portrait-of-girl-with-diploma-on-campus-smile-for-success-award-and-achievement.-education-college-and-happy-female-graduate-with-certificate-degree-and-academy-scroll-fit_400_400.jpg',
  },
  {
    name: 'Al–Khabir',
    title: 'BEST TEACHER',
    image: 'https://t4.ftcdn.net/jpg/00/62/32/61/360_F_62326163_LSY4BZGECTqtdOrKmkLByemgKOoiCfKN.jpg',
  },
];

const OurTeacher = () => {
  return (
    <div className="our-teacher-section py-5 bg-light">
      <div className="container text-center">
        <span className="badge bg-danger mb-2">About The Teachers</span>
        <h2 className="fw-bold text-purple">Our Teacher</h2>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet elit, consectetur adipiscing, sed eiusmod tempor sit amet elit dolor sit amet.
        </p>

        <div className="row justify-content-center">
          {teachers.map((teacher, idx) => (
            <div className="col-md-3 col-sm-6 mb-4" key={idx}>
              <div className="card shadow-sm h-100">
                <img src={teacher.image} alt={teacher.name} className="card-img-top" id='teach' />
                <div className="card-body">
                  <h6 className="fw-bold text-dark">{teacher.name}</h6>
                  <p className="text-muted small">{teacher.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-danger mt-3">View All Teacher</button>
      </div>
    </div>
  );
};

export default OurTeacher;
