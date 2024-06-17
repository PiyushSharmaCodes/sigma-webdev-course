function greet(name) {
    console.log("hii "+name+", welcome");
}
greet("naman");

function sum(a,b,c=5) {
    return a+b+c;
}
let result1=sum(2,5);
let result2=sum(1,100,200);

console.log(result1);
console.log(result2);

// Arrow function

const arrow_func = (x) =>{
    console.log(`I am arrow function with parameter ${x}`)
}

arrow_func(10);
arrow_func(20);

func2=arrow_func; //passing the arrow function into a variable 
func2(30);