import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TourPackages.css";
import "./TripSteps.css";

const TourPackages = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchDuration, setSearchDuration] = useState("");

  const tourPackagesData = {
    "Sri Lanka": [
      {
        id: 1,
        name: "EXPLORE SRI LANKA IN 04 DAYS 03 NIGHTS",
        image: "https://images.unsplash.com/photo-1589786742500-f38497953a65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "4 Days",
        price: "$599",
      },
      {
        id: 2,
        name: "EXPLORE SRI LANKA IN 05 DAYS 04 NIGHTS",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "5 Days",
        price: "$699",
      },
      {
        id: 3,
        name: "EXPLORE SRI LANKA IN 05 DAYS 04 NIGHTS",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "5 Days",
        price: "$699",
      },
      {
        id: 4,
        name: "EXPLORE SRI LANKA IN 07 DAYS 06 NIGHTS",
        image: "https://images.unsplash.com/photo-1586791965091-35685e092763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "7 Days",
        price: "$899",
      },
    ],
    Malaysia: [
      {
        id: 1,
        name: "Kuala Lumpur City Break",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "4 Days",
        price: "$699",
      },
      {
        id: 2,
        name: "Langkawi Beach Holiday",
        image: "https://images.unsplash.com/photo-1590077428593-a55c475d0340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "6 Days",
        price: "$899",
      },
      {
        id: 3,
        name: "Penang Heritage Tour",
        image: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "5 Days",
        price: "$799",
      },
      {
        id: 4,
        name: "Borneo Wildlife Adventure",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "8 Days",
        price: "$1299",
      },
    ],
    Australia: [
      {
        id: 1,
        name: "Sydney & Gold Coast",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "8 Days",
        price: "$1899",
      },
      {
        id: 2,
        name: "Great Barrier Reef Explorer",
        image: "https://images.unsplash.com/photo-1633405807334-f0473ac3a40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "7 Days",
        price: "$1699",
      },
      {
        id: 3,
        name: "Melbourne & Great Ocean Road",
        image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "6 Days",
        price: "$1499",
      },
      {
        id: 4,
        name: "Outback Adventure",
        image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "10 Days",
        price: "$2199",
      },
    ],
    Indonesia: [
      {
        id: 1,
        name: "Bali Paradise Tour",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "6 Days",
        price: "$899",
      },
      {
        id: 2,
        name: "Jakarta & Yogyakarta",
        image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "7 Days",
        price: "$999",
      },
      {
        id: 3,
        name: "Lombok Island Escape",
        image: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "5 Days",
        price: "$799",
      },
      {
        id: 4,
        name: "Komodo Dragon Adventure",
        image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200",
        duration: "8 Days",
        price: "$1299",
      },
    ],
  };

  const handleSearchCountry = (e) => {
    setSearchCountry(e.target.value);
    setSelectedCountry(null);
  };

  const handleSearchDuration = (e) => {
    setSearchDuration(e.target.value);
  };

  const filterPackages = () => {
    // Only proceed if there's a search country or duration
    if (!searchCountry && !searchDuration) {
      return [];
    }

    let filtered = Object.values(tourPackagesData).flat();

    if (searchCountry && searchCountry !== "Tour Country") {
      filtered = filtered.filter(pkg => 
        pkg.name.toLowerCase().includes(searchCountry.toLowerCase())
      );
    }

    if (searchDuration && searchDuration !== "Tour duration") {
      filtered = filtered.filter(pkg => {
        const duration = parseInt(pkg.duration);
        switch(searchDuration) {
          case "3 Days":
            return duration <= 3;
          case "7 Days":
            return duration > 3 && duration <= 7;
          case "14 Days":
            return duration > 7 && duration <= 14;
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
      {/* Updated Header Section */}
      <header className="header">
        <div className="search-bar">
          <select 
            className="dropdown" 
            value={searchCountry} 
            onChange={handleSearchCountry}
          >
            <option>Tour Country</option>
            <option>Sri Lanka</option>
            <option>Malaysia</option>
            <option>Australia</option>
            <option>Indonesia</option>
          </select>
          <select 
            className="dropdown" 
            value={searchDuration} 
            onChange={handleSearchDuration}
          >
            <option>Tour duration</option>
            <option>3 Days</option>
            <option>7 Days</option>
            <option>14 Days</option>
          </select>
          <input type="date" className="date-picker" />
          <button className="quote-button">Get a Quote in 5 min</button>
        </div>
      </header>

      {/* Destination Start */}
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Tours</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  onClick={() => setSelectedCountry("Sri Lanka")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-1.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    30% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Sri Lanka
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  onClick={() => setSelectedCountry("Malaysia")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-2.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    25% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Malaysia
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  onClick={() => setSelectedCountry("Australia")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-3.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    35% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Australia
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: 350 }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              onClick={() => setSelectedCountry("Indonesia")}
              style={{ cursor: "pointer" }}
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/destination-4.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                20% OFF
              </div>
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Indonesia
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Destination Start */}

      {/* Tour Packages Section */}
      <section className="tour-packages">
        {selectedCountry || searchCountry || searchDuration ? (
          <>
            <h2>
              {selectedCountry 
                ? `${selectedCountry} Tour Packages` 
                : 'Filtered Tour Packages'}
            </h2>
            <div className="packages-grid">
              {selectedCountry
                ? tourPackagesData[selectedCountry].map((pkg) => (
                    <div className="package" key={pkg.id}>
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="package-img"
                      />
                      <h3>{pkg.name}</h3>
                      <p>{pkg.duration}</p>
                      <p>Starting from {pkg.price}</p>
                      <button 
                        className="view-button" 
                        onClick={() => handleViewPackage(pkg)}
                      >
                        View Package ➜
                      </button>
                    </div>
                  ))
                : filterPackages().map((pkg) => (
                    <div className="package" key={pkg.id}>
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="package-img"
                      />
                      <h3>{pkg.name}</h3>
                      <p>{pkg.duration}</p>
                      <p>Starting from {pkg.price}</p>
                      <button 
                        className="view-button" 
                        onClick={() => handleViewPackage(pkg)}
                      >
                        View Package ➜
                      </button>
                    </div>
                  ))}
            </div>
          </>
        ) : (
          <div className="text-center py-5">
            <h2>Please select a country or use the search filters to view packages</h2>
          </div>
        )}
      </section>
    </div>
  );
};



const TripSteps = () => {
    const steps = [
      {
        id: 1,
        icon: "fa-solid fa-suitcase-rolling",
        description: "Give Us the Requirement.",
      },
      {
        id: 2,
        icon: "fa-solid fa-envelope",
        description: "Few Tour Options will Email to You.",
      },
      {
        id: 3,
        icon: "fa-solid fa-handshake",
        description: "Request for any Changes or If not proceed with the Payment.",
      },
      {
        id: 4,
        icon: "fa-solid fa-bed",
        description:
          "Make a Reservation for Air, Hotels, Transport, Sightseeing, Guides, Etc.",
      },
      {
        id: 5,
        icon: "fa-solid fa-file-signature",
        description: "Within 72 Hours, Return Back to You with all Confirmation.",
      },
      {
        id: 6,
        icon: "fa-solid fa-passport",
        description: "Process Visa.",
      },
      {
        id: 7,
        icon: "fa-solid fa-plane-departure",
        description: "Enjoy your tour. Thank you.",
      },
    ];
  
    return (
      <div className="trip-steps">
        <h2 className="trip-steps-title">How to create your trip steps.</h2>
        <div className="steps-container">
          {steps.map((step) => (
            <div className="step" key={step.id}>
              <div className="step-circle">{step.id}</div>
              <i className={step.icon}></i>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  export default TourPackages;