// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//Slavic posted in Slack 
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return '[License](#license)';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') { 
    return `## License 
 This product is licensed under the ${license} license.`;   
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} <br />
    ${renderLicenseBadge(data.license)}

  <h1 align="center"> ${data.title} </h1>

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description 
  ${data.description}

## Installation
  ${data.install}

## Usage
  ${data.usage}

## License
  (This project is licensed under the ${data.license} license.)

## Contributing and Acknowledgements
  ${data.contributing} 

## Tests
  ${data.test}

## Questions
  Connect with me on GitHub: [${data.username}](https://github.com/${data.username})
  Email me at [${data.email}](mailto:user@example.com)
  `;
}

module.exports = generateMarkdown;
