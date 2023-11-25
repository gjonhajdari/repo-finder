// const fetch = require("node-fetch");
const axios = require("axios");

async function fetchData(username, repos = false) {
  let url = `https://api.github.com/users/${username}`;

  if (repos) {
    url += "/repos";
  }

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getUserData(username) {
  try {
    const userInfo = await fetchData(username);
    return userInfo;
  } catch (error) {
    throw error;
  }
}

async function getUserRepos(username) {
  try {
    const userRepos = await fetchData(username, true);
    return userRepos;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserData,
  getUserRepos,
};
