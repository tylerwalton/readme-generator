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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then (data => {
        fs.writeFileSync('testreadme1.md', generateMarkdown(data))  
    })
}

// Function call to initialize app
init();
