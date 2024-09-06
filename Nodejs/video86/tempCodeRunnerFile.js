import a from "./mymodule1.js";
a();  //it will print I am function

import {a} from "./mymodule1.js";
import b from "./mymodule1.js";
import {myFunc2,c,d} from "./mymodule1.js";
console.log(a , c , d);  //it will print 5 7 8
b(); //I am a function 
myFunc2(); //I am a function 2