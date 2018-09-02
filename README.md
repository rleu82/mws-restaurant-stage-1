# FEND Nanodegree: Restaurant Review App

## Project Overview:

We were to take a static **Restaurant Reviews** site and convert it into a mobile-ready web applications. Our main goals were to implement a service worker to cache for offline use, create a accessible experience, and have a responsive design.

### Installation

1. Download or clone this repo
2. Navigate to [Mapbox](https://www.mapbox.com)
3. If you wish to use your own key. Sign up for a free Mapbox account and generate a key.
4. Open config.js and replace 'MY_KEY' value with your key.
5. If you wish to keep your key private from uploading to git. Create '.gitignore' file and put 'config.js' on any line and save. I've included a key for this project's purpose.
6. Download [Python](https://www.python.org/) if you do not have it installed.
7. In a terminal, navigate to the folder of this repo.
8. Check your Python version using `python -v` in the terminal. If you have Python 2.x, type `python -m SimpleHTTPServer 8000` or another port other than `8000` in the terminal. For Python 3.x, you can use `python3 -m http.server 8000` to start the server.
9. Open a browser and navigate to `http://localhost:8000/` to load the site as long as you started the server within the folder of this repo.

## Dependencies

This project uses:

1. [Leaflet.js](https://leafletjs.com/) and [Mapbox](https://www.mapbox.com/) for generating the Restaurant Map.
2. [Normalize.css](https://necolas.github.io/normalize.css/) is used to help render all elements more consistently within different browsers.
