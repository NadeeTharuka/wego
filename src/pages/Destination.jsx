import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Destination.css';  // Add this import

function Destination() {
  const location = useLocation();
  const selectedPackage = location.state?.package;

  // Add program details for Sri Lanka package 1
  const packageDetails = {
    "EXPLORE SRI LANKA IN 04 DAYS 03 NIGHTS": {
      program: [
        {
          day: "Day 01",
          activities: [
            "Airport to Negombo",
            "Visits Negombo City",
            "Overnight in Negombo",
            "Pinnawala Elephant Orphanage",
            "Dambulla Temple",
            "Overnight in Dambulla"
          ],
          details: {
            "Pinnawala": `Pinnawala Elephant Orphanage is where you can find the largest herd of captive elephants in the world. Established in 1975, it is a popular breeding ground for wild Asian elephants working towards the protection and welfare of these wild mammals. Orphaned and unweaned calves and wounded adults spotted in the forests of Sri Lanka are taken in here for proper care. Here you can take a closer look at the elephants who freely roam on the premises, learn elephant behavioral patterns, and get to know the ways of mahouts. Located amidst the major tourist destinations of the country, a visit to this elephant park is much more convenient and worth your time.`,
            "Dambulla": `Dambulla is a commercial town in Sri Lanka, located 20 km south of Habarana and 55 km north of Matale, known for hosting the country's largest produce market. Its most famous attractions are the Dambulla Cave Temples and the Golden Temple, both of which are part of one of Sri Lanka's eight UNESCO World Heritage Sites. The Dambulla heritage site has a history that spans from prehistoric times to the modern era.\n\nThe Dambulla Cave Temples, located near the geographical center of the island, are a significant cultural treasure. Dating back to the 1st century BCE, these caves are renowned for their exquisite Sinhala art and sculpture. The complex includes five caves beneath a vast overhanging rock, with intricately painted ceilings and images of Lord Buddha, Bodhisattvas, and various deities. These caves were developed during the Anuradhapura and Polonnaruwa periods and are among the most impressive cave temples in Sri Lanka.`
          }
        },
        {
          day: "Day 02",
          activities: [
            "Visits Sigiri Rock",
            "Sigiriya Village Tour with Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Sigiriya": `Sigiriya, often referred to as the "Lion Rock," is an ancient rock fortress and one of Sri Lanka's most iconic landmarks. Located in the central Matale District near the town of Dambulla, it is a UNESCO World Heritage site and a popular tourist destination.\n\nSigiriya, built in the 5th century AD by King Kashyapa I, served as a royal palace atop a 200-meter rock for strategic defense. After his death, the site was abandoned as a royal residence and later used as a Buddhist monastery until the 14th century.`,
            "Village Tours": `Village tours in Sigiriya offer a glimpse into traditional Sri Lankan rural life. These tours typically include a bullock cart ride, a boat ride on a serene lake, and a walk-through paddy fields and local farms. Visitors can experience traditional cooking, visit a village home, and interact with local villagers, learning about their customs and daily activities.`,
            "The Matale Spice Garden": `The Matale Spice Garden in Sri Lanka, located near Kandy, is a popular tourist spot known for its rich variety of spices, including cinnamon, pepper, cloves, nutmeg, cardamom, vanilla, and turmeric. Visitors can enjoy guided tours, where they learn about spice cultivation and uses, see demonstrations, and purchase fresh spices and Ayurvedic products.`
          }
        },
        {
          day: "Day 03",
          activities: [
            "Visits Kandy Dalada maligawa",
            "Cultural Show",
            "Gem Shop",
            "Colombo Shopping",
            "Overnight in Colombo"
          ],
          details: {
            "Sri Dalada Maligawa": `The Temple of the Sacred Tooth Relic, or Dalada Maligawa, in Kandy is one of Sri Lanka's most significant religious and cultural sites, housing the revered tooth relic of the Buddha. This sacred relic, symbolizing both spiritual and political authority, has been enshrined in Kandy since the 16th century and is closely associated with the Sinhalese monarchy.`,
            "Cultural Show": `Cultural shows in Sri Lanka showcase the island's rich traditions through vibrant performances of dance, music, and rituals. Key highlights include Kandyan dance, known for its elegant movements and elaborate costumes, and Low Country dance, featuring energetic performances with striking masks.`,
            "Gem shops": `Gem shops in Sri Lanka are popular for offering a wide variety of precious and semi-precious gemstones, including sapphires, rubies, and topaz. The country, known as the "Gem Island," is especially famous for its Ceylon Blue Sapphires.`
          }
        },
        {
          day: "Day 04",
          activities: [
            "Visits Colombo City",
            "Departure - To Airport"
          ],
          details: {
            "Colombo": `Colombo, the capital of Sri Lanka, is a vibrant city that blends modernity with rich history. It serves as the country's commercial and cultural hub, offering a mix of colonial architecture, bustling markets, and contemporary skyscrapers.\n\nKey attractions include the Galle Face Green, the Gangaramaya Temple, and the historic Fort area. Colombo is also known for its diverse dining scene, luxury shopping, and lively nightlife.`
          }
        }
      ]
    },
    "EXPLORE SRI LANKA IN 05 DAYS 04 NIGHTS": {
      program: [
        {
          day: "Day 01",
          activities: [
            "Airport to Negombo",
            "Visits Negombo City",
            "Overnight in Negombo"
          ],
          details: {
            "Negombo": `Negombo is a quiet town on Sri Lanka's west coast, just 10 km from Bandaranaike International Airport. Known for its white sandy beaches and turquoise waters, it's a popular beach resort and commercial hub with a rich history in spice and seafood trade. The town reflects Dutch and Portuguese influences in its food, architecture, and culture. Key attractions include the thriving Fishing Village, Angurukaramulla Temple, St. Mary's Church, and scenic boat rides on the Hamilton Dutch Canal.\n\nNegombo Beach offers activities like kitesurfing and sailing, while Browns Beach is popular for midnight swims. Visitors can also shop at Beach Road Market and Negombo Shopping Plaza.`
          }
        },
        {
          day: "Day 02",
          activities: [
            "Visits Pinnawala Elephant Orphanage",
            "Dambulla Temple",
            "Overnight in Dambulla"
          ],
          details: {
            "Pinnawala": `Pinnawala Elephant Orphanage is where you can find the largest herd of captive elephants in the world. Established in 1975, it is a popular breeding ground for wild Asian elephants working towards the protection and welfare of these wild mammals. Orphaned and unweaned calves and wounded adults spotted in the forests of Sri Lanka are taken in here for proper care. Here you can take a closer look at the elephants who freely roam on the premises, learn elephant behavioral patterns, and get to know the ways of mahouts. Located amidst the major tourist destinations of the country, a visit to this elephant park is much more convenient and worth your time.`,
            "Dambulla": `Dambulla is a commercial town in Sri Lanka, located 20 km south of Habarana and 55 km north of Matale, known for hosting the country's largest produce market. Its most famous attractions are the Dambulla Cave Temples and the Golden Temple, both of which are part of one of Sri Lanka's eight UNESCO World Heritage Sites. The Dambulla heritage site has a history that spans from prehistoric times to the modern era.\n\nThe Dambulla Cave Temples, located near the geographical center of the island, are a significant cultural treasure. Dating back to the 1st century BCE, these caves are renowned for their exquisite Sinhala art and sculpture. The complex includes five caves beneath a vast overhanging rock, with intricately painted ceilings and images of Lord Buddha, Bodhisattvas, and various deities. These caves were developed during the Anuradhapura and Polonnaruwa periods and are among the most impressive cave temples in Sri Lanka.\n\nVisitors to Dambulla can also explore the nearby ironwood forest, rose quartz mountain, and a megalithic cemetery, making it a worthwhile stop on the way to Sigiriya.`
          }
        },
        {
          day: "Day 03",
          activities: [
            "Visits Sigiri Rock",
            "Sigiriya Village Tour with Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Sigiriya": `Sigiriya, often referred to as the "Lion Rock," is an ancient rock fortress and one of Sri Lanka's most iconic landmarks. Located in the central Matale District near the town of Dambulla, it is a UNESCO World Heritage site and a popular tourist destination.\n\nSigiriya, built in the 5th century AD by King Kashyapa I, served as a royal palace atop a 200-meter rock for strategic defense. After his death, the site was abandoned as a royal residence and later used as a Buddhist monastery until the 14th century Sigiriya's architectural highlights include the Lion's Gate, once a grand entrance shaped like a lion, now marked by its remaining paws. The rock features vivid frescoes of the "Sigiriya Damsels" and the polished Mirror Wall, inscribed with ancient visitors' writings. The surrounding water gardens showcase advanced hydraulic engineering, while the summit holds the ruins of King Kashyapa's palace, including a large throne and water tanks.\n\nSigiriya is a well-preserved example of ancient urban planning, showcasing the sophistication of Sri Lankan architecture and art. It provides insight into the political history of King Kashyapa's reign. Today, Sigiriya is a symbol of Sri Lankan heritage, attracting visitors for its historical significance, stunning views, and challenging climb.`,
            "Village Tours": `Village tours in Sigiriya offer a glimpse into traditional Sri Lankan rural life. These tours typically include a bullock cart ride, a boat ride on a serene lake, and a walk-through paddy fields and local farms. Visitors can experience traditional cooking, visit a village home, and interact with local villagers, learning about their customs and daily activities. The tours provide an authentic cultural experience, set against the backdrop of Sigiriya's natural beauty, including the iconic Sigiriya Rock Fortress.`,
            "The Matale Spice Garden": `The Matale Spice Garden in Sri Lanka, located near Kandy, is a popular tourist spot known for its rich variety of spices, including cinnamon, pepper, cloves, nutmeg, cardamom, vanilla, and turmeric. Visitors can enjoy guided tours, where they learn about spice cultivation and uses, see demonstrations, and purchase fresh spices and Ayurvedic products. The gardens are surrounded by lush hills and are close to other attractions like the Aluvihare Rock Temple and the Knuckles Mountain Range. The best time to visit is during the dry season, from November to April.`
          }
        },
        {
          day: "Day 04",
          activities: [
            "Visits Kandy Dalada maligawa",
            "Cultural Show",
            "Gem Shop",
            "Colombo Shopping",
            "Overnight in Colombo"
          ],
          details: {
            "Sri Dalada Maligawa": `The Temple of the Sacred Tooth Relic, or Dalada Maligawa, in Kandy is one of Sri Lanka's most significant religious and cultural sites, housing the revered tooth relic of the Buddha. This sacred relic, symbolizing both spiritual and political authority, has been enshrined in Kandy since the 16th century and is closely associated with the Sinhalese monarchy. The temple, part of the royal palace complex, showcases exquisite Kandyan architecture, with its golden canopy, intricate woodwork, and the iconic Paththirippuwa. Daily rituals and ceremonies, enhanced by traditional drumming and dancing, create a deeply spiritual atmosphere. The annual Esala Perahera, a grand procession featuring decorated elephants and cultural performances, highlights the temple's importance and attracts thousands of pilgrims and tourists. Recognized as a UNESCO World Heritage Site, the Dalada Maligawa is a vital center of Buddhist worship and Sri Lankan cultural heritage.`,
            "Cultural Show": `Cultural shows in Sri Lanka showcase the island's rich traditions through vibrant performances of dance, music, and rituals. Key highlights include Kandyan dance, known for its elegant movements and elaborate costumes, and Low Country dance, featuring energetic performances with striking masks. Fire dancing and fire walking add dramatic flair, while folk dances and puppet shows depict rural life and folklore. These shows are most popular in Kandy, Colombo, and Sigiriya, offering tourists a lively glimpse into Sri Lanka's cultural heritage. They are often held year-round, especially during festival seasons.`,
            "Gem shops": `Gem shops in Sri Lanka are popular for offering a wide variety of precious and semi-precious gemstones, including sapphires, rubies, and topaz. The country, known as the "Gem Island," is especially famous for its Ceylon Blue Sapphires. These shops often provide certificates of authenticity and sometimes allow visitors to see the cutting and polishing process. Major gem-buying centers are in cities like Colombo, Kandy, and Ratnapura, the latter being the heart of Sri Lanka's gem mining industry. Tourists can find a range of jewelry and loose stones in various designs and price ranges.`
          }
        },
        {
          day: "Day 05",
          activities: [
            "Visits Colombo City",
            "Departure - To Airport"
          ],
          details: {
            "Colombo": `Colombo, the capital of Sri Lanka, is a vibrant city that blends modernity with rich history. It serves as the country's commercial and cultural hub, offering a mix of colonial architecture, bustling markets, and contemporary skyscrapers.\n\nKey attractions include the Galle Face Green, the Gangaramaya Temple, and the historic Fort area. Colombo is also known for its diverse dining scene, luxury shopping, and lively nightlife. The city's coastal location provides scenic views and easy access to nearby beaches. Colombo is a gateway to exploring the rest of Sri Lanka, offering a dynamic urban experience.`
          }
        }
      ]
    },
    "EXPLORE SRI LANKA IN 05 DAYS 04 NIGHTS": {
      program: [
        {
          day: "Day 01",
          activities: [
            "Airport to Negombo",
            "Visits Negombo City",
            "To Anuradhapura",
            "Visits Ruwanwalisaya",
            "Sri Maha Bodhiya",
            "Overnight in Anuradhapura"
          ],
          details: {
            "Anuradhapura": `Anuradhapura is one of the ancient capitals of Sri Lanka, renowned for its well-preserved ruins of an early Sri Lankan civilization. Located in the North Central Province, it was the first capital of the island and the center of Theravada Buddhism for many centuries. Founded in the 4th century BCE, Anuradhapura was the seat of Sinhalese kings and is home to many significant archaeological sites, including stupas, temples, and monasteries. Key landmarks include the sacred Bodhi Tree, believed to be the oldest living tree with a recorded history, and the Ruwanwelisaya Stupa. Today, it is a UNESCO World Heritage Site and a major pilgrimage destination.`,
            "Sri Maha Bodhiya": `Sri Maha Bodhiya, located in Anuradhapura, Sri Lanka, is one of the most sacred Buddhist sites in the world. It is home to a sacred fig tree (Ficus religiosa) that is believed to be a direct descendant of the original Bodhi tree under which Siddhartha Gautama attained enlightenment. Planted in 288 BCE by Sanghamitta Theri, the tree has become a symbol of peace and spiritual significance for Buddhists. The site attracts thousands of pilgrims and visitors each year, who come to pay homage and engage in meditation beneath its sprawling branches. Surrounded by beautiful temples and shrines, Sri Maha Bodhiya remains a vital part of Sri Lanka's cultural and religious landscape.`,
            "Ruwanwalisaya": `Ruwanwalisaya, located in Anuradhapura, Sri Lanka, is a significant stupa built by King Dutugemunu in the 2nd century BCE. Standing about 55 meters tall, it is one of the largest stupas in the world and is believed to house relics of the Buddha. Renowned for its striking white dome and surrounding gardens, Ruwanwalisaya is a UNESCO World Heritage Site and a major pilgrimage destination for Buddhists, reflecting Sri Lanka's rich cultural and religious heritage.`
          }
        },
        {
          day: "Day 02",
          activities: [
            "Visit Polonnaruwa",
            "Overnight in Sigiriya"
          ],
          details: {
            "Polonnaruwa": `Polonnaruwa is an ancient city in Sri Lanka that served as the country's second capital after Anuradhapura. Established in the 11th century, it flourished under the rule of King Parakramabahu I during the 12th century. The city is renowned for its well-preserved ruins, which include impressive Buddhist temples, stupas, and palaces, reflecting the advanced engineering and artistry of the era.\n\nKey attractions in Polonnaruwa include the Gal Vihara, a rock temple featuring four magnificent Buddha statues, the Royal Palace, and the intricate stone carvings at the Rankot Vihara. The city is also part of the UNESCO World Heritage Site, showcasing its historical and cultural significance. Surrounded by lush greenery and wildlife, Polonnaruwa offers visitors a glimpse into Sri Lanka's rich heritage and ancient civilization.`
          }
        },
        {
          day: "Day 03",
          activities: [
            "Visits Sigiri Rock",
            "Sigiriya Village Tour with Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Sigiriya": `Sigiriya, often referred to as the "Lion Rock," is an ancient rock fortress and one of Sri Lanka's most iconic landmarks. Located in the central Matale District near the town of Dambulla, it is a UNESCO World Heritage site and a popular tourist destination.\n\nSigiriya, built in the 5th century AD by King Kashyapa I, served as a royal palace atop a 200-meter rock for strategic defense. After his death, the site was abandoned as a royal residence and later used as a Buddhist monastery until the 14th century Sigiriya's architectural highlights include the Lion's Gate, once a grand entrance shaped like a lion, now marked by its remaining paws. The rock features vivid frescoes of the "Sigiriya Damsels" and the polished Mirror Wall, inscribed with ancient visitors' writings. The surrounding water gardens showcase advanced hydraulic engineering, while the summit holds the ruins of King Kashyapa's palace, including a large throne and water tanks.\n\nSigiriya is a well-preserved example of ancient urban planning, showcasing the sophistication of Sri Lankan architecture and art. It provides insight into the political history of King Kashyapa's reign. Today, Sigiriya is a symbol of Sri Lankan heritage, attracting visitors for its historical significance, stunning views, and challenging climb.`,
            "Village Tours": `Village tours in Sigiriya offer a glimpse into traditional Sri Lankan rural life. These tours typically include a bullock cart ride, a boat ride on a serene lake, and a walk-through paddy fields and local farms. Visitors can experience traditional cooking, visit a village home, and interact with local villagers, learning about their customs and daily activities. The tours provide an authentic cultural experience, set against the backdrop of Sigiriya's natural beauty, including the iconic Sigiriya Rock Fortress.`,
            "The Matale Spice Garden": `The Matale Spice Garden in Sri Lanka, located near Kandy, is a popular tourist spot known for its rich variety of spices, including cinnamon, pepper, cloves, nutmeg, cardamom, vanilla, and turmeric. Visitors can enjoy guided tours, where they learn about spice cultivation and uses, see demonstrations, and purchase fresh spices and Ayurvedic products. The gardens are surrounded by lush hills and are close to other attractions like the Aluvihare Rock Temple and the Knuckles Mountain Range. The best time to visit is during the dry season, from November to April.`
          }
        },
        {
          day: "Day 04",
          activities: [
            "Visits Kandy Dalada maligawa",
            "Cultural Show",
            "Gem Shop",
            "Colombo Shopping",
            "Overnight in Colombo"
          ],
          details: {
            "Sri Dalada Maligawa": `The Temple of the Sacred Tooth Relic, or Dalada Maligawa, in Kandy is one of Sri Lanka's most significant religious and cultural sites, housing the revered tooth relic of the Buddha. This sacred relic, symbolizing both spiritual and political authority, has been enshrined in Kandy since the 16th century and is closely associated with the Sinhalese monarchy. The temple, part of the royal palace complex, showcases exquisite Kandyan architecture, with its golden canopy, intricate woodwork, and the iconic Paththirippuwa. Daily rituals and ceremonies, enhanced by traditional drumming and dancing, create a deeply spiritual atmosphere. The annual Esala Perahera, a grand procession featuring decorated elephants and cultural performances, highlights the temple's importance and attracts thousands of pilgrims and tourists. Recognized as a UNESCO World Heritage Site, the Dalada Maligawa is a vital center of Buddhist worship and Sri Lankan cultural heritage.`,
            "Cultural Show": `Cultural shows in Sri Lanka showcase the island's rich traditions through vibrant performances of dance, music, and rituals. Key highlights include Kandyan dance, known for its elegant movements and elaborate costumes, and Low Country dance, featuring energetic performances with striking masks. Fire dancing and fire walking add dramatic flair, while folk dances and puppet shows depict rural life and folklore. These shows are most popular in Kandy, Colombo, and Sigiriya, offering tourists a lively glimpse into Sri Lanka's cultural heritage. They are often held year-round, especially during festival seasons.`,
            "Gem shops": `Gem shops in Sri Lanka are popular for offering a wide variety of precious and semi-precious gemstones, including sapphires, rubies, and topaz. The country, known as the "Gem Island," is especially famous for its Ceylon Blue Sapphires. These shops often provide certificates of authenticity and sometimes allow visitors to see the cutting and polishing process. Major gem-buying centers are in cities like Colombo, Kandy, and Ratnapura, the latter being the heart of Sri Lanka's gem mining industry. Tourists can find a range of jewelry and loose stones in various designs and price ranges.`
          }
        },
        {
          day: "Day 05",
          activities: [
            "Visits Colombo City",
            "Departure - To Airport"
          ],
          details: {
            "Colombo": `Colombo, the capital of Sri Lanka, is a vibrant city that blends modernity with rich history. It serves as the country's commercial and cultural hub, offering a mix of colonial architecture, bustling markets, and contemporary skyscrapers.\n\nKey attractions include the Galle Face Green, the Gangaramaya Temple, and the historic Fort area. Colombo is also known for its diverse dining scene, luxury shopping, and lively nightlife. The city's coastal location provides scenic views and easy access to nearby beaches. Colombo is a gateway to exploring the rest of Sri Lanka, offering a dynamic urban experience.`
          }
        }
      ]
    },
    "EXPLORE SRI LANKA IN 07 DAYS 06 NIGHTS": {
      program: [
        {
          day: "Day 01",
          activities: [
            "Airport to Negombo",
            "Short rest at hotel in Negombo",
            "Visits Pinnawala Elephant Orphanage",
            "Dambulla Temple",
            "Overnight in Dambulla"
          ],
          details: {
            "Negombo": `Negombo is a quiet town on Sri Lanka's west coast, just 10 km from Bandaranaike International Airport. Known for its white sandy beaches and turquoise waters, it's a popular beach resort and commercial hub with a rich history in spice and seafood trade. The town reflects Dutch and Portuguese influences in its food, architecture, and culture. Key attractions include the thriving Fishing Village, Angurukaramulla Temple, St. Mary's Church, and scenic boat rides on the Hamilton Dutch Canal. Negombo Beach offers activities like kitesurfing and sailing, while Browns Beach is popular for midnight swims. Visitors can also shop at Beach Road Market and Negombo Shopping Plaza.`,
            "Pinnawala": `Pinnawala Elephant Orphanage is where you can find the largest herd of captive elephants in the world. Established in 1975, it is a popular breeding ground for wild Asian elephants working towards the protection and welfare of these wild mammals. Orphaned and unweaned calves and wounded adults spotted in the forests of Sri Lanka are taken in here for proper care. Here you can take a closer look at the elephants who freely roam on the premises, learn elephant behavioral patterns, and get to know the ways of mahouts. Located amidst the major tourist destinations of the country, a visit to this elephant park is much more convenient and worth your time.`,
            "Dambulla": `Dambulla is a commercial town in Sri Lanka, located 20 km south of Habarana and 55 km north of Matale, known for hosting the country's largest produce market. Its most famous attractions are the Dambulla Cave Temples and the Golden Temple, both of which are part of one of Sri Lanka's eight UNESCO World Heritage Sites. The Dambulla heritage site has a history that spans from prehistoric times to the modern era.\n\nThe Dambulla Cave Temples, located near the geographical center of the island, are a significant cultural treasure. Dating back to the 1st century BCE, these caves are renowned for their exquisite Sinhala art and sculpture. The complex includes five caves beneath a vast overhanging rock, with intricately painted ceilings and images of Lord Buddha, Bodhisattvas, and various deities. These caves were developed during the Anuradhapura and Polonnaruwa periods and are among the most impressive cave temples in Sri Lanka.`
          }
        },
        {
          day: "Day 02",
          activities: [
            "Visits Sigiri Rock",
            "Sigiriya Village Tour with Lunch",
            "Matale Spice Garden",
            "Overnight in Kandy"
          ],
          details: {
            "Sigiriya": `Sigiriya, often referred to as the "Lion Rock," is an ancient rock fortress and one of Sri Lanka's most iconic landmarks. Located in the central Matale District near the town of Dambulla, it is a UNESCO World Heritage site and a popular tourist destination.\n\nSigiriya, built in the 5th century AD by King Kashyapa I, served as a royal palace atop a 200-meter rock for strategic defense. After his death, the site was abandoned as a royal residence and later used as a Buddhist monastery until the 14th century.`,
            "Village Tours": `Village tours in Sigiriya offer a glimpse into traditional Sri Lankan rural life. These tours typically include a bullock cart ride, a boat ride on a serene lake, and a walk-through paddy fields and local farms. Visitors can experience traditional cooking, visit a village home, and interact with local villagers, learning about their customs and daily activities.`,
            "The Matale Spice Garden": `The Matale Spice Garden in Sri Lanka, located near Kandy, is a popular tourist spot known for its rich variety of spices, including cinnamon, pepper, cloves, nutmeg, cardamom, vanilla, and turmeric. Visitors can enjoy guided tours, where they learn about spice cultivation and uses, see demonstrations, and purchase fresh spices and Ayurvedic products.`
          }
        },
        {
          day: "Day 03",
          activities: [
            "Visits Kandy Dalada maligawa",
            "Cultural Show",
            "Gem Shop",
            "Overnight in Nuwara-Eliya"
          ],
          details: {
            "Sri Dalada Maligawa": `The Temple of the Sacred Tooth Relic, or Dalada Maligawa, in Kandy is one of Sri Lanka's most significant religious and cultural sites, housing the revered tooth relic of the Buddha. This sacred relic, symbolizing both spiritual and political authority, has been enshrined in Kandy since the 16th century and is closely associated with the Sinhalese monarchy.`,
            "Cultural Show": `Cultural shows in Sri Lanka showcase the island's rich traditions through vibrant performances of dance, music, and rituals. Key highlights include Kandyan dance, known for its elegant movements and elaborate costumes, and Low Country dance, featuring energetic performances with striking masks.`,
            "Gem shops": `Gem shops in Sri Lanka are popular for offering a wide variety of precious and semi-precious gemstones, including sapphires, rubies, and topaz. The country, known as the "Gem Island," is especially famous for its Ceylon Blue Sapphires.`
          }
        },
        {
          day: "Day 04",
          activities: [
            "Visits Gregory park",
            "Ambewela Farm",
            "To Ella",
            "Visits Nine Arch",
            "To Thisamaharama",
            "Overnight in Thissamaharama"
          ],
          details: {
            "Gregory Park": `Gregory Park, located in Nuwara Eliya, Sri Lanka, is a popular recreational area centered around the picturesque Gregory Lake. The park, established during the British colonial period in the 19th century, offers scenic views, boat rides, and lush green landscapes, making it a favorite spot for both locals and tourists. Visitors can enjoy activities like paddle boating, cycling, and picnicking while surrounded by the cool climate and serene environment of Nuwara Eliya. The park is also known for its well-maintained gardens and pathways, providing a peaceful escape in the heart of the hill country`,
            "Ambewela Farm": `Ambewela Farm, located in the Nuwara Eliya District of Sri Lanka, is one of the country's most famous dairy farms. Known as "Little New Zealand," the farm is situated in a lush, green landscape at a high altitude, which provides a cool climate ideal for dairy farming. The farm produces high-quality milk, cheese, and other dairy products, and it is home to a variety of livestock, including cows and goats. Visitors to Ambewela Farm can tour the facilities, observe the milking process, and enjoy the scenic views of rolling hills and vast pastures. It's a popular destination for those interested in agriculture and the natural beauty of Sri Lanka's hill country.`,
            "The Nine Arch Bridge": `The Nine Arch Bridge, also known as the "Bridge in the Sky," is a famous viaduct located in Ella, Sri Lanka. Built during the British colonial era in the early 20th century, this architectural marvel spans 91 meters and stands 24 meters high. The bridge is constructed entirely of brick, stone, and cement, without the use of steel, making it a unique engineering feat. Nestled amidst lush green forests and tea plantations, the Nine Arch Bridge offers stunning views and is a popular spot for photography. Trains passing over the bridge create a picturesque scene, attracting both local and international tourists to this iconic landmark in Sri Lanka's hill country`
          }
        },
        {
          day: "Day 05",
          activities: [
            "Visits Yala Safari",
            "To Galle",
            "Visits Galle Fort",
            "Gem shops",
            "Hikkaduwa corral Garden",
            "Overnight in Hikkaduwa"
          ],
          details: {
            "Yala Safari": `Yala Safari, located in Yala National Park in southeastern Sri Lanka, offers an exhilarating wildlife experience. Yala is the most visited and second-largest national park in Sri Lanka, known for its rich biodiversity and dense population of leopards. During a Yala Safari, visitors can explore the park's diverse ecosystems, which include forests, grasslands, and wetlands, home to animals like elephants, sloth bears, crocodiles, and a wide variety of birds. The park is especially renowned for providing one of the best chances to see leopards in the wild. Safari tours typically take place in open-top jeeps, allowing for close encounters with wildlife while enjoying the park's natural beauty`,
            "Galle Fort": `Galle Fort, located in the coastal city of Galle, Sri Lanka, is a UNESCO World Heritage Site and one of the best-preserved colonial-era forts in Asia. Originally built by the Portuguese in the 16th century and later expanded by the Dutch in the 17th century, the fort showcases a blend of European architecture and South Asian culture. Its thick stone walls enclose a vibrant town with cobbled streets, historic buildings, boutique shops, and cafes. Key attractions within the fort include the Dutch Reformed Church, Galle Lighthouse, and the Maritime Museum. Galle Fort is a popular destination for its historical significance, architecture, and seaside charm.`,
            "Hikkaduwa Coral Gardens": `Hikkaduwa Coral Gardens, located in Hikkaduwa, Sri Lanka, is a vibrant underwater paradise known for its colorful coral reefs and diverse marine life. This popular snorkeling and diving destination offers visitors the chance to explore the stunning coral formations and observe a variety of fish, sea turtles, and other marine species. The clear, shallow waters make it an ideal spot for both beginners and experienced snorkelers. Hikkaduwa Coral Gardens is part of the Hikkaduwa National Park, a marine sanctuary that helps protect the area's delicate ecosystem. It's a must-visit for nature lovers and those interested in experiencing the beauty of Sri Lanka's coastal waters.`
          }
        },
        {
          day: "Day 06",
          activities: [
            "Visits Turtle Farm",
            "Madu river Boat Ride",
            "Cinnamon Garden",
            "Fish Therapy",
            "Overnight in Colombo"
          ],
          details: {
            "Hikkaduwa Turtle farm": `The Turtle Hatchery in Hikkaduwa, Sri Lanka, is dedicated to protecting endangered sea turtles. It collects and incubates eggs in a safe environment, releasing hatchlings into the ocean. Visitors can learn about conservation and witness turtle releases, making it an educational and eco-friendly destination.`,
            "The Madhu River boat ride": `The Madhu River boat ride in Sri Lanka provides a scenic journey through mangroves and waterways near Balapitiya. Visitors can explore rich biodiversity, including various birds and aquatic life, and visit small islands like Kothduwa Temple and cinnamon plantations, making it a serene escape for nature lovers.`,
            "Cinnamon Garden": `Cinnamon cultivation in Sri Lanka is a significant agricultural practice, as the country is renowned for producing high-quality Ceylon cinnamon, often referred to as "true cinnamon." The cultivation primarily occurs in the southern regions, particularly in areas like Galle and Matara.`,
            "Fish Therapy": `Fish therapy in Sri Lanka, commonly known as fish spa therapy, involves soaking feet in water filled with small fish, typically Garra rufa, which gently nibble away dead skin. This treatment is popular for its exfoliating benefits and relaxing effects, attracting both locals and tourists seeking a unique and soothing experience.`
          }
        },
        {
          day: "Day 07",
          activities: [
            "Colombo city tour & shopping",
            "Departure - To Airport"
          ],
          details: {
            "Colombo": `Colombo, the capital of Sri Lanka, is a vibrant city that blends modernity with rich history. It serves as the country's commercial and cultural hub, offering a mix of colonial architecture, bustling markets, and contemporary skyscrapers.\n\nKey attractions include the Galle Face Green, the Gangaramaya Temple, and the historic Fort area. Colombo is also known for its diverse dining scene, luxury shopping, and lively nightlife. The city's coastal location provides scenic views and easy access to nearby beaches. Colombo is a gateway to exploring the rest of Sri Lanka, offering a dynamic urban experience.`
          }
        }
      ]
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: ''
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
      to_email: process.env.REACT_APP_ADMIN_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      travel_date: formData.date,
      package_name: selectedPackage.name,
      duration: selectedPackage.duration,
      price: selectedPackage.price
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      setFormData({ name: '', email: '', date: '' });
      alert('Booking request sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send booking request. Please try again.');
    }
  };

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Destination
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Destination
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
              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="img-fluid rounded w-100"
              />
              <h2 className="mt-4">{selectedPackage.name}</h2>
              <div className="d-flex mb-3">
                <p className="mb-0 me-4">
                  <i className="fa fa-clock text-primary me-2"></i>
                  {selectedPackage.duration}
                </p>
                <p className="mb-0">
                  <i className="fa fa-money-bill text-primary me-2"></i>
                  Starting from {selectedPackage.price}
                </p>
              </div>

              {/* Program Details */}
              {packageDetails[selectedPackage.name] && (
                <div className="program-details mt-4">
                  <h3>Program Details</h3>
                  {packageDetails[selectedPackage.name].program.map((day, index) => (
                    <div key={index} className="day-section mb-4">
                      <h4 className="text-primary">{day.day}</h4>
                      <ul className="list-unstyled">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="fa fa-check text-primary me-2"></i>
                            {activity}
                          </li>
                        ))}
                      </ul>
                      {Object.entries(day.details).map(([place, description]) => (
                        <div key={place} className="place-details mb-3">
                          <h5 className="text-secondary">{place}</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded">
                <h4 className="mb-4">Book This Tour</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="date" 
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container text-center py-5">
          <h2>Please select a package from the Tours page</h2>
        </div>
      )}
    </div>
  );
}

export default Destination;
