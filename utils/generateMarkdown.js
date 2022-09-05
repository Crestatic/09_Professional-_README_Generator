// function to generate badge for selected licence.
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

// function to supply the link for selected license.
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

// Function to generate the markdown for the readme.
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
  * https://github.com/${data.github}
  * ${data.email}

`;
}

module.exports = generateMarkdown;
