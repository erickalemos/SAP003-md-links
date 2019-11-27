
//const regex = /\((http[s]?:\/\/[^\)]*)\)/gm;
// function regexTeste(){
    
//      //const regex = /\[(\w.+)]|\D(\w.+\/)/gm;
//     const regex = /\[(\w.+)]|\(([^\)]+)\)/gm
//   //const arr = []
//     const str = `euiHF UIHPOHW [nome](www.teste.com) SIHIUAHIUjoiJ[eita](www.google.com)`;
//     let m;

//     while ((m = regex.exec(str)) !== null) {
//         // This is necessary to avoid infinite loops with zero-width matches
//         if (m.index === regex.lastIndex) {
//             regex.lastIndex++;
//         }
        
//         // The result can be accessed through the `m`-variable.
//         m.forEach((match, groupIndex) => {
//             console.log(`Found match, group ${groupIndex}: ${match}&& ${match}`);
//         }); arr.push({ link: m[1] })
//     }
//     }
//     regexTeste()
    //console.log(arr)

//     module.exports = regexTeste;


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

const fs = require('fs');
function mdLinks(path){
return new Promise((resolve,reject)=> {

    // fs.readFile('./teste.md', (err, data) => {
        fs.readFile(path, (err, data) => {
       if(err){
           reject(err)
       }else{
            const text = data.toString();
            const regex =  /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
            const arr = [];
            let m;
            while ((m = regex.exec(text)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                
                // The result can be accessed through the `m`-variable.
                // m.forEach((match, groupIndex) => {
                //     console.log(`Found match, group ${groupIndex}: ${match} && group ${groupIndex}: ${match}`);
                //});
                 arr.push({ título: m[1], link: m[2]  })
                
            }
            resolve(arr);
        }
            
        })
    })
}


// mdLinks()
// .then((valor)=> console.log(valor))
module.exports = mdLinks;




