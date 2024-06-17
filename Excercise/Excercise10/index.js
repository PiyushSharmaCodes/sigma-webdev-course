let adjective={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let shop_name={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let another_word={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
let business_name="";
console.log(`Your generated business name is ${business_name.concat(adjective[Math.floor(Math.random()*3 + 1)]," ",shop_name[Math.floor(Math.random()*3 + 1)]," ",another_word[Math.floor(Math.random()*3 + 1)])}`);