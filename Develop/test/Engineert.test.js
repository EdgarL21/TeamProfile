const Engineer = require("../lib/Engineer"); // gets the file Engineer.js to test the values

describe("Engineer Class Test", () => {
  it("it should return a Name, ID, Email, Github and Role", () => {
    const engineerName = "Ava";
    const engineerId = "003";
    const engineerEmail = "ava@gmail.com";
    const engineerGithub = "Ava1";
    const engineerRole = "Engineer";
    const engineer = new Engineer(
      engineerName,
      engineerId,
      engineerEmail,
      engineerGithub,
      engineerRole
    );

    expect(engineer.name).toEqual("Ava");
    expect(engineer.id).toEqual("003");
    expect(engineer.email).toEqual("ava@gmail.com");
    expect(engineer.github).toEqual("Ava1");
    expect(engineer.role).toEqual("Engineer");
  });
});
