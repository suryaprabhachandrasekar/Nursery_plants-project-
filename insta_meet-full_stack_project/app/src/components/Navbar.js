import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#6a5acd' }}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">PUMO</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="homeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}> HOME</Link>
              </a>
              <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                <li><a className="dropdown-item" href="#">Sub Home 1</a></li>
                <li><a className="dropdown-item" href="#">Sub Home 2</a></li>
              </ul>
            </li> */}
            <li><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>  <a className="nav-link text-white" href="#">HOME</a></Link></li>
          <li>
            <Link to={'/login'} style={{ textDecoration: 'none' }}>  <a className="nav-link text-white" href="#">LOGIN</a></Link>
          </li>
          {["FEATURE", "COURSE", "TEACHER", "GALLERY", "BLOG", "CONTACT"].map((item, idx) => (
            <li className="nav-item" key={idx}>
              <a className="nav-link text-white" href="#">{item}</a>
            </li>

          ))}
        </ul>
      </div>
    </div>
    </nav >
  );
};

export default Navbar;