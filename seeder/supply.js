var mongoose = require('mongoose');
// var CardGame = require('../models/cardGame');

// mongoose.connect('mongodb://localhost/mongoCardGamer');

var supply = [
  {
    name: '25 adhesive bandages (assorted sizes)',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: '1 roller bandage (3 inches wide)',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: '1 roller bandage (4 inches wide)',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: '5 sterile gauze pads',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Adhesive cloth tape',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Antiseptic wipe packets',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Advil, Tylenol or Aspirin',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Benadryl or Claritin',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Burn gel',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Hydrocortisone ointment',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Antibiotic ointment',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Instant cold compress',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Oral thermometer (non-mercury/nonglass)',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: '2 pair of nonlatex gloves',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Tweezers',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Scissors',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Insect Repellant (if needed in your area)',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Sunscreen (if needed in your area)',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Toothpaste and toothbrush',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Extra medications: diabetes, blood pressure, heart medication, birth control, etc...',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Feminine supplies',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Infant: baby wipes',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Infant: diapers',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: 'Infant: rash cream',
    description:
    category: 'Medical',
    eventId: [],
  },
  {
    name: '3 gallons water per person (1 gallon per day)',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: '3 day supply of non-perishable food per person',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: 'Infant: 3 day supply of baby formula',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: 'Pets: 3 day supply of pet food',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: 'Manual can opener',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: 'Chocolate bars or comfort snacks',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: 'Water purification method 1: Household bleach & medicine dropper. 15 drops bleach to 1 gallon water.',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: 'Water purification method 2: Water purification tablets',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: 'Water purification method 3: Water purification filter system',
    description:
    category: 'Food and Water',
    eventId: [],
  },
  {
    name: 'At least $20 cash in $5, $10 bills',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Dust mask or N95 respirator mask',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Matches in a waterproof container',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Lightweight camp stove and fuel',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Work gloves',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Whistle - if trapped during emergency',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Duct Tape',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Plastic sheeting - to build shelter in place',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Shovel',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Empty burlap or plastic bags with ties',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Sand (floods, hurricanes)',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Utility knife',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Utility knife',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Wrench or pliiers for shutting off gas main',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Fire extinguisher',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Empty approved container for gasoline',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Toilet paper',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Garbage bags & twist ties - for makeshift toilet',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Emergency foil blanket',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: '1 Sleeping bag per person',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: '1 set per person: coat, shirt, pant, underwear, socks & sturdy shoes',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Extra pair of glasses or contacts',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: 'Contact lens solution',
    description:
    category: 'Tools and Supplies',
    eventId: [],
  },
  {
    name: '1 battery powered or hand crank AM/FM radio',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: '1 pack of batteries for radio',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: '1 flashlight',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: '1 pack of batteries for flashlight',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: 'Cell phone charger',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: 'Paper map of your region',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: 'Pen and notepad - to take notes for insurance',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: 'Extra set of house keys',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: 'Extra set of car keys',
    description:
    category: 'Tech',
    eventId: [],
  },
  {
    name: '1 list of important phone numbers',
    description:
    category: 'Documents',
    eventId: [],
  },
  {
    name: 'Birth certificate copy',
    description:
    category: 'Documents',
    eventId: [],
  },
  {
    name: 'Passport copy',
    description:
    category: 'Documents',
    eventId: [],
  },
  {
    name: 'Rental lease or mortgage copy',
    description:
    category: 'Documents',
    eventId: [],
  },
  {
    name: 'Health insurance copy',
    description:
    category: 'Documents',
    eventId: [],
  },
  {
    name: 'Email, banking & necessary internet passwords list',
    description:
    category: 'Documents',
    eventId: [],
  },
  {
    name: 'Credit card, debit card photocopies (front and back of cards)',
    description:
    category: 'Documents',
    eventId: [],
  },
];

// games.forEach(game => {
//   console.log("adding a game...")
//   CardGame.create(
//     {
//       name: game.name,
//       minPlayers: game.minPlayers,
//       maxPlayers: game.maxPlayers
//     }, (err, cardGame) => {
//       if (err) {
//         return console.log(err);
//       } else {
//         return console.log(cardGame);
//       }
//     }
//   )
// });
