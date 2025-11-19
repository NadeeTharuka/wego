// FILE PATH: src/pages/Destination.jsx
// UPDATED WITH COLLAPSIBLE DAY DETAILS

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Destination.css';

function Destination() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPackage = location.state?.package;
  const [expandedActivities, setExpandedActivities] = useState({});
  const [expandedDays, setExpandedDays] = useState({});

  // Toggle day expansion
  const toggleDay = (dayIndex) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayIndex]: !prev[dayIndex]
    }));
  };

  // Toggle activity details
  const toggleActivity = (dayIndex, activityIndex) => {
    const key = `${dayIndex}-${activityIndex}`;
    setExpandedActivities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
    "Fishing Village": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Hamilton Dutch Canal": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Angurukaramulla Temple": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Anuradhapura Ancient City": {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Sri Maha Bodhiya": {
      image: "https://images.unsplash.com/photo-1605536968169-738c98afd7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Ruwanwelisaya": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Polonnaruwa Ancient City": {
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
    "Sea Turtle Hatchery": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Madu River Boat Ride": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Tea Plantation Visit": {
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

  const handlePlaceClick = (placeName) => {
    navigate('/place-details', { state: { placeName } });
  };

  // Comprehensive package details with all 7 packages
  const packageDetails = {
    "ULTIMATE EXPLORER - 10 DAYS 09 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Sigiriya",
          activities: [
            "Negombo Fish Market",
            "Pinnawala Elephant Orphanage",
            {
              name: "Sigiriya Village Tour with Sri Lankan Cooking Class",
              isExpandable: true,
              subActivities: [
                "Traditional Village Tour",
                "Sri Lankan Cooking Class",
                "Authentic Traditional Lunch",
                "Cultural Immersion Experience"
              ]
            },
            "Pidurangala Sunset View",
            "Overnight in Sigiriya (Activities depend on arrival time)"
          ]
        },
        {
          day: "Day 02",
          title: "Sigiriya → Polonnaruwa → Habarana",
          activities: [
            "Sigiriya Lion Rock Fortress - UNESCO World Heritage Site",
            {
              name: "Polonnaruwa Ancient Kingdom Exploration",
              isExpandable: true,
              subActivities: [
                "Bicycle Tour Option",
                "Car Tour Option",
                "Gal Vihara Rock Temple",
                "Royal Palace Ruins"
              ]
            },
            {
              name: "Minneriya/Kaudulla/Eco Park Wild Safari",
              isExpandable: true,
              subActivities: [
                "Elephant Gathering",
                "Wildlife Photography",
                "Bird Watching",
                "Jeep Safari Experience"
              ]
            },
            "Overnight in Habarana"
          ]
        },
        {
          day: "Day 03",
          title: "Habarana → Kandy",
          activities: [
            "Dambulla Cave Temple - UNESCO World Heritage Site",
            "Nalanda Gedige Temple",
            "Matale Hindu Temple",
            "Kandyan Cultural Dance Show",
            "Temple of the Sacred Tooth Relic (Dalada Maligawa)",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 04",
          title: "Kandy → Nuwara Eliya",
          activities: [
            "Peradeniya Botanical Garden",
            "Ramboda Waterfall",
            {
              name: "Tea Factory & Tea Plantation Tour",
              isExpandable: true,
              subActivities: [
                "Tea Plucking Experience",
                "Factory Visit & Processing",
                "Tea Tasting Session",
                "Learn Traditional Tea Making"
              ]
            },
            "Walking City Tour of Nuwara Eliya",
            "Overnight in Nuwara Eliya"
          ]
        },
        {
          day: "Day 05",
          title: "Nuwara Eliya → Ella",
          activities: [
            {
              name: "Horton Plains National Park",
              isExpandable: true,
              subActivities: [
                "World's End Viewpoint",
                "Baker's Falls",
                "Highland Ecosystem Trekking",
                "Endemic Flora & Fauna"
              ]
            },
            {
              name: "Blue Train Journey - Nanu Oya to Ella",
              isExpandable: true,
              subActivities: [
                "World's Most Scenic Train Ride",
                "Tea Plantation Panoramic Views",
                "Mountain Landscapes",
                "Photography Paradise"
              ]
            },
            "Nine Arch Bridge",
            "Overnight in Ella"
          ]
        },
        {
          day: "Day 06",
          title: "Ella Full Day Exploration",
          activities: [
            "Little Adam's Peak Hike",
            "Ravana Cave",
            "Ella Rock Challenging Hike",
            {
              name: "Secret Waterfall Swimming",
              isExpandable: true,
              subActivities: [
                "Hidden Waterfall Trek",
                "Natural Pool Swimming",
                "Nature Photography",
                "Refreshing Experience"
              ]
            },
            "Overnight in Ella"
          ]
        },
        {
          day: "Day 07",
          title: "Ella → Yala",
          activities: [
            "Ravana Falls",
            {
              name: "Buduruwagala Rock Temple",
              isExpandable: true,
              subActivities: [
                "Ancient Rock Carvings",
                "7 Buddha Statues - 51 feet tall",
                "Archaeological Site",
                "Peaceful Meditation Spot"
              ]
            },
            {
              name: "Yala National Park Safari",
              isExpandable: true,
              subActivities: [
                "Leopard Spotting",
                "Elephant Herds",
                "Sloth Bears",
                "Bird Watching & Wildlife Photography"
              ]
            },
            "Overnight in Yala"
          ]
        },
        {
          day: "Day 08",
          title: "Yala → Mirissa",
          activities: [
            "Tissamaharama Lake",
            "Goyambokka Beach",
            {
              name: "Dondra Lighthouse",
              isExpandable: true,
              subActivities: [
                "Southernmost Point of Sri Lanka",
                "Historic Lighthouse (162 feet tall)",
                "Panoramic Ocean Views",
                "Photography Opportunities"
              ]
            },
            "Mirissa Beach Relaxation",
            "Overnight in Mirissa"
          ]
        },
        {
          day: "Day 09",
          title: "Mirissa → Hikkaduwa",
          activities: [
            {
              name: "Whale Watching at Mirissa",
              isExpandable: true,
              subActivities: [
                "Blue Whale Sightings",
                "Dolphin Pods",
                "Marine Life Boat Tour",
                "Ocean Adventure"
              ]
            },
            "Coconut Tree Hill",
            "Weligama Beach",
            "Unawatuna Beach",
            "Galle Dutch Fort - UNESCO World Heritage Site",
            "Overnight in Hikkaduwa"
          ]
        },
        {
          day: "Day 10",
          title: "Hikkaduwa → Airport/Negombo",
          activities: [
            {
              name: "Hikkaduwa Beach Activities",
              isExpandable: true,
              subActivities: [
                "Snorkeling with Turtles",
                "Scuba Diving",
                "Surfing",
                "Beach Relaxation"
              ]
            },
            "Turtle Conservation Project",
            {
              name: "Colombo City Tour",
              isExpandable: true,
              subActivities: [
                "Gangaramaya Temple",
                "Lotus Tower",
                "Historic Fort Area",
                "Galle Face Green",
                "Old Dutch Church",
                "Independence Square",
                "Colombo National Museum",
                "Jami Ul-Alfar Mosque"
              ]
            },
            "Negombo Lagoon Tour (time permitting)",
            "Departure to Airport (Activities depend on departure time)"
          ]
        }
      ]
    },
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
            {
              name: "Colombo City Tour",
              isExpandable: true,
              subActivities: [
                "Gangaramaya Temple",
                "Historic Fort Area",
                "Galle Face Green",
                "Old Dutch Church",
                "Independence Square",
                "Colombo National Museum",
                "BMICH",
                "Kelaniya Temple",
                "Lotus Tower"
              ]
            },
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
            "Negombo Fish Market",
            "Fishing Village",
            "Hamilton Dutch Canal exploration",
            "Angurukaramulla Temple",
            "St. Mary's Church",
            "Negombo Lagoon",
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
            {
              name: "Colombo City Tour",
              isExpandable: true,
              subActivities: [
                "Gangaramaya Temple",
                "Historic Fort Area",
                "Galle Face Green",
                "Old Dutch Church",
                "Independence Square",
                "Colombo National Museum",
                "BMICH",
                "Kelaniya Temple",
                "Lotus Tower"
              ]
            },
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
            "Anuradhapura Ancient City",
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
            {
              name: "Colombo City Tour",
              isExpandable: true,
              subActivities: [
                "Gangaramaya Temple",
                "Historic Fort Area",
                "Galle Face Green",
                "Old Dutch Church",
                "Independence Square",
                "Colombo National Museum",
                "BMICH",
                "Kelaniya Temple",
                "Lotus Tower"
              ]
            },
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
            "Sigiriya Village Tour",
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
            "Gem Shop Visit",
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
            {
              name: "Turtle Conservation Project",
              isExpandable: true,
              subActivities: [
                "Turtle Conservation Education",
                "Baby Turtle Viewing",
                "Release Ceremony",
                "Multiple Turtle Species"
              ]
            },
            {
              name: "Madu River Boat Safari",
              isExpandable: true,
              subActivities: [
                "Mangrove Exploration",
                "Island Temple Visit",
                "Cinnamon Garden Visit",
                "Bird Watching"
              ]
            },
            {
              name: "Cinnamon Garden Visit",
              isExpandable: true,
              subActivities: [
                "Cinnamon Harvesting Process",
                "Traditional Methods",
                "Spice Products",
                "Guided Tour"
              ]
            },
            {
              name: "Fish Therapy",
              isExpandable: true,
              subActivities: [
                "Natural Foot Spa",
                "Therapeutic Experience",
                "Garra Rufa Fish",
                "Relaxation"
              ]
            },
            "Overnight in Colombo"
          ]
        },
        {
          day: "Day 07",
          title: "Colombo → Airport",
          activities: [
            {
              name: "Colombo City Tour",
              isExpandable: true,
              subActivities: [
                "Gangaramaya Temple",
                "Historic Fort Area",
                "Galle Face Green",
                "Old Dutch Church",
                "Independence Square",
                "Colombo National Museum",
                "BMICH",
                "Kelaniya Temple",
                "Lotus Tower"
              ]
            },
            "Shopping",
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
            "Negombo Lagoon",
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
            "Sigiriya Village Tour",
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
            "Royal Botanical Garden",
            "Gem Shop Visit",
            "Gem Museum visit",
            "Overnight in Kandy"
          ]
        },
        {
          day: "Day 05",
          title: "Kandy → Nuwara Eliya",
          activities: [
            "Tea Plantation Visit with factory visit",
            "Colonial Town exploration",
            "Tea-picking experience",
            "Overnight in Nuwara Eliya"
          ]
        },
        {
          day: "Day 06",
          title: "Nuwara Eliya → Udawalawe",
          activities: [
            "Scenic Mountain Train Ride through Central Highlands",
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
            "Cinnamon Garden Visit",
            "Fish Therapy experience",
            "Optional Madu River Boat Ride",
            "Overnight in Bentota"
          ]
        },
        {
          day: "Day 08",
          title: "Bentota → Airport",
          activities: [
            "Coastal Train Ride",
            {
              name: "Colombo City Tour",
              isExpandable: true,
              subActivities: [
                "Gangaramaya Temple",
                "Historic Fort Area",
                "Galle Face Green",
                "Old Dutch Church",
                "Independence Square",
                "Colombo National Museum",
                "BMICH",
                "Kelaniya Temple",
                "Lotus Tower"
              ]
            },
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
            "Negombo Lagoon",
            "Evening Negombo Lagoon Tour",
            "Overnight in Negombo"
          ]
        },
        {
          day: "Day 02",
          title: "Negombo → Hikkaduwa",
          activities: [
            {
              name: "Colombo City Tour",
              isExpandable: true,
              subActivities: [
                "Gangaramaya Temple",
                "Historic Fort Area",
                "Galle Face Green",
                "Old Dutch Church",
                "Independence Square",
                "Colombo National Museum",
                "BMICH",
                "Kelaniya Temple",
                "Lotus Tower"
              ]
            },
            "Major landmarks visit",
            "Turtle Conservation Project",
            "Madu River Boat Safari",
            "Cinnamon Tour",
            "Overnight in Hikkaduwa"
          ]
        },
        {
          day: "Day 03",
          title: "Hikkaduwa → Yala",
          activities: [
            "Galle Fort exploration",
            "Rumassala",
            "Japanese Peace Pagoda",
            "Unawatuna Beach",
            "Thissamaharama Ancient City",
            "Thissamaharama Lake",
            "Overnight in Yala"
          ]
        },
        {
          day: "Day 04",
          title: "Yala → Ella",
          activities: [
            {
              name: "Yala National Park Morning Safari",
              isExpandable: true,
              subActivities: [
                "Leopard Spotting",
                "Elephant Herds",
                "Bird Watching",
                "Wildlife Photography"
              ]
            },
            {
              name: "Buduruwagala Rock Temple",
              isExpandable: true,
              subActivities: [
                "Ancient Rock Carvings",
                "Buddhist Statues",
                "Historical Site",
                "Serene Atmosphere"
              ]
            },
            {
              name: "Ravana Waterfall",
              isExpandable: true,
              subActivities: [
                "Waterfall Views",
                "Natural Pool",
                "Photo Opportunities",
                "Ramayana Legend"
              ]
            },
            {
              name: "Ravana Cave (Optional)",
              isExpandable: true,
              subActivities: [
                "Ancient Cave",
                "Historical Significance",
                "Mountain Views",
                "Ramayana Story"
              ]
            },
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
            {
              name: "Blue Train Journey Ella to Nanu Oya",
              isExpandable: true,
              subActivities: [
                "Scenic Train Ride",
                "Tea Plantation Views",
                "Mountain Landscapes",
                "Photography Paradise"
              ]
            },
            {
              name: "Gregory Lake",
              isExpandable: true,
              subActivities: [
                "Boating Activities",
                "Lakeside Walking",
                "Scenic Views",
                "Relaxation"
              ]
            },
            "Nuwara Eliya walking city tour",
            "Overnight in Nuwara Eliya"
          ]
        },
        {
          day: "Day 07",
          title: "Nuwara Eliya → Kandy",
          activities: [
            {
              name: "Horton Plains National Park",
              isExpandable: true,
              subActivities: [
                "World's End",
                "Baker's Falls",
                "Highland Ecosystem",
                "Trekking"
              ]
            },
            "Tea Plantation & Factory Visit",
            "Ramboda Waterfall",
            "Kandy Cultural Show",
            "Temple of Tooth Relic",
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
            "Hiriwadunna Village Tour",
            "Village Tour with Cooking Class",
            "Traditional lunch preparation",
            "Minneriya/Kawdulla/Eco Park Wild Safari",
            "Overnight in Habarana"
          ]
        },
        {
          day: "Day 10",
          title: "Habarana → Polonnaruwa",
          activities: [
            "Polonnaruwa Ancient City exploration by bicycle or car",
            "UNESCO World Heritage Site tour",
            "Overnight in Polonnaruwa"
          ]
        },
        {
          day: "Day 11",
          title: "Polonnaruwa → Pasikuda",
          activities: [
            "Travel to East Coast",
            "Beach Leisure/Water Sports at Pasikuda",
            "Overnight in Pasikuda"
          ]
        },
        {
          day: "Day 12",
          title: "Pasikuda → Trincomalee → Nilaveli",
          activities: [
            {
              name: "Koneswaram Temple",
              isExpandable: true,
              subActivities: [
                "Ancient Hindu Temple",
                "Ocean Views",
                "Spiritual Experience",
                "Historical Architecture"
              ]
            },
            {
              name: "Pigeon Island National Park",
              isExpandable: true,
              subActivities: [
                "Snorkeling Paradise",
                "Coral Reefs",
                "Marine Life",
                "Beach Activities"
              ]
            },
            {
              name: "Fort Frederick",
              isExpandable: true,
              subActivities: [
                "Colonial Fort",
                "Historical Site",
                "Ocean Views",
                "Military Heritage"
              ]
            },
            "Overnight in Nilaveli"
          ]
        },
        {
          day: "Day 13",
          title: "Trincomalee → Dambulla",
          activities: [
            {
              name: "Nilaveli Beach Leisure",
              isExpandable: true,
              subActivities: [
                "Pristine Beach",
                "Water Activities",
                "Relaxation",
                "Crystal Clear Waters"
              ]
            },
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

  // Extract place names from activities
  const extractPlaces = (activities) => {
    const places = [];
    activities.forEach(activity => {
      const activityName = typeof activity === 'string' ? activity : activity.name;
      
      Object.keys(placeDetails).forEach(place => {
        if (activityName.includes(place) || activityName.toLowerCase().includes(place.toLowerCase())) {
          if (!places.find(p => p.name === place)) {
            places.push({
              name: place,
              image: placeDetails[place].image,
              isExpandable: typeof activity === 'object' && activity.isExpandable
            });
          }
        }
      });
    });
    return places;
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

              {packageDetails[selectedPackage.name] && (
                <div className="program-details">
                  <h3 className="text-primary mb-4">
                    <i className="fa fa-route me-2"></i>Detailed Itinerary
                  </h3>
                  
                  {packageDetails[selectedPackage.name].program.map((day, dayIndex) => {
                    const isDayExpanded = expandedDays[dayIndex];
                    
                    return (
                      <div key={dayIndex} className="day-section mb-4">
                        <div 
                          className="day-header bg-primary text-white p-3 rounded d-flex justify-content-between align-items-center"
                          style={{ cursor: 'pointer' }}
                          onClick={() => toggleDay(dayIndex)}
                        >
                          <div>
                            <h4 className="mb-1">
                              <i className="fa fa-calendar-day me-2"></i>
                              {day.day}
                            </h4>
                            <p className="mb-0 fs-6">{day.title}</p>
                          </div>
                          <button 
                            className="btn btn-light rounded-circle"
                            style={{ width: '40px', height: '40px', padding: '0' }}
                          >
                            <i className={`fa fa-${isDayExpanded ? 'minus' : 'plus'}`}></i>
                          </button>
                        </div>
                        
                        {isDayExpanded && (
                          <div className="day-content bg-light p-4 rounded-bottom">
                            <div className="places-list">
                              {day.activities.map((activity, activityIndex) => {
                                const isExpandableActivity = typeof activity === 'object' && activity.isExpandable;
                                const activityName = typeof activity === 'string' ? activity : activity.name;
                                const key = `${dayIndex}-${activityIndex}`;
                                const isExpanded = expandedActivities[key];
                                
                                const hasPlaceDetail = Object.keys(placeDetails).some(place => 
                                  activityName.includes(place) || activityName.toLowerCase().includes(place.toLowerCase())
                                );

                                if (isExpandableActivity && activity.subActivities) {
                                  return (
                                    <div key={activityIndex} className="mb-3">
                                      <div 
                                        className="place-item d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm"
                                        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                      >
                                        <div className="d-flex align-items-center flex-grow-1">
                                          <div 
                                            className="place-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                            style={{ width: '40px', height: '40px', minWidth: '40px' }}
                                          >
                                            <i className="fa fa-map-marker-alt"></i>
                                          </div>
                                          <div className="flex-grow-1">
                                            <h6 className="mb-0 fw-semibold">{activityName}</h6>
                                          </div>
                                        </div>
                                        <div className="d-flex gap-2">
                                          {hasPlaceDetail && (
                                            <button 
                                              className="btn btn-outline-primary btn-sm rounded-circle"
                                              onClick={() => handlePlaceClick(activityName)}
                                              style={{ width: '35px', height: '35px', padding: '0' }}
                                              title="View Place Details"
                                            >
                                              <i className="fa fa-info"></i>
                                            </button>
                                          )}
                                          <button 
                                            className="btn btn-outline-success btn-sm rounded-circle"
                                            onClick={() => toggleActivity(dayIndex, activityIndex)}
                                            style={{ width: '35px', height: '35px', padding: '0' }}
                                            title={isExpanded ? "Collapse" : "Expand Activities"}
                                          >
                                            <i className={`fa fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                                          </button>
                                        </div>
                                      </div>
                                      
                                      {isExpanded && (
                                        <div className="mt-2 ms-4 ps-3 border-start border-3 border-primary">
                                          {activity.subActivities.map((subActivity, subIndex) => (
                                            <div key={subIndex} className="py-2 px-3 bg-white rounded mb-2 shadow-sm">
                                              <i className="fa fa-check-circle text-success me-2"></i>
                                              <span>{subActivity}</span>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                } else if (hasPlaceDetail) {
                                  return (
                                    <div 
                                      key={activityIndex} 
                                      className="place-item d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded shadow-sm"
                                      style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                    >
                                      <div className="d-flex align-items-center">
                                        <div 
                                          className="place-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                          style={{ width: '40px', height: '40px', minWidth: '40px' }}
                                        >
                                          <i className="fa fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                          <h6 className="mb-0 fw-semibold">{activityName}</h6>
                                        </div>
                                      </div>
                                      <button 
                                        className="btn btn-outline-primary btn-sm rounded-circle"
                                        onClick={() => handlePlaceClick(activityName)}
                                        style={{ width: '35px', height: '35px', padding: '0' }}
                                        title="View Details"
                                      >
                                        <i className="fa fa-plus"></i>
                                      </button>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={activityIndex} className="mb-2 p-2 bg-white rounded">
                                      <i className="fa fa-chevron-right text-primary me-2"></i>
                                      <span>{activityName}</span>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

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
              
              <div className="text-center mt-4">
                <button 
                  onClick={() => navigate('/tours')} 
                  className="btn btn-primary btn-lg"
                >
                  <i className="fa fa-arrow-left me-2"></i>View All Tours
                </button>
              </div>
            </div>

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