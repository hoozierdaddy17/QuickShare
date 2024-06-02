import axios from "axios";

const API_URL = "http://localhost:3000";

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling the upload method", error.message);
  }
};