// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let displayLink = '';

  if (license === 'MIT') {
    displayLink = `![License: MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache-2.0') {
    displayLink = `![License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'MPL 2.0') {
    displayLink = `![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    displayLink = "";
  }
  return displayLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}.

## Table of Contents
${data.tableOfContents}.

## Installation
${data.installation}.

## Usage 
${data.usage}.

## Licence
${data.license} ${renderLicenseLink(data.licence)}

## Contributors
Thank you ${data.contributors} for contribution to this project.

## Tests
${data.tests}.

## Questions?
You can reach out on GitHub: ${data.link} or by email: ${data.email}.`

}

module.exports = generateMarkdown; 