// Function that returns a license badge based on which license is passed in
// If there is no license this function will return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license === 'GPL v3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else {
    return '';
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Image](#image)
  * [Challenges](#challenges)
  * [Installation](#installation)
  * [Technologies](#technologies)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Contact](#contact)
  * [Github](#github)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Image
  ![Screenshot](${data.image})

  ## Challenges
  ${data.challenges}

  ## Installation
  ${data.installation}

  ## Technologies
  ${data.technologies}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Contact
  ${data.contact}

  ## Github
  ${data.github}

  ## Questions
  ${data.questions}
  
  
  `;}

module.exports = generateMarkdown;
