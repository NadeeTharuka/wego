import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PlaceDetails.css';

function PlaceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const placeName = location.state?.placeName;
  const fromDestination = location.state?.fromDestination || false;
  const expandedDays = location.state?.expandedDays || {};
  const dayIndex = location.state?.dayIndex;
  const selectedPackage = location.state?.package; // Get the package information

  useEffect(() => {
    // Add class to body to style navbar specifically for this page
    document.body.classList.add('place-details-page');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('place-details-page');
    };
  }, []);

  const allPlaceDetails = {
    "Colombo City Tour": {
      image: "/assets/img/colombo-city-tour.jpg",
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
    "Historic Fort Area": {
      image: "/assets/img/historic-fort-colombo.jpg",
      description: "The historic fort areas of Sri Lanka are remarkable reminders of the island's colonial past. Built mainly by the Portuguese, Dutch, and British between the 16th and 19th centuries, these forts served as military strongholds, administrative centers, and trading hubs. Among the most famous are the Galle Fort, a UNESCO World Heritage Site known for its well-preserved Dutch architecture; the Colombo Fort, once the heart of colonial administration; and forts in Jaffna, Trincomalee, Batticaloa, and Matara, which highlight the strategic importance of Sri Lanka's coastal cities. Today, these historic fortifications not only showcase a blend of European and local influences but also stand as vibrant cultural and tourist attractions, offering visitors a glimpse into the island's layered history.",
      highlights: [
        "Colonial architecture",
        "UNESCO World Heritage Site",
        "Historic military strongholds",
        "Cultural landmarks",
        "Trading hubs",
        "Blend of European and local influences"
      ]
    },
    "BMICH": {
      image: "/assets/img/bmich.jpg",
      description: "The BMICH (Bandaranaike Memorial International Conference Hall) in Colombo, Sri Lanka, is a prominent convention center and one of the largest in South Asia. Opened in 1973, it hosts international conferences, exhibitions, and cultural events. The BMICH is known for its modern architecture, spacious halls, and beautiful surroundings, making it a key venue for both local and global events.",
      highlights: [
        "Largest convention center in South Asia",
        "Modern architecture",
        "International conferences",
        "Cultural events",
        "Spacious halls",
        "Beautiful surroundings"
      ]
    },
    "Gangaramaya Temple": {
      image: "/assets/img/gangaramaya-temple.jpg",
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
    "Minneriya/Kaudulla/Eco Park Wild Safari": {
  image: "/assets/img/minneriya-wild-safari.jpg",
  description: "The Minneriya/Kaudulla/Eco Park Wild Safari offers an unforgettable wildlife experience in Sri Lanka's North Central Province. These three national parks are renowned for hosting one of the world's most spectacular wildlife phenomena - 'The Gathering,' where hundreds of Asian elephants congregate during the dry season (July to October) around the ancient reservoirs. Minneriya National Park is famous for its large elephant gatherings, Kaudulla offers excellent leopard and sloth bear sightings, while Eco Park provides a more intimate wildlife experience with diverse bird species. The safari takes you through diverse landscapes including dry zone forests, grasslands, and wetlands, home to elephants, leopards, sloth bears, sambar deer, wild buffalo, and over 160 species of birds. Experienced guides and drivers help track wildlife and share insights about animal behavior and conservation efforts. The best time for safaris is early morning or late afternoon when animals are most active.",
  highlights: [
    "Witness 'The Gathering' of hundreds of elephants",
    "Three premier national parks in one experience",
    "Excellent leopard and sloth bear sightings",
    "Diverse ecosystems and landscapes",
    "Over 160 bird species",
    "Ancient reservoirs and historical sites",
    "Experienced wildlife guides",
    "Best viewing times: early morning and late afternoon"
  ]
},
"Tea Factory & Tea Plantation Tour": {
  image: "/assets/img/tea-plantation-factory.jpg",
  description: "Sri Lanka's tea story dates back to the 19th century, when British planter James Taylor introduced tea cultivation in 1867 in Kandy. What began as a small experiment soon transformed the island into one of the world's leading tea exporters, giving birth to the world-renowned 'Ceylon Tea.' Today, the rolling green plantations remain an iconic part of the central highlands. A visit to a tea plantation and factory lets you walk through these scenic landscapes, learn the art of tea plucking, and explore the fascinating process of tea production—from withering and rolling to drying and grading. The experience often concludes with a tea tasting session, where you can enjoy the rich flavors of authentic Ceylon Tea while overlooking breathtaking mountain views. You'll witness firsthand how tea leaves are carefully handpicked by skilled workers, processed through traditional machinery, and transformed into the aromatic beverage enjoyed worldwide.",
  highlights: [
    "Historic tea cultivation since 1867",
    "Scenic tea plantations with mountain views",
    "Hands-on tea plucking demonstration",
    "Complete tea production process tour",
    "Tea tasting session with authentic Ceylon Tea",
    "Learn traditional tea making methods",
    "Factory visit with machinery demonstrations",
    "Breathtaking highland scenery"
  ]
},
    "Polonnaruwa Ancient Kingdom Exploration": {
  image: "/assets/img/polonnaruwa-ancient-kingdom.jpg",
  description: "Polonnaruwa Ancient Kingdom Exploration offers an immersive journey through one of Sri Lanka's most magnificent medieval capitals. As the second capital of Sri Lanka after Anuradhapura, Polonnaruwa flourished from the 11th to 13th centuries under the rule of great kings like Parakramabahu I and Nissanka Malla. This UNESCO World Heritage Site spans over 122 hectares and showcases remarkable examples of ancient urban planning, hydraulic engineering, and artistic achievement. The exploration can be done by bicycle or car, allowing visitors to cover the extensive archaeological park at their own pace. Highlights include the iconic Gal Vihara with its four magnificent Buddha statues carved from a single granite rock face, the Royal Palace complex with its impressive audience hall, the Quadrangle (Dalada Maluwa) containing eight significant structures including the Vatadage circular relic house, and the Lankathilaka temple with its towering brick walls. The Parakrama Samudra, a massive ancient reservoir built by King Parakramabahu I, demonstrates the advanced irrigation systems of the era. Other notable sites include the Rankot Vihara stupa, Kiri Vihara, and numerous Hindu temples reflecting the religious harmony of the period. The well-preserved ruins, detailed stone carvings, and moonstone entrances provide insight into the grandeur of medieval Sinhalese civilization. Exploring Polonnaruwa is like walking through a living museum where every stone tells a story of ancient glory, royal ambition, and architectural brilliance.",
  highlights: [
    "UNESCO World Heritage Site from 11th-13th century",
    "Explore by bicycle or car through 122-hectare park",
    "Gal Vihara - Four magnificent Buddha statues in granite",
    "Royal Palace complex with impressive ruins",
    "Quadrangle (Dalada Maluwa) with 8 significant structures",
    "Vatadage - Circular relic house with intricate carvings",
    "Lankathilaka temple with towering brick walls",
    "Parakrama Samudra - Massive ancient reservoir",
    "Rankot Vihara - Fourth largest stupa in Sri Lanka",
    "Kiri Vihara - Well-preserved white stupa",
    "Hindu temples showing religious harmony",
    "Detailed moonstones and stone carvings",
    "Ancient urban planning and architecture",
    "King Parakramabahu I statue and legacy",
    "Medieval Sinhalese civilization showcase"
  ]
},
    "Colonial Town exploration": {
  image: "/assets/img/nuwara-eliya-colonial.jpg",
  description: "Nuwara Eliya, often called 'Little England,' is a charming colonial hill station nestled in the heart of Sri Lanka's central highlands at 1,868 meters above sea level. Founded by British colonial planters in the 19th century, the town retains its colonial character with Victorian-style buildings, manicured gardens, and a cool temperate climate reminiscent of the English countryside. A colonial town exploration takes you through the town's historic center, showcasing landmarks such as the Grand Hotel (built in 1891), the Hill Club with its colonial-era traditions, the old British Governor's residence, and the picturesque Victoria Park.",
  highlights: [
    "Victorian-era architecture and buildings",
    "Grand Hotel - historic colonial landmark built in 1891",
    "Hill Club with traditional colonial customs",
    "Tudor-style cottages and English gardens",
    "Historic Nuwara Eliya Golf Club",
    "Victoria Park with manicured gardens",
    "Gregory Lake created during British era",
    "Queen's Cottage - colonial residence",
    "Cool temperate climate year-round",
    "Colonial-era markets with fresh produce"
  ]
},
    "Independence Square": {
      image: "/assets/img/independence-square.jpg",
      description: "The Independence Square in Colombo, Sri Lanka, is a historic site dedicated to the country's independence from British rule in 1948. This iconic landmark features a grand monument, with a central pavilion where important events are held. Surrounded by lush gardens and a tranquil atmosphere, it is a symbol of Sri Lanka's freedom and national pride. The square is a popular spot for both locals and tourists, offering a blend of history, culture, and scenic beauty.",
      highlights: [
        "Historic independence monument",
        "Central pavilion",
        "Lush gardens",
        "Symbol of national pride",
        "Tranquil atmosphere",
        "Blend of history and culture"
      ]
    },
    "Colombo National Museum": {
      image: "/assets/img/colombo-national-museum.jpg",
      description: "The National Museum of Colombo, established in 1877, is the largest and most comprehensive museum in Sri Lanka. Its collection includes royal regalia, ancient artifacts, Buddhist relics, traditional arts, and colonial-era items. Visitors can explore exhibits detailing the island's kingdoms, cultural evolution, and craftsmanship. Special exhibitions on local textiles, jewelry, and historical weapons provide insight into Sri Lanka's rich history. The museum's architecture itself is elegant, making it a cultural hub for tourists and history enthusiasts alike.",
      highlights: [
        "Largest museum in Sri Lanka",
        "Established in 1877",
        "Royal regalia and artifacts",
        "Buddhist relics",
        "Cultural evolution exhibits",
        "Elegant architecture"
      ]
    },
    "Kelaniya Temple": {
      image: "/assets/img/kelaniya-temple.jpg",
      description: "Kelaniya Temple, located in Kelaniya near Colombo, Sri Lanka, is one of the most important Buddhist sites on the island. It is believed to be the spot where the Buddha visited on his third and final visit to Sri Lanka, over 2,300 years ago. The temple is renowned for its stunning architecture, vibrant murals, and ancient relics. The most notable feature is the shrine room, which houses a statue of the Buddha in a serene pose. Kelaniya Temple is a significant pilgrimage site, attracting both Buddhists and tourists for its historical, religious, and cultural value.",
      highlights: [
        "Sacred Buddhist site",
        "Buddha's visit site",
        "Stunning architecture",
        "Vibrant murals",
        "Ancient relics",
        "Pilgrimage destination"
      ]
    },
    "Galle Face": {
      image: "/assets/img/galle-face.jpg",
      description: "Galle Face is a popular promenade in Colombo, Sri Lanka, located along the Indian Ocean. It stretches for about 500 meters and offers stunning sea views, making it a favorite spot for locals and tourists to relax, walk, and enjoy the breeze. The area is also known for its historical significance, with landmarks like the Galle Face Hotel and nearby attractions. It's a vibrant hub, especially in the evenings, with street food vendors and recreational activities.",
      highlights: [
        "Oceanfront promenade",
        "Stunning sea views",
        "Historical significance",
        "Galle Face Hotel",
        "Street food vendors",
        "Recreational activities"
      ]
    },
    "Old Dutch Church": {
      image: "/assets/img/old-dutch-church-colombo.jpg",
      description: "The Old Dutch Church in Colombo, known as Wolvendaal Church, is one of the oldest Protestant churches in Sri Lanka, built by the Dutch between 1749 and 1757. Located in Pettah, it is famous for its Doric-style architecture, thick stone walls, and Greek-cross design. The interior features beautiful Dutch-era woodwork, old tombstones of colonial governors, and Sri Lanka's oldest organ. Remarkably, it is still an active church, holding services in English, Sinhala, and Tamil, and stands as a well-preserved symbol of Colombo's colonial heritage.",
      highlights: [
        "Oldest Protestant church",
        "Dutch colonial architecture",
        "Doric-style design",
        "Historic tombstones",
        "Active church",
        "Colonial heritage"
      ]
    },
    "Negombo Fish Market": {
      image: "/assets/img/negombo-fish-market.jpg",
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
    "Negombo Lagoon": {
      image: "/assets/img/negombo-lagoon.jpg",
      description: "Negombo Lagoon is a sprawling estuary connected to the Indian Ocean, surrounded by mangroves and fishing villages. Birdwatchers will enjoy spotting herons, kingfishers, and pelicans, while boat rides provide views of stilt fishermen and local fishing methods. The lagoon is also a hub for traditional prawn and crab harvesting. Its calm waters and scenic surroundings make it ideal for photography, eco-tours, and learning about the symbiotic relationship between local communities and nature.",
      highlights: [
        "Estuary ecosystem",
        "Mangrove surroundings",
        "Bird watching",
        "Boat rides",
        "Traditional fishing",
        "Scenic landscapes"
      ]
    },
    "Hamilton Canal": {
      image: "/assets/img/hamilton-canal.jpg",
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
    "St. Mary's Church": {
      image: "/assets/img/st-marys-church-negombo.jpg",
      description: "St. Mary's Church in Negombo is one of the largest and most visually striking Catholic churches in Sri Lanka. Built during the Dutch and Portuguese colonial periods, it features neoclassical architecture with intricately painted ceilings, ornate altars, and colorful stained-glass windows. Beyond its religious function, it is a cultural landmark, offering insight into Negombo's colonial history, Christian heritage, and vibrant artistic traditions.",
      highlights: [
        "Largest Catholic church",
        "Neoclassical architecture",
        "Painted ceilings",
        "Stained-glass windows",
        "Colonial heritage",
        "Cultural landmark"
      ]
    },
    "Angurukaramulla Temple": {
      image: "/assets/img/angurukaramulla-temple.jpg",
      description: "Angurukaramulla Temple is a historic and popular Buddhist temple located in Negombo, Sri Lanka. The temple is famous for its massive seated Buddha statue, which stands about six meters tall and welcomes visitors at the entrance. It is also known for its beautiful murals and paintings that depict Buddhist stories, Jataka tales, and important events from Sri Lankan history. The temple complex includes a dragon arch, a library with ancient manuscripts, and a small stupa. Locals believe the temple brings protection against evil and misfortune. Because of its cultural, religious, and artistic significance, Angurukaramulla Temple is a popular attraction for both devotees and tourists exploring Negombo.",
      highlights: [
        "Six-meter Buddha statue",
        "Beautiful murals",
        "Jataka tale paintings",
        "Dragon arch entrance",
        "Ancient manuscripts",
        "Cultural significance"
      ]
    },
    "Fishing Village": {
      image: "/assets/img/fishing-village.jpg",
      description: "Sri Lanka's coastal fishing villages provide a glimpse into the traditional lifestyle of the island's fishing communities. Visitors can watch fishermen preparing nets, see vibrant fishing boats lined along the shore, and even witness unique practices like stilt fishing in certain areas. It's an authentic cultural experience that reflects the island's deep connection with the sea.",
      highlights: [
        "Traditional fishing lifestyle",
        "Net preparation",
        "Fishing boats",
        "Stilt fishing",
        "Cultural experience",
        "Coastal connection"
      ]
    },
    "Pinnawala Elephant Orphanage": {
      image: "/assets/img/pinnawala-elephant-orphanage.jpg",
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
    "Matale Spice Garden": {
      image: "/assets/img/matale-spice-garden.jpg",
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
   
    "Dambulla Royal Cave Temple and Golden Temple": {
      image: "/assets/img/dambulla-cave-temple.jpg",
      description: "Dambulla is a commercial town in Sri Lanka, located 20 km south of Habarana and 55 km north of Matale, known for hosting the country's largest produce market. Its most famous attractions are the Dambulla Cave Temples and the Golden Temple, both of which are part of one of Sri Lanka's eight UNESCO World Heritage Sites. The Dambulla heritage site has a history that spans from prehistoric times to the modern era. The Dambulla Cave Temples, located near the geographical center of the island, are a significant cultural treasure. Dating back to the 1st century BCE, these caves are renowned for their exquisite Sinhala art and sculpture. The complex includes five caves beneath a vast overhanging rock, with intricately painted ceilings and images of Lord Buddha, Bodhisattvas, and various deities. These caves were developed during the Anuradhapura and Polonnaruwa periods and are among the most impressive cave temples in Sri Lanka. Visitors to Dambulla can also explore the nearby ironwood forest, rose quartz mountain, and a megalithic cemetery, making it a worthwhile stop on the way to Sigiriya.",
      highlights: [
        "UNESCO World Heritage Site",
        "Five ancient caves",
        "Intricately painted ceilings",
        "Buddhist statues and art",
        "Historical significance",
        "Ironwood forest nearby"
      ]
    },
     "Dambulla Cave Temple – UNESCO World Heritage Site": {
      image: "/assets/img/dambulla-cave-temple.jpg",
      description: "Dambulla is a commercial town in Sri Lanka, located 20 km south of Habarana and 55 km north of Matale, known for hosting the country's largest produce market. Its most famous attractions are the Dambulla Cave Temples and the Golden Temple, both of which are part of one of Sri Lanka's eight UNESCO World Heritage Sites. The Dambulla heritage site has a history that spans from prehistoric times to the modern era. The Dambulla Cave Temples, located near the geographical center of the island, are a significant cultural treasure. Dating back to the 1st century BCE, these caves are renowned for their exquisite Sinhala art and sculpture. The complex includes five caves beneath a vast overhanging rock, with intricately painted ceilings and images of Lord Buddha, Bodhisattvas, and various deities. These caves were developed during the Anuradhapura and Polonnaruwa periods and are among the most impressive cave temples in Sri Lanka. Visitors to Dambulla can also explore the nearby ironwood forest, rose quartz mountain, and a megalithic cemetery, making it a worthwhile stop on the way to Sigiriya.",
      highlights: [
        "UNESCO World Heritage Site",
        "Five ancient caves",
        "Intricately painted ceilings",
        "Buddhist statues and art",
        "Historical significance",
        "Ironwood forest nearby"
      ]
    },
    "Sigiriya Lion Rock Fortress": {
      image: "/assets/img/sigiriya-lion-rock.jpg",
      description: "Sigiriya, often referred to as the 'Lion Rock,' is an ancient rock fortress and one of Sri Lanka's most iconic landmarks. Located in the central Matale District near the town of Dambulla, it is a UNESCO World Heritage site and a popular tourist destination. Sigiriya, built in the 5th century AD by King Kashyapa I, served as a royal palace atop a 200-meter rock for strategic defense. After his death, the site was abandoned as a royal residence and later used as a Buddhist monastery until the 14th century. Sigiriya's architectural highlights include the Lion's Gate, once a grand entrance shaped like a lion, now marked by its remaining paws. The rock features vivid frescoes of the 'Sigiriya Damsels' and the polished Mirror Wall, inscribed with ancient visitors' writings. The surrounding water gardens showcase advanced hydraulic engineering, while the summit holds the ruins of King Kashyapa's palace, including a large throne and water tanks. Sigiriya is a well-preserved example of ancient urban planning, showcasing the sophistication of Sri Lankan architecture and art. It provides insight into the political history of King Kashyapa's reign. Today, Sigiriya is a symbol of Sri Lankan heritage, attracting visitors for its historical significance, stunning views, and challenging climb.",
      highlights: [
        "UNESCO World Heritage Site",
        "Ancient rock fortress",
        "Lion's Gate entrance",
        "Frescoes of Sigiriya Damsels",
        "Mirror Wall with ancient writings",
        "Advanced water gardens"
      ]
    },
    "Sigiriya Village Tour with Traditional Lunch": {
      image: "/assets/img/village-tours-lunch.jpg",
      description: "Village tours in Sigiriya offer a glimpse into traditional Sri Lankan rural life. These tours typically include a bullock cart ride, a boat ride on a serene lake, and a walk-through paddy fields and local farms. Visitors can experience traditional cooking, visit a village home, and interact with local villagers, learning about their customs and daily activities. The tours provide an authentic cultural experience, set against the backdrop of Sigiriya's natural beauty, including the iconic Sigiriya Rock Fortress.",
      highlights: [
        "Bullock cart ride",
        "Traditional cooking class",
        "Boat ride on village lake",
        "Walk through paddy fields",
        "Village home visit",
        "Cultural interaction"
      ]
    },
     "Sigiriya Village Tour": {
      image: "/assets/img/village-tours.jpg",
      description: "Village tours in Sigiriya offer a glimpse into traditional Sri Lankan rural life. These tours typically include a bullock cart ride, a boat ride on a serene lake, and a walk-through paddy fields and local farms. Visitors can experience traditional cooking, visit a village home, and interact with local villagers, learning about their customs and daily activities. The tours provide an authentic cultural experience, set against the backdrop of Sigiriya's natural beauty, including the iconic Sigiriya Rock Fortress.",
      highlights: [
        "Bullock cart ride",
        "Traditional cooking class",
        "Boat ride on village lake",
        "Walk through paddy fields",
        "Village home visit",
        "Cultural interaction"
      ]
    },
    "Sri Dalada Maligawa (The Temple of the Sacred Tooth Relic)": {
      image: "/assets/img/temple-of-sacred-tooth.jpg",
      description: "The Temple of the Sacred Tooth Relic, or Dalada Maligawa, in Kandy is one of Sri Lanka's most significant religious and cultural sites, housing the revered tooth relic of the Buddha. This sacred relic, symbolizing both spiritual and political authority, has been enshrined in Kandy since the 16th century and is closely associated with the Sinhalese monarchy. The temple, part of the royal palace complex, showcases exquisite Kandyan architecture, with its golden canopy, intricate woodwork, and the iconic Paththirippuwa. Daily rituals and ceremonies, enhanced by traditional drumming and dancing, create a deeply spiritual atmosphere. The annual Esala Perahera, a grand procession featuring decorated elephants and cultural performances, highlights the temple's importance and attracts thousands of pilgrims and tourists. Recognized as a UNESCO World Heritage Site, the Dalada Maligawa is a vital center of Buddhist worship and Sri Lankan cultural heritage.",
      highlights: [
        "UNESCO World Heritage Site",
        "Sacred tooth relic of Buddha",
        "Kandyan architecture",
        "Daily rituals and ceremonies",
        "Annual Esala Perahera festival",
        "Royal palace complex"
      ]
    },
      "Temple of the Sacred Tooth Relic (Dalada Maligawa)": {
      image: "/assets/img/temple-of-sacred-tooth.jpg",
      description: "The Temple of the Sacred Tooth Relic, or Dalada Maligawa, in Kandy is one of Sri Lanka's most significant religious and cultural sites, housing the revered tooth relic of the Buddha. This sacred relic, symbolizing both spiritual and political authority, has been enshrined in Kandy since the 16th century and is closely associated with the Sinhalese monarchy. The temple, part of the royal palace complex, showcases exquisite Kandyan architecture, with its golden canopy, intricate woodwork, and the iconic Paththirippuwa. Daily rituals and ceremonies, enhanced by traditional drumming and dancing, create a deeply spiritual atmosphere. The annual Esala Perahera, a grand procession featuring decorated elephants and cultural performances, highlights the temple's importance and attracts thousands of pilgrims and tourists. Recognized as a UNESCO World Heritage Site, the Dalada Maligawa is a vital center of Buddhist worship and Sri Lankan cultural heritage.",
      highlights: [
        "UNESCO World Heritage Site",
        "Sacred tooth relic of Buddha",
        "Kandyan architecture",
        "Daily rituals and ceremonies",
        "Annual Esala Perahera festival",
        "Royal palace complex"
      ]
    },
    "Kandyan Cultural Dance Show": {
      image: "/assets/img/kandyan-cultural-dance.jpg",
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
    "Gem Museum, Kandy": {
      image: "/assets/img/gem-museum-kandy.jpg",
      description: "The Gem Museum in Kandy, Sri Lanka, is a fascinating destination showcasing the island's rich gem-mining history and vibrant gem industry. Sri Lanka is famous for its precious gemstones, including sapphires, rubies, and topaz, and the museum offers visitors a chance to explore a wide variety of these stunning gems. The museum features display of raw and polished stones, as well as detailed explanations of the gem mining and cutting process. Visitors can also learn about the significance of gems in Sri Lankan culture and view exquisite jewelry pieces. It's a must-visit for anyone interested in the island's gem heritage.",
      highlights: [
        "Gemstone collection",
        "Mining history",
        "Cutting process demonstration",
        "Cultural significance",
        "Jewelry displays",
        "Educational experience"
      ]
    },
    "Gem Shops Kandy": {
      image: "/assets/img/gem-shops-kandy.jpg",
      description: "Gem shops in Sri Lanka are popular for offering a wide variety of precious and semi-precious gemstones, including sapphires, rubies, and topaz. The country, known as the 'Gem Island,' is especially famous for its Ceylon Blue Sapphires. These shops often provide certificates of authenticity and sometimes allow visitors to see the cutting and polishing process. Major gem-buying centers are in cities like Colombo, Kandy, and Ratnapura, the latter being the heart of Sri Lanka's gem mining industry. Tourists can find a range of jewelry and loose stones in various designs and price ranges.",
      highlights: [
        "Precious gemstones",
        "Ceylon Blue Sapphires",
        "Authenticity certificates",
        "Cutting demonstrations",
        "Jewelry variety",
        "Shopping experience"
      ]
    },
    "Train ride through Sri Lanka's central highlands": {
      image: "/assets/img/train-ride-highlands.jpg",
      description: "A train ride through Sri Lanka's central highlands is considered one of the most scenic journeys in the world. The route winds through misty mountains, lush tea plantations, cascading waterfalls, and charming villages, offering breathtaking views at every turn. Popular stretches include the ride from Kandy to Ella, where travelers can experience highlights such as the famous Nine Arch Bridge, rolling green hills, and endless valleys. With its slow pace and open windows, the journey is not just transportation but a truly unforgettable way to experience the natural beauty and cultural heart of Sri Lanka's hill country.",
      highlights: [
        "Scenic mountain views",
        "Tea plantations",
        "Waterfalls",
        "Nine Arch Bridge",
        "Cultural landscapes",
        "Unforgettable journey"
      ]
    },
    "Peradeniya Botanical Garden": {
      image: "/assets/img/peradeniya-botanical-garden.jpg",
      description: "The Peradeniya Botanical Garden, located in Kandy, Sri Lanka, is one of the most renowned botanical gardens in Asia. Covering 147 acres, it was originally established in the 14th century as a royal garden and later expanded by the British in the 19th century. The garden is famous for its diverse collection of over 4,000 species of plants, including tropical trees, orchids, medicinal plants, and palms. One of its highlights is the impressive avenue of royal palm trees. The garden is not only a botanical treasure but also a peaceful retreat, attracting both nature lovers and tourists seeking a tranquil escape.",
      highlights: [
        "Renowned botanical garden",
        "4,000+ plant species",
        "Royal palm avenue",
        "Orchid collection",
        "Historic royal garden",
        "Peaceful retreat"
      ]
    },
    "Nuwara Eliya City Tour": {
      image: "/assets/img/nuwara-eliya-city-tour.jpg",
      description: "A Nuwara Eliya City Tour takes you through the heart of Sri Lanka's hill country, known as 'Little England' for its cool climate, colonial buildings, and neatly kept gardens. The tour highlights include visits to lush tea plantations and factories, where you can learn about the island's world-famous Ceylon tea. You can enjoy the peaceful surroundings of Gregory Lake, stroll through the colorful Victoria Park, and explore the lively local fruit and vegetable market. Other attractions include the Hakgala Botanical Garden, the historic racecourse, and the sacred Seetha Amman Temple, linked to the Ramayana legend. Surrounded by misty mountains, waterfalls, and rolling tea fields, Nuwara Eliya offers a perfect mix of natural beauty, colonial heritage, and cultural charm.",
      highlights: [
        "Colonial architecture",
        "Tea plantations",
        "Gregory Lake",
        "Victoria Park",
        "Local markets",
        "Cool climate"
      ]
    },
    "Gregory Park and Boat Safari": {
      image: "/assets/img/gregory-park-boat-safari.jpg",
      description: "Gregory Park and Boat Safari in Sri Lanka is a popular attraction in the hill country town of Nuwara Eliya. Centered around the picturesque Gregory Lake, the park offers beautifully landscaped gardens, walking paths, and plenty of space for relaxation in the cool climate. Visitors can enjoy a scenic boat safari on the lake, gliding across calm waters surrounded by mountains and tea plantations. The ride provides a peaceful escape while also offering opportunities to spot birds and admire the stunning views. With its blend of natural beauty and leisure activities, Gregory Park is a favorite stop for families and travelers exploring the central highlands.",
      highlights: [
        "Picturesque lake setting",
        "Boat safari activities",
        "Landscaped gardens",
        "Mountain views",
        "Bird watching",
        "Cool climate retreat"
      ]
    },
    "Ambewela": {
      image: "/assets/img/ambewela.jpg",
      description: "Ambewela is a picturesque highland village in the Nuwara Eliya District of Sri Lanka, often referred to as 'Little New Zealand' due to its lush green fields, cool climate, and dairy farming culture. Located at over 6,000 feet above sea level, Ambewela is famous for its vast grasslands, rolling hills, and fresh air. The area is best known for the Ambewela and New Zealand farms, where visitors can see cattle and dairy production, including fresh milk and cheese. Its misty landscapes, grazing cows, and wide-open meadows make it a peaceful getaway and a popular stop for travelers exploring Sri Lanka's hill country.",
      highlights: [
        "Highland village",
        "Dairy farming",
        "Lush green fields",
        "Cool climate",
        "Cattle farms",
        "Scenic landscapes"
      ]
    },
    "Nine Arch Bridge": {
      image: "/assets/img/nine-arch-bridge.jpg",
      description: "The Nine Arch Bridge, also known as the 'Bridge in the Sky,' is a famous viaduct located in Ella, Sri Lanka. Built during the British colonial era in the early 20th century, this architectural marvel spans 91 meters and stands 24 meters high. The bridge is constructed entirely of brick, stone, and cement, without the use of steel, making it a unique engineering feat. Nestled amidst lush green forests and tea plantations, the Nine Arch Bridge offers stunning views and is a popular spot for photography. Trains passing over the bridge create a picturesque scene, attracting both local and international tourists to this iconic landmark in Sri Lanka's hill country.",
      highlights: [
        "British colonial architecture",
        "91 meters span",
        "No steel construction",
        "Surrounded by tea plantations",
        "Popular photography spot",
        "Trains crossing daily"
      ]
    },
    "Ella Rock Hike": {
      image: "/assets/img/ella-rock-hike.jpg",
      description: "The Ella Rock hike is a rewarding adventure in Sri Lanka's scenic hill country. The trek takes about 2-3 hours through lush tea plantations, railway tracks, and misty forests, finally leading to a panoramic viewpoint. From the top, hikers can enjoy breathtaking vistas of valleys, mountains, and waterfalls, making it one of the most iconic experiences in Ella.",
      highlights: [
        "Scenic hill country trek",
        "Tea plantation trails",
        "Panoramic viewpoints",
        "Mountain vistas",
        "Waterfall views",
        "2-3 hour adventure"
      ]
    },
    "Ravana Cave": {
      image: "/assets/img/ravana-cave.jpg",
      description: "Ravana Cave, located near Ella, is steeped in legend and linked to the Ramayana epic. Believed to be part of King Ravana's secret hideouts, the cave is nestled in a lush forest offering short trekking paths and cool, shaded exploration. Visitors can step inside the cavernous rock formations, learn about the mythology, and enjoy panoramic views of surrounding valleys. It's a unique blend of adventure, folklore, and natural beauty.",
      highlights: [
        "Ramayana legend connection",
        "Ancient cave formations",
        "Forest trekking",
        "Mythological significance",
        "Panoramic valley views",
        "Adventure exploration"
      ]
    },
    "Ravana Falls": {
      image: "/assets/img/ravana-falls.jpg",
      description: "Ravana Falls, near Ella, is one of Sri Lanka's most famous waterfalls, plunging dramatically over rocky cliffs. Surrounded by dense greenery, the falls are accessible via short walking trails, and natural pools invite visitors for a refreshing dip. Legend ties the falls to King Ravana from the Ramayana epic, adding a mystical allure. Photographers and nature lovers enjoy capturing the cascading waters against the jungle backdrop, especially during the monsoon season when the falls are most powerful.",
      highlights: [
        "Famous waterfall",
        "Dramatic cascades",
        "Natural swimming pools",
        "Ramayana legend",
        "Jungle backdrop",
        "Photography hotspot"
      ]
    },
    "Ravana Waterfall": {
      image: "/assets/img/ramboda-fall.jpg",
      description: "Ravana Waterfall, located near Ella in Sri Lanka, is one of the island's most popular and picturesque waterfalls. With a height of approximately 25 meters, it cascades down a series of rock formations, creating a beautiful natural spectacle. The waterfall is named after the legendary King Ravana from the Hindu epic Ramayana, who is said to have used this area as a hiding place. Surrounded by lush greenery and tea plantations, the waterfall offers a serene environment for visitors. The natural pool at the base of the falls is perfect for a refreshing swim, and the area is a popular spot for photography, especially during the rainy season when the water flow is at its peak.",
      highlights: [
        "Waterfall Views",
        "Natural Pool",
        "Photo Opportunities",
        "Ramayana Legend",
        "Scenic Beauty",
        "Refreshing Swim"
      ]
    },
    "Ramboda Waterfall": {
      image: "/assets/img/ramboda-fall.jpg",
      description: "Ramboda Falls is a stunning waterfall located between Nuwara Eliya and Kandy, visible from the A5 highway. It cascades down in multiple steps from a height of 109 meters. The waterfall is surrounded by dense forests and tea plantations, creating a picturesque landscape. There's a viewpoint near the highway where visitors can stop to admire the falls, and a more adventurous path leads closer to the base for a more immersive experience.",
      highlights: [
        "109-meter high waterfall",
        "Multiple-step cascade",
        "Highway visibility",
        "Dense forest surroundings",
        "Tea plantation backdrop",
        "Viewpoint access"
      ]
    },
    "Ravana Cave (Optional)": {
      image: "/assets/img/ravana-cave.jpg",
      description: "Ravana Cave, located near Ella in Sri Lanka, is an ancient cave system shrouded in myth and legend. According to the Ramayana epic, this cave is believed to have been one of the hideouts of King Ravana during his conflict with Lord Rama. The cave features fascinating rock formations and offers stunning panoramic views of the surrounding Ella landscape and the Ella Gap. To reach the cave, visitors must undertake a moderate trek through tea plantations and forested areas, making it an adventurous experience. The cave's historical significance, coupled with its natural beauty and the breathtaking vistas from its entrance, makes it a must-visit site for those interested in Sri Lanka's rich mythology and natural wonders.",
      highlights: [
        "Ancient Cave",
        "Historical Significance",
        "Mountain Views",
        "Ramayana Story",
        "Scenic Trek",
        "Mythological Connection"
      ]
    },
    "Secret Waterfalls": {
      image: "/assets/img/secret-waterfalls.jpg",
      description: "Hidden waterfalls in Sri Lanka's hill country provide off-the-beaten-path escapes. Often reached by trekking through tea plantations, jungles, or remote villages, these waterfalls offer pristine swimming pools and tranquil surroundings. Visitors can enjoy swimming, meditation, and photography in peaceful natural settings. These secret spots give a sense of discovery and solitude, appealing to hikers, adventure seekers, and those seeking quiet moments in nature.",
      highlights: [
        "Hidden natural gems",
        "Off-the-beaten-path",
        "Pristine swimming pools",
        "Tranquil surroundings",
        "Adventure trekking",
        "Photography opportunities"
      ]
    },
    "Horton Plains": {
      image: "/assets/img/horton-plains.jpg",
      description: "Horton Plains National Park, a UNESCO World Heritage Site, is a misty plateau in Sri Lanka's central highlands. Famous for 'World's End,' a dramatic cliff drop of 880 meters, the park also features Baker's Falls and diverse wildlife, including sambar deer, wild boar, leopards, and endemic birds like the Sri Lanka white-eye. Early morning treks offer a breathtaking 'sea of clouds' effect over surrounding mountains. Walking trails pass through cloud forests, grassy plains, and scenic streams, making it ideal for hiking, photography, and nature enthusiasts.",
      highlights: [
        "UNESCO World Heritage Site",
        "World's End viewpoint",
        "Baker's Falls",
        "Diverse wildlife",
        "Cloud forests",
        "Scenic hiking trails"
      ]
    },
    "Horton Plains National Park": {
      image: "/assets/img/horton-plains.jpg",
      description: "Horton Plains National Park, a UNESCO World Heritage Site, is a misty plateau in Sri Lanka's central highlands. Famous for 'World's End,' a dramatic cliff drop of 880 meters, the park also features Baker's Falls and diverse wildlife, including sambar deer, wild boar, leopards, and endemic birds like the Sri Lanka white-eye. Early morning treks offer a breathtaking 'sea of clouds' effect over surrounding mountains. Walking trails pass through cloud forests, grassy plains, and scenic streams, making it ideal for hiking, photography, and nature enthusiasts.",
      highlights: [
        "UNESCO World Heritage Site",
        "World's End viewpoint",
        "Baker's Falls",
        "Highland Ecosystem",
        "Trekking",
        "Diverse wildlife",
        "Cloud forests",
        "Scenic hiking trails"
      ]
    },
    "Tea Plantation and Factory visit": {
      image: "/assets/img/tea-plantation-factory.jpg",
      description: "Sri Lanka's tea story dates back to the 19th century, when British planter James Taylor introduced tea cultivation in 1867 in Kandy. What began as a small experiment soon transformed the island into one of the world's leading tea exporters, giving birth to the world-renowned 'Ceylon Tea.' Today, the rolling green plantations remain an iconic part of the central highlands. A visit to a tea plantation and factory lets you walk through these scenic landscapes, learn the art of tea plucking, and explore the fascinating process of tea production—from withering and rolling to drying and grading. The experience often concludes with a tea tasting session, where you can enjoy the rich flavors of authentic Ceylon Tea while overlooking breathtaking mountain views.",
      highlights: [
        "Historic tea cultivation",
        "Scenic plantations",
        "Tea plucking demonstration",
        "Production process",
        "Tea tasting session",
        "Mountain views"
      ]
    },
    "Tea Plantation & Factory Visit": {
      image: "/assets/img/tea-plantation-factory.jpg",
      description: "Sri Lanka's tea story dates back to the 19th century, when British planter James Taylor introduced tea cultivation in 1867 in Kandy. What began as a small experiment soon transformed the island into one of the world's leading tea exporters, giving birth to the world-renowned 'Ceylon Tea.' Today, the rolling green plantations remain an iconic part of the central highlands. A visit to a tea plantation and factory lets you walk through these scenic landscapes, learn the art of tea plucking, and explore the fascinating process of tea production—from withering and rolling to drying and grading. The experience often concludes with a tea tasting session, where you can enjoy the rich flavors of authentic Ceylon Tea while overlooking breathtaking mountain views.",
      highlights: [
        "Historic tea cultivation",
        "Scenic plantations",
        "Tea plucking demonstration",
        "Production process",
        "Tea tasting session",
        "Mountain views"
      ]
    },
    "Buduruwagala": {
      image: "/assets/img/buduruwagala.jpg",
      description: "Buduruwagala is an ancient Buddhist site located near Wellawaya, Sri Lanka. It is renowned for its impressive rock-cut statues, including a colossal standing Buddha figure that is about 16 meters tall—the tallest rock-carved Buddha in the country. Surrounding the main statue are six smaller figures, believed to represent Bodhisattvas and deities, dating back to the 9th–10th century during the Mahayana Buddhist period. Set amidst a tranquil forest with a serene reservoir nearby, Buduruwagala offers visitors both spiritual significance and natural beauty, making it a unique stop for those exploring Sri Lanka's cultural and historic heritage.",
      highlights: [
        "Ancient Rock Carvings",
        "Buddhist Statues",
        "Historical Site",
        "Serene Atmosphere"
      ]
    },
    "Buduruwagala Rock Temple": {
      image: "/assets/img/buduruwagala.jpg",
      description: "Buduruwagala Rock Temple is an ancient Buddhist site located near Wellawaya in the Monaragala District of Sri Lanka. Dating back to the 9th-10th century, this remarkable site features seven magnificent figures carved into a massive rock face. The central statue is a 16-meter tall Buddha image, the tallest rock-carved Buddha in Sri Lanka, flanked by three figures on each side believed to be Bodhisattvas. The site showcases exquisite ancient craftsmanship with detailed carvings that have weathered centuries. The name 'Buduruwagala' means 'the rock of the Buddha sculpture' in Sinhala. The temple is set in a tranquil forest environment with a small ancient reservoir nearby, creating a peaceful atmosphere perfect for meditation and reflection. Historically significant as an example of Mahayana Buddhist influence in Sri Lanka, Buduruwagala offers visitors a unique glimpse into the island's religious and artistic heritage.",
      highlights: [
        "Ancient Rock Carvings",
        "Buddhist Statues",
        "Historical Site",
        "Serene Atmosphere"
      ]
    },
    "Isurumuniya": {
      image: "/assets/img/isurumuniya.jpg",
      description: "Isurumuniya is an ancient Buddhist temple near Anuradhapura, Sri Lanka, dating back to the reign of King Devanampiya Tissa (3rd century BCE). It is famous for its rock carvings, especially the iconic Isurumuniya Lovers, symbolizing romantic love. The temple features rock inscriptions, a small shrine room, and a serene pond, creating a peaceful atmosphere. Known for its historical and spiritual significance, Isurumuniya is an important site for both pilgrims and tourists.",
      highlights: [
        "Ancient Buddhist temple",
        "3rd century BCE heritage",
        "Isurumuniya Lovers carving",
        "Rock inscriptions",
        "Serene pond",
        "Spiritual significance"
      ]
    },
    "Mihintale": {
      image: "/assets/img/mihintale.jpg",
      description: "Mihintale, near Anuradhapura, Sri Lanka, is considered the birthplace of Buddhism in the country. It was here, in the 3rd century BCE, that the Indian monk Mahinda, sent by Emperor Ashoka, met King Devanampiya Tissa, leading to the king's conversion to Buddhism. The site features ancient structures like stupas, monastic buildings, and inscriptions, with highlights such as the Mahinda Cave and the Mihintale stupa. Visitors can climb steps to the summit for a panoramic view. Mihintale remains a significant pilgrimage site and symbol of Sri Lanka's Buddhist heritage.",
      highlights: [
        "Birthplace of Buddhism in Sri Lanka",
        "3rd century BCE meeting site",
        "Ancient stupas and buildings",
        "Mahinda Cave",
        "Panoramic views",
        "Pilgrimage destination"
      ]
    },
    "Ruwanweliseya Stupa": {
      image: "/assets/img/ruwanweliseya.jpg",
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
    "Sri Maha Bodhiya - Sacred Bodhi Tree": {
      image: "/assets/img/sri-maha-bodhiya.jpg",
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
    "Thuparamaya": {
      image: "/assets/img/thuparamaya.jpg",
      description: "Thuparamaya in Anuradhapura is Sri Lanka's oldest stupa, built in the 3rd century BCE by King Devanampiya Tissa. It enshrines a relic of the Buddha and remains an important pilgrimage site. The stupa is surrounded by a serene compound of stone pillars and ancient ruins, providing a peaceful atmosphere for meditation and reflection. Visitors gain insight into early Buddhist architecture, Sri Lanka's spiritual heritage, and the enduring legacy of Anuradhapura as a sacred city.",
      highlights: [
        "Oldest stupa in Sri Lanka",
        "3rd century BCE construction",
        "Buddha relic enshrined",
        "Stone pillars compound",
        "Peaceful atmosphere",
        "Early Buddhist architecture"
      ]
    },
    "Polonnaruwa": {
      image: "/assets/img/polonnaruwa.jpg",
      description: "Polonnaruwa is an ancient city in Sri Lanka that served as the country's second capital after Anuradhapura. Established in the 11th century, it flourished under the rule of King Parakramabahu I during the 12th century. The city is renowned for its well-preserved ruins, which include impressive Buddhist temples, stupas, and palaces, reflecting the advanced engineering and artistry of the era. Key attractions in Polonnaruwa include the Gal Vihara, a rock temple featuring four magnificent Buddha statues, the Royal Palace, and the intricate stone carvings at the Rankot Vihara. The city is also part of the UNESCO World Heritage Site, showcasing its historical and cultural significance. Surrounded by lush greenery and wildlife, Polonnaruwa offers visitors a glimpse into Sri Lanka's rich heritage and ancient civilization.",
      highlights: [
        "UNESCO World Heritage Site",
        "Second ancient capital",
        "12th century golden age",
        "Gal Vihara rock temple",
        "Royal Palace ruins",
        "Advanced architecture"
      ]
    },
     "Polonnaruwa Ancient City exploration by bicycle or car": {
      image: "/assets/img/polonnaruwa-ancient.jpg",
      description: "Polonnaruwa is an ancient city in Sri Lanka that served as the country's second capital after Anuradhapura. Established in the 11th century, it flourished under the rule of King Parakramabahu I during the 12th century. The city is renowned for its well-preserved ruins, which include impressive Buddhist temples, stupas, and palaces, reflecting the advanced engineering and artistry of the era. Key attractions in Polonnaruwa include the Gal Vihara, a rock temple featuring four magnificent Buddha statues, the Royal Palace, and the intricate stone carvings at the Rankot Vihara. The city is also part of the UNESCO World Heritage Site, showcasing its historical and cultural significance. Surrounded by lush greenery and wildlife, Polonnaruwa offers visitors a glimpse into Sri Lanka's rich heritage and ancient civilization.",
      highlights: [
        "UNESCO World Heritage Site",
        "Second ancient capital",
        "12th century golden age",
        "Gal Vihara rock temple",
        "Royal Palace ruins",
        "Advanced architecture"
      ]
    },
    "Tissamaharama Lake": {
      image: "/assets/img/tissamaharama-lake.jpg",
      description: "Tissamaharama Lake, or Tissa Wewa, is an ancient reservoir surrounded by greenery and abundant birdlife. It offers peaceful boat rides, especially at sunrise and sunset, when the waters reflect the surrounding flora and sky. Visitors can spot herons, pelicans, and cormorants, while enjoying the tranquility of the lake. Its historical significance, scenic beauty, and proximity to Tissamaharama town and local temples make it a favored stop for travelers seeking both nature and culture.",
      highlights: [
        "Ancient reservoir",
        "Bird watching",
        "Scenic boat rides",
        "Sunrise/sunset views",
        "Historical significance",
        "Tranquil atmosphere"
      ]
    },
    "Tissamaharama Ancient City": {
      image: "/assets/img/tissamaharama-ancient-city.jpg",
      description: "Tissamaharama, located in the southern part of Sri Lanka, was once a thriving capital of the Ruhuna Kingdom dating back to the 3rd century BC. Built during the reign of King Kavan Tissa, it served as an important political, cultural, and religious center. The city is renowned for its massive Tissamaharama Stupa, ancient monasteries, and vast irrigation reservoirs that highlight the advanced engineering skills of early Sri Lanka. Today, it is a peaceful town surrounded by paddy fields and lakes, offering travelers a glimpse into the island's rich history and heritage.",
      highlights: [
        "Ancient capital city",
        "3rd century BC heritage",
        "Tissamaharama Stupa",
        "Ancient irrigation systems",
        "Historical significance",
        "Peaceful surroundings"
      ]
    },
    "Udawalawe Safari": {
      image: "/assets/img/udawalawe-safari.jpg",
      description: "The Udawalawe Safari is one of Sri Lanka's most popular wildlife adventures, set in Udawalawe National Park in the southern part of the island. The park is world-renowned for its large elephant population, offering almost guaranteed sightings of herds roaming freely in the wild. In addition to elephants, visitors can spot water buffalo, deer, crocodiles, jackals, and a wide range of bird species, making it a paradise for nature and photography enthusiasts. The open landscapes, grasslands, and reservoir create stunning backdrops for the safari, providing an authentic and unforgettable wildlife experience in Sri Lanka.",
      highlights: [
        "Large elephant population",
        "Diverse wildlife",
        "Scenic landscapes",
        "Photography opportunities",
        "Open grasslands",
        "Reservoir views"
      ]
    },
    "Kalutara Bodhiya": {
      image: "/assets/img/kalutara-bodhiya.jpg",
      description: "Kalutara Bodhiya is a revered Buddhist temple located in the town of Kalutara, Sri Lanka, beside the Kalu Ganga (Black River). It is home to one of the 32 saplings of the sacred Jaya Sri Maha Bodhi in Anuradhapura, making it an important pilgrimage site for Buddhists. Easily accessible from the main Colombo-Galle road, it attracts both devotees and travelers. A notable feature is its hollow stupa, one of the few in the country, allowing visitors to walk inside and view murals and statues. Kalutara Bodhiya is not only a spiritual landmark but also a symbol of peace and cultural heritage.",
      highlights: [
        "Sacred Bodhi tree sapling",
        "Hollow stupa",
        "Riverside location",
        "Pilgrimage site",
        "Murals and statues",
        "Cultural heritage"
      ]
    },
    "Madhu River Boat Safari": {
      image: "/assets/img/madhu-river-boat-safari.jpg",
      description: "The Madhu River boat ride in Sri Lanka provides a scenic journey through mangroves and waterways near Balapitiya. Visitors can explore rich biodiversity, including various birds and aquatic life, and visit small islands like Kothduwa Temple and cinnamon plantations, making it a serene escape for nature lovers.",
      highlights: [
        "Scenic river journey",
        "Mangrove exploration",
        "Biodiversity viewing",
        "Island visits",
        "Kothduwa Temple",
        "Cinnamon plantations"
      ]
    },
    "Madu River Boat Safari": {
      image: "/assets/img/madhu-river-boat-safari.jpg",
      description: "The Madu River boat safari in Balapitiya, Sri Lanka, is a tranquil eco-tourism experience that takes visitors through a stunning wetland ecosystem. The river meanders through dense mangrove forests, creating a network of waterways and small islands. During the safari, you'll glide past lush vegetation, spot various bird species including kingfishers, cormorants, and herons, and observe monitor lizards basking on riverbanks. The tour includes visits to small islands with attractions such as the ancient Kothduwa Temple, cinnamon plantations where you can see traditional harvesting methods, and fish therapy centers where tiny fish naturally exfoliate your feet. Local boatmen share insights about the ecosystem, traditional fishing methods, and the importance of mangrove conservation. The river is home to over 300 species of plants and 248 species of vertebrate animals, making it a biodiversity hotspot. The peaceful atmosphere, combined with the unique blend of nature and culture, makes the Madu River boat safari a must-do activity on Sri Lanka's southern coast.",
      highlights: [
        "Dense mangrove forest ecosystems",
        "Rich biodiversity with over 300 plant species",
        "248 species of vertebrate animals",
        "Bird watching - kingfishers, cormorants, herons",
        "Visit to ancient Kothduwa Temple on island",
        "Traditional cinnamon plantation tours",
        "Natural fish therapy experience",
        "Monitor lizard sightings",
        "Traditional fishing methods demonstration",
        "Peaceful wetland scenery",
        "Eco-tourism and conservation education",
        "Local boatmen guides"
      ]
    },
    "Cinnamon Garden Visit": {
      image: "/assets/img/cinnamon-garden.jpg",
      description: "A Cinnamon Garden Visit in Sri Lanka offers a unique insight into one of the island's most prized exports – Ceylon Cinnamon. Visitors can stroll through aromatic plantations, where cinnamon trees thrive along the southern coastal belt. During the tour, you'll witness the age-old art of peeling and preparing cinnamon, a skill passed down through generations. The visit also highlights the spice's cultural and historical importance, once sought after by traders from around the world. Guests can enjoy the rich aroma, taste cinnamon-infused teas and dishes, and explore its use in oils, medicine, and cosmetics. It's an immersive experience that blends history, culture, and flavor in the heart of Sri Lanka.",
      highlights: [
        "Cinnamon cultivation",
        "Traditional peeling demonstration",
        "Historical significance",
        "Aromatic experience",
        "Tasting sessions",
        "Cultural immersion"
      ]
    },
    "Mangrove Forest Boat Safari": {
      image: "/assets/img/mangrove-forest-safari.jpg",
      description: "A Mangrove Boat Safari in Sri Lanka offers a unique opportunity to explore the country's rich coastal ecosystems and serene waterways. Gliding through calm rivers and lagoons, visitors can witness the beauty of lush mangrove forests that play a vital role in protecting shorelines and supporting diverse wildlife. These safaris often reveal a variety of bird species, reptiles, fish, and sometimes even monkeys resting in the trees. The experience is not only scenic but also educational, as it highlights the ecological importance of mangroves in maintaining biodiversity and sustaining local fishing communities. It's a peaceful and immersive journey into Sri Lanka's natural heritage.",
      highlights: [
        "Mangrove ecosystem",
        "Wildlife viewing",
        "Bird watching",
        "Educational experience",
        "Serene waterways",
        "Ecological importance"
      ]
    },
    "Coastal train ride in Sri Lanka": {
      image: "/assets/img/coastal-train-ride.jpg",
      description: "A Coastal Train Ride in Sri Lanka is one of the most scenic journeys in the country, offering breathtaking views of the island's southern and western shoreline. The train glides past golden beaches, swaying coconut palms, and fishing villages, with the sparkling blue waters of the Indian Ocean just meters away. Popular on the route from Colombo to Galle and Matara, this ride combines natural beauty with a glimpse into local coastal life. The relaxed pace, cool sea breeze, and picture-perfect scenery make it an unforgettable experience and a must-do for travelers exploring Sri Lanka.",
      highlights: [
        "Scenic coastal views",
        "Beach landscapes",
        "Coconut palm groves",
        "Fishing villages",
        "Ocean proximity",
        "Relaxed journey"
      ]
    },
    "Galle Fort": {
      image: "/assets/img/galle-fort.jpg",
      description: "Galle Fort, located in the coastal city of Galle, Sri Lanka, is a UNESCO World Heritage Site and one of the best-preserved colonial-era forts in Asia. Originally built by the Portuguese in the 16th century and later expanded by the Dutch in the 17th century, the fort showcases a blend of European architecture and South Asian culture. Its thick stone walls enclose a vibrant town with cobbled streets, historic buildings, boutique shops, and cafes. Key attractions within the fort include the Dutch Reformed Church, Galle Lighthouse, and the Maritime Museum. Galle Fort is a popular destination for its historical significance, architecture, and seaside charm.",
      highlights: [
        "UNESCO World Heritage Site",
        "Colonial architecture",
        "Cobbled streets",
        "Historic buildings",
        "Dutch Reformed Church",
        "Seaside charm"
      ]
    },
    "Old Dutch Church (Galle)": {
      image: "/assets/img/old-dutch-church-galle.jpg",
      description: "The Old Dutch Church in Galle, Sri Lanka, is one of the oldest Protestant churches still in use on the island. Built by the Dutch in 1755 within the Galle Fort, it reflects classic Dutch colonial architecture with simple yet elegant design features. The church is noted for its arched stained-glass windows, antique wooden pews, and beautifully carved tombstones that date back centuries, many of which are from the colonial period. Beyond being a place of worship, the Old Dutch Church stands as a symbol of Sri Lanka's colonial heritage and remains a popular attraction for visitors exploring the historic Galle Fort.",
      highlights: [
        "Oldest Protestant church",
        "Dutch colonial architecture",
        "Stained-glass windows",
        "Historic tombstones",
        "Colonial heritage",
        "Popular attraction"
      ]
    },
    "Coconut Tree Hill": {
      image: "/assets/img/coconut-tree-hill.jpg",
      description: "Coconut Tree Hill in Mirissa is a small headland beautifully lined with swaying coconut palms and surrounded by the deep blue ocean. It has become one of the most Instagram-famous spots in Sri Lanka, loved by visitors for its relaxed tropical vibe. Sunrise and sunset are the best times to visit, when the sky glows with magical colors.",
      highlights: [
        "Instagram-famous spot",
        "Coconut palm lined hill",
        "Ocean views",
        "Sunrise/sunset views",
        "Tropical atmosphere",
        "Photography hotspot"
      ]
    },
    "Fish Therapy": {
      image: "/assets/img/fish-therapy.jpg",
      description: "Fish Therapy is a relaxing and unique wellness experience where tiny fish gently nibble at your feet, removing dead skin cells and leaving them soft and refreshed. This natural treatment, often offered near rivers, spas, or tourist spots, is both fun and therapeutic. Many visitors enjoy the ticklish yet soothing sensation while soaking their feet in clear water filled with these small fish. Beyond relaxation, it also promotes better blood circulation and a feeling of rejuvenation, making it a popular activity to try during a Sri Lankan holiday.",
      highlights: [
        "Natural foot treatment",
        "Exfoliating fish nibble",
        "Relaxing experience",
        "Improved circulation",
        "Rejuvenating effect",
        "Popular wellness activity"
      ]
    },
    "Turtle Farm": {
      image: "/assets/img/turtle-farm.jpg",
      description: "A Turtle Farm in Sri Lanka offers visitors the chance to learn about and support the conservation of endangered sea turtles along the island's coast. These hatcheries, mainly found in places like Bentota, Kosgoda, and Hikkaduwa, protect turtle eggs from predators and poachers, nurture hatchlings, and release them safely into the ocean. Visitors can see different turtle species, observe baby turtles, and understand the importance of conservation efforts to protect these gentle marine creatures. A visit to a turtle farm is both educational and heartwarming, making it a memorable stop along Sri Lanka's southern coastline.",
      highlights: [
        "Turtle conservation",
        "Endangered species protection",
        "Hatchery experience",
        "Baby turtles observation",
        "Educational experience",
        "Coastal conservation"
      ]
    },
    "Hikkaduwa Coral Gardens": {
      image: "/assets/img/hikkaduwa-coral-gardens.jpg",
      description: "Hikkaduwa's Coral Gardens are a vibrant marine sanctuary, known for colorful coral reefs and abundant tropical fish. Snorkeling and diving here reveal an underwater kaleidoscope of parrotfish, butterflyfish, sea turtles, and anemones. Glass-bottom boat tours provide an accessible way for non-swimmers to explore the reefs. Conservation efforts in the area have helped revive damaged coral patches, making it both an educational and visually stunning destination. The nearby beaches and shops also provide a lively backdrop for a day-long excursion.",
      highlights: [
        "Vibrant coral reefs",
        "Tropical marine life",
        "Snorkeling and diving",
        "Glass-bottom boat tours",
        "Conservation efforts",
        "Lively beach atmosphere"
      ]
    },
    "Mirissa Beach": {
      image: "/assets/img/mirissa-beach.jpg",
      description: "Mirissa is one of Sri Lanka's most iconic beaches, featuring soft golden sand, gentle waves, and a vibrant coastal vibe. It is perfect for swimming, snorkeling, diving, and surfing, while its calm harbor is ideal for whale and dolphin watching during November to April. The beach has lively beachfront cafés and seafood restaurants, offering fresh catches of the day. Sunsets at Mirissa are spectacular, often with silhouettes of fishermen in traditional catamarans, and nearby coconut palms create a tropical paradise atmosphere for travelers seeking relaxation or photography opportunities.",
      highlights: [
        "Golden sand beach",
        "Swimming and water sports",
        "Whale watching harbor",
        "Beachfront dining",
        "Spectacular sunsets",
        "Tropical atmosphere"
      ]
    },
    "Whale Watching": {
      image: "/assets/img/whale-watching.jpg",
      description: "Whale watching in Mirissa, Sri Lanka, is a popular activity, especially from November to April, when the waters around the town are prime for spotting blue whales, sperm whales, and other marine species. Tours depart from Mirissa's harbor, offering a chance to see these majestic creatures in their natural habitat, often accompanied by dolphins and sea turtles. The calm seas and clear waters make it one of the best whale-watching destinations in the world.",
      highlights: [
        "Blue whale sightings",
        "Marine biodiversity",
        "Seasonal activity",
        "Boat tours",
        "Dolphin sightings",
        "Clear waters"
      ]
    },
    "Dondra Lighthouse": {
      image: "/assets/img/dondra-lighthouse.jpg",
      description: "The Dondra Head Lighthouse, located at the southern tip of Sri Lanka near Matara, is the tallest lighthouse in the country and one of the tallest in South Asia. Built during the British period in 1890, it still functions as a guiding light for ships. Surrounded by coconut palms and the roaring ocean, the site offers a calm and picturesque setting for visitors.",
      highlights: [
        "Tallest lighthouse in Sri Lanka",
        "British colonial construction",
        "Active navigation aid",
        "Southernmost point",
        "Coastal scenery",
        "Historic landmark"
      ]
    },
    "Unawatuna Beach": {
      image: "/assets/img/unawatuna-beach.jpg",
      description: "Unawatuna Beach, located just a few kilometers from Galle, is one of Sri Lanka's most popular coastal destinations. Famous for its golden sandy shores, calm turquoise waters, and palm-fringed bay, it is perfect for swimming, snorkeling, diving, and sunbathing. The area is lively, with numerous beachfront cafés, restaurants, and shops, making it ideal for both relaxation and vibrant nightlife. Visitors can also explore nearby attractions such as the Japanese Peace Pagoda, Jungle Beach, and Rumassala Hill, offering opportunities for scenic walks and panoramic views. With its combination of natural beauty, water activities, and cultural sites, Unawatuna Beach remains a must-visit destination on Sri Lanka's southern coast.",
      highlights: [
        "Golden sandy beach",
        "Calm turquoise waters",
        "Water activities",
        "Beachfront dining",
        "Nearby attractions",
        "Vibrant atmosphere"
      ]
    },
    "Rumassala Temple": {
      image: "/assets/img/rumassala-temple.jpg",
      description: "The Rumassala Temple, also known as the Japanese Peace Pagoda, is a serene Buddhist shrine located on Rumassala Hill near Unawatuna, Sri Lanka. Overlooking the southern coastline and the Indian Ocean, the temple is a symbol of peace and harmony, built with support from Japanese Buddhist monks. Visitors are drawn to its striking white stupa, tranquil atmosphere, and panoramic views of Galle Bay and the surrounding landscapes. The site is also linked to the legend of the Ramayana, adding a touch of mythological significance to its spiritual setting. It's a peaceful stop for reflection and a scenic highlight along the southern coast.",
      highlights: [
        "Japanese Peace Pagoda",
        "White stupa",
        "Panoramic ocean views",
        "Tranquil atmosphere",
        "Ramayana legend connection",
        "Spiritual significance"
      ]
    },
    "Yala Safari": {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Yala National Park, located in southeastern Sri Lanka, is the country's most visited and second-largest national park. It's renowned for its diverse ecosystems ranging from moist monsoon forests to freshwater and marine wetlands. The park is famous for having one of the highest leopard densities in the world, making it one of the best places to spot these elusive big cats. In addition to leopards, Yala is home to a wide variety of wildlife including elephants, sloth bears, crocodiles, and numerous bird species. The park offers both morning and afternoon safari experiences in 4x4 vehicles with experienced guides who help visitors spot and identify wildlife in their natural habitat.",
      highlights: [
        "Leopard Spotting",
        "Elephant Herds",
        "Bird Watching",
        "Wildlife Photography",
        "Diverse ecosystems",
        "Experienced guides"
      ]
    },
    "Yala Safari Adventure": {
      image: "/assets/img/yala-safari-adventure.jpg",
      description: "Yala National Park, located in southeastern Sri Lanka, is the country's most visited and second-largest national park. It's renowned for its diverse ecosystems ranging from moist monsoon forests to freshwater and marine wetlands. The park is famous for having one of the highest leopard densities in the world, making it one of the best places to spot these elusive big cats. In addition to leopards, Yala is home to a wide variety of wildlife including elephants, sloth bears, crocodiles, and numerous bird species. The park offers both morning and afternoon safari experiences in 4x4 vehicles with experienced guides who help visitors spot and identify wildlife in their natural habitat.",
      highlights: [
        "Leopard Spotting",
        "Elephant Herds",
        "Bird Watching",
        "Wildlife Photography",
        "Diverse ecosystems",
        "Experienced guides"
      ]
    },
    "Hamilton Dutch Canal": {
  image: "/assets/img/hamilton-dutch-canal.jpg",
  description: "The Hamilton Dutch Canal is a historic waterway that stretches from Negombo to Colombo, built during the Dutch colonial period in the 17th century. Originally constructed for the transportation of cinnamon and other goods, this canal stands as a testament to Sri Lanka's colonial engineering prowess.",
  highlights: [
    "Scenic boat rides through historic waterways",
    "Traditional fishing communities along the banks",
    "Colonial-era bridges and structures",
    "Rich biodiversity with various bird species",
    "Connection to Sri Lanka's spice trade history"
  ]
  },
    "Yala National Park Morning Safari": {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Yala National Park, located in southeastern Sri Lanka, is the country's most visited and second-largest national park. It's renowned for its diverse ecosystems ranging from moist monsoon forests to freshwater and marine wetlands. The park is famous for having one of the highest leopard densities in the world, making it one of the best places to spot these elusive big cats. In addition to leopards, Yala is home to a wide variety of wildlife including elephants, sloth bears, crocodiles, and numerous bird species. The morning safari offers the best opportunity to spot wildlife as animals are most active during the cooler hours of the day. Experienced guides accompany visitors in 4x4 vehicles, helping them spot and identify wildlife in their natural habitat.",
      highlights: [
        "Leopard Spotting",
        "Elephant Herds",
        "Bird Watching",
        "Wildlife Photography",
        "Best wildlife viewing time",
        "Experienced guides"
      ]
    },
    "Weligama Beach": {
      image: "/assets/img/weligama-beach.jpg",
      description: "Weligama Beach is a wide sandy bay, famous for stilt fishermen and gentle waves suitable for beginner surfers. Visitors can take surfing lessons, enjoy boat rides on the lagoon, or simply relax on the sun-drenched sands. The town has a relaxed coastal vibe with seafood restaurants, local markets, and boutique guesthouses. Its combination of traditional fishing culture and modern beachside amenities makes it a quintessential southern coastal experience.",
      highlights: [
        "Wide sandy bay",
        "Stilt fishermen",
        "Beginner surfing",
        "Boat rides",
        "Seafood dining",
        "Relaxed atmosphere"
      ]
    },
    "Sri Pada": {
      image: "/assets/img/sri-pada.jpg",
      description: "Sri Pada (also known as Adam's Peak) is a sacred mountain located in central Sri Lanka, standing at 2,243 meters (7,359 feet) tall. It is renowned for the 'Sacred Footprint' (Sri Pada in Sinhala) at its summit—a rock formation believed to be the footprint of a spiritual figure. This footprint holds religious significance for multiple faiths. Pilgrims from all over the world climb Sri Pada, especially during the pilgrimage season (December to May), often starting their ascent at night to reach the summit by sunrise. The mountain is not only a place of worship but also offers breathtaking natural beauty and panoramic views.",
      highlights: [
        "Sacred mountain",
        "2,243 meters tall",
        "Sacred Footprint",
        "Multi-faith significance",
        "Pilgrimage site",
        "Panoramic views"
      ]
    },
    "Hindu Temple": {
      image: "/assets/img/hindu-temple.jpg",
      description: "The Sri Ponnambalawaneswararm Temple is a prominent Hindu temple located in the heart of Colombo, Sri Lanka. Dedicated to Lord Shiva, this temple is known for its vibrant Dravidian architecture and religious significance to the Tamil Hindu community. It is situated in the area of Pettah and is a popular destination for worshippers and tourists alike. The temple hosts various festivals, with the most notable being Maha Shivaratri, attracting devotees from all over the country. The temple is known for its peaceful atmosphere, intricate carvings, and colorful statues.",
      highlights: [
        "Dravidian architecture",
        "Lord Shiva dedication",
        "Religious significance",
        "Festivals and celebrations",
        "Intricate carvings",
        "Colorful statues"
      ]
    },
    "Goyambokka Beach": {
      image: "/assets/img/goyambokka-beach.jpg",
      description: "Nestled near Tangalle, Goyambokka Beach is a quiet, palm-fringed stretch of golden sand with turquoise waters. Unlike the more crowded southern beaches, it offers a tranquil escape where visitors can swim, sunbathe, or take long, peaceful walks along the shore. The surrounding area is dotted with small fishing villages, allowing travelers to observe traditional fishing practices and local life. Early mornings provide a serene atmosphere ideal for meditation or photography, while sunsets create a magical golden glow over the beach.",
      highlights: [
        "Quiet palm-fringed beach",
        "Golden sand",
        "Turquoise waters",
        "Tranquil atmosphere",
        "Fishing villages",
        "Stunning sunsets"
      ]
    },
    "Lotus Tower": {
      image: "/assets/img/lotus-tower.jpg",
      description: "The Lotus Tower, located in Colombo, Sri Lanka, is a striking telecommunications and observation tower, and it holds the title of the tallest structure in the country, standing at 350 meters (1,150 feet). Completed in 2019 after years of construction, the tower is designed in the shape of a lotus flower, symbolizing purity and enlightenment—values that hold deep cultural and religious significance in Sri Lanka. Serving multiple purposes, the Lotus Tower functions as a key hub for broadcasting and telecommunications, while also offering a revolving restaurant, an observation deck, and conference halls. Its impressive design and towering height have quickly made it one of Colombo's most iconic landmarks, enhancing the city's skyline and tourism appeal. The tower embodies both modern innovation and Sri Lanka's rich cultural heritage. One of the most captivating aspects of the Lotus Tower is its pixel bloom—a dazzling light display that transforms the tower at night. This dynamic LED lighting system creates a vibrant, blooming lotus effect across the tower's surface, adding an extra layer of visual allure. The light show not only highlights the tower's unique design but also brings the structure to life, becoming a striking feature of Colombo's skyline after dark.",
      highlights: [
        "Tallest structure in Sri Lanka",
        "350 meters tall",
        "Lotus flower design",
        "Observation deck",
        "Revolving restaurant",
        "Night light show"
      ]
    },
    "Negombo Beach": {
      image: "/assets/img/negombo-beach.jpg",
      description: "Negombo Beach is a wide stretch of golden sand along the western coast of Sri Lanka. Known for its calm waters and picturesque sunsets, it's a popular destination for both locals and tourists. The beach is lined with palm trees and offers a variety of water sports activities. Nearby fishing villages and the bustling Negombo Fish Market add cultural interest to this coastal paradise.",
      highlights: [
        "Golden sandy beach",
        "Calm waters",
        "Picturesque sunsets",
        "Water sports",
        "Fishing villages",
        "Coastal paradise"
      ]
    },
    "Anuradhapura Ancient City": {
      image: "/assets/img/anuradhapura.jpg",
      description: "Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an ancient Sri Lankan civilization. The city, now a UNESCO World Heritage Site, was the center of Theravada Buddhism for many centuries. It features magnificent stupas, ancient pools, and temple complexes that showcase the architectural prowess of ancient Sri Lanka. The sacred Sri Maha Bodhi tree, believed to be a sapling from the original Bodhi tree under which Buddha attained enlightenment, is a major pilgrimage site.",
      highlights: [
        "UNESCO World Heritage Site",
        "Ancient capital of Sri Lanka",
        "Magnificent stupas and dagobas",
        "Sacred Sri Maha Bodhi tree",
        "Ancient pools and reservoirs",
        "Temple complexes and monasteries",
        "Archaeological treasures",
        "Buddhist pilgrimage site"
      ]
    },
    "Anuradhapura": {
      image: "/assets/img/anuradhapura.jpg",
      description: "Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an ancient Sri Lankan civilization. The city, now a UNESCO World Heritage Site, was the center of Theravada Buddhism for many centuries. It features magnificent stupas, ancient pools, and temple complexes that showcase the architectural prowess of ancient Sri Lanka. The sacred Sri Maha Bodhi tree, believed to be a sapling from the original Bodhi tree under which Buddha attained enlightenment, is a major pilgrimage site.",
      highlights: [
        "UNESCO World Heritage Site",
        "Ancient ruins",
        "Magnificent stupas",
        "Sacred Sri Maha Bodhi tree",
        "Ancient pools",
        "Temple complexes"
      ]
    },
    "Gal Vihara": {
      image: "/assets/img/gal-vihara.jpg",
      description: "Gal Vihara, located in Polonnaruwa, is a rock temple of the Buddha, famous for its four colossal statues carved out of a single granite rock. Dating back to the 12th century, it consists of a standing Buddha, a reclining Buddha, and two seated Buddha images. The statues are considered masterpieces of Sri Lankan Buddhist art, showcasing exceptional craftsmanship and attention to detail. The serene atmosphere and historical significance make Gal Vihara a must-visit site in Polonnaruwa.",
      highlights: [
        "Rock temple",
        "Four colossal Buddha statues",
        "Single granite rock carving",
        "12th century heritage",
        "Buddhist art masterpiece",
        "Serene atmosphere"
      ]
    },
    "Rankot Vihara": {
      image: "/assets/img/rankot-vihara.jpg",
      description: "Rankot Vihara is a massive stupa located in the ancient city of Polonnaruwa. Built by King Nissanka Malla in the 12th century, it stands 54 meters high and is the fourth largest stupa in Sri Lanka. The stupa is constructed entirely from brick and is surrounded by a cluster of smaller stupas and image houses. The site offers a glimpse into the grandeur of ancient Sri Lankan architecture and the significance of Buddhism during the Polonnaruwa kingdom.",
      highlights: [
        "Massive stupa",
        "Fourth largest in Sri Lanka",
        "12th century construction",
        "Brick architecture",
        "Surrounded by smaller stupas",
        "Ancient kingdom heritage"
      ]
    },
    "Royal Palace": {
      image: "/assets/img/royal-palace.jpg",
      description: "The Royal Palace in Polonnaruwa was once the magnificent residence of King Parakramabahu the Great. Though now in ruins, the remaining walls and foundations give an idea of its former grandeur. The palace complex included audience halls, council chambers, and living quarters. The site provides valuable insights into the royal lifestyle and architectural achievements of ancient Sri Lanka during the Polonnaruwa period.",
      highlights: [
        "Ancient royal residence",
        "King Parakramabahu's palace",
        "Ruins of grandeur",
        "Audience halls",
        "Council chambers",
        "Architectural achievements"
      ]
    },
    "Kaudulla National Park": {
      image: "/assets/img/kaudulla-national-park.jpg",
      description: "Kaudulla National Park is a protected area located near Polonnaruwa, known for its large elephant population. The park centers around the Kaudulla Tank, an ancient reservoir that attracts wildlife, especially during the dry season. In addition to elephants, visitors can spot sambar deer, leopards, sloth bears, and a variety of bird species. The park offers a more secluded safari experience compared to some of Sri Lanka's more popular national parks.",
      highlights: [
        "Protected wildlife area",
        "Large elephant population",
        "Ancient Kaudulla Tank",
        "Diverse wildlife",
        "Bird watching",
        "Secluded safari experience"
      ]
    },
    "Minneriya National Park": {
      image: "/assets/img/minneriya-national-park.jpg",
      description: "Minneriya National Park is famous for the 'Gathering,' one of Asia's most spectacular wildlife phenomena. During the dry season (July to October), hundreds of elephants congregate around the Minneriya Tank to feed and bathe. The park also hosts sambar deer, leopards, and numerous bird species. The annual elephant gathering is a must-see event for wildlife enthusiasts visiting Sri Lanka.",
      highlights: [
        "The Gathering - elephant phenomenon",
        "Hundreds of elephants",
        "Minneriya ancient tank",
        "Seasonal wildlife spectacle",
        "Diverse animal species",
        "Bird watching"
      ]
    },
    "Wasgamuwa National Park": {
      image: "/assets/img/wasgamuwa-national-park.jpg",
      description: "Wasgamuwa National Park is located in the Matale and Polonnaruwa districts, known for its diverse habitats ranging from tropical forests to grasslands. The park is home to a variety of wildlife including elephants, leopards, sloth bears, and water buffalo. The Mahaweli River flows along the park's boundaries, creating wetlands that attract numerous bird species. Wasgamuwa offers a less crowded safari experience with opportunities to spot rare wildlife in their natural habitat.",
      highlights: [
        "Diverse habitats",
        "Elephant populations",
        "Mahaweli River wetlands",
        "Leopard sightings",
        "Bird watching",
        "Less crowded safari"
      ]
    },
    "Knuckles Mountain Range": {
      image: "/assets/img/knuckles-mountain-range.jpg",
      description: "The Knuckles Mountain Range, named for its resemblance to a clenched fist, is a UNESCO World Heritage Site in central Sri Lanka. It features rugged peaks, pristine forests, and diverse ecosystems. The range is home to numerous endemic plant and animal species. Popular activities include trekking to viewpoints like Mini World's End, visiting traditional villages, and exploring waterfalls. The area offers breathtaking scenery and a cool climate, making it a paradise for nature lovers and hikers.",
      highlights: [
        "UNESCO World Heritage Site",
        "Rugged mountain peaks",
        "Endemic species",
        "Trekking opportunities",
        "Traditional villages",
        "Waterfalls"
      ]
    },
    "Bambarakanda Falls": {
      image: "/assets/img/bambarakanda-falls.jpg",
      description: "Bambarakanda Falls is the tallest waterfall in Sri Lanka, cascading down a height of 263 meters. Located in the Kalupahana area, the waterfall is surrounded by lush green forests and mountainous terrain. The best time to visit is during the rainy season when the waterfall is at its full glory. The site offers a refreshing escape into nature, with opportunities for photography and short hikes in the surrounding area.",
      highlights: [
        "Tallest waterfall in Sri Lanka",
        "263 meters height",
        "Lush forest surroundings",
        "Mountainous terrain",
        "Best in rainy season",
        "Photography opportunities"
      ]
    },
    "Diyaluma Falls": {
      image: "/assets/img/diyaluma-falls.jpg",
      description: "Diyaluma Falls is the second tallest waterfall in Sri Lanka, with a height of 220 meters. Located near Koslanda in the Badulla District, it cascades in a beautiful formation that resembles a bridal veil. The waterfall is easily accessible and offers natural pools at different levels where visitors can swim. The surrounding area provides stunning views of the southern plains, making it a popular spot for nature lovers and photographers.",
      highlights: [
        "Second tallest waterfall",
        "220 meters height",
        "Bridal veil formation",
        "Natural swimming pools",
        "Accessible location",
        "Scenic views"
      ]
    },
    "Bopath Ella": {
      image: "/assets/img/bopath-ella.jpg",
      description: "Bopath Ella is a beautiful waterfall located in the Ratnapura District, shaped like a Bo leaf (sacred fig leaf), from which it gets its name. The waterfall cascades down in three stages and is surrounded by lush greenery. It's easily accessible and a popular picnic spot for locals. The area around the waterfall is rich in biodiversity, and visitors can often spot various bird species and butterflies.",
      highlights: [
        "Bo leaf shaped waterfall",
        "Three-stage cascade",
        "Lush green surroundings",
        "Accessible location",
        "Picnic spot",
        "Biodiversity hotspot"
      ]
    },
    "Devon Falls": {
      image: "/assets/img/devon-falls.jpg",
      description: "Devon Falls is a stunning 97-meter high waterfall located along the A7 highway between Nuwara Eliya and Talawakele. Named after a pioneer coffee planter, the waterfall is visible from the main road, making it a popular stop for travelers. The waterfall cascades down a rocky cliff into a valley below, creating a picturesque scene against the backdrop of tea plantations. The area around Devon Falls offers viewpoints and short trails for visitors to enjoy the natural beauty.",
      highlights: [
        "97-meter high waterfall",
        "Highway visibility",
        "Coffee planter namesake",
        "Rocky cliff cascade",
        "Tea plantation backdrop",
        "Viewpoints and trails"
      ]
    },
    "St. Clair's Falls": {
      image: "/assets/img/st-clairs-falls.jpg",
      description: "St. Clair's Falls, often called the 'Little Niagara of Sri Lanka,' is a picturesque waterfall located near Talawakele. It consists of two waterfalls called Maha Ella ('Greater Fall') and Kuda Ella ('Lesser Fall'), which together create a beautiful cascade visible from the A7 highway. The waterfall is surrounded by tea plantations and offers stunning views, especially during the rainy season when the water flow is at its peak.",
      highlights: [
        "Little Niagara of Sri Lanka",
        "Two cascading waterfalls",
        "Highway visibility",
        "Tea plantation surroundings",
        "Rainy season beauty",
        "Scenic views"
      ]
    },
    "Laxapana Falls": {
      image: "/assets/img/laxapana-falls.jpg",
      description: "Laxapana Falls is one of the most beautiful and famous waterfalls in Sri Lanka, with a height of 126 meters. Located in Maskeliya, it's formed by the Maskeliya Oya and is a major source of hydroelectric power generation in the country. The waterfall is surrounded by lush green forests and offers breathtaking views. Visitors can enjoy the natural beauty while learning about the importance of hydroelectric power in Sri Lanka's development.",
      highlights: [
        "126-meter high waterfall",
        "Hydroelectric power source",
        "Maskeliya Oya formation",
        "Lush forest surroundings",
        "Breathtaking views",
        "Educational significance"
      ]
    },
    "Ramboda Falls": {
      image: "/assets/img/ramboda-fall.jpg",
      description: "Ramboda Falls is a stunning waterfall located between Nuwara Eliya and Kandy, visible from the A5 highway. It cascades down in multiple steps from a height of 109 meters. The waterfall is surrounded by dense forests and tea plantations, creating a picturesque landscape. There's a viewpoint near the highway where visitors can stop to admire the falls, and a more adventurous path leads closer to the base for a more immersive experience.",
      highlights: [
        "109-meter high waterfall",
        "Multiple-step cascade",
        "Highway visibility",
        "Dense forest surroundings",
        "Tea plantation backdrop",
        "Viewpoint access"
      ]
    },
     "Rumassala": {
      image: "/assets/img/rumassala-temple.jpg",
      description: "Rumassala, also known as 'Buona Vista' (meaning 'Good View' in Portuguese), is a mystical hill located near Unawatuna in Galle, rising about 60 meters above sea level. This rainforested promontory is steeped in legend from the Ramayana epic, where it is believed that the monkey god Hanuman dropped a fragment of the Himalayan mountain here while searching for life-saving herbs. The hill possesses a unique ecosystem with rare medicinal plants not found elsewhere in Sri Lanka, and scientists have discovered magnetic anomalies suggesting possible meteorite origins. During colonial times, it served as a strategic vantage point for monitoring maritime activity. Today, visitors can explore the Japanese Peace Pagoda at the summit, hike through lush forests, visit the hidden Jungle Beach, and enjoy panoramic views of the Indian Ocean and Galle Fort.",
      highlights: [
        "Ramayana legend connection",
        "Unique medicinal plants",
        "Japanese Peace Pagoda at summit",
        "Panoramic ocean views",
        "Hidden Jungle Beach access",
        "Magnetic anomalies and mysteries",
        "Colonial-era cemetery",
        "Rich biodiversity and wildlife"
      ]
    },

    "Japanese Peace Pagoda": {
      image: "/assets/img/japanese-peace-pagoda.jpg",
      description: "The Japanese Peace Pagoda, officially known as Sama Ceitya, is a striking white Buddhist stupa located atop Rumassala Hill near Unawatuna. Built on February 23, 2004, by the Japanese Buddhist order Nipponzan Myohoji, it stands as a symbol of peace and harmony, constructed during Sri Lanka's civil conflict to promote non-violence. This is one of five peace pagodas built in Sri Lanka (others are in Sri Pada, Bandarawela, Walapane, and Ampara) and part of a global network of over 80 peace pagodas worldwide. The brilliant white stupa is surrounded by gold-painted Buddha statues and offers breathtaking panoramic views of Galle Bay, the southern coastline, and the Indian Ocean. Visitors can walk around the shrine, meditate in its tranquil atmosphere, and witness spectacular sunsets. The pagoda represents the enduring spiritual bond between Japan and Sri Lanka and serves as a testament to Buddhist values of peace and compassion.",
      highlights: [
        "Symbol of peace and harmony",
        "Built by Japanese Buddhist monks in 2004",
        "Stunning white stupa design",
        "Panoramic views of Galle Bay",
        "Gold-painted Buddha statues",
        "Spectacular sunset viewpoint",
        "One of five pagodas in Sri Lanka",
        "Spiritual meditation site"
      ]
    },

    "Unawatuna Beach": {
      image: "/assets/img/unawatuna-beach.jpg",
      description: "Unawatuna Beach, located just a few kilometers from Galle, is one of Sri Lanka's most popular coastal destinations. Famous for its golden sandy shores, calm turquoise waters, and palm-fringed bay, it is perfect for swimming, snorkeling, diving, and sunbathing. The name 'Unawatuna' is believed to derive from the Sinhala phrase 'Unna Wetuna,' meaning 'here it fell,' referring to the Ramayana legend of Hanuman dropping a fragment of the Himalayan mountain. The area is lively, with numerous beachfront cafés, restaurants, and shops, making it ideal for both relaxation and vibrant nightlife. Visitors can also explore nearby attractions such as the Japanese Peace Pagoda, Jungle Beach, and Rumassala Hill, offering opportunities for scenic walks and panoramic views. The bay is protected by a reef, making it one of the safest swimming spots on Sri Lanka's southern coast. With its combination of natural beauty, water activities, and cultural sites, Unawatuna Beach remains a must-visit destination.",
      highlights: [
        "Golden sandy beach",
        "Calm turquoise waters",
        "Protected bay for safe swimming",
        "Water sports and diving",
        "Beachfront cafés and restaurants",
        "Vibrant nightlife",
        "Nearby Japanese Peace Pagoda",
        "Ramayana legend connection"
      ]
    },

    "Thissamaharama Ancient City": {
      image: "/assets/img/thissamaharama-ancient-city.jpg",
      description: "Tissamaharama, located in the southern part of Sri Lanka, was once a thriving capital of the Ruhuna Kingdom dating back to the 3rd century BC. Built during the reign of King Kavan Tissa (the father of the legendary King Dutugemunu), it served as an important political, cultural, and religious center of ancient Sri Lanka. The city is renowned for its massive Tissamaharama Stupa (Yatala Dagoba), one of the largest ancient stupas in the country, ancient monasteries, and vast irrigation reservoirs that highlight the advanced engineering skills of early Sri Lankan civilization. The ancient reservoir system, including the Tissa Wewa (Tissamaharama Lake), demonstrates sophisticated hydraulic engineering from over 2,000 years ago. Archaeological excavations have revealed palace ruins, monastic complexes, and inscriptions that provide valuable insights into the island's early kingdoms. Today, Tissamaharama is a peaceful town surrounded by paddy fields and lakes, serving as a gateway to Yala National Park while offering travelers a glimpse into Sri Lanka's rich historical heritage.",
      highlights: [
        "Ancient capital of Ruhuna Kingdom",
        "3rd century BC heritage",
        "Tissamaharama Stupa (Yatala Dagoba)",
        "King Kavan Tissa's legacy",
        "Ancient irrigation systems",
        "Archaeological significance",
        "Gateway to Yala National Park",
        "Historic monasteries and ruins"
      ]
    },

    "Thissamaharama Lake": {
      image: "/assets/img/thissamaharama-lake.jpg",
      description: "Tissamaharama Lake, also known as Tissa Wewa, is an ancient man-made reservoir dating back to the 3rd century BC, built during the reign of King Kavan Tissa as part of the sophisticated irrigation system of the Ruhuna Kingdom. Spanning a significant area, this scenic lake is surrounded by lush greenery and abundant birdlife, making it a haven for nature lovers and bird watchers. The reservoir continues to serve agricultural purposes while providing a tranquil setting for relaxation and recreation. Visitors can enjoy peaceful boat rides, especially during sunrise and sunset when the waters beautifully reflect the surrounding flora and sky. The lake attracts a diverse array of water birds including herons, pelicans, cormorants, egrets, and painted storks. The walking path around the lake offers stunning views of the ancient stupa and surrounding landscape. Its historical significance, scenic beauty, and proximity to Tissamaharama town, local temples, and Yala National Park make it a favored stop for travelers seeking both natural beauty and cultural heritage.",
      highlights: [
        "Ancient reservoir from 3rd century BC",
        "Built by King Kavan Tissa",
        "Abundant birdlife and wildlife",
        "Scenic boat rides",
        "Spectacular sunrise/sunset views",
        "Walking paths with lake views",
        "Historical irrigation engineering",
        "Tranquil natural atmosphere"
      ]
    },

    "Overnight in Yala": {
      image: "/assets/img/yala-accommodation.jpg",
      description: "Staying overnight near Yala National Park offers an immersive wildlife experience in one of Sri Lanka's most biodiverse regions. Accommodations range from luxury safari lodges and eco-resorts to comfortable guesthouses, many designed to blend harmoniously with the natural environment. Evening and early morning are the best times for wildlife viewing, and staying nearby allows you to participate in both sunset and sunrise safari drives when animals are most active. Many lodges offer elevated viewing platforms, campfire gatherings, and traditional Sri Lankan dining experiences. The area around Yala provides a unique opportunity to hear the sounds of the wild at night and wake up to the calls of jungle birds.",
      highlights: [
        "Close proximity to Yala National Park",
        "Luxury safari lodges available",
        "Early morning safari access",
        "Sunset and evening game drives",
        "Immersive wildlife experience",
        "Eco-friendly accommodations",
        "Traditional Sri Lankan hospitality",
        "Jungle ambiance and sounds"
      ]
    },
    "Little Adam's Peak": {
      image: "/assets/img/little-adams-peak.jpg",
      description: "Little Adam's Peak is a popular hiking destination in Ella, Sri Lanka, offering breathtaking panoramic views of the surrounding countryside. Despite its name referencing the sacred Adam's Peak (Sri Pada), this is a much easier and shorter trek, making it accessible to most fitness levels. The trail winds through lush tea plantations and offers stunning vistas of Ella Gap, the Ella Rock, and the vast plains below. At the summit, you'll find a small Buddhist shrine and a flagpole, where visitors often leave prayer flags. The hike typically takes about 1-2 hours round trip and is particularly beautiful during sunrise or sunset when the landscape is bathed in golden light. The area around Little Adam's Peak is also known for its diverse birdlife and colorful butterflies, making it a paradise for nature enthusiasts and photographers.",
      highlights: [
        "Easy hiking trail suitable for all fitness levels",
        "Panoramic views of Ella Gap and surrounding landscapes",
        "Tea plantation scenery",
        "Buddhist shrine at the summit",
        "Perfect for sunrise and sunset photography",
        "Rich biodiversity with birds and butterflies",
        "Short 1-2 hour round trip hike",
        "Stunning 360-degree views from the top"
      ]
    },
    "Kandy Cultural Show": {
      image: "/assets/img/kandyan-cultural-dance.jpg",
      description: "The Kandy Cultural Show is a vibrant performance that showcases Sri Lanka's rich traditional dance heritage. Held in the cultural capital of Kandy, this captivating show features a variety of dance forms that have been passed down through generations. The performance includes the famous Kandyan dance, known for its elegant movements and elaborate costumes, as well as fire walking, fire eating, and traditional drumming. Dancers adorned in colorful traditional costumes perform intricate choreography that tells stories from Sri Lankan folklore and history. The show provides visitors with an immersive cultural experience, offering insight into the island's artistic traditions and spiritual practices. The rhythmic beats of traditional drums combined with the graceful movements of the dancers create a mesmerizing spectacle that appeals to audiences of all ages.",
      highlights: [
        "Traditional Kandyan dance performances",
        "Colorful costumes and elaborate masks",
        "Fire walking and fire eating demonstrations",
        "Traditional drumming and music",
        "Cultural storytelling through dance",
        "Authentic Sri Lankan cultural experience",
        "Perfect introduction to local traditions",
        "Evening entertainment in cultural capital"
      ]
    },
    "Temple of Tooth Relic": {
      image: "/assets/img/temple-of-sacred-tooth.jpg",
      description: "The Temple of the Sacred Tooth Relic, or Sri Dalada Maligawa, is one of the most sacred Buddhist sites in Sri Lanka. Located in the heart of Kandy, this magnificent temple houses the sacred tooth relic of the Buddha, which is believed to have been brought to Sri Lanka in the 4th century AD. The temple complex is part of the former royal palace and showcases exquisite Kandyan architecture with intricate wood carvings, golden canopies, and beautiful paintings. The relic is kept in a golden casket and is displayed during special ceremonies. Daily rituals and offerings are performed throughout the day, accompanied by traditional drumming and chanting. The temple is a UNESCO World Heritage Site and the focal point of the famous Esala Perahera, a grand procession held annually in July or August. Visitors can explore the temple's museum, which displays a collection of artifacts related to the relic's history, and witness the spiritual atmosphere that permeates this sacred site.",
      highlights: [
        "Sacred tooth relic of Buddha",
        "UNESCO World Heritage Site",
        "Exquisite Kandyan architecture",
        "Daily rituals and ceremonies",
        "Traditional drumming and chanting",
        "Museum with historical artifacts",
        "Focal point of Esala Perahera festival",
        "Spiritual and cultural significance"
      ]
    },
    "Overnight in Kandy": {
      image: "/assets/img/kandy-city.jpg",
      description: "Kandy, nestled amidst lush green hills at an elevation of 500 meters above sea level, is Sri Lanka's cultural capital and a UNESCO World Heritage Site. An overnight stay in Kandy offers visitors the opportunity to immerse themselves in the city's rich cultural heritage and natural beauty. The city is home to the sacred Temple of the Tooth Relic, where visitors can witness evening ceremonies and experience the spiritual atmosphere. Accommodations in Kandy range from luxury hotels with stunning lake views to charming boutique properties nestled in tea plantations. The city's cool climate provides a refreshing break from the tropical heat of the coast. Evening cultural shows featuring traditional Kandyan dance are popular among visitors. The city center offers shopping for local handicrafts, gems, and spices, while the surrounding area is dotted with tea plantations and spice gardens that can be explored the next day. A night in Kandy is not just about rest but an integral part of the Sri Lankan cultural experience.",
      highlights: [
        "Cultural capital of Sri Lanka",
        "UNESCO World Heritage Site",
        "Cool hill country climate",
        "Accommodations with lake and mountain views",
        "Evening cultural shows",
        "Shopping for local handicrafts and gems",
        "Proximity to tea plantations and spice gardens",
        "Authentic Sri Lankan dining experiences"
      ]
    },
    // NEW ADDITIONS
    "Matale Hindu Temple": {
      image: "/assets/img/matale-hindu-temple.jpg",
      description: "The Matale Hindu Temple, officially known as the Sri Muthumariamman Temple, is a vibrant and sacred Hindu shrine located in the heart of Matale town. This colorful temple is dedicated to Goddess Muthumariamman, a form of Goddess Parvati, and is an important religious center for the local Hindu community. The temple features stunning Dravidian architecture with intricately carved gopurams (towering gateways), colorful statues of Hindu deities, and elaborate religious artwork. The temple comes alive during festivals, especially the annual Thai Pongal celebration and Navaratri, when devotees gather to offer prayers and participate in traditional ceremonies. The peaceful atmosphere, combined with the temple's architectural beauty and spiritual significance, makes it a must-visit cultural site for those exploring Sri Lanka's diverse religious heritage.",
      highlights: [
        "Vibrant Dravidian architecture",
        "Dedicated to Goddess Muthumariamman",
        "Intricate gopurams and religious artwork",
        "Colorful Hindu deity statues",
        "Annual Thai Pongal celebrations",
        "Navaratri festival ceremonies",
        "Peaceful spiritual atmosphere",
        "Important Hindu cultural center"
      ]
    },
    "Nalanda Gedige Temple": {
      image: "/assets/img/nalanda-gedige-temple.jpg",
      description: "Nalanda Gedige is an ancient stone temple located near Matale, Sri Lanka, dating back to the 8th-10th century. This remarkable archaeological site showcases a unique blend of Buddhist and Hindu architectural styles, making it one of the most interesting historical monuments in Sri Lanka. The temple features a stone building with intricate carvings, a mandapa (hall), and a sanctum, all constructed using precise stone-cutting techniques without mortar. The site gained fame for being perfectly centered on the island, and interestingly, it was moved from its original location in 1982 when the Bowatenne Tank was created, to protect it from flooding. The temple's carvings depict both Buddhist and Hindu motifs, reflecting the religious harmony that existed in ancient Sri Lanka. Surrounded by lush paddy fields and coconut plantations, Nalanda Gedige offers visitors a glimpse into the island's ancient architectural prowess and cultural synthesis.",
      highlights: [
        "Ancient stone temple from 8th-10th century",
        "Unique blend of Buddhist and Hindu architecture",
        "Precise stone construction without mortar",
        "Relocated in 1982 to preserve from flooding",
        "Intricate carvings with religious motifs",
        "Perfectly centered on Sri Lanka",
        "Archaeological significance",
        "Scenic rural surroundings"
      ]
    },
    "Minneriya/Kawdulla/Eco Park Wild Safari": {
      image: "/assets/img/minneriya-wild-safari.jpg",
      description: "The Minneriya/Kaudulla/Eco Park Wild Safari offers an unforgettable wildlife experience in Sri Lanka's North Central Province. These three national parks are renowned for hosting one of the world's most spectacular wildlife phenomena - 'The Gathering,' where hundreds of Asian elephants congregate during the dry season (July to October) around the ancient reservoirs. Minneriya National Park is famous for its large elephant gatherings, Kaudulla offers excellent leopard and sloth bear sightings, while Eco Park provides a more intimate wildlife experience with diverse bird species. The safari takes you through diverse landscapes including dry zone forests, grasslands, and wetlands, home to elephants, leopards, sloth bears, sambar deer, wild buffalo, and over 160 species of birds. Experienced guides and drivers help track wildlife and share insights about animal behavior and conservation efforts. The best time for safaris is early morning or late afternoon when animals are most active.",
      highlights: [
        "Witness 'The Gathering' of hundreds of elephants",
        "Three premier national parks in one experience",
        "Excellent leopard and sloth bear sightings",
        "Diverse ecosystems and landscapes",
        "Over 160 bird species",
        "Ancient reservoirs and historical sites",
        "Experienced wildlife guides",
        "Best viewing times: early morning and late afternoon"
      ]
    },
    "Beach Leisure/Water Sports at Pasikuda": {
      image: "/assets/img/beach-leisure-pasikuda.jpg",
      description: "Pasikuda Bay, located on Sri Lanka's east coast, is a pristine tropical paradise renowned for its calm, turquoise waters and one of the longest stretches of shallow reef-lined coastlines in the world. The bay's unique geography creates a natural swimming pool-like environment with waters rarely exceeding waist-deep for hundreds of meters, making it ideal for families and safe swimming enthusiasts. The beach offers a perfect blend of relaxation and adventure, with opportunities for sunbathing on the soft golden sand, beach volleyball, and building sandcastles. Water sports enthusiasts can enjoy jet skiing, banana boat rides, windsurfing, and kayaking in the protected waters. The area also features some of Sri Lanka's best snorkeling spots, with vibrant coral reefs teeming with colorful marine life just offshore. Several luxury resorts and boutique hotels line the beach, offering world-class amenities, spa treatments, and exquisite dining experiences with fresh seafood. The bay is particularly beautiful during sunrise and sunset, creating perfect opportunities for photography and romantic walks along the shore.",
      highlights: [
        "One of the world's longest shallow reef coastlines",
        "Natural swimming pool-like calm waters",
        "Safe for families and children",
        "Wide range of water sports activities",
        "Excellent snorkeling with coral reefs",
        "Luxury beachfront resorts",
        "Perfect for sunrise and sunset photography",
        "Fresh seafood dining experiences"
      ]
    },
    "Koneswaram Temple": {
      image: "/assets/img/koneshwaram-temple.jpg",
      description: "Koneswaram Temple, also known as Thirukoneswaram Kovil, is a sacred Hindu temple perched dramatically on Swami Rock, a cliff overlooking the Indian Ocean in Trincomalee. This ancient temple, dedicated to Lord Shiva, is one of the five Iswarams (abodes of Shiva) in Sri Lanka and holds immense religious significance for Hindus worldwide. The temple features stunning Dravidian architecture with colorful gopurams, intricate stone carvings, and sacred shrines. The location offers breathtaking panoramic views of the ocean and the natural harbor below. According to legend, the temple was originally built thousands of years ago and was destroyed by Portuguese colonists in the 17th century, with sacred items thrown into the sea. The modern temple was rebuilt in the 1950s and continues to be an important pilgrimage site. The nearby Lover's Leap, where a Dutch princess allegedly jumped to her death after being forbidden to marry a local, adds to the area's mystique. The temple is particularly vibrant during the annual Mahashivaratri festival when thousands of devotees gather for special prayers and ceremonies.",
      highlights: [
        "Ancient Hindu temple dedicated to Lord Shiva",
        "One of the five sacred Iswarams of Sri Lanka",
        "Dramatic cliff-top location with ocean views",
        "Stunning Dravidian architecture",
        "Important pilgrimage site for Hindus",
        "Annual Mahashivaratri festival celebrations",
        "Lover's Leap viewpoint nearby",
        "Rich historical and religious significance"
      ]
    },
    "Pigeon Island National Park": {
      image: "/assets/img/pigeon-island.jpg",
      description: "Pigeon Island National Park, located just off the coast of Nilaveli near Trincomalee, is a marine paradise comprising two islands - Pigeon Island and Small Pigeon Island. This protected area, established in 2003, is renowned for having some of the best coral reefs in Sri Lanka, making it a premier destination for snorkeling and diving. The park's crystal-clear waters offer visibility of up to 20 meters, revealing a vibrant underwater world teeming with over 100 species of coral and 300 species of reef fish. The islands are named after the rock pigeon which nests here, and visitors can also spot various marine turtles including the endangered hawksbill and green turtles. The larger island features a beautiful white sand beach perfect for relaxation between snorkeling sessions, while the surrounding waters are home to blacktip reef sharks, sea snakes, and occasionally even dolphins. The park offers guided snorkeling tours where marine biologists provide insights into the coral ecosystem and conservation efforts. The best time to visit is from April to October when the sea is calm and visibility is at its peak.",
      highlights: [
        "Premier snorkeling and diving destination",
        "Over 100 coral species and 300 reef fish species",
        "Crystal-clear waters with up to 20m visibility",
        "Habitat for endangered sea turtles",
        "Blacktip reef shark sightings",
        "Two beautiful islands with white sand beaches",
        "Guided marine biology tours available",
        "Best visited April to October"
      ]
    },
    "Fort Frederick": {
      image: "/assets/img/fort-frederick.jpg",
      description: "Fort Frederick, also known as Fort Trincomalee, is a historic fortification located on the promontory of Swami Rock in Trincomalee. Built by the Portuguese in 1623 and later captured by the Dutch in 1639 and the British in 1795, this fort has witnessed centuries of colonial history and strategic military importance. The fort encompasses the entire Swami Rock area, including the sacred Koneswaram Temple site, and offers commanding views of Trincomalee's natural harbor - one of the world's finest deep-water harbors. The fort's massive stone walls, bastions, and ancient cannons stand as testaments to its military past. Within the fort premises, visitors can explore colonial-era buildings, a British war cemetery, and enjoy the peaceful atmosphere of the grounds. The fort's strategic location made it a crucial naval base throughout history, controlling access to the east coast of Sri Lanka. Today, it serves as a military installation but is open to tourists who wish to explore its historical significance and enjoy the spectacular views of the Indian Ocean and the harbor below.",
      highlights: [
        "Built by Portuguese in 1623, later captured by Dutch and British",
        "Strategic location on Swami Rock with harbor views",
        "Massive stone walls and ancient fortifications",
        "Contains the sacred Koneswaram Temple site",
        "One of the world's finest natural harbor viewpoints",
        "British war cemetery within the premises",
        "Active military installation open to tourists",
        "Rich colonial military history"
      ]
    },
    "Nilaveli Beach Leisure": {
      image: "/assets/img/nilaveli-beach-leisure.jpg",
      description: "Nilaveli Beach, located on Sri Lanka's pristine east coast near Trincomalee, is a breathtaking stretch of golden sand that consistently ranks among the world's most beautiful beaches. The beach is famous for its powdery white sand, crystal-clear turquoise waters, and serene atmosphere, making it an ideal destination for relaxation and water activities. Unlike many crowded beaches, Nilaveli maintains a tranquil vibe with plenty of space to unwind. The gentle slope of the beach and calm waters make it perfect for swimming, while the offshore Pigeon Island offers world-class snorkeling and diving opportunities just a short boat ride away. Beach shacks and resorts line the shore, serving fresh seafood and tropical drinks. The beach is particularly spectacular during sunrise when the golden light illuminates the sand, creating perfect photo opportunities. Visitors can enjoy beach volleyball, build sandcastles, or simply relax under the shade of palm trees. The area also offers boat trips to Pigeon Island, dolphin watching tours, and deep-sea fishing excursions. With its combination of natural beauty, water activities, and peaceful ambiance, Nilaveli Beach provides the perfect tropical escape.",
      highlights: [
        "Pristine golden sand beach with crystal-clear waters",
        "Consistently ranked among world's most beautiful beaches",
        "Perfect for swimming with gentle slope and calm waters",
        "Gateway to Pigeon Island National Park for snorkeling",
        "Tranquil atmosphere with plenty of space",
        "Fresh seafood beach shacks and resorts",
        "Spectacular sunrise photography opportunities",
        "Dolphin watching and deep-sea fishing excursions"
      ]
    }
  };

  // SMART MATCHING FUNCTION
   const findPlaceDetails = (searchName) => {
    if (!searchName) return null;
    
    const normalizedSearch = searchName.trim().toLowerCase();
    
    // Step 1: Try exact match first
    for (const key of Object.keys(allPlaceDetails)) {
      if (key.trim().toLowerCase() === normalizedSearch) {
        return allPlaceDetails[key];
      }
    }
    
    // Step 2: Try partial match
    for (const key of Object.keys(allPlaceDetails)) {
      const normalizedKey = key.trim().toLowerCase();
      if (normalizedSearch.includes(normalizedKey) || normalizedKey.includes(normalizedSearch)) {
        return allPlaceDetails[key];
      }
    }
    
    // Step 3: Try matching without common words
    const removeCommonWords = (str) => {
      const commonWords = ['the', 'of', 'and', 'in', 'at', 'to', 'a', 'an', '-', '–', 
                           'temple', 'church', 'fort', 'beach', 'lake', 'park', 'garden',
                           'sacred', 'ancient', 'city', 'royal', 'old', 'historic', 'overnight'];
      return str.split(/\s+/).filter(word => 
        !commonWords.includes(word.toLowerCase()) && word.length > 2
      ).join(' ');
    };
    
    const cleanedSearch = removeCommonWords(normalizedSearch);
    
    for (const key of Object.keys(allPlaceDetails)) {
      const cleanedKey = removeCommonWords(key.trim().toLowerCase());
      if (cleanedSearch && cleanedKey && 
          (cleanedSearch.includes(cleanedKey) || cleanedKey.includes(cleanedSearch))) {
        return allPlaceDetails[key];
      }
    }
    
    // Step 4: Word-by-word matching
    const searchWords = normalizedSearch.split(/\s+/).filter(w => w.length > 3);
    
    for (const key of Object.keys(allPlaceDetails)) {
      const keyWords = key.trim().toLowerCase().split(/\s+/).filter(w => w.length > 3);
      const matchingWords = searchWords.filter(sw => 
        keyWords.some(kw => kw.includes(sw) || sw.includes(kw))
      );
      
      if (matchingWords.length >= Math.min(searchWords.length, keyWords.length) / 2) {
        return allPlaceDetails[key];
      }
    }
    
    return null;
  };

  const placeDetails = findPlaceDetails(placeName);

  const finalPlaceDetails = placeDetails || {
    image: "/assets/img/default-place.jpg",
    description: `Information about ${placeName} is currently being updated. Please check back later for more details about this wonderful destination in Sri Lanka. This place is known for its unique charm and is a must-visit for travelers exploring the beautiful island of Sri Lanka.`,
    highlights: [
      "Beautiful scenery",
      "Cultural significance",
      "Local cuisine",
      "Friendly people",
      "Unique experiences"
    ]
  };

  const handleBackClick = () => {
    if (fromDestination) {
      navigate('/destination', { 
        state: { 
          package: selectedPackage,
          expandedDays: expandedDays,
          scrollToDay: dayIndex
        } 
      });
    } else {
      navigate(-1);
    }
  };

  if (!placeName) {
    return (
      <div className="container py-5 text-center not-found-container">
        <h2>Place Not Found</h2>
        <p>Sorry, we couldn't find information about this place.</p>
        <button 
          className="btn btn-primary mt-3 not-found-back-btn" 
          onClick={() => navigate('/tours')}
        >
          Back to Tours
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5 place-details-container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card place-details-card">
            <img 
              src={finalPlaceDetails.image} 
              className="card-img-top place-details-image" 
              alt={placeName} 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/assets/img/default-place.jpg";
              }}
            />
            <div className="card-body">
              <h1 className="place-details-title">{placeName}</h1>
              <p className="place-details-description">{finalPlaceDetails.description}</p>
              
              <h3 className="place-details-highlights-title">Highlights</h3>
              <ul className="place-details-highlights">
                {finalPlaceDetails.highlights.map((highlight, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="place-details-actions">
                <button 
                  className="place-details-back-btn" 
                  onClick={handleBackClick}
                >
                  <i className="fas fa-arrow-left me-2"></i> Back
                </button>
                <a href="/booking" className="place-details-book-btn">
                  Book This Tour <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;