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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `

  <h1 align="center"> ${answers.title} </h1>

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
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
  ${answers.license} 
## Contributing and Acknowledgements
  ${answers.contributing} 
## Tests
  ${answers.test}
## Questions
  ${answers.username}
  ${answers.email}
  `;
}

module.exports = generateMarkdown;
