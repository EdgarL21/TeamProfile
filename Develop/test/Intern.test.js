const Intern = require("../lib/Intern"); // gets the file Intern.js to test the values

describe("Intern Class Test", () => {
  it("it should return a Name, ID, Email, School and Role", () => {
    const internName = "Noah";
    const internId = "004";
    const internEmail = "noah@gmail.com";
    const internSchool = "UC Davis";
    const internRole = "Intern";
    const intern = new Intern(
      internName,
      internId,
      internEmail,
      internSchool,
      internRole
    );

    expect(intern.name).toEqual("Noah");
    expect(intern.id).toEqual("004");
    expect(intern.email).toEqual("noah@gmail.com");
    expect(intern.school).toEqual("UC Davis");
    expect(intern.role).toEqual("Intern");
  });
});
