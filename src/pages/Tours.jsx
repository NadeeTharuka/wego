import React, { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const TourPackages = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const sriLankaTourPackages = useMemo(() => [
    {
      id: 1,
      name: "EXPLORE SRI LANKA IN 04 DAYS 03 NIGHTS",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "4 Days 3 Nights",
      price: "$599",
      highlights: ["Dambulla Cave Temple", "Sigiriya Lion Rock", "Temple of Sacred Tooth", "Colombo City Tour"]
    },
    {
      id: 2,
      name: "EXPLORE SRI LANKA IN 05 DAYS 04 NIGHTS",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "5 Days 4 Nights",
      price: "$749",
      highlights: ["Negombo Beach", "Pinnawala Elephant Orphanage", "Cultural Dance Show", "Spice Garden"]
    },
    {
      id: 3,
      name: "ANCIENT CITIES TOUR - 05 DAYS 04 NIGHTS",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "5 Days 4 Nights",
      price: "$825",
      highlights: ["Anuradhapura UNESCO Site", "Polonnaruwa Ancient City", "Sri Maha Bodhiya", "Historical Monuments"]
    },
    {
      id: 4,
      name: "HILL COUNTRY & BEACHES - 07 DAYS 06 NIGHTS",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "7 Days 6 Nights",
      price: "$1299",
      highlights: ["Nuwara Eliya Tea Plantations", "Nine Arch Bridge", "Yala Safari", "Galle Fort"]
    },
    {
      id: 5,
      name: "COMPREHENSIVE TOUR - 08 DAYS 07 NIGHTS",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "8 Days 7 Nights",
      price: "$1599",
      highlights: ["Complete Island Experience", "Wildlife & Cultural Sites", "Beaches & Mountains", "All UNESCO Sites"]
    },
    {
      id: 6,
      name: "GRAND ADVENTURE - 14 DAYS 13 NIGHTS",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "14 Days 13 Nights",
      price: "$2499",
      highlights: ["Complete Sri Lanka Discovery", "All Major Destinations", "Adventure & Relaxation", "Cultural Immersion"]
    },
    {
      id: 7,
      name: "ULTIMATE EXPLORER - 10 DAYS 09 NIGHTS",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200",
      duration: "10 Days 9 Nights",
      price: "$1899",
      highlights: ["Whale Watching", "Scenic Train Ride", "Village Cooking Class", "Multiple Safari Adventures"]
    }
  ], []);

  const mapFeatures = useMemo(() => ({
    "Popular Beaches": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200",
      color: "rgba(6, 163, 218, 0.4)",
      highlightArea: { top: "48%", left: "8%", width: "35%", height: "48%" },
      places: [
        { name: "Negombo", position: { top: "48%", left: "20%" } },
        { name: "Mount Lavinia", position: { top: "53%", left: "22%" } },
        { name: "Bentota", position: { top: "58%", left: "20%" } },
        { name: "Hikkaduwa", position: { top: "63%", left: "21%" } },
        { name: "Unawatuna", position: { top: "69%", left: "25%" } },
        { name: "Mirissa", position: { top: "72%", left: "23%" } }
      ]
    },
    "Wildlife & Nature": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=200",
      color: "rgba(76, 175, 80, 0.4)",
      highlightArea: { top: "60%", left: "20%", width: "55%", height: "35%" },
      places: [
        { name: "Yala National Park", position: { top: "78%", left: "40%" } },
        { name: "Udawalawe", position: { top: "68%", left: "28%" } },
        { name: "Minneriya", position: { top: "42%", left: "35%" } }
      ]
    },
    "Adventure": {
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=200",
      color: "rgba(255, 152, 0, 0.4)",
      highlightArea: { top: "45%", left: "24%", width: "30%", height: "25%" },
      places: [
        { name: "Ella Rock", position: { top: "62%", left: "36%" } },
        { name: "Adam's Peak", position: { top: "56%", left: "28%" } },
        { name: "Horton Plains", position: { top: "58%", left: "33%" } }
      ]
    },
    "History & Culture": {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200",
      color: "rgba(156, 39, 176, 0.4)",
      highlightArea: { top: "28%", left: "26%", width: "35%", height: "30%" },
      places: [
        { name: "Anuradhapura", position: { top: "32%", left: "32%" } },
        { name: "Sigiriya", position: { top: "40%", left: "34%" } },
        { name: "Kandy", position: { top: "50%", left: "31%" } }
      ]
    },
    "Lesser Travelled": {
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=200",
      color: "rgba(103, 58, 183, 0.4)",
      highlightArea: { top: "8%", left: "28%", width: "48%", height: "48%" },
      places: [
        { name: "Jaffna", position: { top: "10%", left: "34%" } },
        { name: "Trincomalee", position: { top: "34%", right: "12%" } }
      ]
    },
    "Gastronomy": {
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200",
      color: "rgba(255, 87, 34, 0.4)",
      highlightArea: { top: "30%", left: "18%", width: "60%", height: "60%" },
      places: [
        { name: "Colombo", position: { top: "52%", left: "24%" } },
        { name: "Galle", position: { top: "69%", left: "26%" } }
      ]
    }
  }), []);

  const handleViewPackage = useCallback((pkg) => {
    navigate('/destination', { state: { package: pkg } });
  }, [navigate]);

  const handleFeatureHover = useCallback((featureName) => {
    setSelectedFeature(featureName);
  }, []);

  const handleFeatureLeave = useCallback(() => {
    setSelectedFeature(null);
  }, []);

  const FeatureCard = ({ feature, position, onMouseEnter, onMouseLeave }) => (
    <div 
      className="position-absolute" 
      style={{ 
        ...position, 
        zIndex: 10,
        transition: 'transform 0.2s ease-out'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="text-center" 
        style={{ 
          width: "220px", 
          padding: "25px",
          background: "rgba(255, 255, 255, 0.98)",
          borderRadius: "25px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          cursor: "pointer",
          transition: 'all 0.2s ease-out',
          willChange: 'transform'
        }}
      >
        <img
          src={mapFeatures[feature].image}
          alt={feature}
          className="rounded-circle shadow mb-3"
          style={{ 
            width: "130px", 
            height: "130px", 
            objectFit: "cover", 
            border: "5px solid white" 
          }}
        />
        <h6 className="fw-bold" style={{ 
          fontSize: "1.2rem", 
          margin: 0, 
          color: feature === "Popular Beaches" ? "#06A3DA" 
            : feature === "Wildlife & Nature" ? "#4CAF50"
            : feature === "Adventure" ? "#FF9800"
            : feature === "History & Culture" ? "#9C27B0"
            : feature === "Lesser Travelled" ? "#673AB7"
            : "#FF5722"
        }}>
          {feature}
        </h6>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-4">Tours</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Tours</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Sri Lanka Map */}
      <div 
        className="container-fluid py-5" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(176, 224, 230, 0.3) 0%, rgba(135, 206, 235, 0.4) 50%, rgba(70, 130, 180, 0.3) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center mb-5">
            <h6 className="section-title bg-white text-center text-primary px-3" style={{ display: 'inline-block' }}>Our Island</h6>
            <h1 className="mb-2" style={{ fontSize: '2.8rem', fontWeight: '700' }}>Sri Lanka</h1>
            <p className="text-muted" style={{ fontSize: '1.15rem' }}>Discover the pearl of the Indian Ocean</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="position-relative d-flex justify-content-center align-items-center" style={{ minHeight: "900px", padding: "3rem 0" }}>
                
                {/* Feature Cards */}
                <FeatureCard 
                  feature="Popular Beaches" 
                  position={{ left: "1%", top: "12%" }}
                  onMouseEnter={() => handleFeatureHover("Popular Beaches")}
                  onMouseLeave={handleFeatureLeave}
                />
                
                <FeatureCard 
                  feature="Wildlife & Nature" 
                  position={{ left: "0%", top: "42%" }}
                  onMouseEnter={() => handleFeatureHover("Wildlife & Nature")}
                  onMouseLeave={handleFeatureLeave}
                />
                
                <FeatureCard 
                  feature="Adventure" 
                  position={{ left: "7%", bottom: "2%" }}
                  onMouseEnter={() => handleFeatureHover("Adventure")}
                  onMouseLeave={handleFeatureLeave}
                />

                {/* Center Map */}
                <div className="text-center" style={{ zIndex: 5, position: "relative" }}>
                  <img 
                    src="/assets/img/91a5c3ff-7781-4f6e-a4ff-cbe8d3bc8d20.png"
                    alt="Sri Lanka Map"
                    style={{ 
                      width: "500px", 
                      height: "auto", 
                      maxWidth: "100%",
                      filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.3))",
                      borderRadius: "20px"
                    }}
                  />

                  {/* Highlight Overlay - Only render when selected */}
                  {selectedFeature && (
                    <div 
                      style={{
                        position: "absolute",
                        ...mapFeatures[selectedFeature].highlightArea,
                        background: `radial-gradient(ellipse, ${mapFeatures[selectedFeature].color} 0%, transparent 70%)`,
                        borderRadius: "50%",
                        pointerEvents: "none",
                        zIndex: 3,
                        opacity: 0.8,
                        transition: 'opacity 0.2s ease-out'
                      }}
                    />
                  )}

                  {/* Place Markers - Only render when selected */}
                  {selectedFeature && mapFeatures[selectedFeature].places.map((place, index) => (
                    <div
                      key={index}
                      style={{
                        position: "absolute",
                        ...place.position,
                        transform: "translate(-50%, -50%)",
                        zIndex: 20
                      }}
                    >
                      <div 
                        style={{
                          background: "linear-gradient(135deg, #06A3DA, #0585B3)",
                          color: "white",
                          padding: "10px 16px",
                          borderRadius: "25px",
                          fontSize: "0.9rem",
                          fontWeight: "700",
                          whiteSpace: "nowrap",
                          boxShadow: "0 8px 25px rgba(6, 163, 218, 0.7)",
                          border: "3px solid white"
                        }}
                      >
                        <i className="fa fa-map-marker-alt me-2"></i>
                        {place.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Feature Cards */}
                <FeatureCard 
                  feature="History & Culture" 
                  position={{ right: "1%", top: "12%" }}
                  onMouseEnter={() => handleFeatureHover("History & Culture")}
                  onMouseLeave={handleFeatureLeave}
                />
                
                <FeatureCard 
                  feature="Lesser Travelled" 
                  position={{ right: "0%", top: "42%" }}
                  onMouseEnter={() => handleFeatureHover("Lesser Travelled")}
                  onMouseLeave={handleFeatureLeave}
                />
                
                <FeatureCard 
                  feature="Gastronomy" 
                  position={{ right: "7%", bottom: "2%" }}
                  onMouseEnter={() => handleFeatureHover("Gastronomy")}
                  onMouseLeave={handleFeatureLeave}
                />

              </div>
            </div>
          </div>

          {/* Selected Feature Info */}
          {selectedFeature && (
            <div className="row justify-content-center mt-4">
              <div className="col-lg-10">
                <div style={{ 
                  background: "linear-gradient(135deg, #06A3DA 0%, #0585B3 100%)",
                  color: "white",
                  borderRadius: "25px",
                  boxShadow: "0 10px 40px rgba(6, 163, 218, 0.5)",
                  padding: "30px",
                  textAlign: "center"
                }}>
                  <h5 style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "20px" }}>
                    <i className="fa fa-info-circle me-2"></i>
                    Exploring: {selectedFeature}
                  </h5>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {mapFeatures[selectedFeature].places.map((place, index) => (
                      <span 
                        key={index} 
                        style={{ 
                          padding: "14px 24px", 
                          fontSize: "1.05rem",
                          fontWeight: "700",
                          borderRadius: "30px",
                          background: "white",
                          color: "#06A3DA"
                        }}
                      >
                        <i className="fa fa-map-marker-alt me-2"></i>
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
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary">Tour Packages</h6>
            <h2 className="display-5">Sri Lanka Tour Packages</h2>
            <p className="text-muted">Choose your perfect adventure</p>
          </div>
          
          <div className="row g-4">
            {sriLankaTourPackages.map((pkg) => (
              <div className="col-lg-4 col-md-6" key={pkg.id}>
                <div className="card h-100 shadow-sm" style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  <div style={{ position: 'relative' }}>
                    <img src={pkg.image} alt={pkg.name} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(6, 163, 218, 0.9)',
                      color: 'white',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      fontWeight: 'bold'
                    }}>
                      {pkg.price}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '1.1rem', fontWeight: '600' }}>{pkg.name}</h5>
                    <p className="text-muted mb-3">
                      <i className="fa fa-clock me-2"></i>
                      {pkg.duration}
                    </p>
                    <div className="mb-3">
                      {pkg.highlights.map((highlight, index) => (
                        <span key={index} className="badge bg-light text-primary me-1 mb-1" style={{ fontSize: '0.8rem' }}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <button 
                      className="btn btn-primary w-100"
                      onClick={() => handleViewPackage(pkg)}
                      style={{ borderRadius: '8px', fontWeight: '500' }}
                    >
                      <i className="fa fa-eye me-2"></i>
                      View Package Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;