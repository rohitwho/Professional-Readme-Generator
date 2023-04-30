// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {

    return `![Github license](https://img.shields.io/badge/license-${license}-red.svg)`;
  }
  return "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


## Description
${data.description}

## Deployed Application URL
${data.link}

## Table of Content
* [Features](#features)
* [Dependencies](#languagesanddependencies)
* [Language and Technology Used] (#usage)
* [Installation] (#installation)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)

## Screenshot
${data.screenshot}

## Installation
${data.installation}

## Features
${data.features}

##  Dependencies
${data.require}

## Language and Technology Used
${data.usage}

## Creator
${data.link}

## Contact 
${data.email}

## Contributors
${data.contributors}

## Testing
${data.test}

## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
