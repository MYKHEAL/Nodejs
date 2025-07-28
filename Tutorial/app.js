// function greetings(name){
//     console.log(`Hello ${name}`);

// }

// greetings('Michael')

// console.log(module);

// var result = require("./logger.js");


// result("hello");

// var path = require('path');

// var pathObj = path.parse(__filename);
// console.log(pathObj);

// var os = require('os')
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`toatl memory: ${totalMemory}`);
// console.log(`free memory: ${freeMemory}`);

// const fs = require('fs')
// var files = fs.readdirSync('./')
// console.log(files);


// const names = require('./names');
// const sayHi = require('./function');

// sayHi(names.firsContestant);
// sayHi(names.secondContestant);
// sayHi(names.thirdContestant);

// const os = require('os');
// const user = os.userInfo();
// console.log(user)

// console.log(`the system runtime is ${os.uptime()} seconds`);

// const {readFileSync , writeFileSync} = require('fs');

// writeFileSync('./none.txt', 'okay oo')



// const Http = require('http')
// var server = Http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.end("wecome to our homepage");
//     }
//     if(req.url === '/about'){
//         res.end('there is nothing much about us');
//     }
//         res.end(
//             `<h1>Oops!</h1>
//             <p>this page isn't available right now</p>
//             <a href = "/">back home</a>
//             `
//         )
//         })

// server.listen(8000)

    
    // res.write("just trying this out ooo, omo e make sense")
    // res.end();

    const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello world");

