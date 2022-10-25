// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What's title of my project?",
        name:'title'
    },{
        type:'input',
        message:"Description of your project",
        name:'description',
    },{
        type:'input',
        message:"Table of Content",
        name:'table',
        
    },{
        type:'input',
        message:"Installation",
        name:'installation',
    },{
        type:'input',
        message:"Usage",
        name:'usage',
    },{
        type:'list',
        message:"Select a license",
        name:'license',
        choices:[
            "None",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause Simplified License",
            "BSD 3-Clause New or Revised License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
    },{
        type:'input',
        message:"Contributing",
        name:'contributing',
    },{
        type:'input',
        message:"Test",
        name:'test',
    },{
        type:'input',
        message:"What is your GitHub username",
        name:'github',
    },{
        type:'input',
        message:"What is your email",
        name:'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        writeToFile("./generateHere/README.md", data);
    });
}


// Function call to initialize app
init();
