const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "tmName",
      message: "What is your Team Manager's name?",
    },
    {
      type: "input",
      name: "tmId",
      message: "What is the Team Manager's id?",
    },
    {
      type: "input",
      name: "tmGithub",
      message: "What is your Github Username for Team Manager?",
    },
    {
      type: "input",
      name: "tmEmail",
      message: "What is your email address for the Team Manager?",
    },
    {
      type: "input",
      name: "tmOffice",
      message: "What is Team Manager's office number?",
    },
  ])
  .then((data) => {
    console.log(data);
  });