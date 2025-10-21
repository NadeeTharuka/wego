import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PlaceDetails.css';

function PlaceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const placeName = location.state?.placeName;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allPlaceDetails = {
    "Colombo City Tour": {
      image: "https://images.unsplash.com/photo-1608482056615-c6e485096f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Colombo, the capital of Sri Lanka, is a vibrant city that blends modernity with rich history. It serves as the country's commercial and cultural hub, offering a mix of colonial architecture, bustling markets, and contemporary skyscrapers. Key attractions include the Galle Face Green, the Gangaramaya Temple, and the historic Fort area. Colombo is also known for its diverse dining scene, luxury shopping, and lively nightlife. The city's coastal location provides scenic views and easy access to nearby beaches. Colombo is a gateway to exploring the rest of Sri Lanka, offering a dynamic urban experience.",
      highlights: [
        "Galle Face Green promenade",
        "Colonial architecture",
        "Bustling markets and shopping",
        "Diverse dining scene",
        "Contemporary skyscrapers",
        "Coastal views"
      ]
    },
    "Gangaramaya Temple": {
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Gangaramaya Temple, located in Colombo, Sri Lanka, is a vibrant Buddhist temple known for its blend of modern and traditional architecture. Founded in the 19th century, it is a major cultural and religious site, featuring a stunning collection of relics, sculptures, and artifacts. The temple complex includes a museum, a library, and a peaceful garden, making it a popular destination for both spiritual seekers and tourists. Its unique architectural style and rich history make Gangaramaya a must-visit landmark in Colombo.",
      highlights: [
        "Blend of modern and traditional architecture",
        "Museum with extensive collection",
        "Peaceful garden setting",
        "19th century heritage",
        "Buddhist relics and sculptures",
        "Cultural significance"
      ]
    },
    "Pinnawala Elephant Orphanage": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Pinnawala Elephant Orphanage is where you can find the largest herd of captive elephants in the world. Established in 1975, it is a popular breeding ground for wild Asian elephants working towards the protection and welfare of these wild mammals. Orphaned and unweaned calves and wounded adults spotted in the forests of Sri Lanka are taken in here for proper care. Here you can take a closer look at the elephants who freely roam on the premises, learn elephant behavioral patterns, and get to know the ways of mahouts. Located amidst the major tourist destinations of the country, a visit to this elephant park is much more convenient and worth your time.",
      highlights: [
        "Largest herd of captive elephants",
        "Established in 1975",
        "Breeding and conservation center",
        "Elephant bathing sessions",
        "Learn about mahouts",
        "Close interaction with elephants"
      ]
    },
    "Dambulla Cave Temple": {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "The Dambulla Cave Temples, located near the geographical center of the island, are a significant cultural treasure. Dating back to the 1st century BCE, these caves are renowned for their exquisite Sinhala art and sculpture. The complex includes five caves beneath a vast overhanging rock, with intricately painted ceilings and images of Lord Buddha, Bodhisattvas, and various deities. These caves were developed during the Anuradhapura and Polonnaruwa periods and are among the most impressive cave temples in Sri Lanka. Visitors to Dambulla can also explore the nearby ironwood forest, rose quartz mountain, and a megalithic cemetery.",
      highlights: [
        "UNESCO World Heritage Site",
        "Dating back to 1st century BCE",
        "Five caves with Buddhist art",
        "Intricately painted ceilings",
        "Ancient Sinhala sculptures",
        "Historical significance"
      ]
    },
    "Sigiriya Lion Rock Fortress": {
      image: "https://images.unsplash.com/photo-1588417837058-c8884bfb5b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Sigiriya, often referred to as the 'Lion Rock,' is an ancient rock fortress and one of Sri Lanka's most iconic landmarks. Built in the 5th century AD by King Kashyapa I, it served as a royal palace atop a 200-meter rock for strategic defense. After his death, the site was abandoned as a royal residence and later used as a Buddhist monastery until the 14th century. Sigiriya's architectural highlights include the Lion's Gate, once a grand entrance shaped like a lion, now marked by its remaining paws. The rock features vivid frescoes of the 'Sigiriya Damsels' and the polished Mirror Wall, inscribed with ancient visitors' writings. The surrounding water gardens showcase advanced hydraulic engineering.",
      highlights: [
        "UNESCO World Heritage Site",
        "5th century royal palace",
        "200-meter rock fortress",
        "Famous Lion's Gate",
        "Ancient frescoes",
        "Advanced hydraulic systems"
      ]
    },
    "Sigiriya Village Tour": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Village tours in Sigiriya offer a glimpse into traditional Sri Lankan rural life. These tours typically include a bullock cart ride, a boat ride on a serene lake, and a walk-through paddy fields and local farms. Visitors can experience traditional cooking, visit a village home, and interact with local villagers, learning about their customs and daily activities. The tours provide an authentic cultural experience, set against the backdrop of Sigiriya's natural beauty.",
      highlights: [
        "Bullock cart ride",
        "Traditional cooking class",
        "Boat ride on village lake",
        "Walk through paddy fields",
        "Village home visit",
        "Cultural interaction"
      ]
    },
    "Matale Spice Garden": {
      image: "https://images.unsplash.com/photo-1596040033229-a0b3b83f6258?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "The Matale Spice Garden in Sri Lanka, located near Kandy, is a popular tourist spot known for its rich variety of spices, including cinnamon, pepper, cloves, nutmeg, cardamom, vanilla, and turmeric. Visitors can enjoy guided tours, where they learn about spice cultivation and uses, see demonstrations, and purchase fresh spices and Ayurvedic products. The gardens are surrounded by lush hills and are close to other attractions like the Aluvihare Rock Temple and the Knuckles Mountain Range.",
      highlights: [
        "Variety of spices",
        "Guided cultivation tours",
        "Spice demonstrations",
        "Ayurvedic products",
        "Fresh spice purchases",
        "Scenic hillside location"
      ]
    },
    "Temple of the Sacred Tooth Relic": {
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "The Temple of the Sacred Tooth Relic, or Dalada Maligawa, in Kandy is one of Sri Lanka's most significant religious and cultural sites, housing the revered tooth relic of the Buddha. This sacred relic, symbolizing both spiritual and political authority, has been enshrined in Kandy since the 16th century and is closely associated with the Sinhalese monarchy. The temple, part of the royal palace complex, showcases exquisite Kandyan architecture, with its golden canopy, intricate woodwork, and the iconic Paththirippuwa. Daily rituals and ceremonies, enhanced by traditional drumming and dancing, create a deeply spiritual atmosphere.",
      highlights: [
        "UNESCO World Heritage Site",
        "Sacred tooth relic of Buddha",
        "16th century heritage",
        "Kandyan architecture",
        "Daily rituals and ceremonies",
        "Annual Esala Perahera festival"
      ]
    },
    "Kandyan Cultural Dance Show": {
      image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Cultural shows in Sri Lanka showcase the island's rich traditions through vibrant performances of dance, music, and rituals. Key highlights include Kandyan dance, known for its elegant movements and elaborate costumes, and Low Country dance, featuring energetic performances with striking masks. Fire dancing and fire walking add dramatic flair, while folk dances and puppet shows depict rural life and folklore. These shows are most popular in Kandy, Colombo, and Sigiriya, offering tourists a lively glimpse into Sri Lanka's cultural heritage.",
      highlights: [
        "Traditional Kandyan dance",
        "Elaborate costumes",
        "Fire dancing performance",
        "Traditional drumming",
        "Folk dances",
        "Cultural storytelling"
      ]
    },
    "Lotus Tower": {
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "The Lotus Tower, located in Colombo, Sri Lanka, is a striking telecommunications and observation tower, and it holds the title of the tallest structure in the country, standing at 350 meters (1,150 feet). Completed in 2019 after years of construction, the tower is designed in the shape of a lotus flower, symbolizing purity and enlightenment. The tower functions as a key hub for broadcasting and telecommunications, while also offering a revolving restaurant, an observation deck, and conference halls. One of the most captivating aspects is its pixel bloom—a dazzling light display that transforms the tower at night with vibrant LED lighting creating a blooming lotus effect.",
      highlights: [
        "Tallest structure in Sri Lanka",
        "350 meters tall",
        "Lotus flower design",
        "Observation deck",
        "Revolving restaurant",
        "Night light show"
      ]
    },
    "Negombo Fish Market": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Negombo Fish Market, locally known as 'Lellama,' is one of the busiest and most colorful markets in Sri Lanka. At dawn, fishermen unload their fresh catch—tuna, prawns, crabs, lobsters—while the market buzzes with traders, buyers, and locals. Visitors can experience the energy of a traditional coastal marketplace, watch fish being sorted and auctioned, and even taste freshly cooked seafood nearby. It's a lively, authentic cultural experience that reflects Negombo's fishing heritage and coastal lifestyle.",
      highlights: [
        "Busiest fish market",
        "Dawn fishing activities",
        "Fresh seafood selection",
        "Traditional auctions",
        "Coastal culture",
        "Fresh seafood tasting"
      ]
    },
    "Hamilton Dutch Canal": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Originally built by the Dutch in the 17th century to transport cinnamon, coconuts, and salt, the Hamilton Canal stretches from Negombo to Colombo. Later improved by the British, it remains a unique historic waterway that blends nature and heritage. Today, boat tours allow visitors to navigate narrow channels shaded by dense mangroves, spot a variety of bird species and monitor lizards, and stop at small islands with shrines and local villages. The canal is a peaceful escape from city life and offers a glimpse into colonial-era engineering and Sri Lankan rural culture.",
      highlights: [
        "17th century Dutch heritage",
        "Mangrove ecosystems",
        "Bird watching",
        "Village visits",
        "Colonial engineering",
        "Peaceful boat rides"
      ]
    },
    "Angurukaramulla Temple": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Angurukaramulla Temple is a historic and popular Buddhist temple located in Negombo, Sri Lanka. The temple is famous for its massive seated Buddha statue, which stands about six meters tall and welcomes visitors at the entrance. It is also known for its beautiful murals and paintings that depict Buddhist stories, Jataka tales, and important events from Sri Lankan history. The temple complex includes a dragon arch, a library with ancient manuscripts, and a small stupa. Locals believe the temple brings protection against evil and misfortune.",
      highlights: [
        "Six-meter Buddha statue",
        "Beautiful murals",
        "Jataka tale paintings",
        "Dragon arch entrance",
        "Ancient manuscripts",
        "Cultural significance"
      ]
    },
    "Anuradhapura": {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "One of the ancient capitals of Sri Lanka, founded in the 4th century BCE. It was the first capital and the center of Theravada Buddhism for many centuries, featuring well-preserved ruins of an early Sri Lankan civilization. The city showcases impressive dagobas (stupas), ancient monasteries, and intricate stone carvings that reflect the architectural prowess of ancient Sri Lankan kingdoms.",
      highlights: [
        "UNESCO World Heritage Site",
        "Founded 4th century BCE",
        "Ancient Buddhist center",
        "Massive dagobas",
        "Ancient monasteries",
        "Sacred sites"
      ]
    },
    "Sri Maha Bodhiya": {
      image: "https://images.unsplash.com/photo-1605536968169-738c98afd7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Sri Maha Bodhiya, located in Anuradhapura, Sri Lanka, is one of the most sacred Buddhist sites in the world. It is home to a sacred fig tree (Ficus religiosa) that is believed to be a direct descendant of the original Bodhi tree under which Siddhartha Gautama attained enlightenment. Planted in 288 BCE by Sanghamitta Theri, the tree has become a symbol of peace and spiritual significance for Buddhists. The site attracts thousands of pilgrims and visitors each year, who come to pay homage and engage in meditation beneath its sprawling branches.",
      highlights: [
        "Most sacred Buddhist site",
        "Planted in 288 BCE",
        "Direct Bodhi tree descendant",
        "Pilgrimage destination",
        "Symbol of enlightenment",
        "Ancient religious site"
      ]
    },
    "Ruwanwelisaya": {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Ruwanwalisaya, located in Anuradhapura, Sri Lanka, is a significant stupa built by King Dutugemunu in the 2nd century BCE. Standing about 55 meters tall, it is one of the largest stupas in the world and is believed to house relics of the Buddha. Renowned for its striking white dome and surrounding gardens, Ruwanwalisaya is a UNESCO World Heritage Site and a major pilgrimage destination for Buddhists, reflecting Sri Lanka's rich cultural and religious heritage.",
      highlights: [
        "Built 2nd century BCE",
        "55 meters tall",
        "Houses Buddha relics",
        "UNESCO World Heritage",
        "White dome structure",
        "Major pilgrimage site"
      ]
    },
    "Polonnaruwa": {
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Polonnaruwa is an ancient city in Sri Lanka that served as the country's second capital after Anuradhapura. Established in the 11th century, it flourished under the rule of King Parakramabahu I during the 12th century. The city is renowned for its well-preserved ruins, which include impressive Buddhist temples, stupas, and palaces, reflecting the advanced engineering and artistry of the era. Key attractions include the Gal Vihara with four magnificent Buddha statues, the Royal Palace, and the intricate stone carvings at the Rankot Vihara.",
      highlights: [
        "UNESCO World Heritage Site",
        "Second ancient capital",
        "12th century golden age",
        "Gal Vihara rock temple",
        "Royal Palace ruins",
        "Advanced architecture"
      ]
    },
    "Nine Arch Bridge": {
      image: "https://images.unsplash.com/photo-1586539195093-e683155f9b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "The Nine Arch Bridge, also known as the 'Bridge in the Sky,' is a famous viaduct located in Ella, Sri Lanka. Built during the British colonial era in the early 20th century, this architectural marvel spans 91 meters and stands 24 meters high. The bridge is constructed entirely of brick, stone, and cement, without the use of steel, making it a unique engineering feat. Nestled amidst lush green forests and tea plantations, the Nine Arch Bridge offers stunning views and is a popular spot for photography.",
      highlights: [
        "British colonial architecture",
        "91 meters span",
        "No steel construction",
        "Surrounded by tea plantations",
        "Popular photography spot",
        "Trains crossing daily"
      ]
    },
    "Gregory Park": {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Gregory Park and Boat Safari in Sri Lanka is a popular attraction in the hill country town of Nuwara Eliya. Centered around the picturesque Gregory Lake, the park offers beautifully landscaped gardens, walking paths, and plenty of space for relaxation in the cool climate. Visitors can enjoy a scenic boat safari on the lake, gliding across calm waters surrounded by mountains and tea plantations. The ride provides a peaceful escape while also offering opportunities to spot birds and admire the stunning views.",
      highlights: [
        "Picturesque lake setting",
        "Boat safari activities",
        "Landscaped gardens",
        "Mountain views",
        "Bird watching",
        "Cool climate retreat"
      ]
    },
    "Ambewela Farm": {
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Ambewela is a picturesque highland village in the Nuwara Eliya District of Sri Lanka, often referred to as 'Little New Zealand' due to its lush green fields, cool climate, and dairy farming culture. Located at over 6,000 feet above sea level, Ambewela is famous for its vast grasslands, rolling hills, and fresh air. The area is best known for the Ambewela and New Zealand farms, where visitors can see cattle and dairy production, including fresh milk and cheese. Its misty landscapes, grazing cows, and wide-open meadows make it a peaceful getaway.",
      highlights: [
        "Called 'Little New Zealand'",
        "6,000 feet elevation",
        "Dairy farming culture",
        "Rolling green hills",
        "Fresh milk and cheese",
        "Misty landscapes"
      ]
    },
    "Yala Safari": {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Yala Safari, located in Yala National Park in southeastern Sri Lanka, offers an exhilarating wildlife experience. Yala is the most visited and second-largest national park in Sri Lanka, known for its rich biodiversity and dense population of leopards. During a Yala Safari, visitors can explore the park's diverse ecosystems, which include forests, grasslands, and wetlands, home to animals like elephants, sloth bears, crocodiles, and a wide variety of birds. The park is especially renowned for providing one of the best chances to see leopards in the wild.",
      highlights: [
        "Highest leopard density",
        "Diverse ecosystems",
        "Elephant herds",
        "Sloth bears",
        "Bird watching paradise",
        "Open-top jeep safaris"
      ]
    },
    "Galle Fort": {
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Galle Fort, located in the coastal city of Galle, Sri Lanka, is a UNESCO World Heritage Site and one of the best-preserved colonial-era forts in Asia. Originally built by the Portuguese in the 16th century and later expanded by the Dutch in the 17th century, the fort showcases a blend of European architecture and South Asian culture. Its thick stone walls enclose a vibrant town with cobbled streets, historic buildings, boutique shops, and cafes. Key attractions within the fort include the Dutch Reformed Church, Galle Lighthouse, and the Maritime Museum.",
      highlights: [
        "UNESCO World Heritage Site",
        "16th century Portuguese fort",
        "Dutch colonial architecture",
        "Cobbled streets",
        "Historic lighthouse",
        "Seaside location"
      ]
    },
    "Hikkaduwa Coral Garden": {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Hikkaduwa's Coral Gardens are a vibrant marine sanctuary, known for colorful coral reefs and abundant tropical fish. Snorkeling and diving here reveal an underwater kaleidoscope of parrotfish, butterflyfish, sea turtles, and anemones. Glass-bottom boat tours provide an accessible way for non-swimmers to explore the reefs. Conservation efforts in the area have helped revive damaged coral patches, making it both an educational and visually stunning destination.",
      highlights: [
        "Vibrant coral reefs",
        "Tropical fish diversity",
        "Sea turtle sightings",
        "Snorkeling paradise",
        "Glass-bottom boats",
        "Conservation efforts"
      ]
    },
    "Turtle Farm": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "A Turtle Farm in Sri Lanka offers visitors the chance to learn about and support the conservation of endangered sea turtles along the island's coast. These hatcheries, mainly found in places like Bentota, Kosgoda, and Hikkaduwa, protect turtle eggs from predators and poachers, nurture hatchlings, and release them safely into the ocean. Visitors can see different turtle species, observe baby turtles, and understand the importance of conservation efforts to protect these gentle marine creatures.",
      highlights: [
        "Turtle conservation",
        "Multiple turtle species",
        "Hatchling care",
        "Educational programs",
        "Release ceremonies",
        "Marine protection"
      ]
    },
    "Madu River Boat Ride": {
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "The Madu River boat ride in Sri Lanka provides a scenic journey through mangroves and waterways near Balapitiya. Visitors can explore rich biodiversity, including various birds and aquatic life, and visit small islands like Kothduwa Temple and cinnamon plantations, making it a serene escape for nature lovers. The river ecosystem is home to diverse wildlife and offers glimpses into traditional Sri Lankan coastal life.",
      highlights: [
        "Mangrove ecosystems",
        "Island temple visits",
        "Cinnamon plantations",
        "Bird watching",
        "Traditional fishing",
        "Peaceful waterways"
      ]
    },
    "Tea Plantation": {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Sri Lanka's tea story dates back to the 19th century, when British planter James Taylor introduced tea cultivation in 1867 in Kandy. What began as a small experiment soon transformed the island into one of the world's leading tea exporters, giving birth to the world-renowned 'Ceylon Tea.' Today, the rolling green plantations remain an iconic part of the central highlands. A visit to a tea plantation and factory lets you walk through these scenic landscapes, learn the art of tea plucking, and explore the fascinating process of tea production—from withering and rolling to drying and grading.",
      highlights: [
        "Ceylon tea heritage",
        "Scenic plantations",
        "Tea plucking experience",
        "Factory tours",
        "Tea tasting sessions",
        "Mountain views"
      ]
    },
    "Udawalawe Safari": {
      image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "The Udawalawe Safari is one of Sri Lanka's most popular wildlife adventures, set in Udawalawe National Park in the southern part of the island. The park is world-renowned for its large elephant population, offering almost guaranteed sightings of herds roaming freely in the wild. In addition to elephants, visitors can spot water buffalo, deer, crocodiles, jackals, and a wide range of bird species, making it a paradise for nature and photography enthusiasts.",
      highlights: [
        "Large elephant herds",
        "Guaranteed wildlife sightings",
        "Water buffalo",
        "Bird watching",
        "Open landscapes",
        "Photography paradise"
      ]
    },
    "Ella Rock": {
      image: "https://images.unsplash.com/photo-1586539195093-e683155f9b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "The Ella Rock hike is a rewarding adventure in Sri Lanka's scenic hill country. The trek takes about 2-3 hours through lush tea plantations, railway tracks, and misty forests, finally leading to a panoramic viewpoint. From the top, hikers can enjoy breathtaking vistas of valleys, mountains, and waterfalls, making it one of the most iconic experiences in Ella.",
      highlights: [
        "2-3 hour trek",
        "Panoramic viewpoints",
        "Tea plantation trails",
        "Misty forests",
        "Valley views",
        "Mountain vistas"
      ]
    },
    "Ravana Falls": {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Ravana Falls, near Ella, is one of Sri Lanka's most famous waterfalls, plunging dramatically over rocky cliffs. Surrounded by dense greenery, the falls are accessible via short walking trails, and natural pools invite visitors for a refreshing dip. Legend ties the falls to King Ravana from the Ramayana epic, adding a mystical allure. Photographers and nature lovers enjoy capturing the cascading waters against the jungle backdrop, especially during the monsoon season when the falls are most powerful.",
      highlights: [
        "Dramatic waterfall",
        "Natural swimming pools",
        "Ramayana legend",
        "Easy access trails",
        "Photography spot",
        "Monsoon spectacle"
      ]
    }
  };

  const placeInfo = allPlaceDetails[placeName];

  if (!placeInfo) {
    return (
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="p-5 bg-light rounded">
              <i className="fa fa-exclamation-triangle fa-4x text-warning mb-4"></i>
              <h2>Place Not Found</h2>
              <p className="text-muted mb-4">
                Sorry, we couldn't find information about this place.
              </p>
              <button 
                onClick={() => navigate(-1)} 
                className="btn btn-primary btn-lg"
              >
                <i className="fa fa-arrow-left me-2"></i>Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="place-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${placeInfo.image})`,
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
                {placeName}
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/tours" className="text-white">Tours</a>
                  </li>
                  <li className="breadcrumb-item">
                    <span className="text-white" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                      Tour Details
                    </span>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    {placeName}
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
              <i className="fa fa-arrow-left me-2"></i>Back to Tour Details
            </button>

            {/* Main Image */}
            <div className="place-main-image mb-5">
              <img 
                src={placeInfo.image} 
                alt={placeName}
                className="img-fluid rounded shadow-lg w-100"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>

            {/* Description */}
            <div className="place-description mb-5">
              <h2 className="text-primary mb-4">
                <i className="fa fa-info-circle me-2"></i>About {placeName}
              </h2>
              <p className="lead text-muted" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                {placeInfo.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="place-highlights">
              <h3 className="text-primary mb-4">
                <i className="fa fa-star me-2"></i>Key Highlights
              </h3>
              <div className="row">
                {placeInfo.highlights.map((highlight, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="highlight-card p-3 bg-light rounded h-100 d-flex align-items-center">
                      <i className="fa fa-check-circle text-success me-3 fs-4"></i>
                      <span className="fw-semibold">{highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="contact-cta mt-5 p-5 bg-primary bg-opacity-10 rounded text-center">
              <h4 className="mb-3">Interested in Visiting {placeName}?</h4>
              <p className="mb-4">Contact us to include this destination in your personalized tour package!</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="tel:+94715345060" className="btn btn-primary btn-lg">
                  <i className="fa fa-phone me-2"></i>Call Us
                </a>
                <a href="mailto:opulenttoursinfo@gmail.com" className="btn btn-outline-primary btn-lg">
                  <i className="fa fa-envelope me-2"></i>Email Us
                </a>
                <button 
                  onClick={() => navigate('/tours')} 
                  className="btn btn-success btn-lg"
                >
                  <i className="fa fa-map me-2"></i>View All Tours
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;