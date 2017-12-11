console.log('Starting app...');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

var filename = 'greetings.txt';

var string = `Hello ${user.username}!`;

console.log(user);

fs.appendFile(filename, string, function(err) {
    if(err) {
        console.log('Unable to write to file.');
    } // end of if(err)
}); // end of fs.appendFile('greetings.txt', 'Hello world!', function(err)