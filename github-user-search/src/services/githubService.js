import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export default async function fetchUserData(username) {
  try {
    const res = await axios.get(`${BASE_URL}${username}`);
    return res.data; // Axios automatically parses JSON
  } catch (error) {
    console.error(
      "Error fetching user data:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || "Failed to fetch user data"
    );
  }
}
