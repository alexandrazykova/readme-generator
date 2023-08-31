// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// an array of questions for user input
const questions = ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add a description for your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Add Table of Content for your project',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'How to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How to use your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What licence are you using',
        name: 'licence',
    },
    {
        type: 'input',
        message: 'Did anyone contributed to your project',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How did you test your applicaton?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'questions',
    }
])
    
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(data)
    );
}

// function to initialize app
function init() { 
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        // TODO: Create a function to write README file
        writeToFile("README.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
