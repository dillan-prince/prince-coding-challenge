# prince-coding-challenge

View the live app at https://prince-coding-challenge.herokuapp.com

The Heroku app runs off the code living at the GitHub repo dillan-prince/prince-coding-challenge, which should be identical to the code living at Popspots/prince-coding-challenge. The app deploys automatically through a GitHub webhook that listens for commits to the master branch. In order to use GitHub webhooks, Heroku requires a connected GitHub account. I had to use my personal account since I don't have own the Popspots account.

If you want to clone this repository, make sure to grab an API key from [OpenCageData](https://opencagedata.com/). Make a file called `keys.js` at `src/server/config/dev`. Copy the contents of the neighboring `prod/keys.js` and replace `process.env.OPENCAGEDATA_API_KEY` with your API key.

# Resources

#### [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

I used Bootstrap 4 to style the SearchBar component and to configure the column layout of the StoreList and Map components.

#### [React Hooks](https://reactjs.org/docs/hooks-intro.html)

When I learned React, it was common to take advantage of different methods to hook into the component lifecycle. Apparently the new hotness is to use React Hooks to do that. I took this coding challenge as an opportunity to learn and use React Hooks. All of my components are functional components.

#### [Leaflet](https://leafletjs.com/) and [React-Leaflet](https://react-leaflet.js.org/en/)

I originally intended to integrate with the Google Maps API. Unfortunately, Google requires you to set up a billing account before they will give you an API key, so I looked for free ways to display an interactable map. Leaflet and its wrapper, React-Leaflet, were incredibly easy to set up and have straightforward documentation.

#### [OpenCageData](https://opencagedata.com/)

The server has an endpoint (`/api/search`) that integrates with OpenCageData to utilize their "forward geocoding" API, which attempts to convert text to a pair of GPS coordinates.

#### [Debouncing With React Hooks](https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci)

The SearchBar component makes requests to `/api/search?q={search term}`. The thing I struggled with the most while writing this app was
