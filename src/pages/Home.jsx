import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <p className="fs-5 text-white mb-4 animated slideInDown">
                Gateway to the Magic of Sri Lanka
              </p>
          
        </div>
            </div>
          </div>
        </div>
      
      {/* Welcome Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary pe-3">
              Welcome
            </h6>
            <h1 className="mb-4">Discover the Essence of Sri Lanka</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="text-center mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d' }}>
                Discover the essence of Sri Lanka with <strong>Opulent Tours</strong>, your trusted travel companion, backed by over 15 years of experience and a young, creative team dedicated to crafting unforgettable journeys.
              </p>
              <p className="text-center mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d' }}>
                From misty mountain peaks to golden beaches, from ancient cities to lush tea gardens, Sri Lanka is a land where beauty, culture, and adventure come together in perfect harmony. At Opulent Tours, we take pride in showcasing the island's timeless charm through personalized travel experiences that reflect warmth, authenticity, and comfort.
              </p>
              <p className="text-center mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d' }}>
                Let us guide you through Sri Lanka's wonders, where every journey tells a story, and every moment becomes a cherished memory.
              </p>
              <p className="text-center" style={{ fontSize: '1.2rem', fontWeight: '600', color: '#086AD8' }}>
                Opulent Tours – Where every journey begins with the magic of Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/BG7.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">Opulent Tours</span>
              </h1>
              <p className="mb-4">
                Based in Kalutara, Opulent Tours proudly stands as a leading Sri Lankan travel company, with over 15 years of experience in crafting unforgettable travel experiences. Our young and creative team combines local expertise with modern innovation, ensuring every journey is crafted with care, comfort, and a touch of luxury.
              </p>
              <p className="mb-4">
                We design exceptional tours not only across Sri Lanka, but also to India and Thailand, offering everything from exotic getaways and cultural escapes to thrilling adventures. Each itinerary is tailor-made to reflect your style — whether you seek relaxation, exploration, or indulgence.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    First Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />5 Star
                    Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    24/7 Customer Support
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Professional Tour Guides
                  </p>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="/about">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-plane text-primary mb-4" />
                  <h5>Airport Pick-up & Drop-off</h5>
                  <p>
                    Comfortable and reliable transfers with friendly drivers and clean vehicles
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>Hotel Reservations</h5>
                  <p>
                    Star-class, boutique, or budget hotels handpicked for quality and comfort
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-car text-primary mb-4" />
                  <h5>Transportation Services</h5>
                  <p>
                    Luxury cars, vans, and coaches with chauffeur-driven or self-drive options
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-map-marked-alt text-primary mb-4" />
                  <h5>Tailor-Made Tours</h5>
                  <p>
                    Personalized itineraries designed to match your interests and budget
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                  <h5>Professional Tour Guides</h5>
                  <p>
                    Licensed multilingual guides with cultural insights and local expertise
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-binoculars text-primary mb-4" />
                  <h5>Excursions & Sightseeing</h5>
                  <p>
                    Day trips to top attractions, hidden gems, and wildlife safaris
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-mountain text-primary mb-4" />
                  <h5>Adventure Activities</h5>
                  <p>
                    Hiking, rafting, surfing, diving, and camping under professional supervision
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-headset text-primary mb-4" />
                  <h5>24/7 Customer Support</h5>
                  <p>
                    Round-the-clock assistance to ensure a safe and smooth journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Destination
            </h6>
            <h1 className="mb-5">Special Offers Just for You</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <a className="position-relative d-block overflow-hidden equal-box" href="/tours">
                <img className="img-fluid" src="assets/img/destination-2.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  25% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  India
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.5s">
              <a className="position-relative d-block overflow-hidden equal-box" href="/tours">
                <img className="img-fluid" src="assets/img/destination-2.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  35% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Thailand
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <a className="position-relative d-block overflow-hidden equal-box" href="/tours">
                <img className="img-fluid" src="assets/img/destination-3.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  10% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Sri Lanka
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}

      {/* Package Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Packages
            </h6>
            <h1 className="mb-5">Explore More Spend Less</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/package-1.jpg" alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    Thailand
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2" />2 Person
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">$149.00</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p>
                    Experience the vibrant culture and stunning beaches of Thailand with our carefully curated tour packages
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <a
                      href="/tours"
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </a>
                    <a
                      href="/booking"
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    India
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />5 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2" />2 Person
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">$139.00</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p>
                    Discover the incredible diversity and rich heritage of India with our expertly designed tours
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <a
                      href="/tours"
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </a>
                    <a
                      href="/booking"
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/package-3.jpg" alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    Sri Lanka
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />7 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2" />2 Person
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">$189.00</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p>
                    Explore the magical island of Sri Lanka with pristine beaches, ancient cities, and lush tea gardens
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <a
                      href="/tours"
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </a>
                    <a
                      href="/booking"
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Package End */}

{/* Enquire Now CTA Section - FIXED */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center">
        <div 
          className="p-5 rounded shadow-sm" 
          style={{ 
            background: 'linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)',
            border: '2px solid #086AD8'
          }}
        >
          <h3 className="mb-4" style={{ color: '#212529', fontWeight: '700' }}>
            Ready to Plan Your Dream Vacation?
          </h3>
          <p className="mb-4" style={{ color: '#495057', fontSize: '1.05rem' }}>
            Let us help you create the perfect travel experience tailored to your preferences
          </p>
          <p 
            className="mb-4" 
            style={{ 
              fontSize: '1.3rem', 
              fontWeight: '700', 
              color: '#086AD8', 
              fontStyle: 'italic',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Travel in Style, Live in Luxury — Because Ordinary Isn't Our Style.
          </p>
          <a 
            href="/booking" 
            className="btn btn-primary btn-lg px-5 py-3"
            style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(8, 106, 216, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <i className="fa fa-calendar-check me-2"></i>
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Booking Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Booking</h6>
                <h1 className="text-white mb-4">Online Booking</h1>
                <p className="mb-4">
                  Experience seamless travel planning with Opulent Tours. Our online booking system makes it easy to reserve your dream vacation in just a few clicks.
                </p>
                <p className="mb-4">
                  With over 15 years of expertise, we ensure every detail of your journey is handled with care and professionalism. From luxurious accommodations to exciting adventures, we've got you covered.
                </p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="/about">
                  Read More
                </a>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Book A Tour</h1>
                <form>
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
                          <option value={2}>India</option>
                          <option value={3}>Thailand</option>
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
                      <button className="btn btn-outline-light w-100 py-3" type="submit">
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* Process Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Process
            </h6>
            <h1 className="mb-5">3 Easy Steps</h1>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-globe fa-3x text-white" />
                </div>
                <h5 className="mt-4">Choose A Destination</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Select from our curated destinations across Sri Lanka, India, and Thailand, or let us create a custom itinerary for you
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-dollar-sign fa-3x text-white" />
                </div>
                <h5 className="mt-4">Confirm & Pay</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Review your personalized tour package and complete your booking with our secure payment options
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-plane fa-3x text-white" />
                </div>
                <h5 className="mt-4">Start Your Journey</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Pack your bags and get ready for an unforgettable adventure with 24/7 support throughout your journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process End */}
    </div>
  )
}