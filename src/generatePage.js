// Manager data to HTML
const managerContent = manager => {
  return `
  <div class="col-auto mx-auto">
    <div class="card" style="width: 14rem">
      <div class="card-header text-bg-primary">
        <h5 class="card-title">
          ${manager.name} <br />
          <img class="icon filter-white" src="./assets/images/icons/briefcase.svg" alt="briefcase icon"> Manager
        </h5>
      </div>
      <div class="card-body">
        <div class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </div>
      </div>
    </div>
  </div>
  `;
};

// Engineer data to HTML
const engineerContent = engineer => {
  return `
  <div class="col-auto mx-auto">
    <div class="card" style="width: 14rem">
      <div class="card-header text-bg-primary">
        <h5 class="card-title">
          ${engineer.name} <br />
          <img class="icon filter-white" src="./assets/images/icons/code.svg" alt="coding icon"> Engineer
        </h5>
      </div>
      <div class="card-body">
        <div class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></li>
        </div>
      </div>
    </div>
  </div>
  `;
};

// Intern data to HTML
const internContent = intern => {
  return `
  <div class="col-auto mx-auto">
    <div class="card" style="width: 14rem">
      <div class="card-header text-bg-primary">
        <h5 class="card-title">
          ${intern.name} <br />
          <img class="icon filter-white" src="./assets/images/icons/pencil.svg" alt="pencil icon"> Intern
        </h5>
      </div>
      <div class="card-body">
        <div class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </div>
      </div>
    </div>
  </div>
  `;
};

generatePage = data => {
  const teamName = data[0].teamName;
  cardArray = [];

  for (let i = 1; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    switch (role) {
      case 'Manager':
        const managerCard = managerContent(employee);
        cardArray.push(managerCard);
        break;
      case 'Engineer':
        const engineerCard = engineerContent(employee);
        cardArray.push(engineerCard);
        break;
      case 'Intern':
        const internCard = internContent(employee);
        cardArray.push(internCard);
        break;
    }
  }
  const teamCards = cardArray.join('');

  const generateTeam = generateTeamPage(teamName, teamCards);
  return generateTeam;
};

const generateTeamPage = (teamName, teamCards) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>${teamName}</title>
  </head>
  <body>
    <header class="text-bg-danger text-center p-4">
      <div class="align-items-center">
        <h1>${teamName}</h1>
      </div>
    </header>
    <section>
      <div class="d-flex flex-wrap mt-5 justify-content-center align-items-center">
        ${teamCards}
      </div>

  </section>

</body>
</html>
  `;
};

module.exports = generatePage;
