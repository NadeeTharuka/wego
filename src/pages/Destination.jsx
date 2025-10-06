import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Destination.css';

function Destination() {
  const location = useLocation();
  const selectedPackage = location.state?.package;

  // Function to get appropriate image based on location
  const getDayImage = (dayTitle, activities) => {
    const title = dayTitle.toLowerCase();
    const acts = activities.join(' ').toLowerCase();
    
    if (title.includes('negombo') || acts.includes('negombo')) {
      return 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('dambulla') || acts.includes('dambulla')) {
      return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('sigiriya') || acts.includes('sigiriya')) {
      return 'https://images.unsplash.com/photo-1588417837058-c8884bfb5b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('kandy') || acts.includes('kandy')) {
      return 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('nuwara eliya') || acts.includes('nuwara eliya')) {
      return 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('ella') || acts.includes('ella')) {
      return 'https://images.unsplash.com/photo-1586539195093-e683155f9b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('yala') || acts.includes('yala') || acts.includes('safari')) {
      return 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('galle') || acts.includes('galle')) {
      return 'https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('colombo') || acts.includes('colombo')) {
      return 'https://images.unsplash.com/photo-1608482056615-c6e485096f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('hikkaduwa') || acts.includes('hikkaduwa')) {
      return 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('bentota') || acts.includes('bentota')) {
      return 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('anuradhapura') || acts.includes('anuradhapura')) {
      return 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('polonnaruwa') || acts.includes('polonnaruwa')) {
      return 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('mirissa') || acts.includes('mirissa')) {
      return 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('udawalawe') || acts.includes('udawalawe')) {
      return 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('tissamaharama') || acts.includes('tissamaharama')) {
      return 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('habarana') || acts.includes('habarana')) {
      return 'https://images.unsplash.com/photo-1563551379-5d4d8b197e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else if (title.includes('pasikuda') || title.includes('trincomalee') || title.includes('nilaveli') || acts.includes('beach')) {
      return 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    } else {
      return 'https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
  };

  // Comprehensive package details based on your documents
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
          ],
          details: {
            "Pinnawala Elephant Orphanage": "Pinnawala Elephant Orphanage is where you can find the largest herd of captive elephants in the world. Established in 1975, it is a popular breeding ground for wild Asian elephants working towards the protection and welfare of these wild mammals. Orphaned and unweaned calves and wounded adults spotted in the forests of Sri Lanka are taken in here for proper care.",
            "Dambulla Cave Temple": "The Dambulla Cave Temples, located near the geographical center of the island, are a significant cultural treasure. Dating back to the 1st century BCE, these caves are renowned for their exquisite Sinhala art and sculpture. The complex includes five caves beneath a vast overhanging rock, with intricately painted ceilings and images of Lord Buddha, Bodhisattvas, and various deities."
          }
        },
        {
          day: "Day 02",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress",
            "Sigiriya Village Tour with Traditional Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Sigiriya Lion Rock": "Sigiriya, often referred to as the 'Lion Rock,' is an ancient rock fortress and one of Sri Lanka's most iconic landmarks. Built in the 5th century AD by King Kashyapa I, it served as a royal palace atop a 200-meter rock for strategic defense. The rock features vivid frescoes of the 'Sigiriya Damsels' and the polished Mirror Wall.",
            "Village Tour": "Village tours in Sigiriya offer a glimpse into traditional Sri Lankan rural life. These tours typically include a bullock cart ride, a boat ride on a serene lake, and a walk-through paddy fields and local farms. Visitors can experience traditional cooking and interact with local villagers.",
            "Matale Spice Garden": "The Matale Spice Garden near Kandy is known for its rich variety of spices, including cinnamon, pepper, cloves, nutmeg, cardamom, vanilla, and turmeric. Visitors can enjoy guided tours, learn about spice cultivation and uses, and purchase fresh spices and Ayurvedic products."
          }
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
          ],
          details: {
            "Temple of the Sacred Tooth Relic": "The Temple of the Sacred Tooth Relic, or Dalada Maligawa, in Kandy is one of Sri Lanka's most significant religious and cultural sites, housing the revered tooth relic of the Buddha. This sacred relic has been enshrined in Kandy since the 16th century and showcases exquisite Kandyan architecture.",
            "Cultural Dance Show": "Cultural shows in Sri Lanka showcase the island's rich traditions through vibrant performances of dance, music, and rituals. Key highlights include Kandyan dance, known for its elegant movements and elaborate costumes, and Low Country dance, featuring energetic performances with striking masks.",
            "Gem Shops": "Sri Lanka is known as the 'Gem Island,' especially famous for its Ceylon Blue Sapphires. These shops often provide certificates of authenticity and sometimes allow visitors to see the cutting and polishing process."
          }
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
          ],
          details: {
            "Colombo City Tour": "Colombo, the capital of Sri Lanka, is a vibrant city that blends modernity with rich history. It serves as the country's commercial and cultural hub, offering a mix of colonial architecture, bustling markets, and contemporary skyscrapers. Key attractions include the Galle Face Green, the Gangaramaya Temple, and the historic Fort area."
          }
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
          ],
          details: {
            "Negombo": "Negombo is a quiet town on Sri Lanka's west coast, just 10 km from Bandaranaike International Airport. Known for its white sandy beaches and turquoise waters, it's a popular beach resort with a rich history in spice and seafood trade. The town reflects Dutch and Portuguese influences.",
            "Hamilton Dutch Canal": "Originally built by the Dutch in the 17th century to transport cinnamon, coconuts, and salt, the Hamilton Canal offers boat tours through narrow channels shaded by dense mangroves, where visitors can spot various bird species and monitor lizards."
          }
        },
        {
          day: "Day 02",
          title: "Negombo → Dambulla",
          activities: [
            "Short break at hotel during journey",
            "Pinnawala Elephant Orphanage",
            "Dambulla Cave Temple - UNESCO World Heritage Site",
            "Overnight in Dambulla"
          ],
          details: {
            "Pinnawala": "Established in 1975, this is where you can find the largest herd of captive elephants in the world. It's a popular breeding ground for wild Asian elephants, taking care of orphaned and wounded elephants from Sri Lankan forests.",
            "Dambulla": "Dating back to the 1st century BCE, these caves are renowned for their exquisite Sinhala art and sculpture, featuring intricately painted ceilings and images of Lord Buddha, Bodhisattvas, and various deities."
          }
        },
        {
          day: "Day 03",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress - UNESCO Site",
            "Sigiriya Village Tour with Traditional Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Sigiriya": "Built in the 5th century AD by King Kashyapa I, this ancient rock fortress served as a royal palace atop a 200-meter rock. The site features the Lion's Gate, vivid frescoes of the 'Sigiriya Damsels,' and advanced hydraulic engineering in the surrounding water gardens."
          }
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
          ],
          details: {
            "Dalada Maligawa": "Part of the royal palace complex, this temple showcases exquisite Kandyan architecture with its golden canopy, intricate woodwork, and the iconic Paththirippuwa. Daily rituals enhanced by traditional drumming create a deeply spiritual atmosphere."
          }
        },
        {
          day: "Day 05",
          title: "Colombo → Airport",
          activities: [
            "Colombo City Tour",
            "Major attractions visit",
            "Shopping opportunities",
            "Departure to Airport"
          ],
          details: {
            "Colombo": "The capital offers a dynamic urban experience with colonial architecture, contemporary skyscrapers, diverse dining scene, luxury shopping, and lively nightlife, all with scenic coastal views."
          }
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
          ],
          details: {
            "Anuradhapura": "One of the ancient capitals of Sri Lanka, founded in the 4th century BCE. It was the first capital and the center of Theravada Buddhism for many centuries, featuring well-preserved ruins of an early Sri Lankan civilization.",
            "Sri Maha Bodhiya": "Home to a sacred fig tree believed to be a direct descendant of the original Bodhi tree under which Buddha attained enlightenment. Planted in 288 BCE, it attracts thousands of pilgrims yearly.",
            "Ruwanwelisaya": "Built by King Dutugemunu in the 2nd century BCE, standing about 55 meters tall. It's one of the largest stupas in the world and is believed to house relics of the Buddha."
          }
        },
        {
          day: "Day 02",
          title: "Anuradhapura → Polonnaruwa → Sigiriya",
          activities: [
            "Explore Polonnaruwa Ancient City - UNESCO World Heritage Site",
            "Gal Vihara Rock Temple",
            "Royal Palace ruins",
            "Overnight in Sigiriya"
          ],
          details: {
            "Polonnaruwa": "Sri Lanka's second capital that flourished under King Parakramabahu I during the 12th century. Key attractions include the Gal Vihara with four magnificent Buddha statues, the Royal Palace, and intricate stone carvings at the Rankot Vihara."
          }
        },
        {
          day: "Day 03",
          title: "Sigiriya → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress - UNESCO Site",
            "Sigiriya Village Tour with Traditional Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Sigiriya Heritage": "A well-preserved example of ancient urban planning, showcasing the sophistication of Sri Lankan architecture and art, providing insight into King Kashyapa's political history."
          }
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
          ],
          details: {
            "Cultural Heritage": "Experience the annual Esala Perahera traditions, grand processions featuring decorated elephants and cultural performances that highlight the temple's importance."
          }
        },
        {
          day: "Day 05",
          title: "Colombo → Airport",
          activities: [
            "Colombo City Tour",
            "Historical and cultural sites",
            "Departure to Airport"
          ],
          details: {
            "Final Experience": "Complete your ancient cities journey with modern Colombo's blend of history and contemporary life."
          }
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
          ],
          details: {
            "Journey Start": "Begin your comprehensive Sri Lanka experience with cultural and wildlife encounters."
          }
        },
        {
          day: "Day 02",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress",
            "Village Tour with Traditional Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Cultural Immersion": "Experience authentic rural life and ancient royal history in one day."
          }
        },
        {
          day: "Day 03",
          title: "Kandy → Nuwara Eliya",
          activities: [
            "Temple of the Sacred Tooth Relic",
            "Kandyan Cultural Dance Show",
            "Journey to Hill Country",
            "Overnight in Nuwara Eliya"
          ],
          details: {
            "Hill Country": "Travel to 'Little England' known for its cool climate, colonial buildings, and tea plantations."
          }
        },
        {
          day: "Day 04",
          title: "Nuwara Eliya → Ella → Tissamaharama",
          activities: [
            "Gregory Park and Lake",
            "Ambewela Farm - 'Little New Zealand'",
            "Nine Arch Bridge in Ella",
            "Overnight in Tissamaharama"
          ],
          details: {
            "Nine Arch Bridge": "This architectural marvel spans 91 meters and stands 24 meters high, constructed entirely of brick, stone, and cement without steel. Trains passing over create a picturesque scene.",
            "Ambewela Farm": "Known as 'Little New Zealand' for its lush green fields and dairy farming, located at over 6,000 feet above sea level."
          }
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
          ],
          details: {
            "Yala Safari": "Sri Lanka's most visited national park, known for its dense leopard population and diverse wildlife including elephants, sloth bears, crocodiles, and numerous bird species.",
            "Galle Fort": "One of the best-preserved colonial-era forts in Asia, originally built by Portuguese and expanded by Dutch, showcasing European architecture and South Asian culture."
          }
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
          ],
          details: {
            "Madu River": "Scenic journey through mangroves and waterways, exploring rich biodiversity including various birds and aquatic life, visiting small islands with temples and cinnamon plantations.",
            "Turtle Conservation": "Learn about endangered sea turtle protection efforts and witness conservation work at local hatcheries."
          }
        },
        {
          day: "Day 07",
          title: "Colombo → Airport",
          activities: [
            "Colombo City Tour and Shopping",
            "Final cultural experiences",
            "Departure to Airport"
          ],
          details: {
            "Conclusion": "Complete your comprehensive Sri Lanka journey with urban experiences and last-minute shopping."
          }
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
          ],
          details: {
            "Comprehensive Start": "Begin with coastal culture and colonial heritage exploration."
          }
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
          ],
          details: {
            "Wildlife & Culture": "Combine marine ecosystems, elephant conservation, and ancient Buddhist art."
          }
        },
        {
          day: "Day 03",
          title: "Dambulla → Kandy",
          activities: [
            "Sigiriya Lion Rock Fortress",
            "Village Tour with cultural immersion",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Ancient & Rural": "Experience royal history and authentic village life."
          }
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
          ],
          details: {
            "Cultural Capital": "Deep dive into Sri Lanka's cultural and spiritual heart with botanical wonders."
          }
        },
        {
          day: "Day 05",
          title: "Kandy → Nuwara Eliya",
          activities: [
            "Tea Plantation Tour with factory visit",
            "Colonial Town exploration",
            "Tea-picking experience",
            "Overnight in Nuwara Eliya"
          ],
          details: {
            "Tea Heritage": "Discover Ceylon tea's history from plantation to cup, experiencing British colonial influence."
          }
        },
        {
          day: "Day 06",
          title: "Nuwara Eliya → Udawalawe",
          activities: [
            "Scenic Mountain Train Ride",
            "Udawalawe Safari - Wildlife conservation education",
            "Overnight in Udawalawe"
          ],
          details: {
            "Mountain to Wildlife": "Journey from misty mountains to wildlife conservation areas via scenic railway."
          }
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
          ],
          details: {
            "Coast & Conservation": "Combine Dutch colonial history with marine conservation and spice heritage."
          }
        },
        {
          day: "Day 08",
          title: "Bentota → Airport",
          activities: [
            "Coastal Train Ride experience",
            "Colombo City Tour",
            "Final cultural and shopping experiences",
            "Departure to Airport"
          ],
          details: {
            "Grand Finale": "Complete your comprehensive journey with the famous coastal railway and urban experiences."
          }
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
          ],
          details: {
            "Gentle Start": "Begin your grand adventure with relaxation and lagoon exploration."
          }
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
          ],
          details: {
            "Urban to Coastal": "Experience capital city highlights before moving to beach conservation areas."
          }
        },
        {
          day: "Day 03",
          title: "Hikkaduwa → Yala",
          activities: [
            "Galle Dutch Fort exploration",
            "Rumassala Japanese Peace Pagoda",
            "Unawatuna Beach",
            "Tissamaharama Ancient City and Lake",
            "Overnight in Yala"
          ],
          details: {
            "Heritage Coast": "Combine Dutch colonial architecture, Buddhist peace symbols, and ancient kingdoms."
          }
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
          ],
          details: {
            "Wildlife to Mountains": "From leopard spotting to ancient rock carvings and mythical caves."
          }
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
          ],
          details: {
            "Adventure Day": "Full day of hiking, photography, and natural pool swimming in scenic hill country."
          }
        },
        {
          day: "Day 06",
          title: "Ella → Nuwara Eliya",
          activities: [
            "Famous Blue Train journey Ella to Nanu Oya",
            "Gregory Lake activities",
            "Nuwara Eliya walking city tour",
            "Overnight in Nuwara Eliya"
          ],
          details: {
            "Scenic Railway": "Experience one of the world's most scenic train rides through tea plantations and mountains."
          }
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
          ],
          details: {
            "Highlands to Cultural Capital": "From World's End cliff to sacred tooth relic."
          }
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
          ],
          details: {
            "Temple Trail": "Multi-religious temple exploration from Hindu to Buddhist sites."
          }
        },
        {
          day: "Day 09",
          title: "Habarana → Sigiriya → Habarana",
          activities: [
            "Sigiriya Rock Fortress climb",
            "Hiriwadunna Village Tour with Cooking Class",
            "Traditional lunch preparation",
            "Minneriya/Kaudulla/Eco Park Safari",
            "Overnight in Habarana"
          ],
          details: {
            "Royal & Rural": "Ancient royal fortress combined with authentic village life and elephant gathering."
          }
        },
        {
          day: "Day 10",
          title: "Habarana → Polonnaruwa",
          activities: [
            "Polonnaruwa Ancient Kingdom exploration by bicycle or car",
            "UNESCO World Heritage Site tour",
            "Overnight in Polonnaruwa"
          ],
          details: {
            "Ancient Kingdom": "Explore the second capital's magnificent ruins and archaeological treasures."
          }
        },
        {
          day: "Day 11",
          title: "Polonnaruwa → Pasikuda",
          activities: [
            "Travel to East Coast",
            "Beach leisure and water sports at Pasikuda",
            "Overnight in Pasikuda"
          ],
          details: {
            "East Coast Beaches": "Experience pristine eastern beaches with crystal-clear waters."
          }
        },
        {
          day: "Day 12",
          title: "Pasikuda → Trincomalee → Nilaveli",
          activities: [
            "Koneswaram Temple",
            "Pigeon Island National Park",
            "Fort Frederick",
            "Overnight in Nilaveli"
          ],
          details: {
            "Ancient Port": "Explore one of Asia's finest natural harbors with Hindu temples and marine parks."
          }
        },
        {
          day: "Day 13",
          title: "Trincomalee → Dambulla",
          activities: [
            "Leisure at Nilaveli Beach",
            "Return journey preparation",
            "Overnight in Dambulla"
          ],
          details: {
            "Beach Relaxation": "Final beach day before returning to cultural triangle."
          }
        },
        {
          day: "Day 14",
          title: "Dambulla → Airport",
          activities: [
            "Final Dambulla Cave Temple visit",
            "Journey to airport",
            "Departure"
          ],
          details: {
            "Grand Conclusion": "Complete your comprehensive 14-day Sri Lankan adventure."
          }
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

              {/* Detailed Itinerary with Images */}
              {packageDetails[selectedPackage.name] && (
                <div className="program-details">
                  <h3 className="text-primary mb-4">
                    <i className="fa fa-route me-2"></i>Detailed Itinerary
                  </h3>
                  
                  {packageDetails[selectedPackage.name].program.map((day, index) => (
                    <div key={index} className="day-section mb-4">
                      <div className="day-header bg-primary text-white p-3 rounded-top position-relative" style={{ overflow: 'hidden' }}>
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h4 className="mb-1">
                              <i className="fa fa-calendar-day me-2"></i>
                              {day.day}
                            </h4>
                            <p className="mb-0 fs-6">{day.title}</p>
                          </div>
                          <div className="col-md-4 text-end">
                            <img 
                              src={getDayImage(day.title, day.activities)} 
                              alt={day.day}
                              className="rounded shadow-sm"
                              style={{ 
                                width: '120px', 
                                height: '80px', 
                                objectFit: 'cover',
                                border: '3px solid white'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="day-content bg-light p-4 rounded-bottom">
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

                        {/* Place Details */}
                        {Object.entries(day.details).map(([place, description]) => (
                          <div key={place} className="place-details mb-3">
                            <h6 className="text-primary fw-bold">
                              <i className="fa fa-map-marker-alt me-2"></i>{place}
                            </h6>
                            <p className="text-muted" style={{ whiteSpace: 'pre-line' }}>
                              {description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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