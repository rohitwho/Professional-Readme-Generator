// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  if (license[0] !== "None") {
 // if (license!== "None") {

    return `![Github license](https://img.shields.io/badge/license-${license}-red.svg)`;
  }
  else {
    return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license[0] !== "None") {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0] !== "None") {
    return `## License
Licensed under the ${license} license`
  }
  else {
    return "";
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}



## Description
${data.description}

## Deployed Application URL
${data.link}

## Table of Content
* [Features](#features)
* [Dependencies](#dependencies)
* [Language and Technology Used](#language-and-technology-used)
* [Installation](#installation)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)

## Screenshot
${data.screenshot}

## Installation
${data.title} ${data.installation}

## Features
${data.features}

##  Dependencies
${data.require}

## Language and Technology Used
${data.usage}

## Creator
${data.creator}

## Contact 
${data.email}

## Contributors
${data.contributors}

## Testing
${data.test}

${renderLicenseSection(data.license)}


## Questions
If you have encounter any issues or have any Questions  Regarding this Repo. Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
