const inquirer = require('inquirer');
const fs = require('fs');

const { teamNameQuestions } = require('./lib/CreateTeam');
const { managerQuestions } = require('./lib/CreateTeam');
const { teamMemberQuestions } = require('./lib/CreateTeam');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

let addTeamName = () => {
  return inquirer.prompt(teamNameQuestions).then(teamNameInput => {
    const { teamName } = teamNameInput;
    let choosenTeamName;
    if (!teamName) {
      choosenTeamName = 'Work Team';
      console.log(choosenTeamName);
    } else {
      choosenTeamName = teamName;
    }

    teamArray.push({ teamName: choosenTeamName });
    console.log(teamArray);
  });
};

let addManager = () => {
  console.log(':::: Add Manager ::::');
  return inquirer.prompt(managerQuestions).then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);
  });
};

let addTeamMember = () => {
  console.log(':::: Add team member ::::');
  return inquirer.prompt(teamMemberQuestions).then(teamMemberInput => {
    const { name, id, email, github, school, role, confirmAddTeamMember } = teamMemberInput;
    let teamMember;

    switch (role) {
      case 'Engineer':
        teamMember = new Engineer(name, id, email, github);
        break;
      case 'Intern':
        teamMember = new Intern(name, id, email, school);
        break;
    }
    teamArray.push(teamMember);

    if (confirmAddTeamMember) {
      return addTeamMember(teamArray);
    } else {
      console.log(teamArray);
      return teamArray;
    }
  });
};
addTeamName().then(addManager).then(addTeamMember);
// addManager();
// addTeamMember();
