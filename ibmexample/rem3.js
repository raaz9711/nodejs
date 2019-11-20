
var fs = require('fs');
var fileContents = fs.readFileSync('../data/50Words.txt', 'utf8');
var numberOfWords = fileContents.split(/[ ,.\n]+/).length;
console.log(numberOfWords)