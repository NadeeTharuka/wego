// FILE PATH: src/pages/Tours.jsx
// UPDATED WITH NEW PACKAGE 07

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TourPackages.css";

const TourPackages = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const sriLankaTourPackages = [
    {
      id: 1,
      name: "ULTIMATE EXPLORER - 10 DAYS 09 NIGHTS",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "10 Days 9 Nights",
      price: "$1899",
      highlights: ["Complete Island Experience", "UNESCO Sites", "Wildlife Safari", "Beach & Mountains", "Cultural Immersion"]
    },
    {
      id: 2,
      name: "EXPLORE SRI LANKA IN 04 DAYS 03 NIGHTS",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "4 Days 3 Nights",
      price: "$599",
      highlights: ["Dambulla Cave Temple", "Sigiriya Lion Rock", "Temple of Sacred Tooth", "Colombo City Tour"]
    },
    {
      id: 3,
      name: "EXPLORE SRI LANKA IN 05 DAYS 04 NIGHTS",
      image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "5 Days 4 Nights",
      price: "$749",
      highlights: ["Negombo Beach", "Pinnawala Elephant Orphanage", "Cultural Dance Show", "Spice Garden"]
    },
    {
      id: 4,
      name: "ANCIENT CITIES TOUR - 05 DAYS 04 NIGHTS",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "5 Days 4 Nights",
      price: "$825",
      highlights: ["Anuradhapura UNESCO Site", "Polonnaruwa Ancient City", "Sri Maha Bodhiya", "Historical Monuments"]
    },
    {
      id: 5,
      name: "HILL COUNTRY & BEACHES - 07 DAYS 06 NIGHTS",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "7 Days 6 Nights",
      price: "$1299",
      highlights: ["Nuwara Eliya Tea Plantations", "Nine Arch Bridge", "Yala Safari", "Galle Fort"]
    },
    {
      id: 6,
      name: "COMPREHENSIVE TOUR - 08 DAYS 07 NIGHTS",
      image: "https://images.unsplash.com/photo-1588417837058-c8884bfb5b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "8 Days 7 Nights",
      price: "$1599",
      highlights: ["Complete Island Experience", "Wildlife & Cultural Sites", "Beaches & Mountains", "All UNESCO Sites"]
    },
    {
      id: 7,
      name: "GRAND ADVENTURE - 14 DAYS 13 NIGHTS",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
      duration: "14 Days 13 Nights",
      price: "$2499",
      highlights: ["Complete Sri Lanka Discovery", "All Major Destinations", "Adventure & Relaxation", "Cultural Immersion"]
    }
  ];

  // Map features remain the same
  const mapFeatures = {
    "Popular Beaches": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200",
      highlightArea: {
        top: "48%",
        left: "8%",
        width: "35%",
        height: "48%"
      },
      places: [
        { name: "Negombo", position: { top: "48%", left: "20%" } },
        { name: "Mount Lavinia", position: { top: "53%", left: "22%" } },
        { name: "Bentota", position: { top: "58%", left: "20%" } },
        { name: "Hikkaduwa", position: { top: "63%", left: "21%" } },
        { name: "Unawatuna", position: { top: "69%", left: "25%" } },
        { name: "Mirissa", position: { top: "72%", left: "23%" } },
        { name: "Tangalle", position: { top: "76%", left: "28%" } },
        { name: "Arugam Bay", position: { top: "70%", right: "14%" } }
      ]
    },
    "Wildlife & Nature": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=200",
      highlightArea: {
        top: "60%",
        left: "20%",
        width: "55%",
        height: "35%"
      },
      places: [
        { name: "Yala National Park", position: { top: "78%", left: "40%" } },
        { name: "Udawalawe", position: { top: "68%", left: "28%" } },
        { name: "Bundala", position: { top: "80%", left: "36%" } },
        { name: "Minneriya", position: { top: "42%", left: "35%" } },
        { name: "Kaudulla", position: { top: "38%", left: "36%" } },
        { name: "Sinharaja Forest", position: { top: "62%", left: "25%" } }
      ]
    },
    "Adventure": {
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=200",
      highlightArea: {
        top: "45%",
        left: "24%",
        width: "30%",
        height: "25%"
      },
      places: [
        { name: "Ella Rock", position: { top: "62%", left: "36%" } },
        { name: "Adam's Peak", position: { top: "56%", left: "28%" } },
        { name: "Horton Plains", position: { top: "58%", left: "33%" } },
        { name: "Knuckles Range", position: { top: "48%", left: "32%" } },
        { name: "Kitulgala Rafting", position: { top: "52%", left: "27%" } }
      ]
    },
    "History & Culture": {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200",
      highlightArea: {
        top: "28%",
        left: "26%",
        width: "35%",
        height: "30%"
      },
      places: [
        { name: "Anuradhapura", position: { top: "32%", left: "32%" } },
        { name: "Polonnaruwa", position: { top: "38%", left: "38%" } },
        { name: "Sigiriya", position: { top: "40%", left: "34%" } },
        { name: "Dambulla", position: { top: "42%", left: "32%" } },
        { name: "Kandy", position: { top: "50%", left: "31%" } },
        { name: "Galle Fort", position: { top: "69%", left: "26%" } }
      ]
    },
    "Lesser Travelled": {
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=200",
      highlightArea: {
        top: "8%",
        left: "28%",
        width: "48%",
        height: "48%"
      },
      places: [
        { name: "Jaffna", position: { top: "10%", left: "34%" } },
        { name: "Mannar", position: { top: "22%", left: "26%" } },
        { name: "Trincomalee", position: { top: "34%", right: "12%" } },
        { name: "Batticaloa", position: { top: "50%", right: "10%" } },
        { name: "Mullaitivu", position: { top: "18%", left: "36%" } },
        { name: "Vavuniya", position: { top: "28%", left: "32%" } }
      ]
    },
    "Gastronomy": {
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200",
      highlightArea: {
        top: "30%",
        left: "18%",
        width: "60%",
        height: "60%"
      },
      places: [
        { name: "Colombo", position: { top: "52%", left: "24%" } },
        { name: "Galle", position: { top: "69%", left: "26%" } },
        { name: "Jaffna", position: { top: "10%", left: "34%" } },
        { name: "Kandy", position: { top: "50%", left: "31%" } },
        { name: "Matale Spices", position: { top: "46%", left: "31%" } },
        { name: "Negombo", position: { top: "48%", left: "20%" } }
      ]
    }
  };

  const handleViewPackage = (pkg) => {
    navigate('/destination', { state: { package: pkg } });
  };

  const handleFeatureHover = (featureName) => {
    setSelectedFeature(featureName);
  };

  const handleFeatureLeave = () => {
    setSelectedFeature(null);
  };

  return (
    <div>
      {/* Hero Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Tours</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Tours</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Sri Lanka Map Section */}
      <div className="container-xxl py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center wow fadeInUp mb-4" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Island</h6>
            <h1 className="mb-2">Sri Lanka</h1>
            <p className="text-muted">Discover the pearl of the Indian Ocean - Hover over features to explore destinations</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="position-relative d-flex justify-content-center align-items-center" style={{ minHeight: "650px", padding: "2rem 0" }}>
                
                {/* Left Side Features */}
                <div 
                  className="position-absolute interactive-feature" 
                  style={{ left: "5%", top: "18%", zIndex: 10 }}
                  onMouseEnter={() => handleFeatureHover("Popular Beaches")}
                  onMouseLeave={handleFeatureLeave}
                >
                  <div className="feature-card text-center" style={{ width: "140px", cursor: "pointer" }}>
                    <div className="feature-image-wrapper mb-2">
                      <img
                        src={mapFeatures["Popular Beaches"].image}
                        alt="Popular Beaches"
                        className="rounded-circle shadow"
                        style={{ width: "75px", height: "75px", objectFit: "cover", border: "3px solid white" }}
                      />
                    </div>
                    <h6 className="fw-bold" style={{ fontSize: "0.85rem", margin: 0 }}>Popular Beaches</h6>
                  </div>
                </div>

                <div 
                  className="position-absolute interactive-feature" 
                  style={{ left: "3%", top: "48%", zIndex: 10 }}
                  onMouseEnter={() => handleFeatureHover("Wildlife & Nature")}
                  onMouseLeave={handleFeatureLeave}
                >
                  <div className="feature-card text-center" style={{ width: "140px", cursor: "pointer" }}>
                    <div className="feature-image-wrapper mb-2">
                      <img
                        src={mapFeatures["Wildlife & Nature"].image}
                        alt="Wildlife & Nature"
                        className="rounded-circle shadow"
                        style={{ width: "75px", height: "75px", objectFit: "cover", border: "3px solid white" }}
                      />
                    </div>
                    <h6 className="fw-bold" style={{ fontSize: "0.85rem", margin: 0 }}>Wildlife & Nature</h6>
                  </div>
                </div>

                <div 
                  className="position-absolute interactive-feature" 
                  style={{ left: "12%", bottom: "8%", zIndex: 10 }}
                  onMouseEnter={() => handleFeatureHover("Adventure")}
                  onMouseLeave={handleFeatureLeave}
                >
                  <div className="feature-card text-center" style={{ width: "140px", cursor: "pointer" }}>
                    <div className="feature-image-wrapper mb-2">
                      <img
                        src={mapFeatures["Adventure"].image}
                        alt="Adventure"
                        className="rounded-circle shadow"
                        style={{ width: "75px", height: "75px", objectFit: "cover", border: "3px solid white" }}
                      />
                    </div>
                    <h6 className="fw-bold" style={{ fontSize: "0.85rem", margin: 0 }}>Adventure</h6>
                  </div>
                </div>

                {/* Center - Sri Lanka Map */}
                <div className="text-center" style={{ zIndex: 5, position: "relative" }}>
                  <img 
                    src="/assets/img/91a5c3ff-7781-4f6e-a4ff-cbe8d3bc8d20.png"
                    alt="Sri Lanka Map"
                    style={{ 
                      width: "380px", 
                      height: "auto", 
                      maxWidth: "100%",
                      filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.2)) contrast(1.1) brightness(1.05)",
                      borderRadius: "10px"
                    }}
                  />

                  {/* Highlighted Areas */}
                  {selectedFeature && mapFeatures[selectedFeature].highlightArea && (
                    <div 
                      className={`map-highlight ${selectedFeature.toLowerCase().replace(/\s+/g, '-').replace('&', '')}-highlight`}
                      style={{
                        position: "absolute",
                        top: mapFeatures[selectedFeature].highlightArea.top,
                        left: mapFeatures[selectedFeature].highlightArea.left,
                        right: mapFeatures[selectedFeature].highlightArea.right,
                        width: mapFeatures[selectedFeature].highlightArea.width,
                        height: mapFeatures[selectedFeature].highlightArea.height,
                        background: selectedFeature === "Popular Beaches" 
                          ? "radial-gradient(ellipse, rgba(6, 163, 218, 0.35) 0%, rgba(6, 163, 218, 0.15) 50%, transparent 70%)"
                          : selectedFeature === "Wildlife & Nature"
                          ? "radial-gradient(ellipse, rgba(76, 175, 80, 0.35) 0%, rgba(76, 175, 80, 0.15) 50%, transparent 70%)"
                          : selectedFeature === "Adventure"
                          ? "radial-gradient(ellipse, rgba(255, 152, 0, 0.35) 0%, rgba(255, 152, 0, 0.15) 50%, transparent 70%)"
                          : selectedFeature === "History & Culture"
                          ? "radial-gradient(ellipse, rgba(156, 39, 176, 0.35) 0%, rgba(156, 39, 176, 0.15) 50%, transparent 70%)"
                          : selectedFeature === "Lesser Travelled"
                          ? "radial-gradient(ellipse, rgba(103, 58, 183, 0.35) 0%, rgba(103, 58, 183, 0.15) 50%, transparent 70%)"
                          : "radial-gradient(ellipse, rgba(255, 87, 34, 0.35) 0%, rgba(255, 87, 34, 0.15) 50%, transparent 70%)",
                        borderRadius: "50%",
                        animation: "pulseGlow 2s ease-in-out infinite",
                        pointerEvents: "none",
                        zIndex: 3
                      }}
                    />
                  )}

                  {/* Place Markers */}
                  {selectedFeature && (
                    <div className="places-overlay">
                      {mapFeatures[selectedFeature].places.map((place, index) => (
                        <div
                          key={index}
                          className="place-marker"
                          style={{
                            position: "absolute",
                            ...place.position,
                            transform: "translate(-50%, -50%)",
                            zIndex: 20,
                            animation: `placePopIn 0.4s ease-out ${index * 0.1}s both`
                          }}
                        >
                          <div 
                            className="place-pin"
                            style={{
                              background: "linear-gradient(135deg, #06A3DA, #0585B3)",
                              color: "white",
                              padding: "5px 10px",
                              borderRadius: "18px",
                              fontSize: "0.65rem",
                              fontWeight: "700",
                              whiteSpace: "nowrap",
                              boxShadow: "0 4px 15px rgba(6, 163, 218, 0.5)",
                              border: "2px solid white",
                              position: "relative"
                            }}
                          >
                            <i className="fa fa-map-marker-alt me-1"></i>
                            {place.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side Features */}
                <div 
                  className="position-absolute interactive-feature" 
                  style={{ right: "5%", top: "18%", zIndex: 10 }}
                  onMouseEnter={() => handleFeatureHover("History & Culture")}
                  onMouseLeave={handleFeatureLeave}
                >
                  <div className="feature-card text-center" style={{ width: "140px", cursor: "pointer" }}>
                    <div className="feature-image-wrapper mb-2">
                      <img
                        src={mapFeatures["History & Culture"].image}
                        alt="History & Culture"
                        className="rounded-circle shadow"
                        style={{ width: "75px", height: "75px", objectFit: "cover", border: "3px solid white" }}
                      />
                    </div>
                    <h6 className="fw-bold" style={{ fontSize: "0.85rem", margin: 0 }}>History & Culture</h6>
                  </div>
                </div>

                <div 
                  className="position-absolute interactive-feature" 
                  style={{ right: "3%", top: "48%", zIndex: 10 }}
                  onMouseEnter={() => handleFeatureHover("Lesser Travelled")}
                  onMouseLeave={handleFeatureLeave}
                >
                  <div className="feature-card text-center" style={{ width: "140px", cursor: "pointer" }}>
                    <div className="feature-image-wrapper mb-2">
                      <img
                        src={mapFeatures["Lesser Travelled"].image}
                        alt="Lesser Travelled"
                        className="rounded-circle shadow"
                        style={{ width: "75px", height: "75px", objectFit: "cover", border: "3px solid white" }}
                      />
                    </div>
                    <h6 className="fw-bold" style={{ fontSize: "0.85rem", margin: 0 }}>Lesser Travelled</h6>
                  </div>
                </div>

                <div 
                  className="position-absolute interactive-feature" 
                  style={{ right: "12%", bottom: "8%", zIndex: 10 }}
                  onMouseEnter={() => handleFeatureHover("Gastronomy")}
                  onMouseLeave={handleFeatureLeave}
                >
                  <div className="feature-card text-center" style={{ width: "140px", cursor: "pointer" }}>
                    <div className="feature-image-wrapper mb-2">
                      <img
                        src={mapFeatures["Gastronomy"].image}
                        alt="Gastronomy"
                        className="rounded-circle shadow"
                        style={{ width: "75px", height: "75px", objectFit: "cover", border: "3px solid white" }}
                      />
                    </div>
                    <h6 className="fw-bold" style={{ fontSize: "0.85rem", margin: 0 }}>Gastronomy</h6>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Selected Feature Info */}
          {selectedFeature && (
            <div className="row justify-content-center mt-3">
              <div className="col-lg-10">
                <div className="alert alert-info text-center" style={{ 
                  background: "linear-gradient(135deg, #06A3DA 0%, #0585B3 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "15px",
                  boxShadow: "0 4px 20px rgba(6, 163, 218, 0.3)"
                }}>
                  <h5 className="mb-3">
                    <i className="fa fa-info-circle me-2"></i>
                    Exploring: {selectedFeature}
                  </h5>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {mapFeatures[selectedFeature].places.map((place, index) => (
                      <span 
                        key={index} 
                        className="badge bg-white text-primary"
                        style={{ 
                          padding: "8px 15px", 
                          fontSize: "0.9rem",
                          fontWeight: "600"
                        }}
                      >
                        <i className="fa fa-map-marker-alt me-1"></i>
                        {place.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tour Packages Section */}
      <section className="tour-packages py-5">
        <div className="container">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Tour Packages</h6>
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

      <TripSteps />
    </div>
  );
};

const TripSteps = () => {
  const steps = [
    { id: 1, icon: "fa fa-clipboard-list", description: "Give Us the Requirement." },
    { id: 2, icon: "fa fa-envelope", description: "Few Tour Options will Email to You." },
    { id: 3, icon: "fa fa-handshake", description: "Request for any Changes or If not proceed with the Payment." },
    { id: 4, icon: "fa fa-bed", description: "Make a Reservation for Air, Hotels, Transport, Sightseeing, Guides, Etc." },
    { id: 5, icon: "fa fa-file-check", description: "Within 72 Hours, Return Back to You with all Confirmation." },
    { id: 6, icon: "fa fa-passport", description: "Process Visa." },
    { id: 7, icon: "fa fa-plane-departure", description: "Enjoy your tour. Thank you." },
  ];

  return (
    <div className="container-xxl py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">How It Works</h6>
          <h2 className="mb-5">How to create your trip in 7 easy steps</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {steps.map((step) => (
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" key={step.id} data-wow-delay={`0.${step.id}s`}>
              <div className="text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style={{ width: '60px', height: '60px', fontSize: '18px', fontWeight: 'bold' }}>
                  {step.id}
                </div>
                <div className="mb-3">
                  <i className={`${step.icon} text-primary`} style={{ fontSize: '2.5rem' }}></i>
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