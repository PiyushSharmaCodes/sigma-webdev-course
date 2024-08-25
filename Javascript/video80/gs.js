class User {
    constructor() {
        this._name = "";
        this._age = 0;  
        console.log("User is created");
    }


    get Name() {
        return this._name;
    }

    set Name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }
    details(){
        console.log(`User's name is ${this._name} and age is ${this._age}`)
    }
}
let u1 = new User()
