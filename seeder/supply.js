var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mernJwtAuth');
var Supply  = require('../models/supply');

module.exports = function() {
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
  {
    name: 'Prep your home: Bolt and brace water heaters and gas appliances to wall studs. Have a professional install flexible fittings to avoid gas or water leaks.',
    category: 'Earthquake',
  },
  {
    name: 'Prep your home: Strap down televisions and other expensive or hazardous electrical components.',
    category: 'Earthquake',
  },
  {
    name: 'Prep your home: Anchor top-heavy, tall and freestanding furniture such as bookcases, china cabinets to wall studs to keep these from toppling over.',
    category: 'Earthquake',
  },
  {
    name: 'Prep your family: Each family member should know to Drop, Cover, and Hold On when they feel an earthquake.',
    category: 'Earthquake',
  },
  {
    name: 'Prep  your family: Pick the best safe spot to hide. Under heavy furniture, inside a doorframe or against inside walls are ideal.',
    category: 'Earthquake',
  },
  {
    name: 'Prep your family: If you are in bed when the earthquake strikes, stay there. Hold on and protect your head with a pillow.',
    category: 'Earthquake',
  },
  {
    name: 'Prep your home: Consider installing permanent shutters to cover windows. Shutters can be closed quickly and provide the safest protection for windows.',
    category: 'Tornado',
  },
  {
    name: 'Prep your home: Make trees more wind resistant by removing diseased or damaged limbs, then strategically remove branches so that wind can blow through. Strong winds frequently break weak limbs and hurl them at great speed.',
    category: 'Tornado',
  },
  {
    name: 'Prep your home: Strengthen garage doors. Garage doors are often damaged or destroyed by flying debris, allowing strong winds to enter. As winds apply pressure to the walls, the roof can be lifted off, and the rest of the house can easily follow.',
    category: 'Tornado',
  },
  {
    name: 'Prep your family: Pick a safe spot to shelther during a tornado. Move to an underground shelter, basement or safe room. If none is available, a small, windowless interior room or hallway on the lowest level of a sturdy building is the safest alternative.',
    category: 'Tornado',
  },
  {
    name: 'Prep your family: Know the warning signs of a tornado. Dark, often greenish sky, large hail, A large, dark, low-lying cloud (particularly if rotating or a loud roar, similar to a freight train.',
    category: 'Tornado',
  },
  {
    name: 'Prep your family: Store a whistle or air horn in your home & know where it is. Use this to notify rescuers in case you are trapped by debris resulting from the tornado.',
    category: 'Tornado',
  },
  {
    name: 'Prep your home: Keep woodpiles, propane tanks, sheds/outbuildings and combustibles at least 30 feet from all sides of your house.',
    category: 'Wildfire',
  },
  {
    name: 'Prep your home: Reduce flammable materials on your roof. Regularly clean your gutters and roof of pine needles, branches and debris.',
    category: 'Wildfire',
  },
  {
    name: 'Prep your home: Set aside household items that you can use as fire tools before emergency responders arrive: a rake, ax, hand saw or chain saw, bucket and shovel.',
    category: 'Wildfire',
  },
  {
    name: 'Prep your family: If a wildfire is getting close, back your car into the garage or park it outside in the direction of your evacuation route.',
    category: 'Wildfire',
  },
  {
    name: 'Prep your family: Do not put wet clothing or bandanas over your mouth or nose. Moist air causes more damage to airways than dry air at the same temperature.',
    category: 'Wildfire',
  },
  {
    name: 'Prep your family: Turn on lights outside and in every room to make the house more visible in heavy smoke.',
    category: 'Wildfire',
  },
  {
    name: 'Prep your home: Make a list of items to bring inside in the event of a tsunami watch or warning being issued for your area.',
    category: 'Tsunami',
  },
  {
    name: 'Prep your home: Talk to your insurance agent. Homeowner policies do not cover flooding from a tsunami. Ask about the National Flood Insurance Program (NFIP) (www.fema.gov/nfip). NFIP covers tsunami damage, but your community must participate in the program.',
    category: 'Tsunami',
  },
  {
    name: 'Prep your home: Have an engineer check your home and advise about ways to make it more resistant to tsunami water. There may be ways to divert waves away from your property.',
    category: 'Tsunami',
  },
  {
    name: 'Prep your family: Know the warning signs. If an earthquake occurs on the coast, or if you are at the beach and see the ocean recede suddenly, a tsunami may occur.',
    category: 'Tsunami',
  },
  {
    name: 'Prep your family: Practice your evacuation routes. Familiarity may save your life. Be able to follow your escape route at night and during inclement weather.',
    category: 'Tsunami',
  },
  {
    name: 'Prep your family: Stay away from the beach. Never go down to the beach to watch a tsunami come in. If you can see the wave you are too close to escape it.',
    category: 'Tsunami',
  },
  {
    name: 'Prep your home: Protect windows with permanent storm shutters or invest in one-half inch marine plywood that is pre-cut to fit your doors and windows.',
    category: 'Hurricane',
  },
  {
    name: 'Prep your home: Clear loose and clogged rain gutters and downspouts to prevent flooding and unnecessary pressure on the awnings.',
    category: 'Hurricane',
  },
  {
    name: 'Prep your home: Remember that standard homeowners insurance doesn’t cover flooding but flood insurance does. Get information at www.FloodSmart.gov.',
    category: 'Hurricane',
  },
  {
    name: 'Prep your family: Do not walk, swim or drive through floodwater. Just six inches of fast-flowing water can knock you over and two feet will float a car.',
    category: 'Hurricane',
  },
  {
    name: 'Prep your family: Avoid contact with floodwater. It may be contaminated with sewage or contain dangerous insects or animals.',
    category: 'Hurricane',
  },
  {
    name: 'Prep your family: Stay out of areas subject to flooding. Underpasses, dips, low spots, canyons, washes, etc. can become filled with water.',
    category: 'Hurricane',
  },
];

  things.forEach(function(thing) {
  console.log("Trying to add a thing...")
  console.log(thing.name)
  console.log(thing.category)
  Supply.create(
    {
      name: thing.name,
      category: thing.category
    }, function(err, supply) {
      console.log("Here are the results")
      console.log(err)
      console.log(supply)
      if (err) {
        console.log('error!', err);
      } else {
        console.log('done');
      }
    }
  )
});
}

// process.exit();
