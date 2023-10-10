const inquirer = require('inquirer');
const fs = require('fs');
const html = ({name, stack, username, contact, repo,}) => 
`"# Build CLI App Inquirer"
${name};

## Description

Work with a partner to implement the following user story:
* My name is ${name}   As a developer, I want to create a command-line application that takes in input from the user and does something with it.
## Description 
IF you go to your terminal/bash window 
THEN you go type in <node index.js> 
WHEN you type in <node index.js>
THEN you will be met with a series of prompts 
WHEN you fill out the prompts 
THEN you will see "Success!" and will have generated a README file

## Author
${username}
## Technologies
node.js
JSON 
${stack}

## Links 
${repo}

## Preffered Method of contact 
${contact} 
`
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'node.js', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
 
{
  type: 'input',
   message: "What is your GitHub username? (No @ needed)",
  name: 'username',
},
{
  type: 'input',
  message: "What is the name of your GitHub repo?",
  name: 'repo',
},

  ])
  .then((answers) => {
   const htmlPageContent = html(answers);

    const filename = "README.md";

    fs.writeFile(filename,htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Success!'),


    )});
  // "${answers.username.toLowerCase().split(' ').join('')