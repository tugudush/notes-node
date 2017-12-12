console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');

var args = process.argv;
console.log(args);

var command = process.argv[2];

command_display = null;

switch (command) {
  case 'add':
    command_display = 'Adding note!';
    break;

  case 'list':
    command_display = "Listing notes!";
    break;

  case 'read':
    command_display = "Reading note!";
    break;

  case 'remove':
    command_display = "Removing note!";
    break;

  default:
    command_display = 'Unknown or empty';
}

console.log('command: ' + command_display);