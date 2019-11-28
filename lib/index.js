
const fs = require('fs');

function mdLinks(path) {
    return new Promise((resolve, reject) => {

        // fs.readFile('./teste.md', (err, data) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(`erro de alguma coisa ${err}`)
            } else {
                const text = data.toString();
                const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
                const arr = [];
                let m;
                while ((m = regex.exec(text)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    arr.push({
                        titulo: m[1],
                        link: m[2]
                    })

                }
                resolve(arr);
            }

        })
    })
}

module.exports = mdLinks;

//const fs = require('fs');
// const title = [];
// const link = [];

// function read(){
//     fs.readFile('./teste.md', (err, data) => {
//         if (err) throw err;

//         console.log(data.toString());
//     });
// }
// read()
// const fs = require('fs');
// const title = [];
// const link = [];

// function read(){
//     fs.readFile('./teste.md', (err, data) => {
// colocar o regex aqui
//         if (err) throw err;

//         new Promise(data.toString());
//     });
// }
// read()