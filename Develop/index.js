// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// an array of questions for user input
const questions = [
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
        message: 'Provide installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How to use your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'MPL 2.0', 'none'],
    },
    {
        type: 'input',
        message: 'Add contributors to your project, if any',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How did you test your applicaton?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is you GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(data)
    );
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)

        // function to write README file
        writeToFile("README.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
