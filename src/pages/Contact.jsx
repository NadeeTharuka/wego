// Contact.jsx
import React, { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Start */}
<div className="container-fluid bg-primary py-5 mb-5 hero-header"
  style={{
    backgroundImage: 'linear-gradient(rgba(20, 20, 31, 0.3), rgba(20, 20, 31, 0.3)), url("assets/img/contact-hero.jpg")',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '95vh',
    paddingTop: '8rem',
    paddingBottom: '8rem',
    imageRendering: 'crisp-edges',
    WebkitImageRendering: 'crisp-edges',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden'
  }}
>
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Contact Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Contact Us
            </h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          
          {/* Map Box - Full Width on Top */}
          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="text-primary mb-3 text-center">
                <i className="fa fa-map-marked-alt me-2"></i>Find Us Here
              </h4>
              <iframe
                className="position-relative rounded w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d79.95824431476543!3d6.583333333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMDAuMCJOIDc5wrA1NycyOS43IkU!5e0!3m2!1sen!2slk!4v1609459200000!5m2!1sen!2slk"
                frameBorder="0"
                style={{ height: 450, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Info and Form - Side by Side */}
          <div className="row g-4">
            {/* Contact Info Box */}
            <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-light rounded h-100 p-5">
                <h4 className="text-primary mb-4">
                  <i className="fa fa-phone-alt me-3"></i>Get In Touch
                </h4>
                <p className="mb-4">
                  Contact us for any inquiries about our tours and services. We're here to help you plan your perfect Sri Lankan adventure.
                </p>
                
                <div className="mb-4 pb-3 border-bottom border-primary">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary rounded-circle" style={{ width: 55, height: 55 }}>
                      <i className="fa fa-map-marker-alt text-white fa-lg"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="text-primary mb-2">Office Address</h6>
                      <p className="mb-0 text-dark">Duwa Temple Road, Kalutara South, Sri Lanka</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 pb-3 border-bottom border-primary">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary rounded-circle" style={{ width: 55, height: 55 }}>
                      <i className="fa fa-phone-alt text-white fa-lg"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="text-primary mb-2">Call Us</h6>
                      <p className="mb-0 text-dark">
                        <a href="tel:+94715345060" className="text-dark text-decoration-none">
                          +94 71 534 5060
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary rounded-circle" style={{ width: 55, height: 55 }}>
                      <i className="fa fa-envelope-open text-white fa-lg"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="text-primary mb-2">Email Us</h6>
                      <p className="mb-0 text-dark">
                        <a href="mailto:opulenttoursinfo@gmail.com" className="text-dark text-decoration-none">
                          opulenttoursinfo@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Box */}
            <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded h-100 p-5">
                <h4 className="text-primary mb-4">
                  <i className="fa fa-paper-plane me-3"></i>Send Message
                </h4>
                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-white border-0"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-white border-0"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-white border-0"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-white border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 120 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        <i className="fa fa-paper-plane me-2"></i>Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  )
}

export default Contact