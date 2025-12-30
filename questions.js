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
  //GK
  { question: "What is the national animal of India?", answers: ["Lion", "Tiger", "Elephant", "Leopard"], correct: 1 },
  { question: "What is the national bird of India?", answers: ["Peacock", "Eagle", "Sparrow", "Parrot"], correct: 0 },
  { question: "Who is known as the Father of the Indian Nation?", answers: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Subhash Chandra Bose"], correct: 2 },
  { question: "Which is the national flower of India?", answers: ["Rose", "Lotus", "Jasmine", "Sunflower"], correct: 1 },
  { question: "Which Indian city is known as the Silicon Valley of India?", answers: ["Hyderabad", "Pune", "Bengaluru", "Chennai"], correct: 2 },
  { question: "Which is the largest state in India by area?", answers: ["Maharashtra", "Madhya Pradesh", "Rajasthan", "Uttar Pradesh"], correct: 2 },
  { question: "Which river is considered the holiest in India?", answers: ["Yamuna", "Ganga", "Godavari", "Narmada"], correct: 1 },
  { question: "Which Indian monument is one of the Seven Wonders of the World?", answers: ["Qutub Minar", "Red Fort", "Taj Mahal", "Gateway of India"], correct: 2 },
  { question: "Which Indian state has the longest coastline?", answers: ["Tamil Nadu", "Andhra Pradesh", "Maharashtra", "Gujarat"], correct: 3 },
  { question: "What is the national sport of India (as commonly believed)?", answers: ["Cricket", "Hockey", "Kabaddi", "Football"], correct: 1 },
  //BOLLYWOOD DIALOGUES
  {
    question: "Complete the dialogue: 'Rishte mein toh hum tumhare ___ lagte hain.'",
    answers: ["baap", "chacha", "dost", "bhai"],
    correct: 0,
  },
  {
    question: "Complete the dialogue: 'Zindagi mein kuch banna ho, kuch haasil karna ho, toh ___ mat haaro.'",
    answers: ["mehnat", "hausla", "himat", "dil"],
    correct: 1,
  },
  {
    question: "Complete the dialogue: 'Mogambo ___ hua.'",
    answers: ["gussa", "khush", "naraz", "hairaan"],
    correct: 1,
  },
  {
    question: "Complete the dialogue: 'Hum ek baar jeete hain, ek baar marte hain, ___ bhi ek hi baar hota hai.'",
    answers: ["dosti", "shaadi", "pyaar", "yaari"],
    correct: 2,
  },
  {
    question: "Complete the dialogue: 'Jaa Simran, ___.'",
    answers: ["bhaag ja", "jee le apni zindagi", "khush reh", "ghar ja"],
    correct: 1,
  },
  {
    question: "Complete the dialogue: 'Aaj ek ___ aur ___ ka khel hoga.'",
    answers: ["dum", "dimaag", "josh", "himat"],
    correct: 1,
  },
  {
    question: "Complete the dialogue: 'Hum jahan khade ho jaate hain, ___ wahi se shuru hoti hai.'",
    answers: ["line", "race", "competition", "kahani"],
    correct: 2,
  },
  {
    question: "Complete the dialogue: 'Ek ladki thi deewani si, ___ pe woh marti thi.'",
    answers: ["sapno", "khwabon", "baaton", "yaadon"],
    correct: 1,
  },
  {
    question: "Complete the dialogue: 'Main apni favourite hoon, kyunki main ___ hoon.'",
    answers: ["strong", "confident", "original", "khud"],
    correct: 3,
  },
  {
    question: "Complete the dialogue: 'Picture abhi ___ hai mere dost.'",
    answers: ["shuru", "chal rahi", "baaki", "adhoori"],
    correct: 2,
  },
  {
    question: "Which is the largest continent in the world?",
    answers: ["Africa", "Asia", "Europe", "North America"],
    correct: 1,
  },
  {
    question: "Which ocean is the deepest in the world?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3,
  },
  {
    question: "Which is the longest river in the world?",
    answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correct: 1,
  },
  {
    question: "Which country has the longest coastline in the world?",
    answers: ["Australia", "Russia", "Canada", "USA"],
    correct: 2,
  },
  {
    question: "Which is the highest mountain peak in the world?",
    answers: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    correct: 1,
  },
  {
    question: "Which desert is the largest hot desert in the world?",
    answers: ["Thar", "Gobi", "Kalahari", "Sahara"],
    correct: 3,
  },
  {
    question: "Which Indian state is known as the 'Land of Rising Sun'?",
    answers: ["Assam", "Sikkim", "Arunachal Pradesh", "Nagaland"],
    correct: 2,
  },
  {
    question: "Which latitude passes through the middle of India?",
    answers: ["Tropic of Cancer", "Equator", "Arctic Circle", "Prime Meridian"],
    correct: 0,
  },
  {
    question: "Which sea separates India and Sri Lanka?",
    answers: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Palk Strait"],
    correct: 3,
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answers: ["China", "South Korea", "Japan", "Thailand"],
    correct: 2,
  },
    {
    question: "Who wrote the Indian National Anthem?",
    answers: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"],
    correct: 1,
  },
    {
    question: "Krishnadevaraya was the ruler of which empire?",
    answers: ["Maurya Empire", "Gupta Empire", "Vijayanagara Empire", "Chola Empire"],
    correct: 2,
  },
   {
    question: "The song 'Tum Hi Ho' is from which Bollywood movie?",
    answers: ["Aashiqui 2", "Ek Villain", "Rockstar", "Kabir Singh"],
    correct: 0,
  },
  {
    question: "The song 'Jai Ho' is from which movie?",
    answers: ["Lagaan", "Swades", "Slumdog Millionaire", "Guru"],
    correct: 2,
  },
  {
    question: "The song 'Kal Ho Naa Ho' is from which movie?",
    answers: ["Kabhi Khushi Kabhie Gham", "Kal Ho Naa Ho", "Veer-Zaara", "My Name Is Khan"],
    correct: 1,
  },
  {
    question: "The song 'Chaiyya Chaiyya' is from which movie?",
    answers: ["Dil Se", "Bombay", "Guru", "Roja"],
    correct: 0,
  },
  {
    question: "The song 'Tujhe Dekha Toh' is from which movie?",
    answers: ["Dil To Pagal Hai", "Kuch Kuch Hota Hai", "Dilwale Dulhania Le Jayenge", "Veer-Zaara"],
    correct: 2,
  },
  {
    question: "The song 'Gerua' is from which movie?",
    answers: ["Raees", "Dilwale", "Jab Tak Hai Jaan", "Fan"],
    correct: 1,
  },
  {
    question: "The song 'Zingaat' (Hindi version) is from which movie?",
    answers: ["Dhadak", "Sairat", "Loveratri", "Shubh Mangal Zyada Saavdhan"],
    correct: 0,
  },
  {
    question: "The song 'Kabira' is from which movie?",
    answers: ["Yeh Jawaani Hai Deewani", "Rockstar", "Wake Up Sid", "Tamasha"],
    correct: 0,
  },
  {
    question: "The song 'Badtameez Dil' is from which movie?",
    answers: ["Ae Dil Hai Mushkil", "Yeh Jawaani Hai Deewani", "Student of the Year", "Tamasha"],
    correct: 1,
  },
  {
    question: "The song 'Kesariya' is from which movie?",
    answers: ["Brahmāstra", "Kalank", "Rocky Aur Rani Kii Prem Kahaani", "Tu Jhoothi Main Makkaar"],
    correct: 0,
  },
  { question: "Unscramble the STATE name: TJARASAHNRA",
    answers: ["Rajasthan", "Maharashtra", "Jharkhand", "Chhattisgarh"],
    correct: 1,
  },
  {
    question: "Unscramble the CAPITAL name: NEMIHCIA",
    answers: ["Chennai", "Kochi", "Amritsar", "Madurai"],
    correct: 0,
  },
  {
    question: "Unscramble the STATE name: TARGAUJ",
    answers: ["Goa", "Gujarat", "Punjab", "Haryana"],
    correct: 1,
  },
  {
    question: "Unscramble the CAPITAL name: MUMIAB",
    answers: ["Pune", "Mumbai", "Nagpur", "Nashik"],
    correct: 1,
  },
  {
    question: "Unscramble the STATE name: RAEKL",
    answers: ["Kerala", "Karnataka", "Tripura", "Telangana"],
    correct: 0,
  },
  {
    question: "Unscramble the CAPITAL name: NKRUBA",
    answers: ["Kurnool", "Bikaner", "Bengaluru", "Hubli"],
    correct: 2,
  },
  {
    question: "Unscramble the STATE name: PNJUBA",
    answers: ["Punjab", "Bihar", "Himachal Pradesh", "Haryana"],
    correct: 0,
  },
  {
    question: "Unscramble the CAPITAL name: LODHEI",
    answers: ["Chandigarh", "New Delhi", "Dehradun", "Jaipur"],
    correct: 1,
  },
  {
    question: "Unscramble the STATE name: LMIATN DUAN",
    answers: ["Andhra Pradesh", "Tamil Nadu", "Telangana", "Odisha"],
    correct: 1,
  },
  {
    question: "Unscramble the CAPITAL name: JIARPU",
    answers: ["Udaipur", "Jaipur", "Jodhpur", "Ajmer"],
    correct: 1,
  },
  {
    question: "Which Indian monument is known as the symbol of love?",
    answers: ["Qutub Minar", "Taj Mahal", "Charminar", "Gateway of India"],
    correct: 1,
  },
  {
    question: "In which city is the Gateway of India located?",
    answers: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correct: 1,
  },
  {
    question: "Which hill station is known as the 'Queen of the Hills'?",
    answers: ["Ooty", "Darjeeling", "Shimla", "Mussoorie"],
    correct: 2,
  },
  {
    question: "The Sun Temple is located at which place?",
    answers: ["Puri", "Konark", "Bhubaneswar", "Cuttack"],
    correct: 1,
  },
  {
    question: "Which Indian state is famous for backwaters and houseboats?",
    answers: ["Goa", "Kerala", "Assam", "West Bengal"],
    correct: 1,
  },
  {
    question: "In which city is the Charminar located?",
    answers: ["Hyderabad", "Lucknow", "Bhopal", "Delhi"],
    correct: 0,
  },
  {
    question: "Which fort is popularly known as the 'Golden Fort'?",
    answers: ["Red Fort", "Amber Fort", "Jaisalmer Fort", "Gwalior Fort"],
    correct: 2,
  },
  {
    question: "Which city is famous for the ghats of the River Ganga?",
    answers: ["Haridwar", "Prayagraj", "Varanasi", "Patna"],
    correct: 2,
  },
  {
    question: "The Statue of Unity is located in which Indian state?",
    answers: ["Maharashtra", "Gujarat", "Rajasthan", "Madhya Pradesh"],
    correct: 1,
  },
  {
    question: "Which Indian destination is famous for its tea gardens?",
    answers: ["Munnar", "Darjeeling", "Ooty", "All of these"],
    correct: 3,
  },
  {
    question: "Which place is known as the 'Pink City of India'?",
    answers: ["Udaipur", "Jaipur", "Jodhpur", "Bikaner"],
    correct: 1,
  },
  {
    question: "Which national park is famous for one-horned rhinoceroses?",
    answers: ["Jim Corbett", "Kaziranga", "Bandipur", "Gir"],
    correct: 1,
  },
  {
    question: "Which Indian cave complex is famous for Buddhist paintings?",
    answers: ["Elephanta Caves", "Ajanta Caves", "Ellora Caves", "Badami Caves"],
    correct: 1,
  },
  {
    question: "Which beach destination is known as the party capital of India?",
    answers: ["Gokarna", "Varkala", "Goa", "Pondicherry"],
    correct: 2,
  },
  {
    question: "Which Indian city is famous for the Golden Temple?",
    answers: ["Chandigarh", "Amritsar", "Ludhiana", "Patiala"],
    correct: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    question: "Which is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Neptune"],
    correct: 2,
  },
  {
    question: "How many planets are there in the solar system?",
    answers: ["7", "8", "9", "10"],
    correct: 1,
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Venus", "Earth", "Mercury", "Mars"],
    correct: 2,
  },
  {
    question: "Which planet has the most visible rings?",
    answers: ["Jupiter", "Uranus", "Saturn", "Neptune"],
    correct: 2,
  },
  {
    question: "Which planet is known as Earth's twin?",
    answers: ["Mars", "Venus", "Mercury", "Neptune"],
    correct: 1,
  },
  {
    question: "Which is the hottest planet in the solar system?",
    answers: ["Mercury", "Venus", "Mars", "Jupiter"],
    correct: 1,
  },
  {
    question: "What is the name of our galaxy?",
    answers: ["Andromeda", "Milky Way", "Orion", "Whirlpool"],
    correct: 1,
  },
  {
    question: "Which planet has the highest number of moons?",
    answers: ["Jupiter", "Saturn", "Earth", "Mars"],
    correct: 0,
  },
  {
    question: "Which celestial body is at the center of our solar system?",
    answers: ["Earth", "Moon", "Sun", "Mars"],
    correct: 2,
  },
  {
    question: "Which planet takes the longest time to orbit the Sun?",
    answers: ["Saturn", "Uranus", "Neptune", "Jupiter"],
    correct: 2,
  },
  {
    question: "Which planet has a day longer than its year?",
    answers: ["Venus", "Mercury", "Mars", "Jupiter"],
    correct: 0,
  },
  {
    question: "Which planet is famous for its Great Red Spot?",
    answers: ["Mars", "Jupiter", "Saturn", "Neptune"],
    correct: 1,
  },
  {
    question: "Which is the coldest planet in the solar system?",
    answers: ["Neptune", "Uranus", "Saturn", "Mars"],
    correct: 1,
  },
  {
    question: "What do we call small rocky bodies that orbit the Sun, mainly found between Mars and Jupiter?",
    answers: ["Comets", "Asteroids", "Meteors", "Moons"],
    correct: 1,
  },
  {
    question: "Who is called the Father of the Nation?",
    answers: ["Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh", "Sardar Patel"],
    correct: 1,
  },
  {
    question: "Which freedom fighter is shown on Indian currency notes?",
    answers: ["Bhagat Singh", "Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru"],
    correct: 1,
  },
  {
    question: "Who gave the slogan 'Inquilab Zindabad'?",
    answers: ["Bhagat Singh", "Lala Lajpat Rai", "Bal Gangadhar Tilak", "Sardar Patel"],
    correct: 0,
  },
  {
    question: "Who was the first Prime Minister of India?",
    answers: ["Rajendra Prasad", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Sardar Patel"],
    correct: 1,
  },
  {
    question: "Who was popularly known as 'Netaji'?",
    answers: ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru"],
    correct: 1,
  },
  {
    question: "Which movement did Mahatma Gandhi start in 1942?",
    answers: ["Civil Disobedience", "Non-Cooperation", "Quit India", "Khilafat"],
    correct: 2,
  },
  {
    question: "Who is known as the Iron Man of India?",
    answers: ["Bal Gangadhar Tilak", "Sardar Patel", "Lal Bahadur Shastri", "C. Rajagopalachari"],
    correct: 1,
  },
  {
    question: "Who wrote 'Vande Mataram'?",
    answers: ["Rabindranath Tagore", "Sarojini Naidu", "Bankim Chandra Chattopadhyay", "Subramania Bharati"],
    correct: 2,
  },
  {
    question: "Who is known as the Nightingale of India?",
    answers: ["Sarojini Naidu", "Annie Besant", "Aruna Asaf Ali", "Kasturba Gandhi"],
    correct: 0,
  },
  {
    question: "Which freedom fighter led the Salt March?",
    answers: ["Jawaharlal Nehru", "Bhagat Singh", "Mahatma Gandhi", "Sardar Patel"],
    correct: 2,
  },
  {
    question: "Who was the first President of India?",
    answers: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel", "Subhas Chandra Bose"],
    correct: 1,
  },
  {
    question: "Which freedom fighter was called 'Lokmanya'?",
    answers: ["Bal Gangadhar Tilak", "Lala Lajpat Rai", "Bhagat Singh", "Jawaharlal Nehru"],
    correct: 0,
  },
  {
    question: "Who is known as the 'Punjab Kesari'?",
    answers: ["Bhagat Singh", "Lala Lajpat Rai", "Udham Singh", "Chandrashekhar Azad"],
    correct: 1,
  },
  {
    question: "Which freedom fighter was associated with the slogan 'Do or Die'?",
    answers: ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru"],
    correct: 2,
  },
  {
    question: "Who was the first Indian to become the President of the Indian National Congress?",
    answers: ["Dadabhai Naoroji", "W. C. Bonnerjee", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale"],
    correct: 1,
  },
  {
    question: "Who hoisted the Indian national flag at the Red Fort on 15 August 1947?",
    answers: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    correct: 1,
  },
  {
    question: "Which freedom fighter was known for the slogan 'Swaraj is my birthright'?",
    answers: ["Lala Lajpat Rai", "Bal Gangadhar Tilak", "Bhagat Singh", "Subhas Chandra Bose"],
    correct: 1,
  },
  {
    question: "Who among the following was a woman freedom fighter?",
    answers: ["Sarojini Naidu", "Annie Besant", "Aruna Asaf Ali", "All of these"],
    correct: 3,
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
    question: "Identify the Indian state shown in the map.",
    answers: ["Rajasthan", "Gujarat", "Goa", "Maharashtra"],
    correct: 1,
    image: "assests/Gujarat.png"
  },
];
