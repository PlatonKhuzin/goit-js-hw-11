import axios from "axios";

const API_KEY = "57065525-8f77b836fab1fdfa97291f836";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });
}