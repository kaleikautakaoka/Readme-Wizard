//Packages needed for this application
let inquirer = require('inquirer');
const fs = require('fs');
const createReadMe = require('./utils/generateMarkdown');

//Array of questions for user input
const questions = inquirer.createPromptModule([
    {
        type: "input",
        name: "title",
        message: "Please enter the title of this project"
    },
    {
        type: "input",
        name: "description",
        message: "Please add a breif description of your project.",
     },
     {
      type: "input",
      name: "image",
      message: "Add a path to your screenshot.",
   },
     {
        type: "input",
        name: "challenges",
        message: "Please take a moment to share any challenges and/or sucesses you and/or your team faced when developing this application."
     },
     {
        type: "input",
        name: "installation",
        message: "Detail the steps a user must take to install this application."
     },
     {
        type: "checkbox",
        name: "technologies",
        message: "Please select the technologies used to create this application",
        choices: ['HTML', 'CSS', 'JAVA', 'JAVASCRIPT', 'JQUERY', 'NODE.JS', 'PYTHON', 'MYSQL', 'RUBY', 'REACT', 'EXPRESS', 'HEROKU', 'PHP', 'C++', 'TYPESCRIPT', 'KOTLIN', 'NO-MORE'],
        default: "javascript",
     },
     {
        type: "list",
        name: "license",
        message: "Please select a license.",
        choices: ['Apache', 'GPL v3', 'MIT'],
        default: "ISC",
     },
     {
        type: "input",
        name: "contributors",
        message: "Please add your contributors here with each participant followed by a comma."
     },
     {
        type: "input",
        name: "tests",
        message: "Add your tests here"
     },
     {
        type: "input",
        name: "contact",
        message: "Your email goes here."
     },
     {
        type: "input",
        name: "github",
        message: "Your github link goes here."
     },
     {
        type: "input",
        name: "questions",
        message: "Almost done! Add any additional information you would like to share here or simply ask questions!"
     },
]);

//Function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, function(err) {
         if (err) {
               return console.log(err);
         }
         console.log("Success!")
      });
};

//Function to initialize app
function init(questions) {
      inquirer.prompt(questions).then(function(data) {
         writeToFile("README.md", createReadMe(data));
      });
};

//Function call to initialize app
init();