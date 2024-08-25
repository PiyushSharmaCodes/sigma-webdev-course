// let obj ={
//     a:1,
//     b:"Piyush Sharma"
// }
// console.log(obj)
// let animal={
//     eats:true
// }
// let rabbit={
//     jumps:true
// }
// rabbit.__proto__=animal;
// animal.__proto__=obj;

class Animal{
    constructor(name){
        this.name= name
        console.log("Animal's object is created...")
    }
    eats() {
    console.log(`${this.name} is eating food`)   
    }
    jumps(){
        console.log(`${this.name} kood rha hai`)
    }
}

let janvar = new Animal("kullu");

class Dog extends Animal {
    constructor(name) {
        super(name)
        console.log("Dog's object is created")
    }
    barks(){
        console.log(`${this.name} baunk rha hai`)
    }
}

let tiger = new Dog("Tiger")