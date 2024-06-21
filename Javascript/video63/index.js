let sample_array=[1,2,3,4,5,6];
console.log(sample_array[3]);
console.log(sample_array[5]);
console.log(sample_array[1]);
console.log(sample_array[0]);
console.log(sample_array);
console.log(sample_array.length);
sample_array.pop();
sample_array.push(16);
console.log(sample_array);
sample_array.push("Piyush Sharma");
console.log(sample_array);
sample_array.shift();
sample_array.unshift("Nakshtra Raghav");
sample_array[3]="Utkarsh Saxena";
console.log(sample_array);
console.log(sample_array.sort());
console.log(sample_array.concat(["Friends List"]));//This method does not change the sample-array but concatenate the new array in it
console.log(sample_array.splice(4,4,"Friend's names deleted")) //⁡⁣⁢⁢splice method is used to delete and add elements in the array the first argument take the index from where we want to delete the elements and second argument takes number of elements to be deleted and after the number of arguments passed is added as the new elements in the array⁡ ⁡⁢⁣⁢it actually changes the array⁡
console.log(sample_array);
console.log(sample_array.slice(0,2));//⁡⁣⁣⁢it slices out the peice of array from the existing array and returned the sliced array⁡ ⁡⁢⁣⁢it does'nt change the existing array⁡
console.log(sample_array);
console.log(sample_array.reverse());//⁡⁣⁢⁢Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.⁡
