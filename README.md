# repo-finder

Gets repository list from a specified GitHub user, using the [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28).

## Installation

Using npm

```bash
$ npm install repo-finder
```

Using yarn

```bash
$ yarn add repo-finder
```

Using pnpm

```bash
$ pnpm add repo-finder
```

Using bun

```bash
$ bun i repo-finder
```

## Usage

Once the package is installed, you can import it in your code using both `require` or `import` depending on whether you use CommonJS or ESModules.

```js
import getUserRepos from "repo-finder";

const getUserRepos = require("repo-finder");
```

The `getuserRepos` function returns a promise containing the raw JSON data from the GitHub API. You can format the data however you like.

### Example

```js
const getUserRepos = require("repo-finder");

const data = getUserRepos(username);

data.then((repos) => {
  console.log("Total repos: " + repos.length);

  repos.forEach((repo) => {
    console.log(repo.name);
  });
});
```

> Note: `getUserRepos` implements `async/await` which is part of ES2017 and is not supported by some older browsers.
