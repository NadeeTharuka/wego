// Home.jsx
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const oneDayTours = [
    {
      id: 1,
      name: "Yala Safari",
      image: "assets/img/yala-safari.jpg",
      price: "$85",
      description: "Experience the wild heart of Sri Lanka with world-famous wildlife safaris"
    },
    {
      id: 2,
      name: "Kandy & Pinnawala",
      image: "assets/img/kandy-pinnawala.jpg",
      price: "$95",
      description: "Discover the cultural soul and gentle giants of Sri Lanka"
    },
    {
      id: 3,
      name: "Sigiriya & Dambulla",
      image: "assets/img/sigiriya-dambulla.jpg",
      price: "$75",
      description: "Step into the ancient wonders of Sri Lanka's UNESCO World Heritage Sites"
    },
    {
      id: 4,
      name: "Galle Fort",
      image: "assets/img/galle-fort.jpg",
      price: "$65",
      description: "Explore the timeless beauty of Sri Lanka's most picturesque coastal city"
    },
    {
      id: 5,
      name: "Whale Watching",
      image: "assets/img/whale-watching.jpg",
      price: "$90",
      description: "Set sail into the deep blue and meet the gentle giants of the ocean"
    }
  ];

  // Sri Lanka Tour Packages - Updated with local image paths
  const sriLankaTourPackages = [
    {
      id: 2,
      name: "EXPLORE SRI LANKA - 04 DAYS 03 NIGHTS",
      image: "assets/img/explore-sri-lanka-4days.jpg",
      duration: "4 Days 3 Nights",
      price: "$599",
      highlights: ["Dambulla Cave Temple", "Sigiriya Lion Rock", "Temple of Sacred Tooth", "Colombo City Tour"]
    },
    {
      id: 3,
      name: "EXPLORE SRI LANKA - 05 DAYS 04 NIGHTS",
      image: "assets/img/explore-sri-lanka-5days.jpg",
      duration: "5 Days 4 Nights",
      price: "$749",
      highlights: ["Negombo Beach", "Pinnawala Elephant Orphanage", "Cultural Dance Show", "Spice Garden"]
    },
    {
      id: 4,
      name: "ANCIENT CITIES TOUR - 05 DAYS 04 NIGHTS",
      image: "assets/img/ancient-cities-tour.jpg",
      duration: "5 Days 4 Nights",
      price: "$825",
      highlights: ["Anuradhapura UNESCO Site", "Polonnaruwa Ancient City", "Sri Maha Bodhiya", "Historical Monuments"]
    },
    {
      id: 5,
      name: "HILL COUNTRY & BEACHES - 07 DAYS 06 NIGHTS",
      image: "assets/img/hill-country-beaches.jpg",
      duration: "7 Days 6 Nights",
      price: "$1299",
      highlights: ["Nuwara Eliya Tea Plantations", "Nine Arch Bridge", "Yala Safari", "Galle Fort"]
    },
    {
      id: 6,
      name: "COMPREHENSIVE TOUR - 08 DAYS 07 NIGHTS",
      image: "assets/img/comprehensive-tour.jpg",
      duration: "8 Days 7 Nights",
      price: "$1599",
      highlights: ["Complete Island Experience", "Wildlife & Cultural Sites", "Beaches & Mountains", "All UNESCO Sites"]
    },
    {
      id: 1,
      name: "ULTIMATE EXPLORER - 10 DAYS 09 NIGHTS",
      image: "assets/img/ultimate-explorer.jpg",
      duration: "10 Days 9 Nights",
      price: "$1899",
      highlights: ["Complete Island Experience", "UNESCO Sites", "Wildlife Safari", "Beach & Mountains", "Cultural Immersion"]
    },
    {
      id: 7,
      name: "GRAND ADVENTURE - 14 DAYS 13 NIGHTS",
      image: "assets/img/grand-adventure.jpg",
      duration: "14 Days 13 Nights",
      price: "$2499",
      highlights: ["Complete Sri Lanka Discovery", "All Major Destinations", "Adventure & Relaxation", "Cultural Immersion"]
    }
  ];

  // Function to handle navigation to tour details
  const handleViewOneDayTour = (tour) => {
    navigate('/one-day-tour-details', { state: { tour } });
  };

  // Function to handle navigation to package details
  const handleViewPackage = (pkg) => {
    navigate('/destination', { state: { package: pkg } });
  };

  return (
    <div>
      {/* Hero Header */}
      <div 
        className="container-fluid bg-primary mb-5 hero-header"
        style={{
          background: `linear-gradient(rgba(20, 20, 31, 0.5), rgba(20, 20, 31, 0.5)), url('https://images.unsplash.com/photo-1570789210967-2cac24afeb00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '60vh',
          paddingTop: '5rem',
          paddingBottom: '5rem'
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="text-white mb-4 animated slideInDown" style={{ 
                fontWeight: '500',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontSize: '3rem',
                lineHeight: '1.4'
              }}>
                Gateway to the Pearl of the Indian Ocean
              </h1>
              <p className="text-white mb-4 animated slideInDown" style={{ 
                color: '#ffffff',
                textShadow: 'none',
                filter: 'none',
                fontSize: '1.5rem',
                fontWeight: '400',
                marginBottom: '2rem'
              }}>
                Where Your Journey Begins
              </p>
              <a 
                href="/booking" 
                className="btn btn-light btn-lg px-5 py-3 mt-3 animated slideInUp"
                style={{ 
                  borderRadius: '50px', 
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                }}
              >
                INQUIRE NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Welcome Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-4">Discover the Essence of Sri Lanka</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="text-center mb-4" style={{ fontSize: '1.25rem', lineHeight: '2', color: '#555' }}>
                Discover the essence of Sri Lanka with <strong>Opulent Tours</strong>, your trusted travel companion, backed by over 15 years of experience and a young, creative team dedicated to crafting unforgettable journeys.
              </p>
              <p className="text-center mb-4" style={{ fontSize: '1.25rem', lineHeight: '2', color: '#555' }}>
                From misty mountain peaks to golden beaches, from ancient cities to lush tea gardens, Sri Lanka is a land where beauty, culture, and adventure come together in perfect harmony. At Opulent Tours, we take pride in showcasing the island's timeless charm through personalized travel experiences that reflect warmth, authenticity, and comfort.
              </p>
              <p className="text-center mb-4" style={{ fontSize: '1.25rem', lineHeight: '2', color: '#555' }}>
                Let us guide you through Sri Lanka's wonders, where every journey tells a story, and every moment becomes a cherished memory.
              </p>
              <p className="text-center" style={{ fontSize: '1.3rem', fontWeight: '600', color: '#086AD8' }}>
                Opulent Tours — Where every journey begins with the magic of Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
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

      {/* Special One Day Tours Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">Special One Day Tours</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {oneDayTours.map((tour, index) => (
              <div key={tour.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index + 1}s`}>
                <div className="package-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={tour.image} alt={tour.name} />
                  </div>
                  <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      Sri Lanka
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt text-primary me-2" />1 Day
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-user text-primary me-2" />Any Group
                    </small>
                  </div>
                  <div className="text-center p-4">
                    <h3 className="mb-0">{tour.price}</h3>
                    <div className="mb-3">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                    <h5 className="mb-3">{tour.name}</h5>
                    <p>{tour.description}</p>
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        onClick={() => handleViewOneDayTour(tour)}
                        className="btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        Read More
                      </button>
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
            ))}
          </div>
        </div>
      </div>
      {/* Special One Day Tours End */}

      {/* Sri Lanka Tour Packages Section - Updated with local images */}
      <section className="tour-packages py-5">
        <div className="container">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h2 className="display-5">Sri Lanka Tour Packages</h2>
            <p className="text-muted">Choose your perfect adventure</p>
          </div>
          
          <div className="packages-grid">
            {sriLankaTourPackages.map((pkg) => (
              <div className="package wow fadeInUp" key={pkg.id} data-wow-delay={`0.${pkg.id}s`}>
                <div className="package-image-container">
                  <img src={pkg.image} alt={pkg.name} className="package-img" />
                  <div className="package-overlay">
                    <div className="package-price">{pkg.price}</div>
                  </div>
                </div>
                <div className="package-content">
                  <h3 className="package-title">{pkg.name}</h3>
                  <div className="package-duration">
                    <i className="fa fa-clock text-primary me-2"></i>
                    {pkg.duration}
                  </div>
                  <div className="package-highlights">
                    {pkg.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                  <button className="view-button" onClick={() => handleViewPackage(pkg)}>
                    <i className="fa fa-eye me-2"></i>
                    View Package Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sri Lanka Tour Packages Section End */}

      {/* Booking Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h1 className="text-white mb-4">Plan your Dream Trip</h1>
                <p className="mb-4">
                  You can customize our recommended tours or plan your dream trip by discussing your preferences with the friendly team at Opulent Tours.
                </p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="/about">
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
                  Select from our curated destinations across Sri Lanka, or let us create a custom itinerary just for you
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