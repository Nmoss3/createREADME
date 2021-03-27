function generateMarkdown(answers) {
  return `
    # ${answers.projectTitle}

    ## Description
    ${answers.description}

    ## Table Of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributions](#contributions)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

    This application is covered by the ${answers.license} license.

    ## Contributions
    ${answers.contributions} created this masterpiece.

    ## Tests
    ${answers.tests}

    ## Questions

    Checkout my Github: [${answers.username}](https://github.com/${answers.username})

    Email me with questions at: ${answers.email}
    `;
}

module.exports = generateMarkdown;
