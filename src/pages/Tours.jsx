import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TourPackages.css";
import "./TripSteps.css";

const TourPackages = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchDuration, setSearchDuration] = useState("");

  const sriLankaTourPackages = [
    {
      id: 1,
      name: "EXPLORE SRI LANKA IN 04 DAYS 03 NIGHTS",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "4 Days 3 Nights",
      price: "$599",
      highlights: ["Dambulla Cave Temple", "Sigiriya Lion Rock", "Temple of Sacred Tooth", "Colombo City Tour"]
    },
    {
      id: 2,
      name: "EXPLORE SRI LANKA IN 05 DAYS 04 NIGHTS",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "5 Days 4 Nights",
      price: "$749",
      highlights: ["Negombo Beach", "Pinnawala Elephant Orphanage", "Cultural Dance Show", "Spice Garden"]
    },
    {
      id: 3,
      name: "ANCIENT CITIES TOUR - 05 DAYS 04 NIGHTS",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "5 Days 4 Nights",
      price: "$825",
      highlights: ["Anuradhapura UNESCO Site", "Polonnaruwa Ancient City", "Sri Maha Bodhiya", "Historical Monuments"]
    },
    {
      id: 4,
      name: "HILL COUNTRY & BEACHES - 07 DAYS 06 NIGHTS",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "7 Days 6 Nights",
      price: "$1299",
      highlights: ["Nuwara Eliya Tea Plantations", "Nine Arch Bridge", "Yala Safari", "Galle Fort"]
    },
    {
      id: 5,
      name: "COMPREHENSIVE TOUR - 08 DAYS 07 NIGHTS",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "8 Days 7 Nights",
      price: "$1599",
      highlights: ["Complete Island Experience", "Wildlife & Cultural Sites", "Beaches & Mountains", "All UNESCO Sites"]
    },
    {
      id: 6,
      name: "GRAND ADVENTURE - 14 DAYS 13 NIGHTS",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "14 Days 13 Nights",
      price: "$2499",
      highlights: ["Complete Sri Lanka Discovery", "All Major Destinations", "Adventure & Relaxation", "Cultural Immersion"]
    }
  ];

  const handleSearchCountry = (e) => {
    setSearchCountry(e.target.value);
    setSelectedCountry(null);
  };

  const handleSearchDuration = (e) => {
    setSearchDuration(e.target.value);
  };

  const filterPackages = () => {
    let filtered = sriLankaTourPackages;

    if (searchDuration && searchDuration !== "Tour duration") {
      filtered = filtered.filter(pkg => {
        const duration = parseInt(pkg.duration);
        switch(searchDuration) {
          case "3 Days":
            return duration <= 4;
          case "7 Days":
            return duration > 4 && duration <= 8;
          case "14 Days":
            return duration > 8;
          default:
            return true;
        }
      });
    }

    return filtered;
  };

  const handleViewPackage = (pkg) => {
    navigate('/destination', { state: { package: pkg } });
  };

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Tours
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Tours
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Search Filters Section - Properly Centered */}
      <div className="container-xxl py-4 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="search-section bg-white rounded-3 shadow p-4 border">
                <div className="text-center mb-4">
                  <h5 className="text-primary mb-2">Find Your Perfect Tour</h5>
                  <p className="text-muted mb-0">Search by duration or explore all Sri Lanka tours</p>
                </div>
                <div className="row g-3 align-items-end">
                  <div className="col-md-6">
                    <label className="form-label text-dark fw-semibold">Tour Duration</label>
                    <select 
                      className="form-select form-select-lg" 
                      value={searchDuration} 
                      onChange={handleSearchDuration}
                    >
                      <option value="">Select Duration</option>
                      <option value="3 Days">Short Tours (3-4 Days)</option>
                      <option value="7 Days">Medium Tours (5-8 Days)</option>
                      <option value="14 Days">Extended Tours (10+ Days)</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <button 
                      className="btn btn-primary btn-lg w-100"
                      onClick={() => setSelectedCountry("Sri Lanka")}
                      style={{ minHeight: '48px' }}
                    >
                      <i className="fa fa-search me-2"></i>
                      View Sri Lanka Tours
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Destination
            </h6>
            <h1 className="mb-5">Discover Beautiful Sri Lanka</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="wow zoomIn country-card"
                data-wow-delay="0.1s"
              >
                <div
                  className="position-relative d-block overflow-hidden rounded shadow-lg"
                  onClick={() => setSelectedCountry("Sri Lanka")}
                  style={{ cursor: "pointer", minHeight: "400px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200"
                    alt="Sri Lanka"
                    style={{ objectFit: "cover", height: "400px" }}
                  />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark bg-opacity-25">
                    <div className="text-center text-white">
                      <h2 className="display-4 fw-bold mb-3">Sri Lanka</h2>
                      <p className="fs-5 mb-4">The Pearl of the Indian Ocean</p>
                      <div className="btn btn-light btn-lg px-4 py-2">
                        Explore Tours
                      </div>
                    </div>
                  </div>
                  <div className="bg-danger text-white fw-bold position-absolute top-0 start-0 m-3 py-2 px-3 rounded">
                    Special Offers Available!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}

      {/* Tour Packages Section */}
      <section className="tour-packages">
        {selectedCountry || searchDuration ? (
          <>
            <div className="container">
              <div className="text-center mb-5">
                <h6 className="section-title bg-white text-center text-primary px-3">
                  Tour Packages
                </h6>
                <h2 className="display-5">
                  {selectedCountry 
                    ? `${selectedCountry} Tour Packages` 
                    : 'Filtered Tour Packages'}
                </h2>
              </div>
              <div className="packages-grid">
                {selectedCountry
                  ? sriLankaTourPackages.map((pkg) => (
                      <div className="package wow fadeInUp" key={pkg.id} data-wow-delay={`0.${pkg.id}s`}>
                        <div className="package-image-container">
                          <img
                            src={pkg.image}
                            alt={pkg.name}
                            className="package-img"
                          />
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
                              <span key={index} className="highlight-tag">
                                {highlight}
                              </span>
                            ))}
                          </div>
                          <button 
                            className="view-button" 
                            onClick={() => handleViewPackage(pkg)}
                          >
                            <i className="fa fa-eye me-2"></i>
                            View Package Details
                          </button>
                        </div>
                      </div>
                    ))
                  : filterPackages().map((pkg) => (
                      <div className="package wow fadeInUp" key={pkg.id} data-wow-delay={`0.${pkg.id}s`}>
                        <div className="package-image-container">
                          <img
                            src={pkg.image}
                            alt={pkg.name}
                            className="package-img"
                          />
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
                              <span key={index} className="highlight-tag">
                                {highlight}
                              </span>
                            ))}
                          </div>
                          <button 
                            className="view-button" 
                            onClick={() => handleViewPackage(pkg)}
                          >
                            <i className="fa fa-eye me-2"></i>
                            View Package Details
                          </button>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </>
        ) : (
          <div className="container text-center py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="bg-light p-5 rounded">
                  <i className="fa fa-map-marker-alt fa-3x text-primary mb-4"></i>
                  <h3 className="mb-3">Ready to Explore Sri Lanka?</h3>
                  <p className="text-muted mb-4">Click on the Sri Lanka destination above or use the search filters to discover our amazing tour packages</p>
                  <button 
                    className="btn btn-primary btn-lg px-5"
                    onClick={() => setSelectedCountry("Sri Lanka")}
                  >
                    <i className="fa fa-search me-2"></i>
                    Browse All Tours
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Trip Steps Section */}
      <TripSteps />
    </div>
  );
};

