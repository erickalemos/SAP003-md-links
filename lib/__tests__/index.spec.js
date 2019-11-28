const mdLinks = require('../index.js');

const arr =[
{link:"https://pt.wikipedia.org/wiki/Markdown", titulo: "Markdown"},
{link: "https://nodejs.org/", titulo: "Node.js"} ,
{link:"https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", titulo: "md-links"}

]

describe("mdLinks", () => {

  it("is a Function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("should return 3 links", (done) =>{
    mdLinks("./lib/__tests__/README.md").then(result =>{
      expect(result).toEqual(arr);
      done()
    })
  })

  it ("should return an Error ", (done) =>{
    mdLinks("./lib/__tests__/text.txt").catch(result =>{
      expect(result).toEqual("erro de alguma coisa Error: ENOENT: no such file or directory, open './lib/__tests__/text.txt'")
      done()
    })
  })

});


//     describe("mdLinks", () => {

//       it("should be a function", () => {
//         assert.equal(typeof cipher.encode, "function");
//       });

//       it("should return HIJKLMNOPQRSTUVWXYZABCDEFG for ABCDEFGHIJKLMNOPQRSTUVWXYZ with offset 33", () => {
//         assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
//       });
// //