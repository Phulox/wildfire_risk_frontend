Wildfire Risk Map Frontend (React + TypeScript):

    Frontend dashboard for visualizing wildfire risk incidents on an interactive map.
    Built with React, TypeScript, Vite, and Leaflet, and powered by a Spring Boot backend that aggregates satellite and weather data.

#Overview

    This application fetches wildfire incident data from a REST API and renders each incident as a geospatial marker on a world map. Incidents are color-coded by computed wildfire risk level and update automatically as backend data refreshes.

#Features

    Interactive world map built with Leaflet

    Real-time wildfire incident visualization

    Color-coded risk markers:

        Red → high risk

        Green → low risk

    Popup overlays displaying risk classification

    Fully typed React components using TypeScript

    Clean separation between data fetching and map rendering

#Tech Stack

    React

    TypeScript

    Vite

    Leaflet / React-Leaflet

    Fetch API for backend communication
