const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe how to install the project if needed",
    },
    {
      type: "input",
      name: "usage",
      message: "what is this project used for?",
    },
    {
      type: "list",
      name: "license",
      message: "Choose an appropriate License",
      choices: ["BSD", "Apache 2.0", "GPL", "MPL 2.0", "Open"],
    },
    {
      type: "input",
      name: "contributions",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "How can someone test the project?",
    },
    {
      type: "input",
      name: "questions",
      message: "What if someone has a question?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github user name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the best email to contact you?",
    },
    {
      type: "list",
      name: "tacos",
      message: "do you like tacos?",
      choices: ["yes", "no", "wait...why?"],
    },
  ]);
}

async function init() {
  try {
    const answers = await promptUser();
    const generateContent = generateMarkdown(answers);
    await writeFileAsync("./dist/README.md", generateContent);
    console.log("successfuly created a README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
