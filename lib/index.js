const fs = require('fs');

function mdLinks(path) {
    return new Promise((resolve, reject) => {

        // fs.readFile('./teste.md', (err, data) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(`An unexpected error occurred ${err}`)
            } else {
                const text = data.toString();
                const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
                const arr = [];
                let m;
                while ((m = regex.exec(text)) !== null) {
                    
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