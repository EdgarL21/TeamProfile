const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    super(name, id, email);
    this.github = github;
    this.role = role;
  }
}

module.exports = Engineer; 