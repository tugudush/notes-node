console.log('Starting notes.js');
//console.log(module);

const fs = require('fs');

module.exports.addNote = function(username, age) {
    console.log('addNote');

    var filename = 'greetings.txt';

    var string =  `Hi ${username}! You are ${age}.`;

    fs.appendFile(filename, string, function(err) {
        if(err) {
            console.log('Unable to write to file.');
        } // end of if(err)
    }); // end of fs.appendFile('greetings.txt', 'Hello world!', function(err)

    return `Hi ${username}! You are ${age}.`;    
}