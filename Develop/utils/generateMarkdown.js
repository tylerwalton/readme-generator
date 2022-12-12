// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
   else if (license === "Gnu") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else {return ``}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {        
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Gnu") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Credits](#credits)
6. [How To Contribute](#how-to-contribute)
7. [Author / Questions](#author)

## Description 
${data.description} 
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
${renderLicenseLink(data.license)}
## Credits
${data.credits}
## How To Contribute
${data.contribution}
## Author / Questions
"If you have any questions please feel free to reach me at"<a href=${data.email}>${data.email}</a>
<br>
"Or check out my work at" http://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
