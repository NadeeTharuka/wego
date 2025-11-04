import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
    {/* Topbar Start */}
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <small className="me-3 text-light">
              <i className="fa fa-map-marker-alt me-2" />
              123 Street, Kalutara South, SriLanka
            </small>
            <small className="me-3 text-light">
              <i className="fa fa-phone-alt me-2" />
              +94 71 534 5060
            </small>
            <small className="text-light">
              <i className="fa fa-envelope-open me-2" />
              opulenttoursinfo@gmail.com
            </small>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="/"
            >
              <i className="fab fa-twitter fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="/"
            >
              <i className="fab fa-facebook-f fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="/"
            >
              <i className="fab fa-linkedin-in fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="/"
            >
              <i className="fab fa-instagram fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
              href="/"
            >
              <i className="fab fa-youtube fw-normal" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar End */}
    
    {/* Navbar & Hero Start */}
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <img
              src="assets/img/logofinal1.png"
              alt="Opulent Tours Logo"
              style={{ objectFit: "cover", height: "60px", width: "auto" }} 
            />
            Opulent Tours
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/About" className="nav-item nav-link">
              About
            </Link>
            <Link to="/Tours" className="nav-item nav-link">
              Tours
            </Link>
            <Link to="/Booking" className="nav-item nav-link">
              Booking
            </Link>
            <Link to="/Contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link to="/" className="btn btn-primary rounded-pill py-2 px-4">
            Register
          </Link>
        </div>
      </nav>
    </div>
    {/* Navbar & Hero End */}
    </div>
  )
}

export default Header