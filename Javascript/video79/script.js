let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
try {
    if (isNaN(a)||isNaN(b)) {
        throw new SyntaxError("Please input the values correctly");
    }
} catch (error) {
    console.log("Bhaii yeah error aya hai",error)
}
let sum=parseInt(a)+parseInt(b);
try {
    console.log("sum of the two numbers are ",sum*i);
} catch (error) {
    console.log('An error occurred:', error);
}

function main(a,b) {
    try {
        if (isNaN(a)||isNaN(b)) {
            throw new Error("Some error occured");
        }
        console.log(a+b);
        return a+b;   
    } catch (error) {
        console.log(error.stack);
        return a+b;
    }
    finally{
        console.log("try catch dono k baad hum chale hain")
    }
}

let ans = main(a,b);
console.log(ans);