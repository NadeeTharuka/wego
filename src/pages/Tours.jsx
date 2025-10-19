import React from "react";
import { useNavigate } from "react-router-dom";
import "./TourPackages.css";

const TourPackages = () => {
  const navigate = useNavigate();

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

  const mapFeatures = [
    {
      name: "Popular Beaches",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200",
      position: { top: "45%", left: "15%" }
    },
    {
      name: "Wildlife & Nature",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=200",
      position: { top: "60%", left: "25%" }
    },
    {
      name: "Adventure",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=200",
      position: { top: "35%", left: "35%" }
    },
    {
      name: "History & Culture",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200",
      position: { top: "25%", right: "25%" }
    },
    {
      name: "Lesser Travelled",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=200",
      position: { top: "50%", right: "20%" }
    },
    {
      name: "Gastronomy",
      image: "https://images.unsplash.com/photo-1596040033229-a0b3b83f6258?w=200",
      position: { top: "70%", right: "30%" }
    }
  ];

  const handleViewPackage = (pkg) => {
    navigate('/destination', { state: { package: pkg } });
  };

  return (
    <div>
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

{/* Sri Lanka Map Section */}
<div className="container-xxl py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)' }}>
  <div className="container">
    <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">Our Island</h6>
      <h1 className="mb-3">Sri Lanka</h1>
      <p className="text-muted">Discover the pearl of the Indian Ocean</p>
    </div>
    
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="position-relative d-flex justify-content-center align-items-center" style={{ minHeight: "800px", padding: "4rem 0" }}>
          
          {/* Left Side Features */}
          <div className="position-absolute" style={{ left: "5%", top: "20%", zIndex: 10 }}>
            <div className="feature-card text-center" style={{ width: "160px" }}>
              <div className="feature-image-wrapper mb-2">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300"
                  alt="Popular Beaches"
                  className="rounded-circle shadow"
                  style={{ width: "90px", height: "90px", objectFit: "cover", border: "4px solid white" }}
                />
              </div>
              <h6 className="fw-bold" style={{ fontSize: "0.9rem", margin: 0 }}>Popular Beaches</h6>
            </div>
          </div>

          <div className="position-absolute" style={{ left: "3%", top: "48%", zIndex: 10 }}>
            <div className="feature-card text-center" style={{ width: "160px" }}>
              <div className="feature-image-wrapper mb-2">
                <img
                  src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=300"
                  alt="Wildlife & Nature"
                  className="rounded-circle shadow"
                  style={{ width: "90px", height: "90px", objectFit: "cover", border: "4px solid white" }}
                />
              </div>
              <h6 className="fw-bold" style={{ fontSize: "0.9rem", margin: 0 }}>Wildlife & Nature</h6>
            </div>
          </div>

          <div className="position-absolute" style={{ left: "12%", bottom: "8%", zIndex: 10 }}>
            <div className="feature-card text-center" style={{ width: "160px" }}>
              <div className="feature-image-wrapper mb-2">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=300"
                  alt="Adventure"
                  className="rounded-circle shadow"
                  style={{ width: "90px", height: "90px", objectFit: "cover", border: "4px solid white" }}
                />
              </div>
              <h6 className="fw-bold" style={{ fontSize: "0.9rem", margin: 0 }}>Adventure</h6>
            </div>
          </div>

{/* Center - Real Sri Lanka Map Image */}
<div className="text-center" style={{ zIndex: 5 }}>
  <img 
    src="https://www.srilanka.travel/images/map-srilanka.png"
    alt="Sri Lanka Map"
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "https://geology.com/world/sri-lanka-map.gif";
    }}
    style={{ 
      width: "500px", 
      height: "auto", 
      maxWidth: "100%",
      filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.2))"
    }}
  />
</div>
          {/* Right Side Features */}
          <div className="position-absolute" style={{ right: "5%", top: "20%", zIndex: 10 }}>
            <div className="feature-card text-center" style={{ width: "160px" }}>
              <div className="feature-image-wrapper mb-2">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300"
                  alt="History & Culture"
                  className="rounded-circle shadow"
                  style={{ width: "90px", height: "90px", objectFit: "cover", border: "4px solid white" }}
                />
              </div>
              <h6 className="fw-bold" style={{ fontSize: "0.9rem", margin: 0 }}>History & Culture</h6>
            </div>
          </div>

          <div className="position-absolute" style={{ right: "3%", top: "48%", zIndex: 10 }}>
            <div className="feature-card text-center" style={{ width: "160px" }}>
              <div className="feature-image-wrapper mb-2">
                <img
                  src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=300"
                  alt="Lesser Travelled"
                  className="rounded-circle shadow"
                  style={{ width: "90px", height: "90px", objectFit: "cover", border: "4px solid white" }}
                />
              </div>
              <h6 className="fw-bold" style={{ fontSize: "0.9rem", margin: 0 }}>Lesser Travelled</h6>
            </div>
          </div>

          <div className="position-absolute" style={{ right: "12%", bottom: "8%", zIndex: 10 }}>
            <div className="feature-card text-center" style={{ width: "160px" }}>
              <div className="feature-image-wrapper mb-2">
                <img
                  src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300"
                  alt="Gastronomy"
                  className="rounded-circle shadow"
                  style={{ width: "90px", height: "90px", objectFit: "cover", border: "4px solid white" }}
                />
              </div>
              <h6 className="fw-bold" style={{ fontSize: "0.9rem", margin: 0 }}>Gastronomy</h6>
            </div>
          </div>

        </div>
      </div>
    </div>
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