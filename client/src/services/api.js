import axios from "axios";

export const api = axios.create({
  // baseURL: "https://rocketnotes-backend-d943.onrender.com", // production
  baseURL: "http://localhost:3333/"
});
