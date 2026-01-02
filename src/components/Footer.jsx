import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Company</h4>
              <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="/contact">
                Contact Us
              </a>
              <a className="btn btn-link" href="/privacy-policy">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="/terms-conditions">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="/faq">
                FAQs &amp; Help
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Duwa Temple Road, Kalutara South, Sri Lanka
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
              +94 74 234 3484
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                opulenttoursinfo@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-1.jpg"
                    alt="Gallery 1"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-2.jpg"
                    alt="Gallery 2"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-3.jpg"
                    alt="Gallery 3"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-2.jpg"
                    alt="Gallery 4"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-3.jpg"
                    alt="Gallery 5"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-1.jpg"
                    alt="Gallery 6"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="/">
                  Opulenttours.com
                </a>
                , All Right Reserved.
                Designed By{" "}
                <a className="border-bottom" href="https://github.com/ParasSalunke" target="_blank" rel="noopener noreferrer">
                  Nadun Kanchana
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/privacy-policy">Privacy Policy</a>
                  <a href="/terms-conditions">Terms</a>
                  <a href="/faq">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  )
}