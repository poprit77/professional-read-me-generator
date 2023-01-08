// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
let license = '';
// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  const trimmed = userResponses.license;
  const badge = trimmed.replace(/ /g, "");
  console.log(badge);
  let draftToC = `## Table of Contents`;
  if (badge === "GNUAGPLv3") {
    license = `[${userResponses.license}](https://fossa.com/blog/open-source-software-licenses-101-agpl-license/)`;
  }
  if (badge === "MITLicense") {
    license = `[${userResponses.license}](https://opensource.org/licenses/MIT/)`;
  }
  if (badge === "ApacheLicense2.0") {
    license = `[${userResponses.license}](https://www.apache.org/licenses/LICENSE-2.0)`;
  }
  if (badge === "MozillaPublicLicense2.0") {
    license = `[${userResponses.license}](https://www.mozilla.org/en-US/MPL/2.0//)`;
  }
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
  console.log(badge);
  // Generate markdown for the top required portions of the README
  let draftMarkdown = `# ${userResponses.project}
  ![Badge for GitHub repo top language](https://img.shields.io/badge/${badge}-ReadMe-blue)
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

  ${license}
  `;

  // Questions / About Developer section
  let draftDev = `
  ---
  
  ## Questions?
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userResponses.username}](${userResponses.email})
  `;

  // If GitHub email is not null, add to Developer section
  if (userResponses.email !== null) {
    draftDev += `
  Email: ${userResponses.email}
  `;

    // Add developer section to markdown
    draftMarkdown += draftDev;

    // Return markdown
    return draftMarkdown;
  }
}
module.exports = generateMarkdown;
