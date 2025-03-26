import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";


export default async function fetchUserData({ username, location, repos }) {
  try {
    let query = [];

    if (username) query.push(`${username} in:login`);
    if (location) query.push(`location:${location}`);
    if (repos) query.push(`repos:${repos}`);

    if (query.length === 0) {
      throw new Error("At least one search parameter is required.");
    }

    const url = `${BASE_URL}?q=${query.join("+")}`;
    console.log(url);
    const res = await axios.get(url);

    return res.data.items; 
  } catch (error) {
    console.error("Error fetching user data:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch user data");
  }
}

// ["https://api.github.com/search/users?q", "minRepos"]