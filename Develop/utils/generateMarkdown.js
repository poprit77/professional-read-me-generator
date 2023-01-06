// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  console.log(userResponses);
  console.log(userInfo);
  let draftToC = `## Table of Contents`;

  if (userResponses.command !== "") {
    draftToC += `
* [Installation](#installation)`;
  }

  if (userResponses.user !== "") {
    draftToC += `
* [Usage](#usage)`;
  }

  if (userResponses.contributing !== "") {
    draftToC += `
* [Contributing](#contributing)`;
  }

  if (userResponses.command2 !== "") {
    draftToC += `
* [Tests](#tests)`;
  }
  // Generate Table of Contents conditionally based on userResponses

  // Generate markdown for the top required portions of the README
  let draftMarkdown = `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}
  `;

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;

  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;

  // Optional Installation section
  if (userResponses.command)
    draftMarkdown += `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.command}`;


// Optional Usage section
if (userResponses.user !== "") {
  draftMarkdown += `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.user}`;
}

// Optional Contributing section
if (userResponses.contributing !== "") {
  draftMarkdown += `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`;
}

// Optional Tests section
if (userResponses.command2 !== "") {
  draftMarkdown += `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.command2}`;
}

// License section is required
draftMarkdown += `
  
  ## License
  
  ${userResponses.license}
  `;

// Questions / About Developer section
let draftDev = ``
//   ---
  
//   ## Questions?
//   <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />
  
//   For any questions, please contact me with the information below:
 
//   GitHub: [@${userInfo.login}](${userInfo.url})
//   `;

// If GitHub email is not null, add to Developer section
if (userResponses.email !== null) {
  draftDev += `
  Email: ${userResponses.email}
  `;


// Add developer section to markdown
draftMarkdown += draftDev;

// Return markdown
return draftMarkdown;
}};
module.exports = generateMarkdown;
