const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
// const path = require('path');

// const createHTML = require('') // this this to pass in an a premade HTML/Styled page

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

const team = []; // array for team

// select tyoe of employee wanted
const employeeType = () => {
  inquirer
    .prompt([
      {
        name: "employee",
        message: "What type of employee do you want to add?",
        type: "list",
        choices: [
          { name: "Manager", value: 0 },
          { name: "Engineer", value: 1 },
          { name: "Intern", value: 2 },
        ],
      },
    ])
    .then((answer) => {
      if (answer.employee === 0) {
        createManager();
      } else if (answer.employee === 1) {
        createEngineer();
      } else if (answer.employee === 2) {
        createIntern();
      }
    })
    .catch((err) => console.error(err));
};
employeeType(); // calls the employeType function to start the process of getting team input

// create manager
const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Team Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Team Manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address for the Team Manager?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is Team Manager's office number?",
      },
    ])
    .then((answer) => {
      let manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      team.push(manager);

      addNewEmployee();
    });
};

// crete engineer
const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address for the Engineer?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's Github?",
      },
    ])
    .then((answer) => {
      let engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      team.push(engineer);

      addNewEmployee();
    });
};

//create intern
const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address for your Intern?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did your Intern go to?",
      },
    ])
    .then((answer) => {
      let intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      team.push(intern);

      addNewEmployee();
    });
};

// add another employee
const addNewEmployee = () => {
  inquirer
    .prompt([
      {
        name: "newMember",
        message: "Would you like to add another person to your team?",
        type: "confirm",
      },
    ])
    .then((answer) => {
      if (answer.newMember) {
        employeeType();
      } else {
        // const renderTeam = render(team); // gets the team array and // cant use this havent leanred react
        let htmlPage = createHTML(team); // i think this works
        // fs.writeFile(outputPath, renderTeam);
        fs.writeFile("teamTest.html", htmlPage); // i think this works
        console.log("A file containing your team has been created.");
      }
    })
    .catch((err) => console.log(err));
};