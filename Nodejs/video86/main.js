// // const { createServer } = require('node:http'); //This is by default 
// import { createServer } from 'node:http';//This comes after ES6 

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Helllo Bhaii Saahab World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//⁡⁢⁣⁢use of import method to import the module⁡

import a from "./mymodule1.js";
a();  //it will print I am function
import {e} from "./mymodule1.js";
import b from "./mymodule1.js";
import {myFunc2,c,d} from "./mymodule1.js";
console.log(e , c , d);  //it will print 9 7 8
b(); //I am a function 
myFunc2(); //I am a function 2


// ⁡⁣⁢⁢use of require to get something from module⁡

// let a = require("./mymodule2.js");
// console.log(a.theme.extend.colors.primary);