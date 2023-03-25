// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

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
function generateMarkdown(data) {
  return `# ${data.username}`
  return `# ${data.email}`
  return `# ${data.title}`
  return `# ${data.description}`
  return `# ${data.license}` 
  return `# ${data.install}`
  return `# ${data.test}`
  return `# ${data.usage}`
  return `# ${data.contributing}`

  ;
}

module.exports = generateMarkdown;
