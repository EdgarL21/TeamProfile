const inquirer = require("inquirer");
const fs = require("fs");

const team = []; // array for team

// select tyoe of employee

// create manager
const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameManger",
        message: "What is your Team Manager's name?",
      },
      {
        type: "input",
        name: "idManager",
        message: "What is the Team Manager's id?",
      },
      {
        type: "input",
        name: "emailManager",
        message: "What is the email address for the Team Manager?",
      },
      {
        type: "input",
        name: "officeNumberManager",
        message: "What is Team Manager's office number?",
      },
    ])
    .then((answer) => {
      let manager = new Manager(
        answer.nameManager,
        answer.idManager,
        answer.emailManager,
        answer.officeNumberManager
      );
      team.push(manager);

      // addNewEmployee();
    });
};

// crete engineer
const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameEngineer",
        message: "What is your Engineer's name?",
      },
      {
        type: "input",
        name: "idEngineer",
        message: "What is the Engineer's id?",
      },
      {
        type: "input",
        name: "emailEngineer",
        message: "What is the email address for the Engineer?",
      },
      {
        type: "input",
        name: "githubEngineer",
        message: "What is the Engineer's Github?",
      },
    ])
    .then((answer) => {
      let engineer = new Engineer(
        answer.nameEngineer,
        answer.idEngineer,
        answer.emailEngineer,
        answer.githubEngineer
      );
      team.push(engineer);

      // addNewEmployee();
    });
};

//create intern
const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameIntern",
        message: "What is your Intern's name?",
      },
      {
        type: "input",
        name: "idIntern",
        message: "What is the Team Manager's id?",
      },
      {
        type: "input",
        name: "emailEngineer",
        message: "What is the email address for the Engineer?",
      },
      {
        type: "input",
        name: "githubEngineer",
        message: "What is Team Manager's office number?",
      },
    ])
    .then((answer) => {
      let intern = new Intern(
        answer.nameEngineer,
        answer.idEngineer,
        answer.emailEngineer,
        answer.githubEngineer
      );
      team.push(intern);

      // addNewEmployee();
    });
};

// add another employee

// const questions = [
//   {
//     type: "input",
//     name: "nameManger",
//     message: "What is your Team Manager's name?",
//   },
//   {
//     type: "input",
//     name: "idManager",
//     message: "What is the Team Manager's id?",
//   },
//   {
//     type: "input",
//     name: "emailManager",
//     message: "What is the email address for the Team Manager?",
//   },
//   {
//     type: "input",
//     name: "officeNumberManager",
//     message: "What is Team Manager's office number?",
//   }
// ];

// const addMember = [
//   {
//     type: "list",
//     name: "addteam",
//     message: "Do you want to add another member to your team?",
//     choice: ["Enginner", "Intern", "none"],
//   }
// ];

// const runEngineer = [
//   {
//     type: "input",
//     name: "nameEngineer",
//     message: "What is your Engineer's name?",
//   },
//   {
//     type: "input",
//     name: "idEngineer",
//     message: "What is the Engineer's id?",
//   },
//   {
//     type: "input",
//     name: "emailEngineer",
//     message: "What is the email address for the Engineer?",
//   },
//   {
//     type: "input",
//     name: "githubEngineer",
//     message: "What is the Engineer's Github?",
//   }
// ];

// const runIntern = [
//   {
//     type: "input",
//     name: "nameIntern",
//     message: "What is your Intern's name?",
//   },
//   {
//     type: "input",
//     name: "idIntern",
//     message: "What is the Team Manager's id?",
//   },
//   {
//     type: "input",
//     name: "emailEngineer",
//     message: "What is the email address for the Engineer?",
//   },
//   {
//     type: "input",
//     name: "githubEngineer",
//     message: "What is Team Manager's office number?",
//   }
// ]

//   // function manager() {
//   //   inquirer.prompt(questions).then(function(data){
//   //     const manager = new
//   //   })
//   // };

//   .then((answers) => {
//     console.log(answers);

//     fs.writeFile("teamTest.html", answers1, (err, data) =>
//       err ? console.log(err) : console.log("Success created teamTest.html")
//     );
//   });
