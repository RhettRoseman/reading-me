const inquirer = require('inquirer');
const fs = require('fs');
const html = ({ name, stack, username, contact, repo, title, usage, contributor, download, tests }) =>
  `
${title}

## Table of contents 
[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contributing)

 [Author](#Author)

[Technologies](#Technologies)

[Questions](#Questions)




## Installation
${download}

## Usage
${usage}

## Contributings
${contributor}

## Description 

GIVEN a readme genetator 

IF you go to your terminal/bash window 

THEN you go type in <node index.js> 

WHEN you type in <node index.js>

THEN you will be met with a series of prompts 

WHEN you fill out the prompts 

THEN you will see "Success!" and will have generated a README file

## Author
${username}
${name}


## Technologies
${stack}

## Questions 
${repo}

## Preffered Method of contact 
${contact}

## Tests
${tests}
`
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'contributor',
      message: 'Who worked with you on this project? (no @ needed) '
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Choose your license',
      choices: ['Apache-2.0', 'MIT', 'Artistic-2.0', 'LGPL', 'ECL-2.0'],


    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'node.js', 'express.js', 'python', 'Web API', 'Server API', 'MySQL', 'JSON'],
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
    {
      type: 'list',
      message: 'How do you download this project?',
      name: 'download',
      choices: ['node index.js', 'npm install node', 'git clone'],
    },
    {
      type: 'input',
      message: 'How do I use this?',
      name: 'usage',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How do I test this?',
    },


  ])
  .then((answers) => {
    const htmlPageContent = html(answers);

    const filename = "README.md";

    fs.writeFile(filename, htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Success!'),


    )
  });
// "${answers.username.toLowerCase().split(' ').join('')
