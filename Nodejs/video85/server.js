var slugify= require('slugify');
let a=slugify('some string');
console.log(a);
let b = slugify('some string766r56e$^$^$#^&', '_');
console.log(b);