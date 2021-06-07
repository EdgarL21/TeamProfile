const Manager = require("../lib/Manager"); // gets the file Manager.js to test the values

describe("Manager Class Test", () => {
  it("it should return a Name, ID, Email, Office Number and Role", () => {
    const managerName = "Liam";
    const managerId = "002";
    const managerEmail = "liam@gmail.com";
    const managerOfficeNumber = "1";
    const managerRole = "Manager";
    const manager = new Manager(
      managerName,
      managerId,
      managerEmail,
      managerOfficeNumber,
      managerRole
    );

    expect(manager.name).toEqual("Liam");
    expect(manager.id).toEqual("002");
    expect(manager.email).toEqual("liam@gmail.com");
    expect(manager.officeNumber).toEqual("1");
    expect(manager.role).toEqual("Manager");
  });
});
