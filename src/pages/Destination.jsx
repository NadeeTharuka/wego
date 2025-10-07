import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Destination.css';

function Destination() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPackage = location.state?.package;

  // Place details mapping with images
  const placeDetails = {
    "Pinnawala Elephant Orphanage": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Dambulla Cave Temple": {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Sigiriya Lion Rock Fortress": {
      image: "https://images.unsplash.com/photo-1588417837058-c8884bfb5b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Sigiriya Village Tour": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Matale Spice Garden": {
      image: "https://images.unsplash.com/photo-1596040033229-a0b3b83f6258?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Temple of the Sacred Tooth Relic": {
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Kandyan Cultural Dance Show": {
      image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Colombo City Tour": {
      image: "https://images.unsplash.com/photo-1608482056615-c6e485096f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Gangaramaya Temple": {
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Lotus Tower": {
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Negombo Fish Market": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Hamilton Dutch Canal": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Angurukaramulla Temple": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Anuradhapura": {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Sri Maha Bodhiya": {
      image: "https://images.unsplash.com/photo-1605536968169-738c98afd7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Ruwanwelisaya": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Polonnaruwa": {
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Nine Arch Bridge": {
      image: "https://images.unsplash.com/photo-1586539195093-e683155f9b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Gregory Park": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Ambewela Farm": {
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Yala Safari": {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Galle Fort": {
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Hikkaduwa Coral Garden": {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Turtle Farm": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Madu River Boat Ride": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Tea Plantation": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Udawalawe Safari": {
      image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Ella Rock": {
      image: "https://images.unsplash.com/photo-1586539195093-e683155f9b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Ravana Falls": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  };

  // Extract place names from activities
  const extractPlaces = (activities) => {
    const places = [];
    activities.forEach(activity => {
      // Match known places
      Object.keys(placeDetails).forEach(place => {
        if (activity.includes(place) || activity.toLowerCase().includes(place.toLowerCase())) {
          if (!places.find(p => p.name === place)) {
            places.push({
              name: place,
              image: placeDetails[place].image
            });
          }
        }
      });
    });
    return places;
  };

  const handlePlaceClick = (placeName) => {
    navigate('/place-details', { state: { placeName } });
  };

  // Comprehensive package details
  const packageDetails = {
    "EXPLORE SRI LANKA IN 04 DAYS 03 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Dambulla",
          activities: [
            "Airport to Dambulla",
            "Taking a short break at hotel during the journey",
            "Pinnawala Elephant Orphanage",
            "Dambulla Cave Temple - UNESCO World Heritage Site",
            "Overnight in Dambulla"
          ]
        },
        {
          day: "Day 02",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress",
            "Sigiriya Village Tour with Traditional Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 03",
          title: "Kandy → Colombo",
          activities: [
            "Temple of the Sacred Tooth Relic (Dalada Maligawa)",
            "Kandyan Cultural Dance Show",
            "Gem Shop Visit",
            "Evening Shopping in Colombo",
            "Overnight in Colombo"
          ]
        },
        {
          day: "Day 04",
          title: "Colombo → Airport",
          activities: [
            "Colombo City Tour",
            "Gangaramaya Temple",
            "Lotus Tower",
            "Historic Fort Area",
            "Galle Face Green",
            "Independence Square",
            "Departure to Airport"
          ]
        }
      ]
    },
    "EXPLORE SRI LANKA IN 05 DAYS 04 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Negombo",
          activities: [
            "Airport to Negombo",
            "Negombo Fish Market / Fishing Village",
            "Hamilton Dutch Canal exploration",
            "Angurukaramulla Temple",
            "St. Mary's Church",
            "Evening Negombo Lagoon Tour",
            "Overnight in Negombo"
          ]
        },
        {
          day: "Day 02",
          title: "Negombo → Dambulla",
          activities: [
            "Short break at hotel during journey",
            "Pinnawala Elephant Orphanage",
            "Dambulla Cave Temple - UNESCO World Heritage Site",
            "Overnight in Dambulla"
          ]
        },
        {
          day: "Day 03",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress - UNESCO Site",
            "Sigiriya Village Tour with Traditional Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 04",
          title: "Kandy → Colombo",
          activities: [
            "Temple of the Sacred Tooth Relic (Dalada Maligawa)",
            "Kandyan Cultural Dance Show",
            "Gem Shop Visit",
            "Evening Shopping in Colombo",
            "Overnight in Colombo"
          ]
        },
        {
          day: "Day 05",
          title: "Colombo → Airport",
          activities: [
            "Colombo City Tour",
            "Major attractions visit",
            "Shopping opportunities",
            "Departure to Airport"
          ]
        }
      ]
    },
    "ANCIENT CITIES TOUR - 05 DAYS 04 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Anuradhapura",
          activities: [
            "Airport to Anuradhapura",
            "Sri Maha Bodhiya - Sacred Bodhi Tree",
            "Ruwanwelisaya Stupa",
            "Overnight in Anuradhapura"
          ]
        },
        {
          day: "Day 02",
          title: "Anuradhapura → Polonnaruwa → Sigiriya",
          activities: [
            "Explore Polonnaruwa Ancient City - UNESCO World Heritage Site",
            "Gal Vihara Rock Temple",
            "Royal Palace ruins",
            "Overnight in Sigiriya"
          ]
        },
        {
          day: "Day 03",
          title: "Sigiriya → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress - UNESCO Site",
            "Sigiriya Village Tour with Traditional Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 04",
          title: "Kandy → Colombo",
          activities: [
            "Temple of the Sacred Tooth Relic",
            "Kandyan Cultural Dance Show",
            "Gem Shop Visit",
            "Evening Shopping in Colombo",
            "Overnight in Colombo"
          ]
        },
        {
          day: "Day 05",
          title: "Colombo → Airport",
          activities: [
            "Colombo City Tour",
            "Historical and cultural sites",
            "Departure to Airport"
          ]
        }
      ]
    },
    "HILL COUNTRY & BEACHES - 07 DAYS 06 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Dambulla",
          activities: [
            "Short rest at hotel in Negombo",
            "Pinnawala Elephant Orphanage",
            "Dambulla Cave Temple",
            "Overnight in Dambulla"
          ]
        },
        {
          day: "Day 02",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress",
            "Village Tour with Traditional Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 03",
          title: "Kandy → Nuwara Eliya",
          activities: [
            "Temple of the Sacred Tooth Relic",
            "Kandyan Cultural Dance Show",
            "Journey to Hill Country",
            "Overnight in Nuwara Eliya"
          ]
        },
        {
          day: "Day 04",
          title: "Nuwara Eliya → Ella → Tissamaharama",
          activities: [
            "Gregory Park and Lake",
            "Ambewela Farm - 'Little New Zealand'",
            "Nine Arch Bridge in Ella",
            "Overnight in Tissamaharama"
          ]
        },
        {
          day: "Day 05",
          title: "Tissamaharama → Galle → Hikkaduwa",
          activities: [
            "Yala Safari Adventure",
            "Galle Fort - UNESCO World Heritage Site",
            "Gem Shop Visit",
            "Hikkaduwa Coral Garden",
            "Overnight in Hikkaduwa"
          ]
        },
        {
          day: "Day 06",
          title: "Hikkaduwa → Colombo",
          activities: [
            "Turtle Conservation Project",
            "Madu River Boat Safari",
            "Cinnamon Garden Visit",
            "Fish Therapy Experience",
            "Overnight in Colombo"
          ]
        },
        {
          day: "Day 07",
          title: "Colombo → Airport",
          activities: [
            "Colombo City Tour and Shopping",
            "Final cultural experiences",
            "Departure to Airport"
          ]
        }
      ]
    },
    "COMPREHENSIVE TOUR - 08 DAYS 07 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Negombo",
          activities: [
            "Fishing Village exploration",
            "Hamilton Dutch Canal tour",
            "Angurukaramulla Temple",
            "St. Mary's Church",
            "Overnight in Negombo"
          ]
        },
        {
          day: "Day 02",
          title: "Negombo → Dambulla",
          activities: [
            "Negombo Fish Market",
            "Optional Mangrove Forest Boat Safari",
            "Pinnawala Elephant Orphanage",
            "Dambulla Cave Temple",
            "Overnight in Dambulla"
          ]
        },
        {
          day: "Day 03",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress",
            "Village Tour with cultural immersion",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 04",
          title: "Kandy Exploration",
          activities: [
            "Temple of the Sacred Tooth Relic",
            "Kandyan Cultural Dance Show",
            "Royal Botanic Gardens Peradeniya",
            "Gem Museum visit",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 05",
          title: "Kandy → Nuwara Eliya",
          activities: [
            "Tea Plantation Tour with factory visit",
            "Colonial Town exploration",
            "Tea-picking experience",
            "Overnight in Nuwara Eliya"
          ]
        },
        {
          day: "Day 06",
          title: "Nuwara Eliya → Udawalawe",
          activities: [
            "Scenic Mountain Train Ride",
            "Udawalawe Safari - Wildlife conservation education",
            "Overnight in Udawalawe"
          ]
        },
        {
          day: "Day 07",
          title: "Udawalawe → Bentota",
          activities: [
            "Galle Fort UNESCO Site exploration",
            "Sea Turtle Hatchery",
            "Cinnamon Garden visit",
            "Fish Therapy experience",
            "Optional Madu River Boat Ride",
            "Overnight in Bentota"
          ]
        },
        {
          day: "Day 08",
          title: "Bentota → Airport",
          activities: [
            "Coastal Train Ride experience",
            "Colombo City Tour",
            "Final cultural and shopping experiences",
            "Departure to Airport"
          ]
        }
      ]
    },
    "GRAND ADVENTURE - 14 DAYS 13 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Negombo",
          activities: [
            "Arrival and hotel rest",
            "Evening Negombo Lagoon Tour",
            "Overnight in Negombo"
          ]
        },
        {
          day: "Day 02",
          title: "Negombo → Hikkaduwa",
          activities: [
            "Colombo City Tour",
            "Major landmarks visit",
            "Turtle Conservation Project",
            "Madu River Boat Safari with Cinnamon Tour",
            "Overnight in Hikkaduwa"
          ]
        },
        {
          day: "Day 03",
          title: "Hikkaduwa → Yala",
          activities: [
            "Galle Fort exploration",
            "Rumassala Japanese Peace Pagoda",
            "Unawatuna Beach",
            "Tissamaharama Ancient City and Lake",
            "Overnight in Yala"
          ]
        },
        {
          day: "Day 04",
          title: "Yala → Ella",
          activities: [
            "Yala National Park Morning Safari",
            "Buduruwagala Rock Temple",
            "Ravana Waterfall",
            "Optional Ravana Cave exploration",
            "Overnight in Ella"
          ]
        },
        {
          day: "Day 05",
          title: "Ella Full Day",
          activities: [
            "Little Adam's Peak hike",
            "Nine Arch Bridge photography",
            "Ella Rock challenging hike",
            "Secret Waterfall swimming",
            "Overnight in Ella"
          ]
        },
        {
          day: "Day 06",
          title: "Ella → Nuwara Eliya",
          activities: [
            "Famous Blue Train journey Ella to Nanu Oya",
            "Gregory Lake activities",
            "Nuwara Eliya walking city tour",
            "Overnight in Nuwara Eliya"
          ]
        },
        {
          day: "Day 07",
          title: "Nuwara Eliya → Kandy",
          activities: [
            "Horton Plains National Park",
            "Tea Plantations and Factory tour",
            "Ramboda Waterfall",
            "Kandy Cultural Show and Temple visit",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 08",
          title: "Kandy → Habarana",
          activities: [
            "Peradeniya Botanical Garden",
            "Matale Hindu Temple",
            "Nalanda Gedige Temple",
            "Dambulla Cave Temple",
            "Pidurangala Sunset View",
            "Overnight in Habarana"
          ]
        },
        {
          day: "Day 09",
          title: "Habarana → Sigiriya → Habarana",
          activities: [
            "Sigiriya Lion Rock Fortress climb",
            "Hiriwadunna Village Tour with Cooking Class",
            "Traditional lunch preparation",
            "Minneriya/Kaudulla/Eco Park Safari",
            "Overnight in Habarana"
          ]
        },
        {
          day: "Day 10",
          title: "Habarana → Polonnaruwa",
          activities: [
            "Polonnaruwa Ancient Kingdom exploration by bicycle or car",
            "UNESCO World Heritage Site tour",
            "Overnight in Polonnaruwa"
          ]
        },
        {
          day: "Day 11",
          title: "Polonnaruwa → Pasikuda",
          activities: [
            "Travel to East Coast",
            "Beach leisure and water sports at Pasikuda",
            "Overnight in Pasikuda"
          ]
        },
        {
          day: "Day 12",
          title: "Pasikuda → Trincomalee → Nilaveli",
          activities: [
            "Koneswaram Temple",
            "Pigeon Island National Park",
            "Fort Frederick",
            "Overnight in Nilaveli"
          ]
        },
        {
          day: "Day 13",
          title: "Trincomalee → Dambulla",
          activities: [
            "Leisure at Nilaveli Beach",
            "Return journey preparation",
            "Overnight in Dambulla"
          ]
        },
        {
          day: "Day 14",
          title: "Dambulla → Airport",
          activities: [
            "Final Dambulla Cave Temple visit",
            "Journey to airport",
            "Departure"
          ]
        }
      ]
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    phone: '',
    guests: '2',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const templateParams = {
      to_email: 'opulenttoursinfo@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      guests: formData.guests,
      travel_date: formData.date,
      special_requests: formData.specialRequests,
      package_name: selectedPackage?.name || 'Custom Package',
      duration: selectedPackage?.duration || 'To be determined',
      price: selectedPackage?.price || 'Quote on request'
    };

    try {
      await emailjs.send(
        'your_service_id',
        'your_template_id',
        templateParams,
        'your_public_key'
      );
      
      setFormData({ 
        name: '', 
        email: '', 
        date: '', 
        phone: '', 
        guests: '2', 
        specialRequests: '' 
      });
      
      alert('Booking request sent successfully! We will contact you within 24 hours.');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send booking request. Please contact us directly at +9471 534 5060 or opulenttoursinfo@gmail.com');
    }
  };

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Tour Details
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/tours" className="text-white">Tours</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {selectedPackage ? (
        <div className="container py-5">
          <div className="row">
            {/* Tour Details Section */}
            <div className="col-lg-8">
              <div className="tour-header mb-4">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  className="img-fluid rounded w-100 mb-4"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="tour-title-section">
                  <h1 className="display-5 fw-bold text-primary mb-3">{selectedPackage.name}</h1>
                  <div className="tour-meta d-flex flex-wrap gap-4 mb-4">
                    <div className="meta-item">
                      <i className="fa fa-clock text-primary me-2"></i>
                      <span className="fw-semibold">Duration:</span> {selectedPackage.duration}
                    </div>
                    <div className="meta-item">
                      <i className="fa fa-money-bill text-primary me-2"></i>
                      <span className="fw-semibold">Starting from:</span> <span className="text-success fs-5 fw-bold">{selectedPackage.price}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fa fa-users text-primary me-2"></i>
                      <span className="fw-semibold">Group Size:</span> 2-15 people
                    </div>
                  </div>
                  
                  {/* Package Highlights */}
                  {selectedPackage.highlights && (
                    <div className="highlights-section mb-4">
                      <h4 className="text-primary mb-3">
                        <i className="fa fa-star me-2"></i>Tour Highlights
                      </h4>
                      <div className="row">
                        {selectedPackage.highlights.map((highlight, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <div className="highlight-item p-2 rounded bg-light">
                              <i className="fa fa-check-circle text-success me-2"></i>
                              {highlight}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Detailed Itinerary with Place Cards */}
              {packageDetails[selectedPackage.name] && (
                <div className="program-details">
                  <h3 className="text-primary mb-4">
                    <i className="fa fa-route me-2"></i>Detailed Itinerary
                  </h3>
                  
                  {packageDetails[selectedPackage.name].program.map((day, index) => {
                    const places = extractPlaces(day.activities);
                    
                    return (
                      <div key={index} className="day-section mb-4">
                        <div className="day-header bg-primary text-white p-3 rounded-top">
                          <h4 className="mb-1">
                            <i className="fa fa-calendar-day me-2"></i>
                            {day.day}
                          </h4>
                          <p className="mb-0 fs-6">{day.title}</p>
                        </div>
                        
                        <div className="day-content bg-light p-4 rounded-bottom">
                          {places.length > 0 ? (
                            <div className="places-grid">
                              <div className="row g-3">
                                {places.map((place, placeIndex) => (
                                  <div key={placeIndex} className="col-md-6">
                                    <div 
                                      className="place-card cursor-pointer"
                                      onClick={() => handlePlaceClick(place.name)}
                                      style={{ cursor: 'pointer' }}
                                    >
                                      <div className="place-image-wrapper">
                                        <img
                                          src={place.image}
                                          alt={place.name}
                                          className="place-image"
                                        />
                                        <div className="place-overlay">
                                          <i className="fa fa-eye text-white"></i>
                                        </div>
                                      </div>
                                      <div className="place-info">
                                        <h6 className="place-name mb-2">{place.name}</h6>
                                        <button className="btn btn-sm btn-primary w-100">
                                          <i className="fa fa-info-circle me-1"></i>
                                          View Details
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="activities mb-3">
                              <h5 className="text-secondary mb-3">
                                <i className="fa fa-list me-2"></i>Activities
                              </h5>
                              <ul className="list-unstyled">
                                {day.activities.map((activity, idx) => (
                                  <li key={idx} className="mb-2 d-flex align-items-start">
                                    <i className="fa fa-chevron-right text-primary me-2 mt-1"></i>
                                    <span>{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* What's Included Section */}
              <div className="inclusions-section mt-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="included-section p-4 bg-success bg-opacity-10 rounded">
                      <h5 className="text-success mb-3">
                        <i className="fa fa-check-circle me-2"></i>What's Included
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Accommodation in selected hotels</li>
                        <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Daily breakfast</li>
                        <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Transportation by air-conditioned vehicle</li>
                        <li className="mb-2"><i className="fa fa-check text-success me-2"></i>English-speaking guide</li>
                        <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Entrance fees to mentioned sites</li>
                        <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Safari jeep charges</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="excluded-section p-4 bg-danger bg-opacity-10 rounded">
                      <h5 className="text-danger mb-3">
                        <i className="fa fa-times-circle me-2"></i>What's Not Included
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><i className="fa fa-times text-danger me-2"></i>International airfare</li>
                        <li className="mb-2"><i className="fa fa-times text-danger me-2"></i>Visa fees</li>
                        <li className="mb-2"><i className="fa fa-times text-danger me-2"></i>Lunch and dinner (except mentioned)</li>
                        <li className="mb-2"><i className="fa fa-times text-danger me-2"></i>Personal expenses</li>
                        <li className="mb-2"><i className="fa fa-times text-danger me-2"></i>Tips for guide and driver</li>
                        <li className="mb-2"><i className="fa fa-times text-danger me-2"></i>Travel insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form Sidebar */}
            <div className="col-lg-4">
              <div className="booking-sidebar sticky-top">
                <div className="booking-card bg-light p-4 rounded shadow">
                  <h4 className="text-primary mb-4">
                    <i className="fa fa-calendar-check me-2"></i>Book This Tour
                  </h4>
                  
                  <div className="price-display text-center mb-4 p-3 bg-primary bg-opacity-10 rounded">
                    <div className="price-label text-muted">Starting from</div>
                    <div className="price-amount display-6 fw-bold text-primary">{selectedPackage.price}</div>
                    <div className="price-note small text-muted">per person</div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        <i className="fa fa-user me-2"></i>Full Name *
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        <i className="fa fa-envelope me-2"></i>Email Address *
                      </label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        <i className="fa fa-phone me-2"></i>Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="date" className="form-label fw-semibold">
                          <i className="fa fa-calendar me-2"></i>Travel Date *
                        </label>
                        <input 
                          type="date" 
                          className="form-control"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="guests" className="form-label fw-semibold">
                          <i className="fa fa-users me-2"></i>Guests
                        </label>
                        <select 
                          className="form-select" 
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6+">6+ People</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="specialRequests" className="form-label fw-semibold">
                        <i className="fa fa-comment me-2"></i>Special Requests
                      </label>
                      <textarea 
                        className="form-control" 
                        id="specialRequests"
                        name="specialRequests"
                        rows="3"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="Any special dietary requirements, accessibility needs, or preferences..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-3 mb-3">
                      <i className="fa fa-paper-plane me-2"></i>Send Booking Request
                    </button>

                    <div className="contact-info text-center">
                      <small className="text-muted">
                        Or contact us directly:<br/>
                        <i className="fa fa-phone me-1"></i> +9471 534 5060<br/>
                        <i className="fa fa-envelope me-1"></i> opulenttoursinfo@gmail.com
                      </small>
                    </div>
                  </form>
                </div>

                {/* Additional Info */}
                <div className="additional-info mt-4">
                  <div className="info-card bg-white p-4 rounded shadow-sm">
                    <h6 className="text-primary mb-3">
                      <i className="fa fa-info-circle me-2"></i>Important Information
                    </h6>
                    <ul className="list-unstyled small">
                      <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Free cancellation up to 48 hours</li>
                      <li className="mb-2"><i className="fa fa-check text-success me-2"></i>24/7 customer support</li>
                      <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Customizable itinerary</li>
                      <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Best price guarantee</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container text-center py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="no-package-selected p-5 bg-light rounded">
                <i className="fa fa-exclamation-triangle fa-4x text-warning mb-4"></i>
                <h2>No Package Selected</h2>
                <p className="text-muted mb-4">
                  Please select a tour package from our Tours page to view detailed information.
                </p>
                <a href="/tours" className="btn btn-primary btn-lg">
                  <i className="fa fa-arrow-left me-2"></i>Back to Tours
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Destination;