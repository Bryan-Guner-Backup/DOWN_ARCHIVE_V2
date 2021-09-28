## Development Description
City Spire is an app that analyzes data from cities such as populations, cost of living, rental rates, crime rates, park (walk score), and many other social and economic factors that are important in deciding where someone would like to live. This app will present such important data in an intuitive and easy to understand interface.

### Functional Description
* The user is given the option to login or sign up
* The user is then taken to the profiles tab where they can see other users.
* The user can navigate using the tab bar at the bottom
* The user can search for a city
* The user can view nearby cities


### User Interface
* The main navigation happens with the tab bar at the bottom of the application. 
* Additional options if available are on the navigation bar
* In the map page the user can search for a city using the search bar at the top of the page. 
* The user can then click on the pin for more information
* The user can navigate to the Cities tab and see nearby cities. 

### Networking
* App uses Okta for authentication. (ProfileController.swift)
* App connects to Back End at http://cityspire00n.eba-diy2emuk.us-east-1.elasticbeanstalk.com/locations (DSAPIHelpers.swift)
* Google maps is used to get images (GooglePlacesAPIHelpers.swift)