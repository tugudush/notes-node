console.log('Starting app.js');

const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;

//console.log('Process: ', process.argv);
//console.log('Yargs: ', argv);

var command = process.argv[2];
var title = argv.title;
var body = argv.body;
// console.log('title: ', title);
// console.log('body: ', body);

command_display = null;

switch (command) {
  case 'add':
    command_display = 'add';
    notes.addNote(title, body)
    break;

  case 'list':
    command_display = "list";
    notes.getAll();
    break;

  case 'read':
    command_display = "read";
    notes.getNote(title, body);
    break;

  case 'remove':
    command_display = "remove";
    notes.removeNote(title);
    break;

  default:
    command_display = 'Unknown or empty';
}

console.log('command: ' + command_display);