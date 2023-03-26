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
    return '[License}(#license)';
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
function generateMarkdown(answers) {
    return `# ${answers.title}
    ${renderLicenseBadges(answers.license)}

  <h1 align="center"> ${answers.title} </h1>

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(answers.license)}
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description 
  ${answers.description}

## Installation
  ${answers.install}

## Usage
  ${answers.usage}

## License
  This project is licensed under the ${answers.license} license.

## Contributing and Acknowledgements
  ${answers.contributing} 

## Tests
  ${answers.test}

## Questions
  Connect with me on GitHub: [${answers.username}](https://github.com/${answers.username})
  Email me at ${answers.email}
  `;
}

module.exports = generateMarkdown;
