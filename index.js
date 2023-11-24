const fetch = require("node-fetch");

async function fetchData(username, repos = false) {
  let url = `https://api.github.com/users/${username}`;

  if (repos) {
    url += "/repos";
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
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
