import axios from "axios";

// const BASE_URL = "https://zidio.onrender.com";

// console.log(import.meta.env.VITE_BASE_URL);

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // headers: { "Content-Type": "application/json" },
});
