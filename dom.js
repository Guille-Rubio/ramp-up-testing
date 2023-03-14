const { log } = require('console');
const fs = require('fs');
const path = require('path');

function loadHtml(pathToHtmlFile) {
    return fs.readFileSync(pathToHtmlFile, { encoding: 'utf8' })
};

function loadStylesSheet() {
    return fs.readFileSync("./style.css", { encoding: 'utf-8' })
};


function loadRootFiles() {
    return fs.readdirSync(__dirname, (err, files) => files)
};

function loadPagesFiles() {
    return fs.readdirSync(__dirname + "/pages", (err, files) => files)
};

function findFoldersInDir(dirPath = '') {
    const dir = path.join(__dirname, dirPath)
    const files = fs.readdirSync(dir, (err, files) => files)
    console.log(files);
    const paths = 
    files.filter(file => file.indexOf('.') === -1)
    //TODO use isDirectory() instead of indexOf
};


const templateLoaders = {
    loadHtml,
    loadStylesSheet,
    loadRootFiles,
    loadPagesFiles,
    findFoldersInDir
};


module.exports = templateLoaders;