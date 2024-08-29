// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

const numbers = [5, 8, 12, -1, 7, 3, -5, 10];

let result=0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]<0) {
        break;
    }
    result+=numbers[i];
}
console.log(result);

