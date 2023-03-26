// dependencies needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [];
    inquirer
        .prompt([
            {
                name: 'title',
                message: 'What is title of your project?',
                default: 'No title specified.'
            },
            {
                name: 'description',
                message: 'Please enter description for your project',
                default: 'No description.'
            },

       // TABLE OF CONTENTS GOES HERE     
            {
                name: 'installation',
                message: 'What command should be run to install the dependencies?'
            },
            {
                name: 'usage',
                message: 'What does the user need to know about using the repo?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose the appropriate license for your project from the following:',
                choices: [
                    "Apache",
                    "Academic",
                    "GNU",
                    "ISC",
                    "MIT",
                    "Mozilla",
                ]
            },
            {
                name: 'contributing',
                message: 'Who or what contributors need to be acknowledged for this project?'
            },
            {
                name: 'test',
                message: 'What command should be run for tests?',
            },
            {   
                name: 'questions',
                message: 'GitHub username?' + 'Email address?' // not sure on this 
            }
            

            
        ])
        .then(answers => {
            console.info('Answer:', answers.username);
        })


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
