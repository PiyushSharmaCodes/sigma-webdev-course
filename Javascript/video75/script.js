console.log("hello world");
setTimeout(() => {
    console.log("completed the execution in setTimeout");
}, 0);
console.log("completed the execution");
let promise1= new Promise((resolve, reject) => {
    let random = Math.random();
    if (random < 0.5) {
        let object={
            name:"sai",
            age:20
        }
        resolve(object);
    } else {
        reject("promise1 is rejected");
    }
})
let promise2= new Promise((resolve, reject) => {
    let random=Math.random();
    if (random<0.5) {
        resolve("promise2 is resolved");
    } else {
        reject("promise2 is rejected");
    }
})

let promise3=Promise.all([promise1,promise2]);
let promise4 = new Promise((resolve,reject)=>{
    let random=Math.random();
    if (random<0.5) {
        resolve("promise4 is resolved");
    } else {
        reject("promise4 is rejected");
    }
})

let promise5 = new Promise((resolve, reject)=>{
    let random=Math.random();
    if (random<0.5) {
        resolve("promise5 is resolved");
    } else {
        reject("promise5 is rejected");
    }
})
let promise6 = Promise.race([promise4, promise5]);
let promise7 = Promise.any([promise5, promise6]);
promise1.then((data) => {
    console.log(data.name);
}).catch((error) => {
    console.log(error);
})
promise3.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
promise6.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

promise7.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})


