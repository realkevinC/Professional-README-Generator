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
        name:'discription',
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
            "MIT",
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
        message:"Questions",
        name:'question',
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
