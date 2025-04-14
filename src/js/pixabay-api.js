import axios from "axios";

const API_KEY = "49733836-ef97dcade25b1489c7fb046c8"

export async function getImagesByQuery(query) {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
  
    return response.data;
  }