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
function renderLicenseLink(license) { 
  if (license !== "none") {
    return `[License](https://github.com/jeff-k/jeff-k-github/blob/master/LICENSE)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== "none") {
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}


## Description
${data.description}

## Deployed Application URL
${data.link}

## Table of Content
* [Features](#features)
* [Dependencies](#require)
* [Language and Technology Used](#usage)
* [Installation](#installation)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)

## Screenshot
${data.screenshot}

## Installing ${data.title}
${data.installation}

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

## Questions
If you have encounter any issues or have any Questions  Regarding this Repo. Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
