import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Destination.css';

function Destination() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPackage = location.state?.package;
  const [expandedActivities, setExpandedActivities] = useState({});
  const [expandedDays, setExpandedDays] = useState({});
  const [scrollToDay, setScrollToDay] = useState(null);
  const hasScrolled = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const pageContentRef = useRef(null);

  // Restore expanded state when returning from PlaceDetails
  useEffect(() => {
    if (location.state?.expandedDays && location.state?.scrollToDay !== undefined) {
      // Coming back from PlaceDetails - restore state and scroll instantly
      setExpandedDays(location.state.expandedDays);
      setScrollToDay(location.state.scrollToDay);
    } else {
      // Normal page load - scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.state?.expandedDays, location.state?.scrollToDay]);

  // Scroll to the specific day INSTANTLY without any animation
  useEffect(() => {
    if (scrollToDay !== null && !hasScrolled.current) {
      hasScrolled.current = true;
      
      // Clear any existing timeouts
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Use a synchronous approach to instantly jump to the element
      const dayElement = document.getElementById(`day-${scrollToDay}`);
      if (dayElement) {
        // Get the element's position
        const elementPosition = dayElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2) + (dayElement.clientHeight / 2);
        
        // Disable smooth scrolling
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        
        // Instantly set the scroll position
        window.scrollTo(0, offsetPosition);
        
        // Restore smooth scrolling after a tiny delay
        scrollTimeoutRef.current = setTimeout(() => {
          document.documentElement.style.scrollBehavior = '';
          document.body.style.scrollBehavior = '';
          setScrollToDay(null); // Reset after scrolling
          hasScrolled.current = false;
        }, 10);
      } else {
        // If element not found, try again after a short delay
        scrollTimeoutRef.current = setTimeout(() => {
          const retryElement = document.getElementById(`day-${scrollToDay}`);
          if (retryElement) {
            const elementPosition = retryElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2) + (retryElement.clientHeight / 2);
            
            document.documentElement.style.scrollBehavior = 'auto';
            document.body.style.scrollBehavior = 'auto';
            window.scrollTo(0, offsetPosition);
            
            setTimeout(() => {
              document.documentElement.style.scrollBehavior = '';
              document.body.style.scrollBehavior = '';
            }, 10);
          }
          setScrollToDay(null);
          hasScrolled.current = false;
        }, 100);
      }
    }
    
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollToDay]);

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

  // Place details mapping with images - COMPREHENSIVE LIST
  const placeDetails = {
    "Pinnawala Elephant Orphanage": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Dambulla Cave Temple": {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Sigiriya Lion Rock Fortress": {
      image: "https://images.unsplash.com/photo-1588417837058-c6e485096f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Sigiriya Village Tour": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Colonial Town exploration": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Coastal Train Ride (Galle to Colombo)": {
  image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
},
    "Matale Spice Garden": {
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    "Yala National Park Morning Safari": {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Yala National Park Safari": {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Galle Fort": {
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Galle Dutch Fort - UNESCO World Heritage Site": {
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Hikkaduwa Coral Garden": {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Sea Turtle Hatchery": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Madu River Boat Safari": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Madhu River Boat Safari": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Tea Plantation Visit": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Tea Plantation & Factory Visit": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
     "Fish Therapy":{
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
    },
    "Ravana Waterfall": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Ravana Cave (Optional)": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Historic Fort Area": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Galle Face Green": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Old Dutch Church": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Independence Square": {
      image: "https://images.unsplash.com/photo-1605536968169-738c98afd7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Colombo National Museum": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Nuwara Eliya walking city tour": {
  image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
},
    "St. Mary's Church": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Negombo Lagoon Tour": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "BMICH": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Kelaniya Temple": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Peradeniya Botanical Garden": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Royal Botanical Garden": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Gregory Lake": {
  image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
},
    "Rumassala": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Japanese Peace Pagoda": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Unawatuna Beach": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Thissamaharama Ancient City": {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Thissamaharama Lake": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Minneriya/Kaudulla/Eco Park Wild Safari": {
  image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
},
    "Buduruwagala Rock Temple": {
      image: "https://images.unsplash.com/photo-1596428669978-1a27c8c7b5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Little Adam's Peak": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Horton Plains National Park": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Ramboda Waterfall": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Kandy Cultural Show": {
      image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Temple of Tooth Relic": {
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
   
    // NEW ADDITIONS
    "Matale Hindu Temple": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Nalanda Gedige Temple": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Minneriya/Kawdulla/Eco Park Wild Safari": {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Beach Leisure/Water Sports at Pasikuda": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Tea Factory & Tea Plantation Tour": {
  image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
},
    "Koneswaram Temple": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Polonnaruwa Ancient Kingdom Exploration": {
  image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
},
    "Pigeon Island National Park": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Fort Frederick": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Nilaveli Beach Leisure": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    // DAY 08 PLACES
    "Tissamaharama Lake": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Goyambokka Beach": {
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Train Journey": {
  image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
},
    "Gem Museum visit":{

    },
    "Dondra Lighthouse": {
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Horton Plains National Park": {
  image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
},
 "Cinnamon Garden Visit": {
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Mirissa Beach Relaxation": {
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    // DAY 09 PLACES
    "Whale Watching at Mirissa": {
      image: "https://images.unsplash.com/photo-1593698350977-6e32f9b7f4b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Coconut Tree Hill": {
      image: "https://images.unsplash.com/photo-1596428669978-1a27c8c7b5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "Weligama Beach": {
      image: "https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  };

  const handlePlaceClick = (placeName, dayIndex) => {
    navigate('/place-details', { 
      state: { 
        placeName,
        fromDestination: true,
        expandedDays: expandedDays,
        dayIndex: dayIndex,
        package: selectedPackage  // Add this line to preserve the package
      } 
    });
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
    "Polonnaruwa Ancient Kingdom Exploration",
    "Minneriya/Kaudulla/Eco Park Wild Safari",
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
    "Tea Factory & Tea Plantation Tour",
    "Walking City Tour of Nuwara Eliya",
    "Overnight in Nuwara Eliya"
  ]
},
        {
  day: "Day 05",
  title: "Nuwara Eliya → Ella",
  activities: [
    "Horton Plains National Park",
    "Train Journey",
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
              isExpandable: false, // Changed to false to remove sub-activities
              subActivities: [] // Empty sub-activities array
            },
            "Yala National Park Safari",
              
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
            "Negombo Lagoon Tour",
            "Departure to Airport (Activities depend on departure time)"
          ]
        }
      ]
    },
    "EXPLORE SRI LANKA - 04 DAYS 03 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Dambulla",
          activities: [
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
    "EXPLORE SRI LANKA - 05 DAYS 04 NIGHTS": {
      program: [
        {
          day: "Day 01",
          title: "Airport → Negombo",
          activities: [
            "Negombo Fish Market / Fishing Village",
            "Hamilton Dutch Canal – Explore Dutch Colonial history",
            "Angurukaramulla Temple",
            "St. Mary's Church",
            "Overnight in Negombo (First day activities depend on arrival time)"
          ]
        },
        {
          day: "Day 02",
          title: "Negombo → Dambulla",
          activities: [
            "Short break at a hotel during the journey",
            "Pinnawala Elephant Orphanage",
            "Dambulla Cave Temple – UNESCO World Heritage Site",
            "Overnight in Dambulla"
          ]
        },
        {
          day: "Day 03",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress",
            "Sigiriya Village Tour",
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
                "Lotus Tower",
                "Historic Fort Area",
                "Galle Face Green",
                "Old Dutch Church",
                "Independence Square",
                "Colombo National Museum"
              ]
            },
            "Departure to Airport (Last day activities depend on departure time)"
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
            "Sea Turtle Hatchery",
            "Madu River Boat Safari",
            "Cinnamon Garden Visit",
            "Fish Therapy",
              
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
           "Negombo Fish Market / Fishing Village",
            "Hamilton Dutch Canal – Explore Dutch Colonial history",
            "Angurukaramulla Temple",
            "St. Mary's Church",
            "Overnight in Negombo (First day activities depend on arrival time)",
            "Negombo Lagoon Tour(Optional)",
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
            "Sea Turtle Hatchery",
            "Madhu River Boat Safari",
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
            "Yala National Park Morning Safari",
            {
              name: "Buduruwagala Rock Temple",
              isExpandable: false, // Changed to false to remove sub-activities
              subActivities: [] // Empty sub-activities array
            },
            {
              name: "Ravana Waterfall",
              isExpandable: false, // Changed to false to remove sub-activities
              subActivities: [] // Empty sub-activities array
            },
            {
              name: "Ravana Cave (Optional)",
              isExpandable: false, // Changed to false to remove sub-activities
              subActivities: [] // Empty sub-activities array
            },
            "Overnight in Ella"
          ]
        },
        {
          day: "Day 05",
          title: "Ella Full Day",
          activities: [
            "Little Adam's Peak",
            "Nine Arch Bridge photography",
            "Ella Rock challenging hike",
            "Secret Waterfall swimming (Optional) ",
            "Overnight in Ella"
          ]
        },
        {
  day: "Day 06",
  title: "Ella → Nuwara Eliya",
  activities: [
   "Train Journey",
      
    "Gregory Lake",
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
              isExpandable: false, // Changed to false to remove sub-activities
              subActivities: [] // Empty sub-activities array
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
            "Overnight in Habarana"
          ]
        },
        {
          day: "Day 09",
          title: "Habarana → Sigiriya → Habarana",
          activities: [
            "Sigiriya Lion Rock Fortress climb",
            "Village Tour",
            "Minneriya/Kawdulla/Eco Park Wild Safari",
            "Overnight in Habarana"
          ]
        },
        {
          day: "Day 10",
          title: "Habarana → Polonnaruwa",
          activities: [
            "Polonnaruwa Ancient City",
            "Overnight in Polonnaruwa"
          ]
        },
        {
          day: "Day 11",
          title: "Polonnaruwa → Pasikuda",
          activities: [
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
            },
            {
              name: "Pigeon Island National Park",
              isExpandable: true,
            },
            {
              name: "Fort Frederick",
              isExpandable: true,
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
            },
            "Overnight in Dambulla"
          ]
        },
        {
          day: "Day 14",
          title: "Dambulla → Airport",
          activities: [
            "Dambulla Cave Temple",
            "Departure"
          ]
        }
      ]
    }
  };

  // Extract place names from activities - IMPROVED FUNCTION
  const extractPlaces = (activities) => {
    const places = [];
    activities.forEach(activity => {
      const activityName = typeof activity === 'string' ? activity : activity.name;
      
      // Direct exact match first
      if (placeDetails[activityName]) {
        if (!places.find(p => p.name === activityName)) {
          places.push({
            name: activityName,
            image: placeDetails[activityName].image,
            isExpandable: typeof activity === 'object' && activity.isExpandable
          });
        }
      } else {
        // Try to find a partial match for activity names that might have slight variations
        Object.keys(placeDetails).forEach(place => {
          // Check if the activity contains the place name or vice versa (case-insensitive)
          if (activityName.toLowerCase().includes(place.toLowerCase()) || 
              place.toLowerCase().includes(activityName.toLowerCase())) {
            if (!places.find(p => p.name === place)) {
              places.push({
                name: place,
                image: placeDetails[place].image,
                isExpandable: typeof activity === 'object' && activity.isExpandable
              });
            }
          }
        });
      }
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

  // Check if an activity is part of the Colombo City Tour
  const isColomboCityTourPlace = (activityName) => {
    const colomboPlaces = [
      "Gangaramaya Temple",
      "Historic Fort Area",
      "Galle Face Green",
      "Old Dutch Church",
      "Independence Square",
      "Colombo National Museum",
      "BMICH",
      "Kelaniya Temple",
      "Lotus Tower"
    ];
    
    return colomboPlaces.includes(activityName);
  };

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header"
      style={{
    backgroundImage: 'linear-gradient(rgba(20, 20, 31, 0.7), rgba(20, 20, 31, 0.7)), url("https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200")',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    imageRendering: '-webkit-optimize-contrast',
    filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden'
  }}
>
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
        <div className="container py-5" ref={pageContentRef}>
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-header mb-4">
  <img
    src={selectedPackage.image}
    alt={selectedPackage.name}
    className="img-fluid rounded w-100 mb-4"
style={{ 
  height: '490px', 
  width: '100%',
  objectFit: 'cover', 
  backgroundColor: '#f8f9fa' 
}}
/>
                <div className="tour-title-section">
<h1 className="display-5 fw-bold text-primary mb-3" style={{ textTransform: 'capitalize' }}>{selectedPackage.name.toLowerCase()}</h1>                  <div className="tour-meta d-flex flex-wrap gap-4 mb-4">
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
                      <span className="fw-semibold">Group Size:</span> 1-15 people
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
                      <div key={dayIndex} className="day-section mb-4" id={`day-${dayIndex}`}>
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
                                
                                // Check if this activity has place details
                                const hasPlaceDetail = Object.keys(placeDetails).some(place => 
                                  activityName.toLowerCase().includes(place.toLowerCase()) || 
                                  place.toLowerCase().includes(activityName.toLowerCase())
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
                                              onClick={() => handlePlaceClick(activityName, dayIndex)}
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
                                            <div key={subIndex} className="py-2 px-3 bg-white rounded mb-2 shadow-sm d-flex justify-content-between align-items-center">
                                              <span>
                                                <i className="fa fa-check-circle text-success me-2"></i>
                                                {subActivity}
                                              </span>
                                              {/* Add + button for Colombo City Tour sub-activities */}
                                              {activityName === "Colombo City Tour" && isColomboCityTourPlace(subActivity) && (
                                                <button 
                                                  className="btn btn-outline-primary btn-sm rounded-circle ms-2"
                                                  onClick={() => handlePlaceClick(subActivity, dayIndex)}
                                                  style={{ width: '30px', height: '30px', padding: '0' }}
                                                  title="View Place Details"
                                                >
                                                  <i className="fa fa-plus"></i>
                                                </button>
                                              )}
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
                                        onClick={() => handlePlaceClick(activityName, dayIndex)}
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
                        <i className="fa fa-phone me-1"></i> +94 74 234 3484<br/>
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