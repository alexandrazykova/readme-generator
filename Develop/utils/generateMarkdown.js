// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description
${data.description}

## Table of Contents
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## Licence
Under ${data.choices} licence.

## Contributors
Thank you ${data.contributors} for your contribution to this project.

## Tests
${data.tests}

## Questions?
You can reach out on GitHub: ${data.link} or by email: ${data.email}.`

}

module.exports = generateMarkdown; 