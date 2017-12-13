/*
var obj = {
    name: 'Andrew'
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "Andrew", "age": 25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
console.log('name: ', person.name);
*/

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log('type of noteString:', typeof noteString);
console.log('type of note: ', typeof note);

console.log('title: ', note.title);
console.log('body: ', note.body);