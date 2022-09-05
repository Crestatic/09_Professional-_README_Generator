// Global variables
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// Array of question prompts for the terminal when node index.js in invoked
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

// Function to write readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Readme created!'))
}

// Function to initiate the App
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("readme.md", generateMarkdown(data))

    })
}

// Function call to initialize app
init();
