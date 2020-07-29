import axios from "axios";

// Create instance called instance
export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.deezer.com",
});
