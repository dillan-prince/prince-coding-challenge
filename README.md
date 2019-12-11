# prince-coding-challenge

View the live app at https://prince-coding-challenge.herokuapp.com

The Heroku app runs off the code living at the GitHub repo dillan-prince/prince-coding-challenge, which should be identical to the code living at Popspots/prince-coding-challenge. The app deploys automatically through a GitHub webhook that listens for commits to the master branch. Heroku requires a connected GitHub account in order to use GitHub webhooks, and I had to use my personal account since I don't have access to the Popspots account.

The searchbar integrates with OpenCageData to convert text to GPS coordinates. These coordinates are then used by the store list to sort by distance, and by the map to zoom in on that location. The map, powered by Leaflet and OpenStreetMap, has a marker for every store in the store list. Clicking a marker will display a popup with the store's name and street address in the lower left corner of the map. Clicking the map itself will then remove this popup. Dragging or zooming the map will not remove the popup.

The store list is stored in local storage along with the time at which it was stored. If the store list cannot be found in local storage or more than 4 hours have elapsed since it was stored, the app will fetch an updated list from the store list API.
