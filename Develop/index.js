// TODO: Include packages needed for this application
const generateMarkdown = require ('./utils/generateMarkdown')
const inquirer = require ('inquirer')
const fs = require ('fs')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "whats the title of your application",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your application",
  },
  {
    type: "input",
    name: "installation",
    message: "Please include any installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "What are some use cases for your application?",
  },
  {
    type: "list",
    name: "license",
    message: "select what kind of license you would like to add",
    choices: ["MIT", "Apache", "Mozilla", "Gnu", "No License"],
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
  },
  {
    type: "input",
    name: "email",
    message: "Please include your email.",
  },
  {
    type: "input",
    name: "github",
    message: "Please include your github username.",
  },
];


// TODO: Create a function to initialize app
// combined initialize and writefile function for drier code
function init() {
    inquirer.prompt(questions).then (data => {
        fs.writeFileSync('README.md', generateMarkdown(data))  
    })
}

// Function call to initialize app
init();
