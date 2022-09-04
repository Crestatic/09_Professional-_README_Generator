// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please input a project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please input a project description:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please input instalation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please input usage infomation:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please input contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please input test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please input Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Readme created!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("readme.md", generateMarkdown(data))

    })
}

// Function call to initialize app
init();
