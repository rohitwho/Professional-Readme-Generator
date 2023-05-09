// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please Give your project a Unique Title",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide the relative path to the image you want to use as the Demo."
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "input",
    name: "installation",
    message: "What are the Steps required to install your Project"

  },
  {
    type: "checkbox",
  //  type: "list",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "None"],
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here.",
  },
  {
    type: "input",
    name: "features",
    message: "Please List some features about this project.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "State the languages or technologies associated with this project.",
  },
  {
    type:"input",
    name:"email",
    message:"Please Enter your E-mail Address.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

  
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response)=>{
console.log ("Writing Document...")
writeToFile("./finishedproduct/Readme.md",generateMarkdown({ ...response }));
  })
}

// Function call to initialize app
init();