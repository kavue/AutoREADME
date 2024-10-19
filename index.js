// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import badge-maker from 'badge-maker';
import fs from 'fs';

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of this project?",
            name: "title"
        },
        {
            type: "input",
            message: "Proivde a brief description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "Table of content?",
            name: "toc"
        },
        {
            type: "input",
            message: "What are the steps to install your project?",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide usage instructions and examples for user.",
            name: "usage"
        },
        {
            type: "list",
            message: "Select a license.",
            name: "license",
            choices: ['MIT', 'Apache', 'GNU', 'Unlicense']
        },
        {
            type: "input",
            message: "Provide instructinos on how other developers can contribute.",
            name: "contributing"
        },
        {
            type: "input",
            message: "Provide test instructions.",
            name: "test"
        },
        {
            type: "input",
            message: "Provide instructions on how to reach you for questions.",
            name: "questions"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        }
    ])
    .then((response) => {
        const template = `
        `