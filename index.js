const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');


// Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Team Members
const teamMembers = [];

// Master Function
function gitMembers() {

    // Manager function
    function gitManager() {
        console.log("Lets start building a dream team!");
        inquirer.prompt([
            {
             type: "input",
             name: "managerName",
             message: "What is the manager's name?",  
             validate: answer => {
                 if(answer !== "") {
                     return true;
                 }
                 return "Please enter a valid name!";
            } 
            },
            {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?",  
            validate: answer => {
                if(answer !== "") {
                    return true;
                    }
                return "Please enter a valid ID number!";
            } 
            },
            {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",  
            validate: answer => {
                if(answer !== "") {
                    return true;
                }
                return "Please enter a valid email!";
            } 
            },
            {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number (no spaces or characters)?",  
            validate: answer => {
                let pass = answer.match( /^[1-9]\d*$/ );
                if(pass) {
                    return true;
                }
                return "Please enter a valid phone number!";
            } 
            }
        ])
            .then(answers => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamMembers.push(manager);
                addMember();
            });
    }
    function addMember() {
        
    }






}