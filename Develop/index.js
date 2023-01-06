// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile } = require("fs").promises;
// TODO: Create an array of questions for user input
const questions =[
    {
      type: "input",
      name: "username",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "what is your email address?",
    },
    {
      type: "input",
      name: "project",
      message: "what is your project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project",
    },
    {
      type: "input",
      name: "license",
      message: "what kind of license should your project have?",
    },
    {
      type: "input",
      name: "command",
      message: "what command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "command2",
      message: "What command should ve run to run tests?",
    },
    {
      type: "input",
      name: "user",
      message: "what does the user need to know about using this repo?",
    },
    {
      type: "input",
      name: "contributing",
      message: "what does the user need to know about contributing to he repo?",
    },
  ];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userResponses) => {
    console.log("generating")
    writeFile("README.md", generateMarkdown({...userResponses}))
  })

};
// Function call to initialize app
init();
