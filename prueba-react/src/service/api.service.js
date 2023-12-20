// services/apiService.js
import axios from "axios";

const get = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error al cargar datos desde la API:", error);
    throw error;
  }
};

export {get};
