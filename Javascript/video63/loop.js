let a = [1,2,55,48,69,73];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

a.forEach((value,index,a )=> {
    console.log(`${value} ${index} ${a}`);
});

for (const key in a) {
        console.log(a[key]);
}
for (const iterator of a) {
    console.log(iterator);
}
