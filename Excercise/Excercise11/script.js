let value = parseInt(prompt("Enter the number for the factorial"));
let arr=[];
let factUsingFor=1;
for (let i = 1; i < value+1; i++) {
    factUsingFor*=i;
    arr.push(i);    
}
const factorial=arr.reduce((a,b) => {
    return a*b;   //Factorial using MapReduce
});

alert(`value of factorial of ${value} is ${factorial}`);
alert(`value of factorial of ${value} is ${factUsingFor} using for loop`);