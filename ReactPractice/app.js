function addTwoNum(a, b){
    a = 10;
    b = 15;
    document.getElementById('sumFunc').innerHTML = a+ b;
    return a + b;
}
function reset(){
    document.getElementById('sumFunc').innerHTML = 0;
}
console.log("Hello");

class Customer{
    constructor(name){
        this.name = name;
    }
    age = 29;
    add = "Delhi"
    buy(){
        console.log(this.name);
    }
}

class GuestCustomer extends Customer{
    hello(){
        console.log("Hello " + this.name);
    }
}

let cust1 = new GuestCustomer("Ashwani");
cust1.hello();

console.log(cust1);

let list = ["Honda", "kia", "Hundyi"];

let [a,b,c ] = list;
console.log();


// Reference (Array and Object)

let person = {
    name : "Ashwani Sharma",
    age : 30
}

let person1 = {...person};
person1.name = "Abhishek"


console.log(person);
console.log(person1);

// Map

// let arr = [1, 2, 3, 4];
// let arr2 = arr.map(x => x *2);
// console.log(arr2);

// filter
let arr = [1, 2, 3, 4];
let arr2 = arr.filter(x => x%2 === 0);
console.log(arr2);