console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
var age = 29;
var filename = 'greetings.txt';

//var string = `Hello ${user.username}! You are ${notes.age}.`+"\r\n";

var res = notes.addNote(user.username, age);
console.log(res);

//console.log(user);

/*
fs.appendFile(filename, string, function(err) {
    if(err) {
        console.log('Unable to write to file.');
    } // end of if(err)
}); // end of fs.appendFile('greetings.txt', 'Hello world!', function(err)
*/