## Testing DOM with Vanilla JS

Types of DOM test

1. [DOM Virtual: generado con jsdom y fs](https://es.slideshare.net/AidaAlbarrnBlanco/test-con-dom-para-dommies-135507608)
2. DOM Virtual: snapshots con Jest
3. DOM Real: end2end con Cypress

https://javascript.plainenglish.io/testing-vanilla-javascript-with-jest-8a7eaca80d40
[Manning Vanilla JS testing](https://freecontent.manning.com/testing-with-node-jest-and-jsdom/)


## 1. DOM Virtual: generado con jsdom y fs

1. Initate a node project

`npm init -y`


2. Define a helper function to load read your html file with fs
```
import fs from 'fs';
import path from 'path'

function loadTemplate(filepath, onLoad){

    const filePath = path.join(__dirname, filepath);
    fs.readFile(filePath,{encoding:'utf-8'}, function(err,data){
        if(!err){
            onLoad(data);
        }else{
            console.log(err);
        }
    })
}
```


In your test file 
```
describe('app view', ()=>{
    beforeEach(done)=>{
        loadTemplate("../index.html", function(text){
            document.body.innerHTML = text;
            const ourAppView(createView();
            done();
        })
    })
    it('is reading the DOM, ()=>{
        expect(document.getElementById('intro-container'))
            .not.toBeNull();
    })
    it("contains text", ()=>{
        expect(document.querySelector('.explanation__text').innerHTML)
            .toContain("Bienvenido a este")
    })

})

```




Testing with JEST

1. Install NPM

`npm install --save-dev jest`

2. Write function to test in script.js


3. Create test file named script.test.js



4. Configure Jest
```
{
  "scripts": {
    "test": "jest"
  }
}
```

5. Run tests

`npm run test`



