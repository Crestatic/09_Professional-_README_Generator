// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-MIT-green)`
  } else
  if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache-blue)`
  } else
  if (license === 'GPL') {
    return `![License](https://img.shields.io/badge/License-GPL-yellow)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else
  if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else
  if (license === 'GPL') {
    return `https://opensource.org/licenses/GPL-3.0`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Content
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  https://github.com/${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
