# Markdown links

É uma biblioteca consegue retirar de um documento markdown os links .

## Como instalar:

```$ npm install -g erickalemos/SAP003-md-links```

Para executar esta biblioteca você deverá ter o node e npm instalados.

## Como utilizar:

```
$ md-links exemplo.md
```

```
$ node
> const links = require("md-links");
> console.log(links.mdLinks('[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação'))
> // returns [{texto: Markdown , link: https://pt.wikipedia.org/wiki/Markdown }];
```
## Roadmap oficial do projeto

### versão 1.0.1 (released)

funcionalidade: extração de links de um arquivo markdown;

## Keywords
get link, markdown.