# Apocalyprep

## Open the Live App Here:
 Try it [here](http://apocalyprep.herokuapp.com/).

## Things Happen. Be Prepared.
Disasters sound scary. Preparing for one doesn’t have to be! View comprehensive, real time severe weather alerts for your city. Current data from the National Weather Service includes warnings, advisements and possible evacuation info if necessary.

View common natural disasters in the United States and expert tips on how to prepare your home and your family for each event.

Next, get emergency-ready for any possible disaster using our interactive to-do lists. Emergency kits can be compiled easily for yourself, your family, and pets. It’s as easy as checking a box for each supply item you need.

Please sign up for a free account to access all our features and find resources for creating your own supply kits. Your supply checklist will be conveniently saved so you can access your list on any device.

## Supported Browsers

- Chrome Version 63.0 and higher
- Firefox Version 58.0 and higher

## User Stories
### User 1
Tina is a mother of two in Florida who worries about hurricane season every fall. She wants to put together an emergency kit in case a hurricane hits their home. She’s been doing some research but wants a convenient way to find out what she’ll need and keep track of her progress on her mobile phone.

### User 2
Frank is a middle-aged man with elderly parents who live on their own property in rural California. He is concerned that his parents may need to be ready in the event of an earthquake or wildfire, but he’s not sure how to help them prepare. He decides to look online for a tool to help him organize an emergency kit, with information relevant to his parents’ home.

### User 3
Carol hasn’t left her house in 3 years, out of fear that global warming or a zombie apocalypse will bring about the end of days. She spends her time at home in her bomb shelter basement, listening to radio broadcasts for potential coded messages. Carol decides she needs to be prepared for the inevitable collapse of society and looks online for information about what she’ll need. Of course, she’ll order everything online and hire a courier to bring the items to the neighbor’s house, where she’ll pick them up once darkness falls.

## Final App Screenshots
### Web Version
For the best user experience, the web version uses a consistent centered layout with a navigation bar on the top. The navigation bar is dynamic based on if there is a user currently logged in.

#### Main page: demo screenshot
![alt text](/client/src/image/screenshot-landing.gif "Main")

#### Disasters page: demo screenshot
![alt text](/client/src/image/screenshot-disasters.gif "Disasters")

#### User page: demo screenshot
![alt text](/client/src/image/screenshot-userlist.gif "User")

### Mobile Version
The mobile version resembles the web version mostly with minor modification to fit contents on smaller screens. The navigation bar collapses and slides out from the left of the screen once you click on the hamburger icon.

## Wireframes
#### Main page: wireframe
![alt text](/client/src/image/wireframe-landing.png "Main")

#### Disasters page: wireframe
![alt text](/client/src/image/wireframe-disaster.png "Disasters")

#### Event page: wireframe
![alt text](/client/src/image/wireframe-event.png "Event")

#### User page: wireframe
![alt text](/client/src/image/wireframe-user.png "User")


## Routes
| Verb          | Path          | Action | Usage        |
| ------------- |---------------| -------|--------------|
| GET     		| /				| index  |	Homepage	|
| GET     		| /auth/signup	| new  	 |	Display form to create a new profile	|
| POST     		| /auth/signup  | create |	Create user account	|
| GET     		| /auth/login	| show   |	Display form to enter login info	|
| POST    		| /auth/login	| show   |	Authenticates user login info	|
| GET     		| /auth/logout	| index  |	Logs user out of the application	|
| GET     		| /imageaccordion		| show   |Display the disasters page with alerts	|
| GET     		| /tornado	| show   |	Display supply list & tornado event	|
| GET     		| /earthquake	| show   |	Display supply list & earthquake event	|
| GET     		| /tsunami	| show   |	Display supply list & tsunami event	|
| GET     		| /tornado	| show   |	Display supply list & tornado event	|
| GET     		| /wildfire	| show   |	Display supply list & wildfire event	|
| GET     		| /about | show   |	Display about page with app overview & developer info	|
| GET     		| /supplylist | show   |	Get supply list data from supplylist document/schema	|
| GET     		| /userlist | show   |	Get user (supply) list data from userlist document/schema	|
| POST    		| /addsupplies	| create |	Add an individual supply item to the user document/schema from the supplylist document/schema|

## Models & Sample Data
|id| name          | email          | password |
|--|------------- |---------------| -------|
| 2| Happy    		| happy@gmail.com			| $2a$10$Cnu/3QHw2WCaMo4xTfq5K.MTL9W2N4PDlA9t/0UOrj6I3A8c9GD7a  |

## Technology / Library Used
- Express
- Javascript
- jQuery
- Mongo
- Mongoose
- NOAA API
- React
- React-Materialize
- React-Geocode
- Redux

## Next Steps
- Add in ability for users to print or export list as a .pdf

## Resources & Inspirations
- https://codepen.io/fox_hover/pen/RjxGNR
- https://www.fema.gov/
- https://www.ready.gov
- http://www.redcross.org/get-help/how-to-prepare-for-emergencies
- https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/preparedbc
