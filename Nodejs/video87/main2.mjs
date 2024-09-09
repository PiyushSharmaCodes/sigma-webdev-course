import fs from 'fs/promises';

let a = await fs.readFile('piyush.txt', 'utf-8');
console.log(a);
await fs.appendFile('piyush.txt', '\nI am a software developer');
let b = await fs.readFile('piyush.txt', 'utf-8');
console.log(b);
