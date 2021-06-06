
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super(name, id, email);
    this.school = school;
    this.role = role;
  }
}


module.exports = Intern; 




// const Employee = require("./Employee");

// class Intern extends Employee {
//   constructor(name, id, email, school) {
//     super(name, id, email);
//     this.school = school;
//   }

//   getName() {
//     return this.name;
//   }

//   getId() {
//     return this.id;
//   }

//   getEmail() {
//     return this.email;
//   }

//   getOffice() {
//     return this.school;
//   }

//   getRole() {
//     return "Intern";
//   }
// }

// module.exports = Intern;