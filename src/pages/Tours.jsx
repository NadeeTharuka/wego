import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TourPackages.css";

const TourPackages = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sriLankaTourPackages = [
    {
      id: 2,
      name: "EXPLORE SRI LANKA - 04 DAYS 03 NIGHTS",
      image: "assets/img/explore-sri-lanka-4days.jpg",
      duration: "4 Days 3 Nights",
      price: "$400",
      highlights: ["Dambulla Cave Temple", "Sigiriya Lion Rock", "Temple of Sacred Tooth", "Colombo City Tour"],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & Colombo City Tour",
          description: "Arrive at Bandaranaike International Airport. Transfer to Colombo and enjoy a city tour including Galle Face Green, Gangaramaya Temple, and Independence Square.",
          places: ["Colombo City Tour", "Galle Face", "Independence Square"]
        },
        {
          day: "Day 02",
          title: "Dambulla & Sigiriya",
          description: "Travel to Dambulla to visit the Cave Temple. Proceed to Sigiriya and climb the Lion Rock Fortress.",
          places: ["Dambulla Royal Cave Temple and Golden Temple", "Sigiriya Lion Rock Fortress"]
        },
        {
          day: "Day 03",
          title: "Kandy Cultural Experience",
          description: "Visit the Temple of the Sacred Tooth Relic in Kandy. Enjoy a cultural dance show in the evening.",
          places: ["Sri Dalada Maligawa (The Temple of the Sacred Tooth Relic)", "Kandyan Cultural Dance Show"]
        },
        {
          day: "Day 04",
          title: "Departure",
          description: "Enjoy breakfast at the hotel. Transfer to the airport for your departure flight.",
          places: []
        }
      ]
    },
    {
      id: 3,
      name: "EXPLORE SRI LANKA - 05 DAYS 04 NIGHTS",
      image: "assets/img/explore-sri-lanka-5days.jpg",
      duration: "5 Days 4 Nights",
      price: "$460",
      highlights: ["Negombo Beach", "Pinnawala Elephant Orphanage", "Cultural Dance Show", "Spice Garden"],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & Negombo",
          description: "Arrive at Bandaranaike International Airport. Transfer to Negombo and enjoy the beach and fish market.",
          places: ["Negombo Fish Market", "Negombo Beach"]
        },
        {
          day: "Day 02",
          title: "Pinnawala & Matale",
          description: "Visit Pinnawala Elephant Orphanage. Proceed to Matale to explore a spice garden.",
          places: ["Pinnawala Elephant Orphanage", "Matale Spice Garden"]
        },
        {
          day: "Day 03",
          title: "Kandy Cultural Experience",
          description: "Visit the Temple of the Sacred Tooth Relic in Kandy. Enjoy a cultural dance show in the evening.",
          places: ["Sri Dalada Maligawa (The Temple of the Sacred Tooth Relic)", "Kandyan Cultural Dance Show"]
        },
        {
          day: "Day 04",
          title: "Peradeniya & Departure",
          description: "Visit Peradeniya Botanical Garden. Transfer to the airport for your departure flight.",
          places: ["Peradeniya Botanical Garden"]
        },
        {
          day: "Day 05",
          title: "Departure",
          description: "Enjoy breakfast at the hotel. Transfer to the airport for your departure flight.",
          places: []
        }
      ]
    },
    {
      id: 4,
      name: "ANCIENT CITIES TOUR - 05 DAYS 04 NIGHTS",
      image: "assets/img/ancient-cities-tour.jpg",
      duration: "5 Days 4 Nights",
      price: "$500",
      highlights: ["Anuradhapura UNESCO Site", "Polonnaruwa Ancient City", "Sri Maha Bodhiya", "Historical Monuments"],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & Anuradhapura",
          description: "Arrive at Bandaranaike International Airport. Transfer to Anuradhapura and explore the ancient city.",
          places: ["Anuradhapura", "Sri Maha Bodhiya", "Ruwanweliseya"]
        },
        {
          day: "Day 02",
          title: "Anuradhapura Exploration",
          description: "Continue exploring Anuradhapura including Mihintale and Isurumuniya Temple.",
          places: ["Mihinthale", "Isurumuniya", "Thuparamaya"]
        },
        {
          day: "Day 03",
          title: "Polonnaruwa Ancient City",
          description: "Travel to Polonnaruwa and explore the ancient city ruins.",
          places: ["Polonnaruwa"]
        },
        {
          day: "Day 04",
          title: "Return to Colombo",
          description: "Travel back to Colombo. Enjoy a city tour in the afternoon.",
          places: ["Colombo City Tour", "Galle Face"]
        },
        {
          day: "Day 05",
          title: "Departure",
          description: "Enjoy breakfast at the hotel. Transfer to the airport for your departure flight.",
          places: []
        }
      ]
    },
    {
      id: 5,
      name: "HILL COUNTRY & BEACHES - 07 DAYS 06 NIGHTS",
      image: "assets/img/hill-country-beaches.jpg",
      duration: "7 Days 6 Nights",
      price: "$710",
      highlights: ["Nuwara Eliya Tea Plantations", "Nine Arch Bridge", "Yala Safari", "Galle Fort"],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & Kandy",
          description: "Arrive at Bandaranaike International Airport. Transfer to Kandy and visit the Temple of the Sacred Tooth Relic.",
          places: ["Sri Dalada Maligawa (The Temple of the Sacred Tooth Relic)"]
        },
        {
          day: "Day 02",
          title: "Nuwara Eliya",
          description: "Travel to Nuwara Eliya. Visit a tea plantation and factory. Enjoy Gregory Park and boat safari.",
          places: ["Tea Plantation and Factory visit", "Gregory Park and Boat Safari", "Nuwara Eliya City Tour"]
        },
        {
          day: "Day 03",
          title: "Ella Exploration",
          description: "Travel to Ella. Visit Nine Arch Bridge and enjoy Ella Rock hike.",
          places: ["Nine Arch Bridge", "Ella Rock Hike"]
        },
        {
          day: "Day 04",
          title: "Yala Safari",
          description: "Travel to Yala and enjoy an exciting wildlife safari.",
          places: ["Yala Safari"]
        },
        {
          day: "Day 05",
          title: "Mirissa & Beaches",
          description: "Travel to Mirissa. Enjoy whale watching and relax on the beach.",
          places: ["Whale Watching", "Mirissa Beach"]
        },
        {
          day: "Day 06",
          title: "Galle Fort",
          description: "Travel to Galle and explore the historic Galle Fort.",
          places: ["Galle Fort", "Old Dutch Church (Galle)"]
        },
        {
          day: "Day 07",
          title: "Departure",
          description: "Enjoy breakfast at the hotel. Transfer to the airport for your departure flight.",
          places: []
        }
      ]
    },
    {
      id: 6,
      name: "COMPREHENSIVE TOUR - 08 DAYS 07 NIGHTS",
      image: "assets/img/comprehensive-tour.jpg",
      duration: "8 Days 7 Nights",
      price: "$750",
      highlights: ["Complete Island Experience", "Wildlife & Cultural Sites", "Beaches & Mountains", "All UNESCO Sites"],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & Negombo",
          description: "Arrive at Bandaranaike International Airport. Transfer to Negombo and enjoy the beach.",
          places: ["Negombo Beach", "Negombo Fish Market"]
        },
        {
          day: "Day 02",
          title: "Anuradhapura",
          description: "Travel to Anuradhapura and explore the ancient city.",
          places: ["Anuradhapura", "Sri Maha Bodhiya", "Ruwanweliseya"]
        },
        {
          day: "Day 03",
          title: "Polonnaruwa & Sigiriya",
          description: "Travel to Polonnaruwa and explore the ancient city. Proceed to Sigiriya and climb the Lion Rock.",
          places: ["Polonnaruwa", "Sigiriya Lion Rock Fortress"]
        },
        {
          day: "Day 04",
          title: "Kandy",
          description: "Travel to Kandy. Visit the Temple of the Sacred Tooth Relic and enjoy a cultural dance show.",
          places: ["Sri Dalada Maligawa (The Temple of the Sacred Tooth Relic)", "Kandyan Cultural Dance Show"]
        },
        {
          day: "Day 05",
          title: "Nuwara Eliya",
          description: "Travel to Nuwara Eliya. Visit a tea plantation and Gregory Park.",
          places: ["Tea Plantation and Factory visit", "Gregory Park and Boat Safari", "Nuwara Eliya City Tour"]
        },
        {
          day: "Day 06",
          title: "Ella & Yala",
          description: "Travel to Ella and visit Nine Arch Bridge. Proceed to Yala for safari.",
          places: ["Nine Arch Bridge", "Yala Safari"]
        },
        {
          day: "Day 07",
          title: "Galle & Beaches",
          description: "Travel to Galle and explore the fort. Enjoy beach time in Unawatuna.",
          places: ["Galle Fort", "Unawatuna Beach"]
        },
        {
          day: "Day 08",
          title: "Departure",
          description: "Enjoy breakfast at the hotel. Transfer to the airport for your departure flight.",
          places: []
        }
      ]
    },
    {
      id: 1,
      name: "ULTIMATE EXPLORER - 10 DAYS 09 NIGHTS",
      image: "assets/img/ultimate-explorer.jpg",
      duration: "10 Days 9 Nights",
      price: "$890",
      highlights: ["Complete Island Experience", "UNESCO Sites", "Wildlife Safari", "Beach & Mountains", "Cultural Immersion"],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & Negombo",
          description: "Arrive at Bandaranaike International Airport. Transfer to Negombo and enjoy the beach.",
          places: ["Negombo Beach", "Negombo Fish Market"]
        },
        {
          day: "Day 02",
          title: "Anuradhapura",
          description: "Travel to Anuradhapura and explore the ancient city.",
          places: ["Anuradhapura", "Sri Maha Bodhiya", "Ruwanweliseya", "Mihinthale"]
        },
        {
          day: "Day 03",
          title: "Polonnaruwa",
          description: "Travel to Polonnaruwa and explore the ancient city.",
          places: ["Polonnaruwa"]
        },
        {
          day: "Day 04",
          title: "Sigiriya & Dambulla",
          description: "Climb Sigiriya Lion Rock. Visit Dambulla Cave Temple.",
          places: ["Sigiriya Lion Rock Fortress", "Dambulla Royal Cave Temple and Golden Temple"]
        },
        {
          day: "Day 05",
          title: "Kandy",
          description: "Travel to Kandy. Visit the Temple of the Sacred Tooth Relic and enjoy a cultural dance show.",
          places: ["Sri Dalada Maligawa (The Temple of the Sacred Tooth Relic)", "Kandyan Cultural Dance Show", "Peradeniya Botanical Garden"]
        },
        {
          day: "Day 06",
          title: "Nuwara Eliya",
          description: "Travel to Nuwara Eliya. Visit a tea plantation and Gregory Park.",
          places: ["Tea Plantation and Factory visit", "Gregory Park and Boat Safari", "Nuwara Eliya City Tour", "Ambewela"]
        },
        {
          day: "Day 07",
          title: "Ella & Horton Plains",
          description: "Travel to Ella. Visit Nine Arch Bridge and Ella Rock. Optional visit to Horton Plains.",
          places: ["Nine Arch Bridge", "Ella Rock Hike", "Horton Plains"]
        },
        {
          day: "Day 08",
          title: "Yala & Mirissa",
          description: "Travel to Yala for safari. Proceed to Mirissa for beach time.",
          places: ["Yala Safari", "Mirissa Beach", "Whale Watching"]
        },
        {
          day: "Day 09",
          title: "Galle & Colombo",
          description: "Travel to Galle and explore the fort. Return to Colombo for city tour.",
          places: ["Galle Fort", "Colombo City Tour", "Lotus Tower"]
        },
        {
          day: "Day 10",
          title: "Departure",
          description: "Enjoy breakfast at the hotel. Transfer to the airport for your departure flight.",
          places: []
        }
      ]
    },
    {
      id: 7,
      name: "GRAND ADVENTURE - 14 DAYS 13 NIGHTS",
      image: "assets/img/grand-adventure.jpg",
      duration: "14 Days 13 Nights",
      price: "$1040",
      highlights: ["Complete Sri Lanka Discovery", "All Major Destinations", "Adventure & Relaxation", "Cultural Immersion"],
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival & Negombo",
          description: "Arrive at Bandaranaike International Airport. Transfer to Negombo and enjoy the beach.",
          places: ["Negombo Beach", "Negombo Fish Market", "Hamilton Canal"]
        },
        {
          day: "Day 02",
          title: "Anuradhapura",
          description: "Travel to Anuradhapura and explore the ancient city.",
          places: ["Anuradhapura", "Sri Maha Bodhiya", "Ruwanweliseya", "Mihinthale", "Isurumuniya", "Thuparamaya"]
        },
        {
          day: "Day 03",
          title: "Anuradhapura Exploration",
          description: "Continue exploring Anuradhapura and its surroundings.",
          places: ["Anuradhapura"]
        },
        {
          day: "Day 04",
          title: "Polonnaruwa",
          description: "Travel to Polonnaruwa and explore the ancient city.",
          places: ["Polonnaruwa"]
        },
        {
          day: "Day 05",
          title: "Sigiriya & Dambulla",
          description: "Climb Sigiriya Lion Rock. Visit Dambulla Cave Temple. Enjoy village tour.",
          places: ["Sigiriya Lion Rock Fortress", "Dambulla Royal Cave Temple and Golden Temple", "Village Tours"]
        },
        {
          day: "Day 06",
          title: "Kandy",
          description: "Travel to Kandy. Visit the Temple of the Sacred Tooth Relic and enjoy a cultural dance show.",
          places: ["Sri Dalada Maligawa (The Temple of the Sacred Tooth Relic)", "Kandyan Cultural Dance Show", "Peradeniya Botanical Garden", "Gem Museum, Kandy"]
        },
        {
          day: "Day 07",
          title: "Nuwara Eliya",
          description: "Travel to Nuwara Eliya. Visit a tea plantation and Gregory Park.",
          places: ["Tea Plantation and Factory visit", "Gregory Park and Boat Safari", "Nuwara Eliya City Tour", "Ambewela"]
        },
        {
          day: "Day 08",
          title: "Ella & Haputale",
          description: "Travel to Ella. Visit Nine Arch Bridge and Ella Rock. Proceed to Haputale.",
          places: ["Nine Arch Bridge", "Ella Rock Hike", "Ravana Falls", "Ravana Cave"]
        },
        {
          day: "Day 09",
          title: "Horton Plains & Train Ride",
          description: "Visit Horton Plains National Park. Enjoy scenic train ride through hill country.",
          places: ["Horton Plains", "Train ride through Sri Lanka's central highlands"]
        },
        {
          day: "Day 10",
          title: "Yala & Tissamaharama",
          description: "Travel to Yala for safari. Visit Tissamaharama Lake and ancient city.",
          places: ["Yala Safari", "Tissamaharama Lake", "Tissamaharama Ancient City"]
        },
        {
          day: "Day 11",
          title: "Mirissa & Beaches",
          description: "Travel to Mirissa. Enjoy whale watching and beach time.",
          places: ["Whale Watching", "Mirissa Beach", "Coconut Tree Hill"]
        },
        {
          day: "Day 12",
          title: "Galle & Unawatuna",
          description: "Travel to Galle and explore the fort. Enjoy Unawatuna beach.",
          places: ["Galle Fort", "Old Dutch Church (Galle)", "Unawatuna Beach", "Rumassala Temple"]
        },
        {
          day: "Day 13",
          title: "Colombo",
          description: "Return to Colombo. Enjoy city tour and visit Lotus Tower.",
          places: ["Colombo City Tour", "Lotus Tower", "Gangaramaya Temple", "Independence Square"]
        },
        {
          day: "Day 14",
          title: "Departure",
          description: "Enjoy breakfast at the hotel. Transfer to the airport for your departure flight.",
          places: []
        }
      ]
    }
  ];

  // Special One Day Tours
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

  const handleViewPackage = (pkg) => {
    navigate('/destination', { state: { package: pkg } });
  };

  const handleViewOneDayTour = (tour) => {
    navigate('/one-day-tour-details', { state: { tour } });
  };

  return (
    <div>
      {/* Hero Header */}
<div className="container-fluid bg-primary py-5 mb-5 hero-header"
  style={{
  backgroundImage: 'linear-gradient(rgba(20, 20, 31, 0.5), rgba(20, 20, 31, 0.7)), url("https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200")',    backgroundPosition: 'center center',
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

      {/* Tour Packages Section */}
      <section className="tour-packages py-5">
        <div className="container">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h2 className="display-5">Sri lanka Tour packages Recommended by Opulent</h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#000000' }}>Choose your perfect adventure</p>
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
                  <h3 className="package-title" style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '0.3rem' }}>
                    {pkg.name.split(' - ')[0]}
                  </h3>
                  <div style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem', color: '#000000' }}>
                    {pkg.name.split(' - ')[1]}
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

      {/* Special One Day Tours Section */}
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
                    <small className="flex-fill text-center border-end py-2" style={{ color: '#000' }}>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      Sri Lanka
                    </small>
                    <small className="flex-fill text-center border-end py-2" style={{ color: '#000' }}>
                      <i className="fa fa-calendar-alt text-primary me-2" />1 Day
                    </small>
                    <small className="flex-fill text-center py-2" style={{ color: '#000' }}>
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
    </div>
  );
};

export default TourPackages;