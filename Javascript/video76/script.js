// function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data fetched");
//             resolve("success");
//         }, 6000);
//     })
// }
// console.log("before getdata()")
// let x = getdata()
// x.then((data)=>{
//     console.log(data);
//     console.log("Task Completed");
// }
// )
// console.log("after getdata()")



// async function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data fetched");
//             resolve("success");
//         }, 6000);
//     })
// }
// async function main() {
//     console.log("before getdata()")
//     let x = await getdata();
//     console.log(x);
//     console.log("after getdata()")
//     console.log("Task Completed");
// }
// main()


// function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data fetched");
//             resolve("success");
//         }, 6000);
//     })
// }
// console.log("before getdata()")
// let x = getdata();
// console.log(x)
// console.log("after getdata()")

async function getdata() {
    let response =await fetch('https://dummyjson.com/c/a89b-bb1c-4f40-9cf8')
    let data = await response.json()
    return data
}

// getdata().then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

//we can do this same thing with the help of one async function 

async function main() {
    let data= await getdata();
    console.log(data.name);
}
main()
