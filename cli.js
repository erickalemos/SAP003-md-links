#! /usr/bin/env node
const mdLinks = require('./lib/index.js');

const path = process.argv[2]

mdLinks(path)
    .then((parametro)=>{
        //console.log(parametro)
        parametro.forEach(edition => console.log(`texto: ${edition.titulo }\n link: ${edition.link}`))
    })
    .catch(console.error);