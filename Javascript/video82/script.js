// let v1
// async function sleep() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(100)
//         },6000)
//     })
// }

// (async function main() {
//     v1=await sleep();
//     console.log(v1);
// })().then(()=>{
//     console.log(v1+1);
// })
// let x,y =[1,2]
// console.log(`${x},${y}`)
// let [x,y] =[1,2]
// console.log(`${x},${y}`)

// let [x,y,...rest]=[1,2,3,4,5,6,7,8]
// console.log(`${x},${y}`)
// console.log(`${rest}`)

// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// let {a,b}=obj//1 2
// console.log(a,b)
// let {a,...b}=obj
// console.log(a,b)//1 { b: 2, c: 3 }


// function sum(a,b,c) {
//     return a+b+c;
// }
// let arr=[4,5,1]
// console.log(sum(arr[0],arr[1],arr[2]))
// console.log(sum(...arr))
// let a ="the"
// let b= "no"
// let c = {a,b}
// console.log(c)

// console.log(a8)//this is print undefined without error due to hoisting because the variable declarations done with var keyword are push at the top of block of scope but don't get initialized
// var a8=67
// console.log(a8)


