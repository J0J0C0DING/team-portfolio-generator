const teamNameQuestions = [
  {
    // Ask if user would like to add a team name
    type: 'confirm',
    name: 'confirmTeamName',
    message: 'Welcome to Team Generator! What would you like to name your team?',
  },
  {
    // Enter team name
    type: 'input',
    name: 'teamName',
    message: 'What is the name of your team?',
    // If user wants to add team name, then provide input field
    when: ({ confirmTeamName }) => {
      if (confirmTeamName) {
        return true;
        // If user does not want to enter a team name, default to 'Work Team'
      } else {
        return false;
      }
    },
    // Make sure if user selected to add team name that they actually enter a name
    validate: teamNameInput => {
      if (!teamNameInput) {
        console.log('Please enter a valid team name!');
      } else {
        return true;
      }
    },
  },
];

const managerQuestions = [
  {
    // Get manager's name
    type: 'input',
    name: 'name',
    message: `Enter manager's name? (Required)`,
    validate: nameInput => {
      if (!nameInput || /\d/.test(nameInput)) {
        console.log('Please enter a valid name!');
        return false;
      }
      return true;
    },
  },
  {
    // Get manager's id
    type: 'input',
    name: 'id',
    message: `Enter manager's ID#: (Required)`,
    validate: idInput => {
      if (!idInput) {
        console.log('Please enter an ID number!');
        return false;
      }
      return true;
    },
  },
  {
    // Get managers email
    type: 'input',
    name: 'email',
    message: `Enter manager's email address: (Required)`,
    validate: emailInput => {
      if (!emailInput) {
        console.log('Please enter an email address!');
        return false;
      }
      return true;
    },
  },

  {
    // Get managers office number
    type: 'input',
    name: 'officeNumber',
    message: `Enter manager's office number: (Required)`,
    validate: officeInput => {
      if (!officeInput) {
        console.log('Please enter a office number!');
        return false;
      }
      return true;
    },
  },
];

const teamMemberQuestions = [
  {
    // Get team member name
    type: 'input',
    name: 'name',
    message: `Enter team member name: (Required)`,
    validate: nameInput => {
      if (!nameInput || /\d/.test(nameInput)) {
        console.log('Please enter a valid name!');
        return false;
      }
      return true;
    },
  },
  {
    type: 'list',
    name: 'role',
    message: `Please select team member's role:`,
    choices: ['Engineer', 'Intern'],
  },
  {
    // Get team member id
    type: 'input',
    name: 'id',
    message: `Enter team member's ID#: (Required)`,
    validate: idInput => {
      if (!idInput) {
        console.log('Please enter an ID number!');
        return false;
      }
      return true;
    },
  },
  {
    // Get team member email
    type: 'input',
    name: 'email',
    message: `Enter team member's email address: (Required)`,
    validate: emailInput => {
      if (!emailInput) {
        console.log('Please enter an email address!');
        return false;
      }
      return true;
    },
  },
  {
    // Get team member office number
    type: 'input',
    name: 'github',
    message: `Enter team member's GitHub username: (Required)`,
    when: input => input.role === 'Engineer',
    validate: gitHubInput => {
      if (!gitHubInput) {
        console.log('Please enter an email address!');
        return false;
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'school',
    message: 'Where does the team member attend school? (Required)',
    when: input => input.role === 'Intern',
    validate: schoolInput => {
      if (!schoolInput) {
        console.log('Please enter an email address!');
        return false;
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'confirmAddTeamMember',
    message: 'Would you like to add more team members?',
    default: false,
  },
];

module.exports = {
  teamNameQuestions,
  managerQuestions,
  teamMemberQuestions,
};
