import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-movies-ocr7.onrender.com",
});
