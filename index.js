import inquirer from 'inquirer';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of this project?",
            name: "title"
        },
        {
            type: "input",
            message: "Provide a brief description of your project.",
            name: "description"
        },
        {
            type: "checkbox",
            message: "Table of contents?",
            name: "toc",
            choices: [
                'Installation',
                'Usage',
                'Contributing',
                'License',
                'Tests',
                'Questions',
                'Exit'
            ]
        },
        {
            type: "input",
            message: "What are the steps to install your project?",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide usage instructions and examples for users.",
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
            message: "Provide notice that explains which license the application is covered under.",
            name: "licnotice"
        },
        {
            type: "input",
            message: "Provide instructions on how other developers can contribute.",
            name: "contributing"
        },
        {
            type: "input",
            message: "Provide test instructions.",
            name: "tests"
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
        // Generate the table of contents based on the selected items
        const tocList = response.toc.map(item => `<li><a href="#${item.toLowerCase()}">${item}</a></li>`).join('\n');

        const licenseBadge = {
            'MIT': 'https://img.shields.io/badge/license-MIT-blue.svg',
            'Apache': 'https://img.shields.io/badge/license-Apache-orange.svg',
            'GNU': 'https://img.shields.io/badge/license-GNU-red.svg',
            'Unlicense': 'https://img.shields.io/badge/license-Unlicense-lightgrey.svg',
        }[response.license];
        
        const template = `
# ${response.title}

![License](${licenseBadge})

## Description
${response.description}

## Table of Contents
${tocList}

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.licnotice}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
${response.questions}

* GitHub: [${response.github}](https://github.com/${response.github})
* Email: [${response.email}](mailto:${response.email})
        `;

        fs.writeFile('README.md', template, (err) => 
            err 
                ? console.log("Error creating README.md", err) 
                : console.log("README.md file created successfully!")
        );
    });
