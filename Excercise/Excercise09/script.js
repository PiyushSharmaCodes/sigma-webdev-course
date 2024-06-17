const num1 = parseFloat(prompt("Enter first number"));
let operation=prompt("Enter the operation");
const num2 = parseFloat(prompt("Enter second number"));
function shouldExecuteTask() {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    return randomNumber < 10;
}
if (shouldExecuteTask()) {
    let result=faultycalc(num1,operation,num2);  
    alert(`${num1} ${operation} ${num2} = ${result}`);
} 
else {
    let result=calc(num1,operation,num2);
    alert(`${num1} ${operation} ${num2} = ${result}`);
}

function calc(num1,operation,num2) {
    switch (operation) {
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break;
        default:
            console.log(`Invalid Operation`);    
    }
}
function faultycalc(num1,operation,num2) {
    switch (operation) {
        case "+":
            return num1-num2;
            break;
        case "-":
            return num1/num2;
            break;
        case "*":
            return num1+num2;
            break;
        case "/":
            return num1**num2;
            break;
        default:
            console.log(`Invalid Operation`);     
    }
}
