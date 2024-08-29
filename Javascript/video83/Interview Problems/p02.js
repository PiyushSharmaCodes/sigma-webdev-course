// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// const inputArray = [2, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9, 9, 10];
// let i,j;
// i=j=0;
// while (j<inputArray.length) {
//     while (i<inputArray.length && inputArray[i]==inputArray[j]) {
//         i++;
//     }
//     inputArray[j]=inputArray[j]*2;
//     j=i;
// }
// console.log(inputArray);

const inputArray = [2, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9, 9, 10];
const resultArray = [];
let previous = null;

for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== previous) {
        resultArray.push(inputArray[i] * 2);
        previous = inputArray[i];
    } else {
        resultArray.push(inputArray[i]);
    }
}

console.log(resultArray);
