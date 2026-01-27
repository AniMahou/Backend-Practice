const path = require('path');
const fs = require('fs');
// console.log(path.dirname(__dirname));

// const joinPath = path.join('/user', 'documents','node');
// console.log("Joined path: ", joinPath);

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log(`${dataFolder} has been created`);
}

const filePath = path.join(dataFolder, 'example.txt');
fs.writeFileSync(filePath, "New file there");
console.log("File created scucessfully");

const readFile = fs.readFileSync(filePath, 'utf-8');
console.log()
//fs.appendfile, fs.readfile/readfileSync, fs.writeFile/sync