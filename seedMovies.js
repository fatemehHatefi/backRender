/*****************************************************************************
*
WEB422 – Project
*
I declare that this assignment is my own work in accordance with SenecaAcademic Policy.
*
No part of this assignment has been copied manually or electronically from any other source
*
(including web sites) or distributed to other students.
*
*
Group member Names: Fatemeh Hatefi, Dhruv Sahni 
Student IDs: 142616218, 143525228 
Date: 08/13/2024
*****************************************************************************/
require('dotenv').config();
const mongoose = require('mongoose');
const { Movie } = require('./models');
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1);
});

const movies = [
    {
      "id": 1,
      "title": "Inception",
      "description": "A mind-bending thriller",
      "rating": "8.8",
      "releaseYear": 2010,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      "summary": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible—inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime, but no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
      "category": "Science Fiction & Fantasy"
    },
    {
      "id": 2,
      "title": "Interstellar",
      "description": "A journey through space and time",
      "rating": "8.6",
      "releaseYear": 2014,
      "discontinued": false,
      "image": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      "summary": "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
      "category": "Science Fiction & Fantasy"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "description": "Batman battles the Joker",
      "rating": "9.0",
      "releaseYear": 2008,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      "summary": "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
      "category": "Action & Adventure"
    },
    {
      "id": 4,
      "title": "avatar",
      "description": "A marine on an alien planet",
      "rating": "7.8",
      "releaseYear": 2009,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
      "summary": "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.",
      "category": "Science Fiction & Fantasy"
    },
    {
      "id": 5,
      "title": "Titanic",
      "description": "A love story on the doomed ship",
      "rating": "7.8",
      "releaseYear": 1997,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      "summary": "Titanic' is a 1997 epic romance and disaster film directed by James Cameron. The movie is set against the backdrop of the ill-fated maiden voyage of the RMS Titanic. It tells the story of Jack Dawson, a poor artist, and Rose DeWitt Bukater, a wealthy young woman, who fall in love despite their social differences. As the Titanic tragically sinks after hitting an iceberg, their love faces the ultimate test, leading to a dramatic and emotional conclusion. The film is known for its stunning visuals, memorable performances, and the iconic theme song 'My Heart Will Go On.",
      "category": "Drama & Romance"
    },
    {
      "id": 6,
      "title": "The Matrix",
      "description": "A hacker discovers the truth",
      "rating": "8.7",
      "releaseYear": 1999,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      "summary": "The Matrix' is a 1999 science fiction action film directed by the Wachowskis. The movie follows Neo, a computer hacker who discovers that the world he lives in is a simulated reality called the Matrix, created by intelligent machines to subdue the human population while their bodies' energy is harvested. Neo is led by Morpheus, a leader of the human resistance, and Trinity, a skilled fighter, to join the fight against the machines. As Neo learns the truth about the Matrix, he must embrace his role as 'The One' and lead the battle to free humanity from the machines' control. The film is renowned for its groundbreaking special effects, philosophical themes, and innovative action sequences.",
      "category": "Science Fiction & Fantasy"
    },
    {
      "id": 7,
      "title": "The Godfather",
      "description": "The story of a crime family",
      "rating": "9.2",
      "releaseYear": 1972,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      "summary": "The Godfather' is a 1972 crime drama film directed by Francis Ford Coppola, based on the novel by Mario Puzo. The movie tells the story of the powerful Corleone crime family in New York City, led by patriarch Vito Corleone. As Vito's youngest son, Michael Corleone, reluctantly gets involved in the family business, the film chronicles his rise to power as he takes over the family empire. The movie explores themes of loyalty, power, betrayal, and the moral complexities of organized crime. 'The Godfather' is widely regarded as one of the greatest films in cinema history, known for its compelling characters, iconic performances, and memorable quotes.",
      "category": "Drama & Romance"
    },
    {
      "id": 8,
      "title": "Pulp Fiction",
      "description": "Interwoven stories of crime",
      "rating": "8.9",
      "releaseYear": 1994,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      "summary": "Pulp Fiction' is a 1994 crime film directed by Quentin Tarantino. The movie is known for its unconventional narrative structure, interweaving multiple stories involving crime, redemption, and the seedy underworld of Los Angeles. The film follows characters like Vincent Vega and Jules Winnfield, two hitmen with a penchant for philosophical discussions; Mia Wallace, the wife of their mob boss; and Butch Coolidge, a boxer caught up in a web of deceit. The movie's non-linear storytelling, sharp dialogue, and eclectic soundtrack have made it a cultural landmark, praised for its innovative approach to filmmaking.",
      "category": "Drama & Romance"
    },
    {
      "id": 9,
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "description": "The journey to destroy the One Ring",
      "rating": "8.8",
      "releaseYear": 2001,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      "summary": "'The Lord of the Rings: The Fellowship of the Ring' is a 2001 fantasy epic directed by Peter Jackson, based on J.R.R. Tolkien's novel. The film follows the journey of a young hobbit, Frodo Baggins, who is entrusted with the One Ring, a powerful artifact that must be destroyed to prevent the dark lord Sauron from conquering Middle-earth. Frodo is joined by a diverse group of companions, forming the Fellowship, including the wizard Gandalf, the ranger Aragorn, the elf Legolas, the dwarf Gimli, and other brave members. Together, they embark on a perilous quest to destroy the ring by casting it into the fires of Mount Doom, facing numerous challenges and forging deep bonds along the way. The film is celebrated for its groundbreaking visual effects, immersive world-building, and faithful adaptation of Tolkien's classic tale.",
      "category": "Science Fiction & Fantasy"
    },
    {
      "id": 10,
      "title": "Star Wars: Episode IV - A New Hope",
      "description": "A young farmer joins the fight against the Empire",
      "rating": "8.6",
      "releaseYear": 1977,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/I/612h-jwI+EL._AC_UF894,1000_QL80_.jpg",
      "summary": "Star Wars: Episode IV - A New Hope' is a 1977 science fiction film directed by George Lucas. Set in a distant galaxy, the film follows the story of a young farm boy named Luke Skywalker who discovers that he is the son of a powerful Jedi Knight. With the help of allies like Princess Leia, Han Solo, and the wise Jedi Obi-Wan Kenobi, Luke joins the Rebel Alliance to fight against the oppressive Galactic Empire and its sinister leader, Darth Vader. The movie is renowned for its groundbreaking special effects, memorable characters, and epic space battles, establishing the foundation for the iconic Star Wars franchise.",
      "category": "Science Fiction & Fantasy"
    },
    {
      "id": 11,
      "title": "Jurassic Park",
      "description": "Dinosaurs are brought back to life",
      "rating": "8.1",
      "releaseYear": 1993,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
      "summary": "Jurassic Park' is a 1993 science fiction film directed by Steven Spielberg. The movie is set on a remote island where a wealthy entrepreneur, John Hammond, has created a theme park featuring cloned dinosaurs. When a group of scientists, including Dr. Alan Grant and Dr. Ellie Sattler, visit the park for a preview, things quickly go awry as the dinosaurs escape and wreak havoc. The film explores themes of scientific hubris and the consequences of playing with nature, featuring groundbreaking visual effects and thrilling action sequences. It became a landmark in cinema for its innovative use of CGI and animatronics to bring dinosaurs to life.",
      "category": "Action & Adventure"
    },
    {
      "id": 12,
      "title": "Forrest Gump",
      "description": "The life story of a simple man",
      "rating": "8.8",
      "releaseYear": 1994,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      "summary": "Forrest Gump' is a 1994 drama film directed by Robert Zemeckis, starring Tom Hanks as the titular character. The film follows the extraordinary life of Forrest Gump, a kind-hearted and intellectually challenged man from Alabama, as he unwittingly influences key historical events in the 20th century United States. Despite his low IQ, Forrest achieves remarkable success, including becoming a college football star, a Vietnam War hero, a successful shrimp boat owner, and a celebrated figure in pop culture. Throughout his life, he remains devoted to his childhood love, Jenny Curran. The film is celebrated for its poignant storytelling, memorable performances, and its exploration of themes such as destiny, love, and the impact of historical events on an individual's life.",
      "category": "Drama & Romance"
    },
    {
      "id": 13,
      "title": "The Lion King",
      "description": "A young lion's journey to become king",
      "rating": "8.5",
      "releaseYear": 1994,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
      "summary": "The Lion King' is a 1994 animated film produced by Walt Disney Feature Animation. Set in the African savanna, the story follows Simba, a young lion who is the heir to the Pride Lands throne. After the tragic death of his father, Mufasa, Simba is exiled by his treacherous uncle, Scar. Growing up in exile, Simba befriends Timon and Pumbaa and learns important life lessons. When he returns to reclaim his rightful place as king, Simba confronts Scar and restores balance to the Pride Lands. The film is renowned for its stunning animation, memorable characters, and an acclaimed soundtrack featuring songs like 'Circle of Life' and 'Can You Feel the Love Tonight.",
      "category": "Animation & Family"
    },
    {
      "id": 14,
      "title": "Back to the Future",
      "description": "A teenager travels through time",
      "rating": "8.5",
      "releaseYear": 1985,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      "summary": "Back to the Future' is a 1985 science fiction film directed by Robert Zemeckis. The story follows Marty McFly, a teenager who is accidentally sent back to 1955 in a time-traveling DeLorean invented by eccentric scientist Doc Brown. In the past, Marty encounters his younger parents and inadvertently disrupts their meeting, threatening his own existence. With the help of the younger Doc Brown, Marty must repair the timeline and ensure that his parents fall in love to restore the future. The film is celebrated for its clever plot, iconic characters, and its exploration of time travel and its consequences.",
      "category": "Action & Adventure"
    },
    {
      "id": 15,
      "title": "Toy Story",
      "description": "Toys come to life when humans aren't around",
      "rating": "8.3",
      "releaseYear": 1995,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
      "summary": "Toy Story' is a 1995 animated film produced by Pixar Animation Studios and released by Walt Disney Pictures. The film is set in a world where toys come to life when humans aren't around. It focuses on Woody, a cowboy doll who is the leader of the toys, and Buzz Lightyear, a space ranger action figure who believes he's a real space hero. When Buzz arrives and becomes the new favorite toy of their owner, Andy, Woody feels threatened and jealousy ensues. The story follows their adventures as they navigate their rivalry and eventually work together to return home after being accidentally separated from Andy. The film is notable for its innovative animation, heartwarming story, and the theme of friendship.",
      "category": "Animation & Family"
    },
    {
      "id": 16,
      "title": "The Avengers",
      "description": "Earth's mightiest heroes must come together",
      "rating": "8.0",
      "releaseYear": 2012,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      "summary": "The Avengers' is a 2012 superhero film directed by Joss Whedon. The film brings together several iconic Marvel superheroes: Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, who are assembled by Nick Fury, the director of S.H.I.E.L.D. The team unites to stop Loki, Thor's adopted brother, who has come to Earth with an alien army to conquer it. As the Avengers struggle to work together and overcome their differences, they must prevent Loki from using a powerful weapon to wreak havoc. The film is known for its action-packed sequences, humor, and successful integration of multiple superhero characters into a cohesive narrative.",
      "category": "Action & Adventure"
    },
    {
      "id": 17,
      "title": "Guardians of the Galaxy",
      "description": "A group of intergalactic misfits band together",
      "rating": "8.0",
      "releaseYear": 2014,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg",
      "summary": "Guardians of the Galaxy' is a 2014 superhero film directed by James Gunn. The story follows Peter Quill, a human space adventurer who becomes the leader of a ragtag group of intergalactic misfits: Gamora, a skilled assassin; Drax the Destroyer, a vengeful warrior; Rocket Raccoon, a genetically modified raccoon with a talent for engineering; and Groot, a sentient tree-like creature. The group forms an uneasy alliance to protect a mysterious orb that is sought by the villainous Ronan the Accuser, who plans to use it to destroy planets. As they navigate cosmic dangers and clash with Ronan's forces, they gradually bond and become an unlikely family. The film is celebrated for its humor, vibrant visual style, and its eclectic soundtrack.",
      "category": "Science Fiction & Fantasy"
    },
    {
      "id": 18,
      "title": "Frozen",
      "description": "A princess sets out to find her estranged sister",
      "rating": "7.4",
      "releaseYear": 2013,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg",
      "summary": "Frozen' is a 2013 animated musical film produced by Walt Disney Animation Studios. The story centers on two royal sisters, Elsa and Anna, from the kingdom of Arendelle. Elsa possesses magical powers that allow her to control ice and snow, but struggles to control them, leading to an accidental winter that traps the kingdom in ice. Fearing her powers, Elsa isolates herself, leaving Anna to embark on a quest to find her. Along the way, Anna teams up with an ice seller named Kristoff, his loyal reindeer Sven, and a comical snowman named Olaf. Together, they confront challenges and discover the true meaning of love and sisterhood. The film is known for its catchy songs, particularly 'Let It Go,' and its themes of familial love and self-acceptance.",
      "category": "Animation & Family"
    },
    {
      "id": 19,
      "title": "Shrek",
      "description": "An ogre's journey to rescue a princess",
      "rating": "7.9",
      "releaseYear": 2001,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      "summary": "Shrek' is a 2001 animated film produced by DreamWorks Animation. The story follows Shrek, a reclusive green ogre who enjoys his solitude in a swamp. His peaceful life is disrupted when a group of fairy-tale creatures are exiled to his swamp by the evil Lord Farquaad. To regain his home, Shrek agrees to rescue Princess Fiona, who is trapped in a dragon-guarded castle, in exchange for the removal of the creatures. As Shrek embarks on his quest with a talkative donkey named Donkey, he discovers that Fiona has a secret of her own and learns about the power of acceptance and true love. The film is known for its humorous take on fairy-tale tropes, its charming characters, and its heartwarming message.",
      "category": "Animation & Family"
    },
    {
      "id": 20,
      "title": "Harry Potter and the Philosopher's Stone",
      "description": "A young boy discovers he's a wizard",
      "rating": "7.6",
      "releaseYear": 2001,
      "discontinued": false,
      "image": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      "summary": "Harry Potter and the Philosopher's Stone' (released as 'Harry Potter and the Sorcerer's Stone' in the U.S.) is a 2001 fantasy film based on J.K. Rowling's novel. The story follows Harry Potter, an orphaned boy who discovers on his eleventh birthday that he is a wizard. He is invited to attend Hogwarts School of Witchcraft and Wizardry, where he learns about his magical heritage, makes new friends, and uncovers the truth about his parents' mysterious deaths. At Hogwarts, Harry and his friends Ron Weasley and Hermione Granger face various challenges and learn about a magical artifact known as the Philosopher's Stone, which grants immortality. The film introduces the magical world and sets the stage for Harry's journey to battle the dark wizard Voldemort, who seeks the Stone for his own dark purposes.",
      "category": "Science Fiction & Fantasy"
    }
  ];
  

const seedMovies = async () => {
  try {
    await Movie.deleteMany({}); // Optional: clear existing movies
    await Movie.insertMany(movies);
    console.log('Movies inserted successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting movies:', err);
    mongoose.connection.close();
  }
};

seedMovies();
