// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function reverseString(str) {
    let reverse="";
    for (let i = str.length-1; i>=0; i--) {
        reverse+=str[i];
    }
    return reverse;
}
const inputString = "wizard";
let result = inputString.concat(reverseString(inputString));
console.log(result);


// function mirrorString(str) {
//     const reversed = str.split('').reverse().join('');
//     return str + reversed;
// }
// const inputString = "wizard";
// const result = mirrorString(inputString);
// console.log(result);
