const Employee = require("../lib/Employee"); // tests the file Employee.js to test the values

describe("Employee Class Test", () => {
  it("should return a Name, ID, Email", () => {
    const employeeName = "Olivia";
    const employeId = "001";
    const employeeEmail = "olivia@gmail.com";
    const employee = new Employee(employeeName, employeId, employeeEmail);

    expect(employee.name).toEqual("Olivia");
    expect(employee.id).toEqual("001");
    expect(employee.email).toEqual("olivia@gmail.com");
  }); // end of it
}); // end of describe
