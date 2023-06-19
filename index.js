//Packages needed for this application
const inquirer = require('inquirer');
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
       type: "list",
       name: "table",
       message: "Please select items to add to your table of contents",
       options: [
        'General',
        'Installation',
        'Contributors',
        'Licensing',
        'Credits',
        'Contact',
       ]
    },
    {
        type: "list",
        name: "table",
        message: "Please select items to add to your table of contents",
        options: [
         'General',
         'Installation',
         'Contributors',
         'Licensing',
         'Credits',
         'Contact',
        ]
     },
     {
        type: "list",
        name: "table",
        message: "Please select items to add to your table of contents",
        options: [
         'General',
         'Installation',
         'Contributors',
         'Licensing',
         'Credits',
         'Contact',
        ]
     },
     {
        type: "list",
        name: "table",
        message: "Please select items to add to your table of contents",
        options: [
         'General',
         'Installation',
         'Contributors',
         'Licensing',
         'Credits',
         'Contact',
        ]
     },
     {
        type: "list",
        name: "table",
        message: "Please select items to add to your table of contents",
        options: [
         'General',
         'Installation',
         'Contributors',
         'Licensing',
         'Credits',
         'Contact',
        ]
     },
     {
        type: "list",
        name: "table",
        message: "Please select items to add to your table of contents",
        options: [
         'General',
         'Installation',
         'Contributors',
         'Licensing',
         'Credits',
         'Contact',
        ]
     },
    {
        type: "input",
        name: "description",
        message: "Please add a breif description of your project.",
     },
     {
        type: "input",
        name: "roadbumps",
        message: "Please take a moment to share any challenges you and/or your team faced when developing this application."
     },
     {
        type: "input",
        name: "installation",
        message: "Detail the steps a user must take to install this application."
     },
     {
        type: "list",
        name: "technologies",
        message: "Please select the technologies used to create this application",
        options: [
            'HTML',
            'CSS',
            'JAVA',
            'JAVASCRIPT',
            'JQUERY',
            'NODE.JS',
            'PYTHON',
            'MYSQL',
            'RUBY',
            'REACT',
            'EXPRESS',
            'HEROKU',
            'PHP',
            'C++',
            'TYPESCRIPT',
            'KOTLIN',
            'NO-MORE',
        ]
     },
     {
        type: "list",
        name: "technologies",
        message: "Please select the technologies used to create this application",
        options: [
            'HTML',
            'CSS',
            'JAVA',
            'JAVASCRIPT',
            'JQUERY',
            'NODE.JS',
            'PYTHON',
            'MYSQL',
            'RUBY',
            'REACT',
            'EXPRESS',
            'HEROKU',
            'PHP',
            'C++',
            'TYPESCRIPT',
            'KOTLIN',
            'NO-MORE',
        ]
     },
     {
        type: "list",
        name: "technologies",
        message: "Please select the technologies used to create this application",
        options: [
            'HTML',
            'CSS',
            'JAVA',
            'JAVASCRIPT',
            'JQUERY',
            'NODE.JS',
            'PYTHON',
            'MYSQL',
            'RUBY',
            'REACT',
            'EXPRESS',
            'HEROKU',
            'PHP',
            'C++',
            'TYPESCRIPT',
            'KOTLIN',
            'NO-MORE',
        ]
     },
     {
        type: "list",
        name: "technologies",
        message: "Please select the technologies used to create this application",
        options: [
            'HTML',
            'CSS',
            'JAVA',
            'JAVASCRIPT',
            'JQUERY',
            'NODE.JS',
            'PYTHON',
            'MYSQL',
            'RUBY',
            'REACT',
            'EXPRESS',
            'HEROKU',
            'PHP',
            'C++',
            'TYPESCRIPT',
            'KOTLIN',
            'NO-MORE',
        ]
     },
     {
        type: "list",
        name: "license",
        message: "Please select a license. (OSI= Open Source, GPL= Copy Left or Protection against liability, MIT= permissive ie:patents)",
        options: [
         'OSI',
         'GPL',
         'MIT',
         'None'
        ]
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
        message: "Almost done! Add your questions here."
     },
]);

//Function to write README file
function writeToFile(fileName, data) {}

//Function to initialize app
function init(questions) {

}

//Function call to initialize app
init();