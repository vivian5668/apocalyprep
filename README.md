# Apocalyprep
###  - Convert Your Image to ASCII
<img width="481" alt="readme_pic" src="https://user-images.githubusercontent.com/35155255/36921325-cdfbb1aa-1e18-11e8-8ffe-2c64ea469747.png">


## Introduction
 Try it [here](https://.com/).

## Supported Browsers

- Chrome Version 63.0 and higher

- Firefox Version 58.0 and higher

## Wireframes
### Web Version
>For the best user experience, the web version uses a consistent centered layout with a navigation bar on the top. The navigation bar is dynamic based on if there is a user currently logged in.

- Main page
<img src="" height="250">



- Gallery page
<img src="" width="300">

### Mobile Version
>The mobile version resembles the web version mostly with minor modification to fit contents on smaller screens. The navigation bar collapses and slides out from the left of the screen once you click on the hamburger icon.
<img src="">

## Routes
| Verb          | Path          | Action | Usage        |
| ------------- |---------------| -------|--------------|
| GET     		| /				| index  |	Homepage	|
| GET     		| /auth/signup	| new  	 |	Display form to create a new profile	|
| POST     		| /auth/signup  | create |	Create user account	|
| GET     		| /auth/login	| show   |	Display form to enter login info	|
| POST    		| /auth/login	| show   |	Authenticates user login info	|
| GET     		| /auth/logout	| index  |	Logs user out of the application	|
| GET     		| /gallery		| show   |Display the gallery page	|
| GET     		| /instructions	| show   |	Display instructions for this app	|
| GET     		| /profile		| redirect|	Display the user's projects if user is logged in	|
| GET     		| /projects		| index  |	Show all user's projects	|
| GET     		| /projects/new	| show   |	Display form to allow the user to create a new project	|
| POST    		| /projects/new	| create |	Create a new project	|
| GET     		| /projects/:id	| show   |	Display the project identified by project_id	|
| GET     		| /projects/:id/edit| show  |	Display the form that allows the user to modify project information	|
| PUT     		| /projects/:id	| update  |	Change project information	|
| DELETE     	| /projects/:id/destroy	| delete  |	Delete a project	|


## Models & Sample Data
|id| name          | email          | password |
|--|------------- |---------------| -------|
| 2| Happy    		| happy@gmail.com			| $2a$10$Cnu/3QHw2WCaMo4xTfq5K.MTL9W2N4PDlA9t/0UOrj6I3A8c9GD7a  |


## Technology / Library Used

- Javascript

- jQuery
- Redux
- React
- React-Materialize
- React-Geocode
- NOAA API
- Sequelize
- Node.js
- Mongo
- Mongoose

## Next Steps

- Fix bugs



##Resources & Inspirations

https://codepen.io/fox_hover/pen/RjxGNR
