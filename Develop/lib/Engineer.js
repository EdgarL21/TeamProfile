const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    super(name, id, email);
    this.github = github;
    this.role = role;
  }
}

module.exports = Engineer; 

// const Employee = require("./Employee");

// class Engineer extends Employee {
//   constructor(name, id, email, github) {
//     super(name, id, email);
//     this.github = github;
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
//     return this.github;
//   }

//   getRole() {
//     return "Engineer";
//   }
// }

// module.exports = Engineer;