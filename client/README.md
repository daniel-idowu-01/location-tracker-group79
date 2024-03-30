# React + Vite

# Paw Prints App (https://paw-prints-79.netlify.app)

Paw Prints is a web application designed to help users keep track of their visited locations. It allows users to log in, register for a new account, view visited locations on a map, add new locations, and view detailed information about each visited city. This README provides an overview of the application's features and components.

## Features

### 1. Login Page

- **Component:** `Login.js`
- **Description:** Allows users to log in to the application using their email and password credentials. Performs validation on the input fields and sends a request to the server to authenticate the user.
- **Dependencies:** `react-router-dom`, `axios`, `react-hot-toast`

### 2. Registration Page

- **Component:** `Register.js`
- **Description:** Allows new users to register for the application by providing their full name, email, and password. Performs validation on input fields and sends a registration request to the server.
- **Dependencies:** `react-router-dom`, `axios`, `react-hot-toast`

### 3. Dashboard (Visited Locations)

- **Component:** `VisitedLocations.js`
- **Description:** Displays the locations visited by the user. Fetches the user's visited locations from the server and renders them as cards.
- **Dependencies:** `axios`, `react-hot-toast`

### 4. Map View

- **Component:** `Map.js`
- **Description:** Displays a map using the React Leaflet library and allows users to interact with it. Users can view their current location, add new locations by clicking on the map, and view existing locations as markers.
- **Dependencies:** `react-leaflet`, `react-router-dom`, custom hooks (`useGeolocation`, `useUrlPosition`, `useLocations`), `react-icons`, `react-hot-toast`

### 5. Add Location Form

- **Component:** `AddLocation.js`
- **Description:** Allows users to add a new location by providing details such as city name, date visited, and optional notes. Performs validation on input fields and sends a request to the server to save the new location.
- **Dependencies:** `react-datepicker`, `axios`, `react-hot-toast`

### 6. City Details Page

- **Component:** `City.js`
- **Description:** Displays detailed information about a specific city visited by the user. Fetches the city details from the server based on the city's ID and renders them on the page.
- **Dependencies:** `react-router-dom`, `axios`, `react-hot-toast`

### 7. User Profile

- **Component:** `User.js`
- **Description:** Provides user-related functionalities such as displaying user information, logging out, and accessing user settings.
- **Dependencies:** `react-router-dom`, `react-icons`, `react-hot-toast`

## Usage

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Contributors

- [Abdulbasit Alabi ](https://github.com/marrwan)
- [Adenekan Okikioluwa](https://github.com/OA2302)
- [Idowu Daniel](https://github.com/daniel-idowu-01)
- [Aulex ](https://github.com/au-lex)
- [Harcourt J. Ayebatari](https://github.com/opuindy)
- [Ann CHizaram Nwachukwu](https://github.com/Z-annie)
  git
