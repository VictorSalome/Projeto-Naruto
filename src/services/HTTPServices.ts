import axios from "axios";

export const HTTPServices = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});
