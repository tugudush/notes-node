console.log('Starting notes.js');

const fs = require('fs');

var addNote = function(title, body) {
    console.log('title: ' + title);
    console.log('body: ' + body);
} // end of module.exports.addNote = function(title, body)

var getAll = function() {
    console.log('Getting all notes');
} // end of var getAll = function() {

var getNote = function(title, body) {
    console.log(`Getting note "${title}".`);
    console.log('Body: ', body);
} // end of var getNote = function(title, body)

var removeNote = function(title) {
    console.log(`Removing note "${title}".`);
} // end of var removeNote = function(title)

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};