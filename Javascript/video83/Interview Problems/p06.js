// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let inputString = "Hello World!";
let count = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];
inputString = inputString.toLowerCase();
for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
        count++;
    }
}
console.log(count);