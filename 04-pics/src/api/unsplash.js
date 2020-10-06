import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HBhfXfFKG4rp9XGAFOowSfx-5xl3MCgj4XTWPTciHp8",
  },
});
