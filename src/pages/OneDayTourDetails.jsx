import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OneDayTourDetails.css';

function OneDayTourDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const tour = location.state?.tour;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourDetails = {
    "Yala Safari": {
      headerImage: "assets/img/yala-safari-header.jpg",
      introduction: "Yala National Park, the most iconic wildlife destination in Sri Lanka, is a breathtaking blend of coastal beauty, dry forests, and rich biodiversity. Known for having one of the highest leopard densities in the world, Yala offers travelers a rare opportunity to witness majestic wildlife roaming freely in their natural habitat. Its rugged landscapes, ancient ruins, and tranquil lagoons make it a must-visit destination for nature lovers and adventure seekers.",
      invite: "Experience the wild heart of Sri Lanka! Join us on an unforgettable journey through Yala's untamed wilderness—where every turn reveals a new encounter, every sunrise paints a new memory, and every safari brings you closer to the wonders of nature. Let us take you on a world-class wildlife adventure in Yala!",
      highlights: [
        {
          icon: "fa-binoculars",
          title: "World-Famous Wildlife Safaris",
          description: "Spot leopards, elephants, crocodiles, sloth bears, deer, and over 200 bird species"
        },
        {
          icon: "fa-paw",
          title: "One of the Highest Leopard Populations Globally",
          description: "A dream destination for photographers and wildlife enthusiasts"
        },
        {
          icon: "fa-tree",
          title: "Diverse Landscapes",
          description: "From dense jungle and thorn forests to golden beaches and freshwater lakes"
        },
        {
          icon: "fa-water",
          title: "Scenic Coastal Views",
          description: "Enjoy the untouched beauty of the Indian Ocean bordering the park"
        },
        {
          icon: "fa-gopuram",
          title: "Ancient Cultural Sites",
          description: "Visit Sithulpawwa Buddhist monastery and other archaeological treasures hidden within the park"
        },
        {
          icon: "fa-dove",
          title: "Birdwatching Paradise",
          description: "Home to vibrant resident and migratory birds, ideal for nature lovers"
        },
        {
          icon: "fa-leaf",
          title: "Eco-Friendly Travel Experiences",
          description: "Sustainable safaris with minimal environmental impact"
        }
      ],
      gallery: [
        { src: "assets/img/yala-leopard.jpg", caption: "Majestic Leopard in Natural Habitat" },
        { src: "assets/img/yala-elephants.jpg", caption: "Elephant Herds Roaming Freely" },
        { src: "assets/img/yala-landscape.jpg", caption: "Diverse Yala Landscapes" },
        { src: "assets/img/yala-birds.jpg", caption: "Colorful Birdlife" },
        { src: "assets/img/yala-sloth-bear.jpg", caption: "Rare Sloth Bear Sighting" },
        { src: "assets/img/yala-crocodile.jpg", caption: "Crocodiles in Freshwater Lakes" },
        { src: "assets/img/yala-deer.jpg", caption: "Spotted Deer Grazing" },
        { src: "assets/img/yala-beach.jpg", caption: "Coastal Beauty of Yala" }
      ],
      tourDetails: {
        duration: "Full Day (6-7 hours)",
        startTime: "5:30 AM or 2:00 PM",
        included: ["Professional safari guide", "4x4 jeep safari", "Park entrance fees", "Bottled water"],
        whatToBring: ["Comfortable clothing", "Sunscreen", "Hat and sunglasses", "Camera with zoom lens", "Binoculars"]
      }
    },
    "Kandy & Pinnawala": {
      headerImage: "assets/img/kandy-pinnawala-header.jpg",
      introduction: "Kandy, the cultural capital of Sri Lanka, is a city of charm, history, and spiritual significance. Surrounded by misty hills and centered around the beautiful Kandy Lake, the city is home to the world-renowned Temple of the Sacred Tooth Relic, vibrant traditions, and captivating cultural performances. Just a short drive away lies the Pinnawala Elephant Orphanage, where visitors can enjoy heartwarming encounters with rescued elephants and witness daily routines such as feeding and river bathing. Together, Kandy and Pinnawala offer a rich blend of culture, nature, and unforgettable experiences.",
      invite: "Discover the cultural soul and gentle giants of Sri Lanka! Join us as we take you through the sacred heritage of Kandy and the inspiring beauty of Pinnawala. Let us create a memorable escape filled with culture, nature, and warm Sri Lankan hospitality.",
      highlights: [
        {
          icon: "fa-gopuram",
          title: "Temple of the Sacred Tooth Relic",
          description: "One of the most sacred Buddhist sites in the world"
        },
        {
          icon: "fa-water",
          title: "Kandy Lake & City Walk",
          description: "A peaceful stroll surrounded by colonial charm and scenic views"
        },
        {
          icon: "fa-leaf",
          title: "Royal Botanical Gardens - Peradeniya",
          description: "A world-class garden showcasing rare orchids and tropical flora"
        },
        {
          icon: "fa-music",
          title: "Kandy Cultural Dance Show",
          description: "A lively performance of traditional music, dance, and fire acts"
        },
        {
          icon: "fa-mountain",
          title: "Scenic Hill Country Surroundings",
          description: "Misty mountains, tea plantations, and refreshing climates"
        },
        {
          icon: "fa-elephant",
          title: "Pinnawala Elephant Orphanage",
          description: "Sanctuary for rescued elephants with daily feeding and river bathing"
        },
        {
          icon: "fa-heart",
          title: "Elephant Bathing at the Maha Oya River",
          description: "A heartwarming sight of herds relaxing and playing in the water"
        },
        {
          icon: "fa-users",
          title: "Close-Up Elephant Encounters",
          description: "Safe and memorable viewing opportunities for all ages"
        },
        {
          icon: "fa-child",
          title: "Family-Friendly Attraction",
          description: "Ideal stop for nature lovers, wildlife enthusiasts, and kids"
        }
      ],
      gallery: [
        { src: "assets/img/kandy-temple.jpg", caption: "Temple of the Sacred Tooth Relic" },
        { src: "assets/img/kandy-lake.jpg", caption: "Serene Kandy Lake" },
        { src: "assets/img/kandy-botanical.jpg", caption: "Royal Botanical Gardens" },
        { src: "assets/img/kandy-dance.jpg", caption: "Traditional Cultural Dance" },
        { src: "assets/img/pinnawala-elephants.jpg", caption: "Elephants at Pinnawala" },
        { src: "assets/img/pinnawala-bathing.jpg", caption: "River Bathing Experience" },
        { src: "assets/img/pinnawala-feeding.jpg", caption: "Feeding Baby Elephants" },
        { src: "assets/img/kandy-city.jpg", caption: "Kandy City Panorama" }
      ],
      tourDetails: {
        duration: "Full Day (8-9 hours)",
        startTime: "8:00 AM",
        included: ["Professional guide", "Temple entrance fees", "Cultural show tickets", "Elephant orphanage entrance", "Lunch"],
        whatToBring: ["Modest clothing for temple", "Comfortable walking shoes", "Camera", "Sunscreen"]
      }
    },
    "Sigiriya & Dambulla": {
      headerImage: "assets/img/sigiriya-dambulla-header.jpg",
      introduction: "Sigiriya and Dambulla, two UNESCO World Heritage Sites, form the cultural heart of Sri Lanka's ancient kingdom. Sigiriya, known as the 'Lion Rock,' is an ancient rock fortress and one of Sri Lanka's most iconic landmarks. Built in the 5th century AD by King Kashyapa I, it served as a royal palace atop a 200-meter rock for strategic defense. After his death, the site was abandoned as a royal residence and later used as a Buddhist monastery until the 14th century. Dambulla, famed for its 5 magnificent cave temples, features over 150 Buddha statues and centuries-old murals that tell the story of Sri Lanka's spiritual heritage. The Dambulla Cave Temples, dating back to the 1st century BCE, are renowned for their exquisite Sinhala art and sculpture.",
      invite: "Step into the ancient wonders of Sri Lanka! Join us on an unforgettable journey to explore the majestic Sigiriya Fortress and the sacred Dambulla Cave Temples. Let us guide you through a world of kings, legends, and timeless beauty.",
      highlights: [
        {
          icon: "fa-mountain",
          title: "Sigiriya - Lion Rock Fortress",
          description: "UNESCO World Heritage Site - One of the most remarkable archaeological wonders in Asia"
        },
        {
          icon: "fa-landmark",
          title: "5th Century Royal Palace",
          description: "200-meter rock fortress - Climb to the top to explore King Kashyapa's royal citadel"
        },
        {
          icon: "fa-paint-brush",
          title: "Famous Lion's Gate",
          description: "Once a grand entrance shaped like a lion, now marked by its remaining paws"
        },
        {
          icon: "fa-palette",
          title: "Sigiriya Frescoes",
          description: "Beautifully preserved ancient paintings of the 'Sigiriya Damsels'"
        },
        {
          icon: "fa-book",
          title: "Mirror Wall",
          description: "Polished wall inscribed with ancient visitors' writings"
        },
        {
          icon: "fa-water",
          title: "Advanced Hydraulic Systems",
          description: "The surrounding water gardens showcase ancient engineering"
        },
        {
          icon: "fa-gopuram",
          title: "Dambulla Cave Temple Complex",
          description: "UNESCO World Heritage Site dating back to 1st century BCE"
        },
        {
          icon: "fa-praying-hands",
          title: "Five Sacred Caves",
          description: "Over 150 Buddha statues with intricately painted ceilings"
        },
        {
          icon: "fa-history",
          title: "Ancient Sinhala Sculptures",
          description: "Exquisite art developed during Anuradhapura and Polonnaruwa periods"
        }
      ],
      gallery: [
        { src: "assets/img/sigiriya-rock.jpg", caption: "Majestic Sigiriya Lion Rock" },
        { src: "assets/img/sigiriya-frescoes.jpg", caption: "Ancient Sigiriya Frescoes" },
        { src: "assets/img/sigiriya-lions-paw.jpg", caption: "Lion's Gate Entrance" },
        { src: "assets/img/sigiriya-gardens.jpg", caption: "Water Gardens" },
        { src: "assets/img/sigiriya-mirror-wall.jpg", caption: "Historic Mirror Wall" },
        { src: "assets/img/dambulla-caves.jpg", caption: "Dambulla Cave Temples" },
        { src: "assets/img/dambulla-buddha.jpg", caption: "Buddha Statues Inside Caves" },
        { src: "assets/img/dambulla-paintings.jpg", caption: "Ancient Cave Paintings" }
      ],
      tourDetails: {
        duration: "Full Day (7-8 hours)",
        startTime: "7:00 AM",
        included: ["Professional guide", "Site entrance fees", "Bottled water", "Lunch"],
        whatToBring: ["Comfortable walking/climbing shoes", "Light clothing", "Hat", "Camera", "Water bottle"]
      }
    },
    "Galle Fort": {
      headerImage: "assets/img/galle-fort-header.jpg",
      introduction: "Galle, located along Sri Lanka's stunning southern coastline, is a city where colonial charm meets tropical beauty. Its highlight, the iconic Galle Dutch Fort, is a UNESCO World Heritage Site and one of the best-preserved colonial-era forts in Asia. Originally built by the Portuguese in the 16th century and later expanded by the Dutch in the 17th century, the fort showcases a blend of European architecture and South Asian culture. Its thick stone walls enclose a vibrant town with cobbled streets, historic buildings, boutique shops, and cafes. Key attractions within the fort include the Dutch Reformed Church, Galle Lighthouse, and the Maritime Museum. With golden beaches, vibrant culture, and a relaxed coastal atmosphere, Galle offers an unforgettable blend of history and seaside serenity.",
      invite: "Explore the timeless beauty of Galle! Walk along ancient ramparts, soak in breathtaking ocean views, and discover the rich heritage of Sri Lanka's most picturesque coastal city. Join us for a journey that blends history, culture, and coastal charm.",
      highlights: [
        {
          icon: "fa-fort-awesome",
          title: "Galle Fort & Heritage",
          description: "UNESCO World Heritage Dutch Fort - A beautifully preserved 16th-century fortress"
        },
        {
          icon: "fa-lightbulb",
          title: "Galle Lighthouse",
          description: "The iconic landmark offering scenic coastal views"
        },
        {
          icon: "fa-building",
          title: "Colonial Streets & Architecture",
          description: "European-style buildings, boutique shops, and cosy cafés"
        },
        {
          icon: "fa-landmark",
          title: "Historical Museums",
          description: "Maritime Museum and Dutch Hospital precinct"
        },
        {
          icon: "fa-umbrella-beach",
          title: "Stunning Beaches Nearby",
          description: "Unawatuna, Jungle Beach, and Dalawella"
        },
        {
          icon: "fa-walking",
          title: "Oceanfront Ramparts",
          description: "Perfect for sunset walks and photography"
        },
        {
          icon: "fa-turtle",
          title: "Turtle Conservation Experiences",
          description: "Visit nearby hatcheries along the coast"
        },
        {
          icon: "fa-coffee",
          title: "Café Culture",
          description: "Trendy restaurants, gelato shops, and coffee spots"
        },
        {
          icon: "fa-shopping-bag",
          title: "Handicrafts & Boutiques",
          description: "Jewelry, art galleries, clothing, and souvenirs"
        },
        {
          icon: "fa-heart",
          title: "Relaxed Coastal Atmosphere",
          description: "Ideal for couples, families, and culture lovers"
        }
      ],
      gallery: [
        { src: "assets/img/galle-fort-aerial.jpg", caption: "Aerial View of Galle Fort" },
        { src: "assets/img/galle-lighthouse.jpg", caption: "Historic Galle Lighthouse" },
        { src: "assets/img/galle-streets.jpg", caption: "Cobblestone Streets" },
        { src: "assets/img/galle-ramparts.jpg", caption: "Fort Ramparts Walk" },
        { src: "assets/img/galle-church.jpg", caption: "Dutch Reformed Church" },
        { src: "assets/img/galle-beach.jpg", caption: "Beaches Near Galle" },
        { src: "assets/img/galle-shops.jpg", caption: "Boutique Shops & Cafes" },
        { src: "assets/img/galle-sunset.jpg", caption: "Sunset at Galle Fort" }
      ],
      tourDetails: {
        duration: "Full Day (6-7 hours)",
        startTime: "9:00 AM",
        included: ["Professional guide", "Fort walking tour", "Museum entrance", "Lunch", "Beach time"],
        whatToBring: ["Comfortable walking shoes", "Sunscreen", "Hat", "Camera", "Light clothing"]
      }
    },
    "Whale Watching": {
      headerImage: "assets/img/whale-watching-header.jpg",
      introduction: "Sri Lanka is one of the best places in the world to witness majestic marine life up close. From the southern coast—especially Mirissa—travelers can spot blue whales, sperm whales, spinner dolphins, and other incredible ocean giants. The warm tropical waters and rich marine ecosystem create ideal conditions for unforgettable whale-watching experiences, attracting marine enthusiasts from around the globe. Blue whales - Sri Lanka is one of the few places on Earth where you can reliably spot the largest animal ever to live. Mirissa's calm seas and rich marine waters make it one of Asia's top whale watching destinations.",
      invite: "Set sail into the deep blue and meet the gentle giants of the ocean! Join us for a thrilling and eco-friendly whale watching tour, where every moment brings excitement, serenity, and breathtaking natural beauty. Let us take you on an unforgettable ocean adventure in Sri Lanka.",
      highlights: [
        {
          icon: "fa-water",
          title: "World-Class Marine Encounters - Blue Whales",
          description: "Sri Lanka is one of the few places on Earth where you can reliably spot the largest animal ever to live"
        },
        {
          icon: "fa-fish",
          title: "Sperm Whales",
          description: "Known for their deep dives and impressive size"
        },
        {
          icon: "fa-swimmer",
          title: "Spinner & Bottlenose Dolphins",
          description: "Often seen dancing and playing beside the boats"
        },
        {
          icon: "fa-ship",
          title: "Ideal Whale Watching Hub - Mirissa",
          description: "Calm seas and rich marine waters make Mirissa one of Asia's top whale watching destinations"
        },
        {
          icon: "fa-clock",
          title: "Best Timing",
          description: "Early morning departures ensure the best sightings and serene ocean views"
        },
        {
          icon: "fa-sun",
          title: "Nature, Relaxation & Adventure",
          description: "Breathtaking sunrise over the Indian Ocean"
        },
        {
          icon: "fa-camera",
          title: "Photography Opportunities",
          description: "Opportunity for wildlife photography and videography"
        },
        {
          icon: "fa-users",
          title: "Suitable for Everyone",
          description: "Suitable for families, couples, adventure lovers, and nature enthusiasts"
        },
        {
          icon: "fa-leaf",
          title: "Eco-Friendly Experience",
          description: "Responsible whale watching practices to protect marine life"
        },
        {
          icon: "fa-user-tie",
          title: "Expert Guides",
          description: "Expert guides trained in marine conservation"
        }
      ],
      gallery: [
        { src: "assets/img/whale-blue.jpg", caption: "Blue Whale Breach" },
        { src: "assets/img/whale-sperm.jpg", caption: "Sperm Whale Diving" },
        { src: "assets/img/whale-dolphins.jpg", caption: "Playful Dolphins" },
        { src: "assets/img/whale-boat.jpg", caption: "Whale Watching Boat" },
        { src: "assets/img/whale-tail.jpg", caption: "Whale Tail Splash" },
        { src: "assets/img/whale-sunrise.jpg", caption: "Ocean Sunrise" },
        { src: "assets/img/whale-group.jpg", caption: "Dolphin Pod" },
        { src: "assets/img/whale-sunset.jpg", caption: "Mirissa Sunset" }
      ],
      tourDetails: {
        duration: "Half Day (4-5 hours)",
        startTime: "6:00 AM",
        included: ["Boat ride", "Life jackets", "Marine expert guide", "Light breakfast", "Bottled water"],
        whatToBring: ["Sunscreen", "Hat and sunglasses", "Camera", "Light jacket", "Motion sickness medication if needed"]
      }
    }
  };

  const goToPrevious = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? details.gallery.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === details.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!tour || !tourDetails[tour.name]) {
    return (
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="p-5 bg-light rounded">
              <i className="fa fa-exclamation-triangle fa-4x text-warning mb-4"></i>
              <h2>Tour Not Found</h2>
              <p className="text-muted mb-4">
                Sorry, we couldn't find information about this tour.
              </p>
              <button 
                onClick={() => navigate('/tours')} 
                className="btn btn-primary btn-lg"
              >
                <i className="fa fa-arrow-left me-2"></i>Back to Tours
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const details = tourDetails[tour.name];

  return (
    <div className="one-day-tour-details">
      {/* Hero Section */}
      <div 
        className="tour-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${details.headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown mb-4">
                {tour.name}
              </h1>
              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
                <div className="text-white">
                  <i className="fa fa-clock me-2"></i>
                  <span className="fs-5">{details.tourDetails.duration}</span>
                </div>
                <div className="text-white">
                  <i className="fa fa-sun me-2"></i>
                  <span className="fs-5">Start: {details.tourDetails.startTime}</span>
                </div>
                <div className="text-white">
                  <i className="fa fa-tag me-2"></i>
                  <span className="fs-5 fw-bold">{tour.price}</span>
                </div>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/tours" className="text-white">Tours</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    {tour.name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Back Button */}
            <button 
              onClick={() => navigate(-1)} 
              className="btn btn-outline-primary mb-4"
            >
              <i className="fa fa-arrow-left me-2"></i>Back to Tours
            </button>

            {/* Introduction */}
            <div className="tour-introduction mb-5 p-4 bg-light rounded">
              <h2 className="text-primary mb-4">
                <i className="fa fa-info-circle me-2"></i>Introduction
              </h2>
              <p className="lead" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                {details.introduction}
              </p>
            </div>

            {/* Invite Section */}
            <div className="tour-invite mb-5 p-4 rounded" style={{
              background: 'linear-gradient(135deg, #06A3DA 0%, #0585B3 100%)',
              color: 'white'
            }}>
              <h3 className="mb-3">
                <i className="fa fa-heart me-2"></i>Join Us on This Adventure
              </h3>
              <p className="fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                {details.invite}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="tour-highlights mb-5">
              <h2 className="text-primary mb-4">
                <i className="fa fa-star me-2"></i>Key Highlights
              </h2>
              <div className="row g-4">
                {details.highlights.map((highlight, index) => (
                  <div key={index} className="col-md-6">
                    <div className="highlight-card p-4 bg-white rounded shadow-sm h-100">
                      <div className="d-flex align-items-start">
                        <div className="highlight-icon me-3">
                          <i className={`fa ${highlight.icon} fa-2x text-primary`}></i>
                        </div>
                        <div>
                          <h5 className="mb-2">{highlight.title}</h5>
                          <p className="text-muted mb-0">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tour Details */}
            <div className="tour-info-section mb-5">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="info-card p-4 bg-light rounded shadow-sm h-100">
                    <h4 className="text-primary mb-3">
                      <i className="fa fa-check-circle me-2"></i>What's Included
                    </h4>
                    <ul className="list-unstyled">
                      {details.tourDetails.included.map((item, index) => (
                        <li key={index} className="mb-2">
                          <i className="fa fa-check text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-card p-4 bg-light rounded shadow-sm h-100">
                    <h4 className="text-primary mb-3">
                      <i className="fa fa-suitcase me-2"></i>What to Bring
                    </h4>
                    <ul className="list-unstyled">
                      {details.tourDetails.whatToBring.map((item, index) => (
                        <li key={index} className="mb-2">
                          <i className="fa fa-arrow-right text-primary me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="tour-gallery mb-5">
              <h2 className="text-primary mb-4">
                <i className="fa fa-images me-2"></i>Photo Gallery
              </h2>
              
              <div className="carousel-container position-relative">
                {/* Left Arrow */}
                <button 
                  className="carousel-control carousel-control-prev"
                  onClick={goToPrevious}
                >
                  <i className="fa fa-chevron-left fa-2x"></i>
                </button>
                
                {/* Current Image */}
                <div className="carousel-image-container">
                  <img 
                    src={details.gallery[currentImageIndex].src} 
                    alt={details.gallery[currentImageIndex].caption}
                    className="img-fluid rounded shadow"
                    style={{ 
                      height: '500px', 
                      objectFit: 'cover',
                      width: '100%'
                    }}
                  />
                  <div className="carousel-caption">
                    <p className="text-white mb-0">{details.gallery[currentImageIndex].caption}</p>
                  </div>
                </div>
                
                {/* Right Arrow */}
                <button 
                  className="carousel-control carousel-control-next"
                  onClick={goToNext}
                >
                  <i className="fa fa-chevron-right fa-2x"></i>
                </button>
                
                {/* Image Indicators */}
                <div className="carousel-indicators">
                  {details.gallery.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="booking-cta p-5 rounded text-center" style={{
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '2px solid #06A3DA'
            }}>
              <h3 className="mb-3">Ready to Book This Tour?</h3>
              <p className="mb-4 fs-5">
                Contact us today to reserve your spot and create unforgettable memories!
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="/booking" className="btn btn-primary btn-lg px-5">
                  <i className="fa fa-calendar-check me-2"></i>Book Now
                </a>
                <a href="tel:+94715345060" className="btn btn-outline-primary btn-lg px-5">
                  <i className="fa fa-phone me-2"></i>Call Us
                </a>
                <a href="mailto:opulenttoursinfo@gmail.com" className="btn btn-outline-primary btn-lg px-5">
                  <i className="fa fa-envelope me-2"></i>Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneDayTourDetails;