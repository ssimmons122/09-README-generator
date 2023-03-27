// dependencies needed for this application
const inquirer = require('inquirer'); // npm pkg
const fs = require('fs'); //file system
const generateMarkdown = require('./utils/generateMarkdown.js'); // answers

// array of questions for user input
const questions = [
    //inquirer
        //.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is title of your project?',
                
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please enter description of your project.',
                
            },

       // TABLE OF CONTENTS GOES HERE     

            {
                type: 'input',
                name: 'installation',
                message: 'What command should be run to install the dependencies?'
            },
            {
                type: 'input',
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
                type: 'input',
                name: 'contributing',
                message: 'Who or what contributors need to be acknowledged for this project?'
            },
            {
                type: 'input',
                name: 'test',
                message: 'What command should be run for tests?',
            },
            {   
                type: 'input',
                name: 'questions',
                message: 'GitHub username?' 
            },
            {   
                type: 'input',
                name: 'questions', 
                message:'Email address?'
            }

            
        ]
        
// funct to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('Success! Check out your README!')
    });
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        let fileName = 'README.md';
        writeToFile(fileName, data)
   });
};
// Function call to initialize app
init();
