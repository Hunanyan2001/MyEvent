import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://your-backend-api-url", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
