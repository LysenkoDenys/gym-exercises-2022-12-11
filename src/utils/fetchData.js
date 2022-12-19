// The API key needs to be ABOVE the host!
// DO NOT put the key inside of .env, just directly attach the API key in fetchdata.js

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0eeee2f988msh63db13fc8092c54p12f661jsn1c06896abafd",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0eeee2f988msh63db13fc8092c54p12f661jsn1c06896abafd",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// do not do this:
//process.env.REACT_APP_RAPID_API_KEY,
