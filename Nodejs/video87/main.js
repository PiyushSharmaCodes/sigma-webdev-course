const { ifError } = require('assert');
let fs = require('fs');
const fsPromises = require('fs').promises;
// fs.writeFile("piyush.txt","Hey I am Piyush Sharma",(e)=>{
//     if(e){
//         throw e;
//     }
//     console.log("Data has been written successfully");
//     fs.readFile("piyush.txt","utf-8",(e, d)=>{
//         if(e){
//             throw e;
//         }
//         console.log(d);
//         fs.appendFile("piyush.txt","\nI am a software developer",(e)=>{
//             if(e){
//                  throw e;
//              }
//              console.log("Data has been appended successfully");
//              fs.readFile("piyush.txt","utf-8",(e, d)=>{
//                 if(e){
//                     throw e;
//                 }
//                 console.log(d);
//             })
//         })
//     })
// })

//The above thing is a callback hell we can avoid it by using fs/promise
// fs/promises is a utility module introduced in nodejs 10.0.0
// it is used to perform async operations in a synchronous way
// it returns a promise
// promises are used to handle async operations in a synchronous way
// promises are used to avoid callback hell


// fs.readFile("piyush.txt",(e, d)=>{
//     if(e){
//         throw e;
//     }
//     console.log(d.toString());
// })

// fs.appendFile("piyush.txt","\nI am a robo",(e)=>{
//     if(e){
//         throw e;
//     }
// })
// fs.readFile("piyush.txt","utf-8",(e, d)=>{
//     ifError(e);
//     console.log(d);
// })

(async function name(params) {
await fsPromises.writeFile("piyush.txt","Hey I am Piyush Sharma")
let a =await fsPromises.readFile("piyush.txt","utf-8")
console.log(a);
})();