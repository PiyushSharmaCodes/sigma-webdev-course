//​‌‌​‌‌‌⁡⁢⁣⁢Map⁡​​ ⁡⁣⁢⁢​‌‌‌Filter⁡ ⁡⁢⁢⁢Reduce​⁡

// ⁡⁢⁣⁢Map: Applies a given function to each item in a collection, returning a new collection with the results.⁡
// ⁡⁣⁢⁢Filter: Selects items from a collection that satisfy a given predicate, returning a new collection with only those items.⁡
// ⁡⁢⁢⁢Reduce: Combines items in a collection using a given function to produce a single cumulative result.⁡

let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = [];
// arr.forEach(element => {
//     newArr.push(element*element);
// });
let newMappedArr = arr.map(e => {
    return e*e;            //⁡⁢⁣⁢Code for Map⁡
});
console.log(arr);
console.log(newMappedArr);

let newFilteredArr = arr.filter(e => {
    if (e>5) {
        return true;       //⁡⁢⁣⁡⁣⁢⁢Code for Filter⁡
    } 
     return false;          
});
console.log(arr);
console.log(newFilteredArr);

let newReducedArr = arr.reduce((a,b) => {
        return a+b;       //⁡⁢⁣⁡⁣⁢⁡⁢⁢⁢Code for Reduce⁡
         
});
console.log(arr);
console.log(newReducedArr);

let arrMadeFromFunc = Array.from("Piyush");
console.log(arrMadeFromFunc);


