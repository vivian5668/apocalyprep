var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mernJwtAuth');
var Supply  = require('../models/supply');


var things = [
  {
    name: '25 adhesive bandages (assorted sizes)',
    category: 'Medical',
  },
  {
    name: '1 roller bandage (3 inches wide)',
    category: 'Medical',
  },
  {
    name: '1 roller bandage (4 inches wide)',
    category: 'Medical',
  },
  {
    name: '5 sterile gauze pads',
    category: 'Medical',
  },
  {
    name: 'Adhesive cloth tape',
    category: 'Medical',
  },
  {
    name: 'Antiseptic wipe packets',
    category: 'Medical',
  },
  {
    name: 'Advil, Tylenol or Aspirin',
    category: 'Medical',
  },
  {
    name: 'Benadryl or Claritin',
    category: 'Medical',
  },
  {
    name: 'Burn gel',
    category: 'Medical',
  },
  {
    name: 'Hydrocortisone ointment',
    category: 'Medical',
  },
  {
    name: 'Antibiotic ointment',
    category: 'Medical',
  },
  {
    name: 'Instant cold compress',
    category: 'Medical',
  },
  {
    name: 'Oral thermometer (non-mercury/nonglass)',
    category: 'Medical',
  },
  {
    name: '2 pair of nonlatex gloves',
    category: 'Medical',
  },
  {
    name: 'Tweezers',
    category: 'Medical',
  },
  {
    name: 'Scissors',
    category: 'Medical',
  },
  {
    name: 'Insect Repellant (if needed in your area)',
    category: 'Medical',
  },
  {
    name: 'Sunscreen (if needed in your area)',
    category: 'Medical',
  },
  {
    name: 'Toothpaste and toothbrush',
    category: 'Medical',
  },
  {
    name: 'Extra medications: diabetes, blood pressure, heart medication, birth control, etc...',
    category: 'Medical',
  },
  {
    name: 'Feminine supplies',
    category: 'Medical',
  },
  {
    name: 'Infant: baby wipes',
    category: 'Medical',
  },
  {
    name: 'Infant: diapers',
    category: 'Medical',
  },
  {
    name: 'Infant: rash cream',
    category: 'Medical',
  },
  {
    name: '3 gallons water per person (1 gallon per day)',
    category: 'Food and Water',
  },
  {
    name: '3 day supply of non-perishable food per person',
    category: 'Food and Water',
  },
  {
    name: 'Infant: 3 day supply of baby formula',
    category: 'Food and Water',
  },
  {
    name: 'Pets: 3 day supply of pet food',
    category: 'Food and Water',
  },
  {
    name: 'Manual can opener',
    category: 'Food and Water',
  },
  {
    name: 'Chocolate bars or comfort snacks',
    category: 'Food and Water',
  },
  {
    name: 'Water purification method 1: Household bleach & medicine dropper. 15 drops bleach to 1 gallon water.',
    category: 'Food and Water',
  },
  {
    name: 'Water purification method 2: Water purification tablets',
    category: 'Food and Water',
  },
  {
    name: 'Water purification method 3: Water purification filter system',
    category: 'Food and Water',
  },
  {
    name: 'At least $20 cash in $5, $10 bills',
    category: 'Tools and Supplies',
  },
  {
    name: 'Dust mask or N95 respirator mask',
    category: 'Tools and Supplies',
  },
  {
    name: 'Matches in a waterproof container',
    category: 'Tools and Supplies',
  },
  {
    name: 'Lightweight camp stove and fuel',
    category: 'Tools and Supplies',
  },
  {
    name: 'Work gloves',
    category: 'Tools and Supplies',
  },
  {
    name: 'Whistle - if trapped during emergency',
    category: 'Tools and Supplies',
  },
  {
    name: 'Duct Tape',
    category: 'Tools and Supplies',
  },
  {
    name: 'Plastic sheeting - to build shelter in place',
    category: 'Tools and Supplies',
  },
  {
    name: 'Shovel',
    category: 'Tools and Supplies',
  },
  {
    name: 'Empty burlap or plastic bags with ties',
    category: 'Tools and Supplies',
  },
  {
    name: 'Sand (floods, hurricanes)',
    category: 'Tools and Supplies',
  },
  {
    name: 'Utility knife',
    category: 'Tools and Supplies',
  },
  {
    name: 'Utility knife',
    category: 'Tools and Supplies',
  },
  {
    name: 'Wrench or pliiers for shutting off gas main',
    category: 'Tools and Supplies',
  },
  {
    name: 'Fire extinguisher',
    category: 'Tools and Supplies',
  },
  {
    name: 'Empty approved container for gasoline',
    category: 'Tools and Supplies',
  },
  {
    name: 'Toilet paper',
    category: 'Tools and Supplies',
  },
  {
    name: 'Garbage bags & twist ties - for makeshift toilet',
    category: 'Tools and Supplies',
  },
  {
    name: 'Emergency foil blanket',
    category: 'Tools and Supplies',
  },
  {
    name: '1 Sleeping bag per person',
    category: 'Tools and Supplies',
  },
  {
    name: '1 set per person: coat, shirt, pant, underwear, socks & sturdy shoes',
    category: 'Tools and Supplies',
  },
  {
    name: 'Extra pair of glasses or contacts',
    category: 'Tools and Supplies',
  },
  {
    name: 'Contact lens solution',
    category: 'Tools and Supplies',
  },
  {
    name: '1 battery powered or hand crank AM/FM radio',
    category: 'Tech',
  },
  {
    name: '1 pack of batteries for radio',
    category: 'Tech',
  },
  {
    name: '1 flashlight',
    category: 'Tech',
  },
  {
    name: '1 pack of batteries for flashlight',
    category: 'Tech',
  },
  {
    name: 'Cell phone charger',
    category: 'Tech',
  },
  {
    name: 'Paper map of your region',
    category: 'Tech',
  },
  {
    name: 'Pen and notepad - to take notes for insurance',
    category: 'Tech',
  },
  {
    name: 'Extra set of house keys',
    category: 'Tech',
  },
  {
    name: 'Extra set of car keys',
    category: 'Tech',
  },
  {
    name: '1 list of important phone numbers',
    category: 'Documents',
  },
  {
    name: 'Birth certificate copy',
    category: 'Documents',
  },
  {
    name: 'Passport copy',
    category: 'Documents',
  },
  {
    name: 'Rental lease or mortgage copy',
    category: 'Documents',
  },
  {
    name: 'Health insurance copy',
    category: 'Documents',
  },
  {
    name: 'Email, banking & necessary internet passwords list',
    category: 'Documents',
  },
  {
    name: 'Credit card, debit card photocopies (front and back of cards)',
    category: 'Documents',
  },
];

things.forEach(thing => {
  console.log("adding a thing...")
  Supply.create(
    {
      name: thing.name,
      category: thing.category
    }, (err, supply) => {
      if (err) {
        console.log('error!', err);
      } else {
        console.log('done');
      }
    }
  )
});

process.exit();
