import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 793b9d538b57345cb57a71c9837d1e1b8aa12237447accc77e2fd938903c9da8"
  }
});
