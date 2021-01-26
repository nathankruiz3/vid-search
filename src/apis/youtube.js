import axios from "axios";

const KEY = "AIzaSyA9kmCu6tMD8k7fuuoIZuNewOhLgiaXSMw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
