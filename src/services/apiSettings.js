import axios from "axios";

// const apiUrl = "http://localhost:9090"; // Get the base API URL from the environment variable

const apiUrl = import.meta.env.VITE_API_URL; // Get the base API URL from the environment variable

export async function getSettings() {
  try {
    const response = await axios.get(`${apiUrl}/api/settings`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
}

export async function updateSetting(newSetting) {
  try {
    const response = await axios.put(`${apiUrl}/api/settings`, newSetting);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
}
