console.log("It's a tutorial on JS loops");

let a =1;
for (let a = 0; a < 100; a++) {
    console.log(a); 
}

let object={
    name:"Piyush",
    role:"Programmer",
    salary:"1cr"
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key,element);
    }
}
for (const iterator of object.name) {
    console.log(iterator);
}

while (a<50) {
    console.log(a);
    a++;
}
console.log("Do while Loop")
let i = 10;
do {
    console.log(i);
} while (i<5);