const TripSteps = () => {
  const steps = [
    {
      id: 1,
      icon: "fa fa-clipboard-list",
      description: "Give Us the Requirement.",
    },
    {
      id: 2,
      icon: "fa fa-envelope",
      description: "Few Tour Options will Email to You.",
    },
    {
      id: 3,
      icon: "fa fa-handshake",
      description: "Request for any Changes or If not proceed with the Payment.",
    },
    {
      id: 4,
      icon: "fa fa-bed",
      description: "Make a Reservation for Air, Hotels, Transport, Sightseeing, Guides, Etc.",
    },
    {
      id: 5,
      icon: "fa fa-file-check",
      description: "Within 72 Hours, Return Back to You with all Confirmation.",
    },
    {
      id: 6,
      icon: "fa fa-passport",
      description: "Process Visa.",
    },
    {
      id: 7,
      icon: "fa fa-plane-departure",
      description: "Enjoy your tour. Thank you.",
    },
  ];

  return (
    <div className="container-xxl py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            How It Works
          </h6>
          <h2 className="mb-5">How to create your trip in 7 easy steps</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {steps.map((step) => (
            <div 
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" 
              key={step.id} 
              data-wow-delay={`0.${step.id}s`}
            >
              <div className="text-center p-4 bg-white rounded shadow-sm h-100">
                <div 
                  className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3"
                  style={{ width: '60px', height: '60px', fontSize: '18px', fontWeight: 'bold' }}
                >
                  {step.id}
                </div>
                <div className="mb-3">
                  <i 
                    className={`${step.icon} text-primary`}
                    style={{ fontSize: '2.5rem' }}
                  ></i>
                </div>
                <p className="mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackages;