export const questions = [
  { question: "What is 17 × 6?", answers: ["92", "96", "102", "106"], correct: 2 },
  { question: "What is 25% of 240?", answers: ["50", "60", "70", "80"], correct: 1 },
  { question: "What is 144 ÷ 9?", answers: ["14", "15", "16", "18"], correct: 2 },
  { question: "What is 13²?", answers: ["149", "156", "169", "176"], correct: 2 },
  { question: "What is 7 × (15 − 3)?", answers: ["72", "78", "84", "90"], correct: 2 },
  { question: "What is 360 ÷ 12?", answers: ["24", "30", "36", "40"], correct: 1 },
  { question: "What is 18% of 200?", answers: ["30", "36", "40", "45"], correct: 1 },
  { question: "What is 9³?", answers: ["81", "243", "729", "656"], correct: 1 },
  { question: "What is 45 × 2 − 10?", answers: ["70", "75", "80", "85"], correct: 2 },
  { question: "What is 1.5 × 80?", answers: ["100", "110", "120", "130"], correct: 2 },

  // 🇮🇳 India States & Capitals (10)
  { question: "Capital of Chhattisgarh?", answers: ["Bilaspur", "Raipur", "Durg", "Korba"], correct: 1 },
  { question: "Capital of Jharkhand?", answers: ["Bokaro", "Dhanbad", "Ranchi", "Jamshedpur"], correct: 2 },
  { question: "Capital of Sikkim?", answers: ["Gangtok", "Namchi", "Pelling", "Mangan"], correct: 0 },
  { question: "Capital of Himachal Pradesh?", answers: ["Manali", "Shimla", "Solan", "Kullu"], correct: 1 },
  { question: "Capital of Mizoram?", answers: ["Aizawl", "Lunglei", "Champhai", "Serchhip"], correct: 0 },
  { question: "Capital of Nagaland?", answers: ["Dimapur", "Kohima", "Mon", "Wokha"], correct: 1 },
  { question: "Capital of Uttarakhand?", answers: ["Haridwar", "Rishikesh", "Dehradun", "Nainital"], correct: 2 },
  { question: "Capital of Arunachal Pradesh?", answers: ["Tawang", "Ziro", "Itanagar", "Pasighat"], correct: 2 },
  { question: "Capital of Odisha?", answers: ["Puri", "Cuttack", "Bhubaneswar", "Rourkela"], correct: 2 },
  { question: "Capital of Meghalaya?", answers: ["Shillong", "Tura", "Jowai", "Nongpoh"], correct: 0 },

  // 🎬 Bollywood (10)
  { question: "Who directed Lagaan?", answers: ["Karan Johar", "Ashutosh Gowariker", "Rajkumar Hirani", "Imtiaz Ali"], correct: 1 },
  { question: "Which movie starred Aamir Khan as a wrestler?", answers: ["Sultan", "Mary Kom", "Dangal", "Gold"], correct: 2 },
  { question: "Which actress debuted in Student of the Year?", answers: ["Kriti Sanon", "Alia Bhatt", "Ananya Panday", "Kiara Advani"], correct: 1 },
  { question: "Which film is about space scientists?", answers: ["PK", "Rocketry", "Mission Mangal", "Swades"], correct: 2 },
  { question: "Who played Munna Bhai?", answers: ["Sanjay Dutt", "Anil Kapoor", "Nana Patekar", "Ajay Devgn"], correct: 0 },
  { question: "Which movie has character Rancho?", answers: ["PK", "3 Idiots", "Taare Zameen Par", "Sanju"], correct: 1 },
  { question: "Who is known as Khiladi Kumar?", answers: ["Salman Khan", "Akshay Kumar", "Ajay Devgn", "Suniel Shetty"], correct: 1 },
  { question: "Which movie is based on Sanjay Dutt’s life?", answers: ["Sanju", "Rockstar", "Guru", "Agneepath"], correct: 0 },
  { question: "Which actress played Mastani?", answers: ["Priyanka Chopra", "Deepika Padukone", "Katrina Kaif", "Sonam Kapoor"], correct: 1 },
  { question: "Which film won Oscar for song 'Jai Ho'?", answers: ["Lagaan", "Slumdog Millionaire", "Swades", "Guru"], correct: 1 },

  // 🎭 Complete Bollywood Dialogues (10)
  { question: "Complete: 'Mere paas ___ hai.'", answers: ["Bangla", "Gaadi", "Maa", "Paisa"], correct: 2 },
  { question: "Complete: 'Picture abhi ___ hai.'", answers: ["baaki", "baki", "shuru", "chal rahi"], correct: 0 },
  { question: "Complete: 'Don ko pakadna mushkil hi nahi, ___ hai.'", answers: ["naamumkin", "namumkin hai", "impossible", "mushkil"], correct: 1 },
  { question: "Complete: 'Pushpa, I hate ___.'", answers: ["tears", "lies", "sorry", "you"], correct: 1 },
  { question: "Complete: 'Kitne aadmi ___?'", answers: ["the", "hai", "thhe", "hain"], correct: 2 },
  { question: "Complete: 'Bade bade deshon mein chhoti chhoti ___ hoti rehti hai.'", answers: ["baatein", "galtiyan", "cheez", "problems"], correct: 1 },
  { question: "Complete: 'Kabhi kabhi jeetne ke liye ___ bhi zaroori hota hai.'", answers: ["jeena", "ladna", "harna", "marna"], correct: 2 },
  { question: "Complete: 'Hum jahan khade hote hain, ___ wahi se shuru hoti hai.'", answers: ["line", "duniya", "competition", "kahani"], correct: 2 },
  { question: "Complete: 'Ek chutki sindoor ki keemat tum kya ___.'", answers: ["samjhoge", "jaano", "sochoge", "samjho"], correct: 0 },
  { question: "Complete: 'Aaj mere paas sab kuch hai, phir bhi ___.'", answers: ["akela hoon", "khush hoon", "dukhi hoon", "kuch nahi"], correct: 3 },

  // 🌍 Difficult Geography (10)
  { question: "Which is the longest river in India?", answers: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"], correct: 1 },
  { question: "Which Indian state has the longest coastline?", answers: ["Tamil Nadu", "Andhra Pradesh", "Maharashtra", "Gujarat"], correct: 3 },
  { question: "Which plateau is called the 'Roof of the World'?", answers: ["Deccan", "Tibetan", "Chotanagpur", "Iranian"], correct: 1 },
  { question: "Which desert lies mostly in India?", answers: ["Gobi", "Kalahari", "Thar", "Sahara"], correct: 2 },
  { question: "Which pass connects India to Tibet?", answers: ["Rohtang", "Nathu La", "Zoji La", "Shipki La"], correct: 1 },
  { question: "Which sea lies to the south of India?", answers: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Red Sea"], correct: 2 },
  { question: "Which is the largest freshwater lake in India?", answers: ["Dal Lake", "Wular Lake", "Chilika", "Sambhar"], correct: 1 },
  { question: "Which mountain range separates India from Central Asia?", answers: ["Aravalli", "Himalayas", "Vindhya", "Satpura"], correct: 1 },
  { question: "Which Indian state receives highest rainfall?", answers: ["Assam", "Meghalaya", "Kerala", "Arunachal Pradesh"], correct: 1 },
  { question: "Which river is called Dakshin Ganga?", answers: ["Krishna", "Godavari", "Kaveri", "Narmada"], correct: 1 },

  // 🕉️ Indian Mythology (10)
  { question: "Who wrote the Ramayana?", answers: ["Ved Vyasa", "Valmiki", "Tulsidas", "Kalidasa"], correct: 1 },
  { question: "Who was Arjuna’s charioteer?", answers: ["Krishna", "Balarama", "Bhishma", "Karna"], correct: 0 },
  { question: "Who is the wife of Lord Rama?", answers: ["Radha", "Sita", "Draupadi", "Parvati"], correct: 1 },
  { question: "Who had the boon of immortality?", answers: ["Karna", "Ravana", "Hanuman", "Ashwatthama"], correct: 3 },
  { question: "Which demon king had ten heads?", answers: ["Kumbhakarna", "Ravana", "Bali", "Meghnad"], correct: 1 },
  { question: "Who broke Shiva’s bow?", answers: ["Rama", "Arjuna", "Krishna", "Bhima"], correct: 0 },
  { question: "Who was Abhimanyu’s father?", answers: ["Arjuna", "Bhima", "Karna", "Yudhishthira"], correct: 0 },
  { question: "Who was the teacher of Pandavas and Kauravas?", answers: ["Kripacharya", "Dronacharya", "Parashurama", "Vyasa"], correct: 1 },
  { question: "Who is the son of Vayu?", answers: ["Hanuman", "Bheema", "Garuda", "Nakula"], correct: 0 },
  { question: "Which epic contains the Bhagavad Gita?", answers: ["Ramayana", "Mahabharata", "Vedas", "Puranas"], correct: 1 },

  {
    question: "Which Bollywood movie holds the record for the highest-grossing film worldwide?",
    answers: ["Dangal", "RRR", "Baahubali 2: The Conclusion", "Pathaan"],
    correct: 0,
  },
  {
    "question": "What is the value of π (pi) approximately?",
    "answers": ["3.12", "3.14", "3.16", "3.18"],
    "correct": 1
  },
  {
    "question": "What is the sum of the angles in a triangle?",
    "answers": ["90 degrees", "120 degrees", "180 degrees", "360 degrees"],
    "correct": 2
  },
  {
    "question": "Which Indian mathematician is known for his contributions to number theory, including the Ramanujan Prime?",
    "answers": ["Aryabhata", "Srinivasa Ramanujan", "Brahmagupta", "Bhaskara II"],
    "correct": 1
  },
  {
    "question": "What is the square root of 144?",
    "answers": ["10", "11", "12", "13"],
    "correct": 2
  },
  {
    "question": "How many sides does a pentagon have?",
    "answers": ["4", "5", "6", "7"],
    "correct": 1
  },
  {
    "question": "If 3x = 12, what is the value of x?",
    "answers": ["3", "4", "6", "9"],
    "correct": 1
  },
  {
    "question": "What is the value of 2 raised to the power of 5?",
    "answers": ["10", "20", "32", "64"],
    "correct": 2
  },
  {
    "question": "Which ancient Indian mathematician is credited with the concept of zero as a number?",
    "answers": ["Aryabhata", "Bhaskara II", "Brahmagupta", "Panini"],
    "correct": 2
  },
  {
    "question": "What is the perimeter of a square with a side length of 8 cm?",
    "answers": ["16 cm", "32 cm", "64 cm", "128 cm"],
    "correct": 1
  },
  {
    question: "Who is known as the 'King of Bollywood'?",
    answers: ["Salman Khan", "Aamir Khan", "Shah Rukh Khan", "Hrithik Roshan"],
    correct: 2,
  },
  {
    question: "Which is the national fruit of India?",
    answers: ["Mango", "Banana", "Apple", "Grapes"],
    correct: 0,
  },
  {
    question: "Which state in India is known as the 'Land of Five Rivers'?",
    answers: ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan"],
    correct: 0,
  },
  {
    question: "Who was the first Indian woman to win an Olympic medal?",
    answers: ["P.T. Usha", "Saina Nehwal", "Karnam Malleswari", "Mary Kom"],
    correct: 2,
  },
  {
    question: "Which Indian state is known for the production of saffron?",
    answers: ["Himachal Pradesh", "Jammu and Kashmir", "Uttarakhand", "Assam"],
    correct: 1,
  },
  {
    question: "Which Indian scientist is known as the 'Missile Man of India'?",
    answers: ["Homi Bhabha", "C.V. Raman", "A.P.J. Abdul Kalam", "Vikram Sarabhai"],
    correct: 2,
  },
  {
    question: "Which Indian city is called the 'City of Lakes'?",
    answers: ["Jaipur", "Udaipur", "Mumbai", "Hyderabad"],
    correct: 1,
  },
  {
    question: "Which river is known as the 'Ganga of the South'?",
    answers: ["Godavari", "Kaveri", "Krishna", "Tungabhadra"],
    correct: 1,
  },
   {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Jupiter", "Saturn", "Neptune"],
    correct: 1,
  },
  {
    question: "What is the closest star to Earth?",
    answers: ["Alpha Centauri", "Betelgeuse", "Proxima Centauri", "The Sun"],
    correct: 3,
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: ["Venus", "Mars", "Mercury", "Saturn"],
    correct: 1,
  },
  {
    question: "What is the name of the first artificial satellite launched into space?",
    answers: ["Apollo 11", "Sputnik 1", "Vostok 1", "Explorer 1"],
    correct: 1,
  },
  {
    question: "What force keeps planets in orbit around the sun?",
    answers: ["Magnetic force", "Nuclear force", "Gravitational force", "Centripetal force"],
    correct: 2,
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: ["Mars", "Venus", "Mercury", "Pluto"],
    correct: 2,
  },
  {
    question: "Which planet has the most moons in our solar system?",
    answers: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    correct: 1,
  },
  {
    question: "Who was the first person to walk on the Moon?",
    answers: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    correct: 1,
  },
  {
    question: "What is the name of the galaxy that contains our solar system?",
    answers: ["Andromeda Galaxy", "Milky Way Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy"],
    correct: 1,
  },
  {
    question: "Which planet is known for its prominent ring system?",
    answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correct: 1,
  },
   {
    "question": "If a circle has a radius of 7 cm, what is its diameter?",
    "answers": ["7 cm", "14 cm", "21 cm", "28 cm"],
    "correct": 1,
  },
  {
    question: "What is the term for a star that suddenly increases in brightness due to an explosion?",
    answers: ["Nova", "Supernova", "Pulsar", "Quasar"],
    correct: 1,
  },
  {
    question: "What is the name of the first human-made object to reach interstellar space?",
    answers: ["Voyager 1", "Apollo 11", "Hubble Telescope", "Pioneer 10"],
    correct: 0,
  },
  {
    question: "Which planet has a day longer than its year?",
    answers: ["Mercury", "Venus", "Mars", "Jupiter"],
    correct: 1,
  },
  {
    question: "What is the term for the boundary around a black hole from which nothing can escape?",
    answers: ["Event Horizon", "Singularity", "Photon Sphere", "Accretion Disk"],
    correct: 0,
  },
  {
    question: "Which planet is the hottest in our solar system?",
    answers: ["Mercury", "Venus", "Mars", "Jupiter"],
    correct: 1,
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 2,
  },
  {
    question: "What type of galaxy is the Milky Way?",
    answers: ["Elliptical", "Irregular", "Spiral", "Barred Spiral"],
    correct: 3,
  },
  {
    question: "What is the main component of the Sun?",
    answers: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
    correct: 1,
  },
  {
    question: "Which space agency launched the Hubble Space Telescope?",
    answers: ["ISRO", "NASA", "ESA", "Roscosmos"],
    correct: 1,
  },
  {
    question: "What is the approximate age of the universe?",
    answers: ["4.5 billion years", "10 billion years", "13.8 billion years", "20 billion years"],
    correct: 2,
  },
  {
    question: "Who is known as the 'Father of the Indian Constitution'?",
    answers: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
    correct: 1,
  },
  {
    question: "Which Indian state is the largest producer of coffee?",
    answers: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"],
    correct: 1,
  },
  {
    question: "What is the name of India's first nuclear-powered submarine?",
    answers: ["INS Chakra", "INS Vikramaditya", "INS Arihant", "INS Kalvari"],
    correct: 2,
  },
  {
    question: "Which Indian festival is celebrated to mark the harvest season in Punjab?",
    answers: ["Lohri", "Baisakhi", "Holi", "Diwali"],
    correct: 1,
  },
  {
    question: "Who was the first Indian to receive the Nobel Prize in Literature?",
    answers: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"],
    correct: 0,
  },
  {
    question: "Which sage is credited with creating the Tamil script?",
    answers: ["Agastya", "Vishwamitra", "Vashistha", "Narada"],
    correct: 0,
  },
  {
    question: "Who is the goddess of wealth and prosperity?",
    answers: ["Lakshmi", "Saraswati", "Parvati", "Kali"],
    correct: 0,
  },
  {
    question: "What is the name of the conch shell used by Lord Krishna in the Mahabharata?",
    answers: ["Panchajanya", "Sharanga", "Sudarshana", "Ananta"],
    correct: 0,
  },
  {
    question: "Who is the son of Ganga and Shantanu in the Mahabharata?",
    answers: ["Bhishma", "Vidura", "Duryodhana", "Karna"],
    correct: 0,
  },
  {
    question: "In which movie does the iconic dialogue 'Mogambo khush hua' appear?",
    answers: ["Sholay", "Mr. India", "Deewar", "Don"],
    correct: 1,
  },
  {
    question: "Which Bollywood actress made her Hollywood debut with 'xXx: Return of Xander Cage'?",
    answers: ["Priyanka Chopra", "Deepika Padukone", "Katrina Kaif", "Aishwarya Rai"],
    correct: 1,
  },
  {
    question: "Which Bollywood movie is based on the life of Indian cricketer Mahendra Singh Dhoni?",
    answers: [
      "Sachin: A Billion Dreams",
      "83",
      "M.S. Dhoni: The Untold Story",
      "Lagaan"
    ],
    correct: 2,
  },
  {
    question: "Who directed the cult classic 'Sholay'?",
    answers: ["Ramesh Sippy", "Yash Chopra", "Rajkumar Hirani", "Manmohan Desai"],
    correct: 0,
  },
  {
    question: "Which Bollywood movie featured the song 'Chaiyya Chaiyya'?",
    answers: ["Dil Se", "Kabhi Khushi Kabhie Gham", "Kuch Kuch Hota Hai", "Raees"],
    correct: 0,
  },
  {
    question: "What was the debut movie of Ranbir Kapoor?",
    answers: ["Wake Up Sid", "Saawariya", "Rockstar", "Barfi!"],
    correct: 1,
  },
  {
    question: "Who is the vehicle of Lord Vishnu?",
    answers: ["Lion", "Garuda", "Elephant", "Bull"],
    correct: 1,
  },
  {
    question: "Who is known as the goddess of learning and wisdom?",
    answers: ["Lakshmi", "Durga", "Kali", "Saraswati"],
    correct: 3,
  },
  {
    question: "Who is the eldest Pandava brother?",
    answers: ["Yudhishthira", "Bhima", "Arjuna", "Nakula"],
    correct: 0,
  },
  {
    question: "Which Hindu festival celebrates the victory of Lord Rama over Ravana?",
    answers: ["Diwali", "Holi", "Dussehra", "Navratri"],
    correct: 2,
  },
  {
    question: "What is the name of the seven sages in Hindu mythology?",
    answers: ["Saptrishi", "Navrishi", "Panchrishi", "Dashrishi"],
    correct: 0,
  },
  {
    question: "Which river is considered the holiest in India?",
    answers: ["Yamuna", "Ganges", "Sindhu", "Godavari"],
    correct: 1,
  },
  {
    question: "In which year did India gain independence from British rule?",
    answers: ["1942", "1947", "1950", "1962"],
    correct: 1,
  },
  {
    question: "Which is the largest state in India by area?",
    answers: ["Uttar Pradesh", "Rajasthan", "Maharashtra", "Madhya Pradesh"],
    correct: 1,
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    answers: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Bhagat Singh"],
    correct: 2,
  },
   {
    question: "What is the name of the sage who cursed King Parikshit, leading to the events of the Bhagavata Purana?",
    answers: ["Durvasa", "Vishwamitra", "Shuka", "Shringi"],
    correct: 3,
  },
  {
    question: "Who was the architect of the palaces of the gods and demons in Hindu mythology?",
    answers: ["Vishwakarma", "Maya", "Tvashta", "Indrajit"],
    correct: 0,
  },
  {
    question: "Which celestial nymph was sent to distract sage Vishwamitra from his penance?",
    answers: ["Menaka", "Urvashi", "Rambha", "Tilottama"],
    correct: 0,
  },
  {
    question: "What was the name of the kingdom ruled by King Bharata, which eventually became known as India?",
    answers: ["Kuru", "Kosala", "Panchala", "Bharatavarsha"],
    correct: 3,
  },
  {
    question: "Which river goddess is considered the daughter of Lord Brahma?",
    answers: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    correct: 1,
  },
  {
    question: "Who is the Asura king who was granted immortality through a clever boon and was later slain by Narasimha?",
    answers: ["Hiranyaksha", "Hiranyakashipu", "Vibhishana", "Bali"],
    correct: 1,
  },
  {
    question: "Who was the sage who composed the Yoga Sutras and is considered the father of modern yoga?",
    answers: ["Vasistha", "Vyasa", "Patanjali", "Kapila"],
    correct: 2,
  },
  {
    question: "What is the name of the serpent who serves as Lord Vishnu’s resting place in the cosmic ocean?",
    answers: ["Takshaka", "Kaliya", "Ananta", "Vasuki"],
    correct: 2,
  },
  {
    question: "Which deity is known as the 'elephant-headed god' in Hindu mythology?",
    answers: ["Kubera", "Yama", "Ganesha", "Varuna"],
    correct: 2,
  },
  {
    question: "Who was the guru of both the Kauravas and the Pandavas?",
    answers: ["Drona", "Kripacharya", "Bhishma", "Vyasa"],
    correct: 0,
  },
  {
    question: "What is the name of the sacred mountain that acts as the axis of the universe in Hindu cosmology?",
    answers: ["Meru", "Kailash", "Mandara", "Vindhya"],
    correct: 0,
  },
  {
    question: "Who cursed King Pandu, preventing him from consummating his marriage?",
    answers: ["Durvasa", "Vashistha", "Kindama", "Narada"],
    correct: 2,
  },
  {
    question: "What is the name of the bow that broke during Sita's swayamvara in the Ramayana?",
    answers: ["Gandiva", "Sharanga", "Kodanda", "Pinaka"],
    correct: 3,
  },
  {
    question: "Who was the wife of Sage Kashyapa and the mother of snakes in Hindu mythology?",
    answers: ["Aditi", "Kadru", "Diti", "Vinata"],
    correct: 1,
  },
  {
    question: "Which form of Lord Vishnu subdued King Bali by covering the heavens and earth in three strides?",
    answers: ["Vamana", "Narasimha", "Kurma", "Matsya"],
    correct: 0,
  },
  {
    question: "What is the name of the forest where the Pandavas spent part of their exile?",
    answers: ["Dandakaranya", "Kamyaka", "Naimisha", "Tapovana"],
    correct: 1,
  },
  {
    question: "Which weapon was given to Karna by Lord Indra in exchange for his divine armor and earrings?",
    answers: ["Brahmastra", "Vasavi Shakti", "Pashupatastra", "Vajra"],
    correct: 1,
  },
  {
    question: "What is the national animal of India?",
    answers: ["Elephant", "Lion", "Tiger", "Peacock"],
    correct: 2,
  },
  {
    question: "Which city is known as the 'Silicon Valley of India'?",
    answers: ["Bengaluru", "Hyderabad", "Chennai", "Pune"],
    correct: 0,
  },
  {
    question: "Which is the national flower of India?",
    answers: ["Rose", "Lotus", "Tulip", "Sunflower"],
    correct: 1,
  },
  {
    question: "What is the name of Lord Krishna's elder brother?",
    answers: ["Arjuna", "Balarama", "Karna", "Shiva"],
    correct: 1,
  },
  {
    question: "Who is known as the god of wisdom and remover of obstacles?",
    answers: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    correct: 2,
  },
  {
    question: "Which avatar of Lord Vishnu is known as the 'fish' incarnation?",
    answers: ["Kurma", "Varaha", "Matsya", "Narasimha"],
    correct: 2,
  },
  {
    question: "Which sage cursed Lord Vishnu to be born as a human?",
    answers: ["Narada", "Durvasa", "Bhrigu", "Vashistha"],
    correct: 2,
  },
  {
    question: "What is the name of the mountain where Hanuman finds the Sanjeevani herb?",
    answers: ["Mandara", "Dronagiri", "Kailash", "Meru"],
    correct: 1,
  },
  {
    question: "Who wrote the Ramayana in Sanskrit?",
    answers: ["Vyasa", "Valmiki", "Tulsidas", "Kalidasa"],
    correct: 1,
  },
  {
    question: "Who is the father of Karna in the Mahabharata?",
    answers: ["Surya", "Indra", "Drona", "Shiva"],
    correct: 0,
  },
  {
    question: "Which Bollywood movie features the dialogue 'Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain'?",
    answers: ["Dilwale Dulhania Le Jayenge", "Kabhi Alvida Naa Kehna", "Kal Ho Naa Ho", "My Name Is Khan"],
    correct: 0,
  },
  {
    question: "Which Bollywood star is nicknamed 'Bebo'?",
    answers: ["Kareena Kapoor", "Katrina Kaif", "Priyanka Chopra", "Deepika Padukone"],
    correct: 0,
  },
  {
    question: "Which Indian state has the highest number of UNESCO World Heritage Sites?",
    answers: ["Maharashtra", "Tamil Nadu", "Rajasthan", "Uttar Pradesh"],
    correct: 0
  },
  {
    question: "What is the smallest unit of a chemical element that retains its properties?",
    answers: ["Proton", "Electron", "Atom", "Molecule"],
    correct: 2
  },
  {
    question: "Who wrote the famous book 'Annihilation of Caste'?",
    answers: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Periyar"],
    correct: 1
  },
  {
    question: "Which Indian missile is also known as the 'Agni' series?",
    answers: ["Prithvi", "Agni", "Trishul", "Nag"],
    correct: 1
  },
  {
    question: "Which city is known as the 'Venice of the East' in India?",
    answers: ["Varanasi", "Udaipur", "Alleppey", "Srinagar"],
    correct: 2
  },
  {
    question: "Who was the first President of India?",
    answers: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Indira Gandhi", "Sardar Patel"],
    correct: 1,
  },
  {
    question: "Who was the first woman Prime Minister of India?",
    answers: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
    correct: 0,
  },
    {
    question: "Which epic narrates the story of Lord Rama?",
    answers: ["Mahabharata", "Ramayana", "Bhagavad Gita", "Vedas"],
    correct: 1,
  },
  {
    question: "Who is the consort of Lord Shiva?",
    answers: ["Lakshmi", "Sita", "Parvati", "Radha"],
    correct: 2,
  },
  {
    question: "Who is the charioteer of Arjuna in the Mahabharata?",
    answers: ["Bheeshma", "Krishna", "Karna", "Drona"],
    correct: 1,
  },
  {
    question: "What is the weapon of Lord Vishnu?",
    answers: ["Trishul", "Sudarshana Chakra", "Bow", "Mace"],
    correct: 1,
  },
  {
    question: "Which Indian city is known as the 'City of Joy'?",
    answers: ["Mumbai", "Kolkata", "Chennai", "Delhi"],
    correct: 1,
  },
  {
    question: "Which Indian state is famous for its tea gardens?",
    answers: ["Kerala", "Sikkim", "Assam", "Darjeeling"],
    correct: 2,
  },
  {
    question: "Which is the largest religion in India?",
    answers: ["Hinduism", "Islam", "Christianity", "Sikhism"],
    correct: 0,
  },
  {
    question: "In which year did India win its first Cricket World Cup?",
    answers: ["1975", "1983", "1992", "2007"],
    correct: 1,
  },
  {
    question: "Who was the first woman astronaut of India?",
    answers: ["Kalpana Chawla", "Sunita Williams", "Sally Ride", "Rakesh Sharma"],
    correct: 0,
  },
  {
    question: "Which is the national bird of India?",
    answers: ["Parrot", "Peacock", "Eagle", "Owl"],
    correct: 1,
  },
  {
    question: "In which year did the Battle of Plassey take place?",
    answers: ["1757", "1764", "1857", "1782"],
    correct: 0
  },
  {
    question: "Which Indian scientist developed the technique of Raman Spectroscopy?",
    answers: ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Jagadish Chandra Bose"],
    correct: 0
  },
  {
    question: "What was the name of the kingdom ruled by King Bharata, which eventually became known as India?",
    answers: ["Kuru", "Kosala", "Panchala", "Bharatavarsha"],
    correct: 3,
  },
  {
    question: "What is the ancient language in which most Hindu scriptures are written?",
    answers: ["Tamil", "Pali", "Sanskrit", "Prakrit"],
    correct: 2
  },
  {
    question: "Which Indian Prime Minister introduced the Green Revolution in India?",
    answers: ["Jawaharlal Nehru", "Indira Gandhi", "Lal Bahadur Shastri", "Rajiv Gandhi"],
    correct: 1
  },
  {
    question: "What is the scientific name of the national bird of India, the peacock?",
    answers: [
      "Pavo muticus",
      "Pavo cristatus",
      "Gallus gallus",
      "Pelecanus onocrotalus"
    ],
    correct: 1
  },
  {
    question: "Who is the first person to receive Bharat Ratna, the highest civilian award in India?",
    answers: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. S. Radhakrishnan", "C. Rajagopalachari"],
    correct: 3,
  },
  {
    question: "What is the capital of India?",
    answers: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: 1,
  },
  {
    question: "Which Indian film won the first Oscar for Best Foreign Language Film?",
    answers: ["Lagaan", "Mother India", "Slumdog Millionaire", "Gandhi"],
    correct: 2,
  },
  {
    question: "What is the longest river in India?",
    answers: ["Yamuna", "Narmada", "Ganges", "Godavari"],
    correct: 2,
  },
  {
    question: "Which Indian festival is also known as the Festival of Lights?",
    answers: ["Diwali", "Holi", "Eid", "Christmas"],
    correct: 0,
  },
  {
    question: "What is the cube of 3?",
    answers: ["9", "18", "27", "36"],
    correct: 2
  },
  {
    question: "What is 10% of 250?",
    answers: ["20", "25", "30", "35"],
    correct: 1
  },
  {
    question: "Which state is the birthplace of Mahatma Gandhi?",
    answers: ["Maharashtra", "Gujarat", "Rajasthan", "Bihar"],
    correct: 1,
  },
  {
    question: "Who is known as the 'Father of the Indian Constitution'?",
    answers: ["Mahatma Gandhi", "B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
    correct: 1
  },
  {
    question: "Which Indian state is the largest by area?",
    answers: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
    correct: 2
  },
  {
    question: "Which is the highest peak in India?",
    answers: ["Mount Everest", "K2", "Kangchenjunga", "Nanda Devi"],
    correct: 2
  },
  {
    question: "What is the name of India's first satellite?",
    answers: ["INSAT-1A", "Aryabhata", "Bhaskara", "Rohini"],
    correct: 1
  },
  {
    question: "Which Indian state is famous for the dance form 'Kathakali'?",
    answers: ["Tamil Nadu", "Kerala", "Karnataka", "Odisha"],
    correct: 1
  },
  {
    question: "Who was the first Indian to win a Nobel Prize?",
    answers: ["Rabindranath Tagore", "C. V. Raman", "Mother Teresa", "Amartya Sen"],
    correct: 0
  },
  {
    question: "Which river is called the 'Sorrow of Bihar' due to its frequent floods?",
    answers: ["Ganges", "Kosi", "Son", "Brahmaputra"],
    correct: 1
  },
  {
    question: "Who wrote the Indian National Anthem, 'Jana Gana Mana'?",
    answers: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose", "Mahatma Gandhi"],
    correct: 1
  },
  {
    question: "In which year did India gain independence from British rule?",
    answers: ["1945", "1947", "1950", "1952"],
    correct: 1
  },
  {
    question: "If 4 apples cost $12, what is the cost of 6 apples?",
    answers: ["$16", "$18", "$20", "$24"],
    correct: 1
  },
  {
    question: "What is 81 ÷ 9?",
    answers: ["7", "8", "9", "10"],
    correct: 2
  },
    {
    question: "Who was the demon who tried to abduct Sita by taking the form of a golden deer?",
    answers: ["Mareecha", "Subahu", "Tataka", "Shurpanakha"],
    correct: 0,
  },
  {
    question: "What is 3/4 of 100?",
    answers: ["50", "60", "70", "75"],
    correct: 3
  },
  {
    question: "What is the square root of 144?",
    answers: ["10", "12", "14", "16"],
    correct: 1
  },
  {
    question: "If a car travels 80 km in 2 hours, what is its speed in km/h?",
    answers: ["30", "35", "40", "50"],
    correct: 2
  },
  {
    question: "What is 7 x 8?",
    answers: ["54", "56", "58", "60"],
    correct: 1
  },
  {
    question: "What is 25% of 200?",
    answers: ["25", "50", "75", "100"],
    correct: 1
  },

  {
    question: "Identify the famous Indian poet from these eyes.",
    answers: ["Rabindranath Tagore", "Sarojini Naidu", "Harivansh Rai Bachchan", "Mirza Ghalib"],
    correct: 0,
    image: "assests/Rabindranath.png"
  },
  {
    question: "These eyes belong to which legendary Bollywood actor?",
    answers: ["Amitabh Bachchan", "Raj Kapoor", "Dilip Kumar", "Shah Rukh Khan"],
    correct: 1,
    image: "assests/Rajkappor.png"
  },
  {
    question: "Guess the Indian actress from these eyes.",
    answers: ["Madhubala", "Rekha", "Aishwarya Rai", "Deepika Padukone"],
    correct: 2,
    image: "assests/Aishawarya.png"
  },
  {
    question: "Complete the lyrics: 'Tujh mein rab dikhta hai...'?",
    answers: [
      "Yara main kya karoon",
      "Dil se dua karoon",
      "Main toh sambhal jaoon",
      "Tera hai jo karoon"
    ],
    correct: 0
  },
  {
    question: "Complete the lyrics: 'Kabhi kabhi Aditi...'?",
    answers: [
      "Zindagi mein yun hi koi apna lagta hai",
      "Zindagi khilti nahi",
      "Muskurake jo apna lagta hai",
      "Lambi si raat hai"
    ],
    correct: 0
  },
  {
    question: "Complete the lyrics: 'Tum paas aaye...'?",
    answers: [
      "Yun muskaraaye",
      "Yeh dil yeh jaan",
      "Ek din yeh dil",
      "Dil dhadkane laga"
    ],
    correct: 0
  },
  {
    question: "Complete the lyrics: 'Pee loon tere neele neele...'?",
    answers: [
      "Nainon se shabnam",
      "Honthon se ras pi loon",
      "Honth tera",
      "Mausam hai aaj ka"
    ],
    correct: 1
  },
    {
    question: "Who was the son of Lord Indra and the hero of the Mahabharata who could wield the mace with unmatched skill?",
    answers: ["Yudhishthira", "Bhima", "Arjuna", "Ghatotkacha"],
    correct: 1,
  },
  {
    question: "Complete the lyrics: 'Kal ho na ho...'?",
    answers: [
      "Har ghadi badal rahi hai roop zindagi",
      "Jeene ka hai yeh ishaara",
      "Jo hai sama kal ho na ho",
      "Chhoo lo tum"
    ],
    correct: 0
  },
  {
    question: "What is the perimeter of a square with a side length of 6?",
    answers: ["18", "20", "24", "28"],
    correct: 2
  },
  {
    question: "Which Indian festival is also known as the 'Festival of Lights'?",
    answers: ["Holi", "Eid", "Diwali", "Navratri"],
    correct: 2
  },
  {
    question: "Who was the first Indian astronaut to travel to space?",
    answers: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Vikram Sarabhai"],
    correct: 1
  },
  {
    question: "Which Indian state has the largest coastline?",
    answers: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
    correct: 2
  },
  {
    question: "Which classical Indian dance form originated in Tamil Nadu?",
    answers: ["Kathak", "Bharatanatyam", "Manipuri", "Odissi"],
    correct: 1
  },
  {
    question: "Who was the first woman to receive the Bharat Ratna, India's highest civilian award?",
    answers: ["Indira Gandhi", "Sarojini Naidu", "Mother Teresa", "Kamaladevi Chattopadhyay"],
    correct: 2
  },
  {
    question: "Which city is known as the 'Silicon Valley of India'?",
    answers: ["Hyderabad", "Mumbai", "Bangalore", "Chennai"],
    correct: 0
  },
  {
    question: "What is the national flower of India?",
    answers: ["Lotus", "Rose", "Sunflower", "Marigold"],
    correct: 0
  },
  {
    question: "Which Mughal emperor commissioned the construction of the Taj Mahal?",
    answers: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
    correct: 1
  },
  {
    question: "What is the capital city of the Indian state of Rajasthan?",
    answers: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    correct: 0
  },
  {
    question: "What is the official language of the Indian state of Nagaland?",
    answers: ["Hindi", "English", "Nagamese", "Assamese"],
    correct: 2
  },
  {
    question: "Which Indian monument is known as the 'Black Taj Mahal'?",
    answers: ["Gol Gumbaz", "Bibi Ka Maqbara", "Qutub Minar", "Charminar"],
    correct: 1
  },
  {
    question: "What is 25 + 37?",
    answers: ["52", "62", "64", "72"],
    correct: 1
  },
  {
    question: "If a dozen is 12, how many are 7 dozens?",
    answers: ["72", "84", "96", "102"],
    correct: 1
  },
  {
    question: "What is 45 ÷ 5?",
    answers: ["8", "9", "10", "12"],
    correct: 1
  },
  {
    question: "What is the square of 12?",
    answers: ["144", "132", "121", "169"],
    correct: 0
  },
  {
    question: "A rectangle has a length of 8 and width of 5. What is its area?",
    answers: ["30", "40", "50", "60"],
    correct: 1
  },
  {
    question: "What is 9 x 6?",
    answers: ["54", "56", "52", "50"],
    correct: 0
  },
  {
    question: "What is half of 96?",
    answers: ["46", "48", "50", "52"],
    correct: 1
  },
  {
    question: "If a train travels 60 km in 1 hour, how far will it travel in 3.5 hours?",
    answers: ["180 km", "200 km", "210 km", "220 km"],
    correct: 2
  },
  {
    question: "What is the result of 15 x 15?",
    answers: ["215", "220", "225", "230"],
    correct: 2
  },
  {
    question: "What is 500 - 275?",
    answers: ["225", "200", "250", "275"],
    correct: 0
  },

  {
    question: "Complete the lyrics: 'Tera hone laga hoon...'?",
    answers: [
      "Khud se juda hoon",
      "Kya mujhe pyar hai",
      "Saathiya yeh tune kya kiya",
      "Jab se mila hoon"
    ],
    correct: 0
  },
  {
    question: "Complete the lyrics: 'Tujhe dekha toh yeh jana sanam...'?",
    answers: [
      "Pyar hota hai deewana sanam",
      "Dil ka sukoon",
      "Mohabbat hai zindagi",
      "Saansein rukti hain sanam"
    ],
    correct: 0
  },
  {
    question: "Complete the lyrics: 'Ae mere humsafar...'?",
    answers: [
      "Ek zara intezaar",
      "Tu hai mera pyaar",
      "Dil ka karaar",
      "Tu hi mera sahara"
    ],
    correct: 0
  },
  {
    question: "Complete the lyrics: 'Zindagi ek safar hai suhana...'?",
    answers: [
      "Yahan kal kya ho kisne jaana",
      "Muskurana seekh lo",
      "Manzil hai pyara",
      "Dil dhadkana"
    ],
    correct: 0
  },
  {
    question: "Complete the lyrics: 'Abhi mujh mein kahin...'?",
    answers: [
      "Baki thodi si hai zindagi",
      "Teri baatein hain",
      "Dil dhadkane laga",
      "Hai chhupi kuch baatein"
    ],
    correct: 0
  }
];
