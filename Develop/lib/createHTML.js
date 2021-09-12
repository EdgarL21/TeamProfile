function createHTML(team) {
  let createdManager = ``;
  let createdEngineer = ``;
  let createdIntern = ``;
  team.forEach((employee) => {
    if (employee.role == "Manager") {
      createdManager =
        createdManager +
        `
        <!-- Manager -->
        <div class="col-12 col-md-3 offset-md-1 border">
          <div class="bg-secondary p-3 header">
            <h2>Name: ${employee.name}</h2>
            <h3>Role: ${employee.role}</h3>
          </div>
          <div class="bottom">
            <p>Id: ${employee.id}</p>
            <p>Office Number: ${employee.officeNumber}</p>
            <a href="mailto:${employee.email}" class="card-link emailLink">${employee.email}</a>
          </div>
        </div>`;
    } // end of if statment

    if (employee.role == "Engineer") {
      createdEngineer =
        createdEngineer +
        ` 
        <!-- Engineer -->
        <div class="col-12 col-md-3 offset-md-1 border">
           <div class="bg-success p-3 header">
             <h2>Name: ${employee.name}</h2>
             <h3>Role: ${employee.role}</h3>
           </div>
           <div class="bottom">
             <p>Id: ${employee.id}</p>
             <a href="https://github.com/${employee.github}" target="_blank">Gitub: ${employee.github}</a><br /><br />
             <a href="mailto:${employee.email}" class="card-link emailLink">${employee.email}</a>
           </div>
         </div>`;
    } // end  of if statment

    if (employee.role == "Intern") {
      createdIntern =
        createdIntern +
        ` 
        <!-- Intern -->
        <div class="col-12 col-md-3 offset-md-1 border">
          <div class="bg-info p-3 header">
            <h2>Name: ${employee.name}</h2>
            <h3>Role: ${employee.role}</h3>
          </div>
          <div class="bottom">
            <p>Id: ${employee.id}</p>
            <p>School: ${employee.school}</p>
            <a href="mailto:${employee.email}" class="card-link emailLink">${employee.email}</a>
          </div>
        </div>`;
    }
  });
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>GenerateHTML</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./templates/style.css" />
    </head>
    <body>
      <header>
        <div class="p-3 mb-4 bg-primary rounded-3">
          <div class="h-100 p-3 text-white text-center">
            <h1>Welcome To Your Team</h1>
          </div>
        </div>
      </header>
  
      <div class="row">
    ${createdManager}
    ${createdEngineer}
    ${createdIntern}
      </div>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
      <script src="../index.js"></script>
    </body>
  </html>`; // end of for each loop
}

module.exports = createHTML;
