console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();
var age = 29;
var filename = 'greetings.txt';
//var test_string = 5;

//console.log('test_string: ' + test_string);
//console.log('isString: ' + _.isString(test_string));

//var string = `Hello ${user.username}! You are ${notes.age}.`+"\r\n";

var res = notes.addNote(user.username, age, filename);
console.log(res);

//console.log(user);

/*
fs.appendFile(filename, string, function(err) {
    if(err) {
        console.log('Unable to write to file.');
    } // end of if(err)
}); // end of fs.appendFile('greetings.txt', 'Hello world!', function(err)
*/