// license badge -- posted in slack
function renderLicenseBadge(license) {
  if (license !== 'None') {
    //return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    //return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
    //return `[![GitHub License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  }
  return '';
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'none') {
    return '[License](#license)';
  }
  return '';
}

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'none') { 
    return `## License 
 This product is licensed under the ${license} license.`;   
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} \n
    ${renderLicenseBadge(data.license)}

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
  ${data.installation}

## Usage
  ${data.usage}

## License
  This project is licensed under the ${data.license} license.

## Contributing and Acknowledgements
  ${data.contributing} 

## Tests
  ${data.test}

## Questions
  Connect with me on GitHub: [${data.username}](https://github.com/${data.username}) \n
  Email me at [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
