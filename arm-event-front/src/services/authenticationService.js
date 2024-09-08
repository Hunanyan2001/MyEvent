import axios from "../config/axiosConfig";

export const register = async (userData) => {
  try {
    const response = await axios.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
