// General README.md markdown.
function generateMarkdown(answers) {
  return `
    # ${answers.projectTitle}

    ## Description

    ${answers.description}

    ## Table Of Contents

    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Links](#Links)
    - [License](#License)
    - [Contributions](#Contributions)
    - [Tests](#Tests)
    - [Questions](#Questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Links
    [${answers.link}](${answers.link})

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
