// function that returns a license badge based on which license is passed in
// if there is no license, returns an empty string
function renderLicenseBadge(license) {
  let displayBadge = ''

  if (license === 'MIT') {
    displayBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Apache-2.0') {
    displayBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === 'MPL 2.0') {
    displayBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else {
    displayBadge = "";
  }
  return displayBadge;
}

// function that returns the license link
// ff there is no license, returns an empty string
function renderLicenseLink(license) {
  let displayLink = '';

  if (license === 'MIT') {
    displayLink = '[License: MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache-2.0') {
    displayLink = '[License: Apache 2.0](https://spdx.org/licenses/Apache-2.0.html)';
  } else if (license === 'MPL 2.0') {
    displayLink = '[License: MPL 2.0](https://spdx.org/licenses/MPL-2.0.html)';
  } else {
    displayLink = "";
  }
  return displayLink;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}.

## Usage 
${data.usage}.

## Licence
${data.license} ${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}.

## Questions
You can reach out on GitHub: https://github.com/${data.username} or by email: ${data.email}.`

}

module.exports = generateMarkdown;