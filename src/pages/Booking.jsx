// Booking.jsx - Fixed version
import React, { useEffect } from 'react'

function Booking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
<div className="container-fluid bg-primary py-5 mb-5 hero-header"
  style={{
backgroundImage: 'linear-gradient(rgba(20, 20, 31, 0.35), rgba(20, 20, 31, 0.45)), url("https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=90")',    backgroundPosition: 'center center',
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
<h1 className="display-3 text-white animated slideInDown" style={{ fontSize: '2.5rem' }}>            Your adventure begins here. Book with confidence
          </h1>
          
        </div>
      </div>
    </div>
  </div>
      {/* Process Start */}
      <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Process
          </h6>
          <h1 className="mb-5" style={{ color: '#000000' }}>3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-globe fa-3x text-white" />
              </div>
              <h5 className="mt-4" style={{ fontSize: '1.35rem', lineHeight: '1.8', color: '#000000' }}>Choose A Destination</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#000000'  }}>
Select from our curated destinations across Sri Lanka, or let us create a custom itinerary just for you              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-dollar-sign fa-3x text-white" />
              </div>
              <h5 className="mt-4" style={{ fontSize: '1.35rem', lineHeight: '1.8', color: '#000000' }}>Confirm & Pay</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#000000'  }}>
Review your personalized tour package and complete your booking with our secure payment options              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-plane fa-3x text-white" />
              </div>
              <h5 className="mt-4" style={{ fontSize: '1.35rem', lineHeight: '1.8', color: '#000000' }}>Start Your Journey</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#000000' }}>
Pack your bags and get ready for an unforgettable adventure with 24/7 support throughout your journey              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Process Start */}
    {/* Booking Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h1 className="text-white mb-4">Customize / Plan your Dream Trip</h1>
                <p className="mb-4">
                  You can customize our recommended tours or plan your dream trip by discussing your preferences with the friendly team at Opulent Tours.
                </p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="/contact">
                  Read More
                </a>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Plan A Tour</h1>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date" id="date3" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent datetimepicker-input"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label htmlFor="datetime">Date &amp; Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select bg-transparent" id="select1">
                        <option value={1}>Sri Lanka</option>
                        
                      </select>
                      <label htmlFor="select1">Destination</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-light w-100 py-3" type="button">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* Booking Start */}
    </div>
  )
}

export default Booking