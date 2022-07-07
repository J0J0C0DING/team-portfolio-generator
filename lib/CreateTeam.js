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
  },
  {
    // Get manager's id
    type: 'input',
    name: 'id',
    message: `Enter manager's ID#: (Required)`,
  },
  {
    // Get managers email
    type: 'input',
    name: 'email',
    message: `Enter manager's email address: (Required)`,
  },
  {
    // Get managers office number
    type: 'input',
    name: 'officeNumber',
    message: `Enter manager's office number: (Required)`,
  },
];

const teamMemberQuestions = [
  {
    // Get team member name
    type: 'input',
    name: 'name',
    message: `Enter team member name: (Required)`,
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
  },
  {
    // Get team member email
    type: 'input',
    name: 'email',
    message: `Enter team member's email address: (Required)`,
  },
  {
    // Get team member office number
    type: 'input',
    name: 'github',
    message: `Enter team member's GitHub username: (Required)`,
    when: input => input.role === 'Engineer',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Where does the team member attend school?',
    when: input => input.role === 'Intern',
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
