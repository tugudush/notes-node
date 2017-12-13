console.log('Starting notes.js');

const fs = require('fs');

var addNote = function(title, body) {
        console.log('title: ' + title);
        console.log('body: ' + body);

        var notes = [];
        var note = {
            title: title,
            body: body
        }

        try {
            var notesString = fs.readFileSync('notes-data.json', );
            notes = JSON.parse(notesString);
        } catch (e) {
            //console.log('error: ', e);
            console.log('Creating notes-data.json');
        }

        //var duplicateNotes = notes.filter((note) => note.title === title);

        var duplicateNotes = notes.filter(function(note) {
            return note.title === title;
        });

        duplicateCounter = duplicateNotes.length;

        console.log('duplicates: ', duplicateNotes);
        console.log('duplicates counter: ', duplicateCounter);

        if (duplicateCounter === 0) {
            notes.push(note);
            fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        } // end of if (duplicateCounter === 0)
        else {
            console.log('Duplicate title found. Unable to insert.');
        }


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