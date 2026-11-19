
const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello Node.js');

let data = fs.readFileSync('demo.txt', 'utf-8');
console.log("File Data:", data);

fs.appendFileSync('demo.txt', '\nWelcome to FS Module');

data = fs.readFileSync('demo.txt', 'utf-8');
console.log("Updated Data:", data);

fs.unlinkSync('demo.txt');

console.log("File Deleted Successfully");
