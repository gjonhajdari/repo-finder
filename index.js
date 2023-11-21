const axios = require("axios");

async function getUserRepos(username) {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);

    return res.data;
  } catch (error) {
    throw new Error("User not found");
  }
}

module.exports = getUserRepos;
